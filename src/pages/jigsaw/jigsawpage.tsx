import React, { useState, useEffect } from "react";
import {
  JigArea,
  Slice,
  Row,
  SelectArea,
  Pics,
  Content,
  PicsContainer,
  SliceContainer,
  Wrapper,
  Drag,
  JigContainer,
} from "./style";
import { colorMapPure } from "@/lib/colorMap";
import { useHistory } from "react-router-dom";
import { useLogin } from "@/pages/login/store";
import { useGrid } from "@/pages/jigsaw/store";
import { useListener, useEmit } from "@/lib/websocket/hooks";

import Modal from "@/components/Modal/";
import Header from "./components/Header";
import Menu from "./components/Menu";
import TimeOver from "./components/TimeOver";

function JigsawPage() {
  const username = useLogin((state) => state.name);
  const { picKind, jigsawList, pics, membersList, difficult, roomName, endTime, images } = useGrid(
    (state) => ({
      picKind: state.picKind,
      jigsawList: state.jigsawList,
      membersList: state.members,
      difficult: state.difficult,
      roomName: state.roomName,
      endTime: state.endTime,
      pics: state.pics,
      images: state.images,
    })
  );
  const sendCal = useEmit("gameCal");
  const leaveRoom = useEmit("roomLeave");
  const sendListChange = useEmit("gameMove");

  const { setValue, add, move, remove } = useGrid((state) => ({
    setValue: state.setValue,
    add: state.add,
    move: state.move,
    remove: state.remove,
  }));

  const setScore = (value: number) => {
    setValue("score", value);
  };

  const changeList = (value: number[][]) => {
    setValue("jigsawList", value);
  };

  const history = useHistory();
  const [handleSideMenu, setHandleSideMenu] = useState(false);
  const [handleNumber, setHandleNumber] = useState(0);
  const [handleOver, setHandleOver] = useState(false);
  const [handleTimeOver, setHandleTimeOver] = useState(false);
  const [handleObject, setHandleObject] = useState({
    row: null,
    column: null,
    value: 0,
  });

  const { row: handleRow, column: handleColumn, value: handleValue } = handleObject;

  const length = 300 / difficult;

  /*发送移动切片事件*/
  useEffect(() => {
    if (handleNumber) {
      sendListChange({
        roomName,
        jigsawList,
      });
    }
  }, [handleNumber]);

  useListener("broadcastMove", (res) => {
    changeList(res.jigsawList);
  });

  useListener("leave", (res) => {
    if (res.status) {
      history.push("/home");
    }
  });

  useListener("broadcastScore", (res) => {
    setScore(res.score);
    history.push("/result");
  });

  const delayShow = (x: number) => (x + 1) / difficult / 1.3;

  const cutSliceX = (index: number) => ((index - 1) % difficult) * length;

  const cutSliceY = (index: number) => Math.floor((index - 1) / difficult) * length;

  const sameElement = (item: number) => pics.some((el) => el === item);

  const toQuit = () => {
    leaveRoom({ username, roomName });
  };

  /*选择切片时获取坐标与数值*/
  const getHandle = (rowIndex: number, columnIndex: number, targetItem: number) => {
    setHandleObject({
      row: rowIndex,
      column: columnIndex,
      value: targetItem,
    });
  };

  const myColor = () => {
    const item = membersList.find((item) => item.username === username);
    return colorMapPure[item?.id] ?? "#00bfff";
  };

  /*移动切片后的事件处理*/
  const handleChangeSlice = (
    rowIndex: number,
    columnIndex: number,
    handleValue: number,
    targetItem: number
  ) => {
    switch (true) {
      case handleValue !== 0 && targetItem === 0 && handleRow === null:
        add({
          nextPos: [rowIndex, columnIndex],
          value: handleValue,
        });
        setHandleNumber(handleNumber + 1);
        getHandle(rowIndex, columnIndex, 0);
        break;
      case handleValue === 0 && sameElement(targetItem):
        getHandle(rowIndex, columnIndex, targetItem);
        break;
      case handleValue !== 0 && targetItem === 0:
        move({
          nextPos: [rowIndex, columnIndex],
          prePos: [handleRow, handleColumn],
        });
        setHandleNumber(handleNumber + 1);
        getHandle(rowIndex, columnIndex, targetItem);
        break;
      default:
        setHandleObject((state) => ({
          ...state,
          value: 0,
        }));
    }
  };

  const selectAlready = (item: number) => jigsawList.some((row) => row.some((el) => el === item));

  const ListHavePics = (item: number) => pics.some((el) => el === item);

  const handlePic = (item: number) => {
    if (handleRow !== null && handleValue !== 0 && handleValue === item) {
      remove({
        prePos: [handleRow, handleColumn],
      });
      setHandleNumber(handleNumber + 1);
    }

    if (selectAlready(item)) {
      setHandleObject({
        row: null,
        column: null,
        value: 0,
      });
    } else {
      setHandleObject({
        row: null,
        column: null,
        value: item,
      });
    }
  };

  const submit = () => {
    sendCal({ roomName });
    console.log(roomName);
  };

  return (
    <Wrapper>
      <Header
        showMenu={() => setHandleSideMenu(true)}
        showOver={() => setHandleOver(true)}
        setHandleTimeOver={setHandleTimeOver}
      />
      <Content>
        <JigArea>
          <JigContainer>
            {jigsawList.map((rowItem, rowIndex) => (
              <Row key={rowIndex} show={delayShow(rowIndex)}>
                {rowItem.map((item, columnIndex) => (
                  <SliceContainer key={`slice(${rowIndex},${columnIndex})`}>
                    <Drag
                      draggable={ListHavePics(item)}
                      onDragEnter={(e) => e.preventDefault()}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={() => handleChangeSlice(rowIndex, columnIndex, handleValue, item)}
                      onDragStart={() =>
                        handleChangeSlice(rowIndex, columnIndex, handleValue, item)
                      }
                    >
                      <Slice
                        isZero={item === 0}
                        bgUrl={images[picKind]}
                        same={ListHavePics(item)}
                        positionX={cutSliceX(item)}
                        positionY={cutSliceY(item)}
                        size={length}
                        myColor={myColor()}
                        active={handleValue !== 0 && handleValue === item}
                        onClick={() => handleChangeSlice(rowIndex, columnIndex, handleValue, item)}
                      />
                    </Drag>
                  </SliceContainer>
                ))}
              </Row>
            ))}
          </JigContainer>
        </JigArea>
        <SelectArea>
          {pics.map((item, index) => (
            <PicsContainer key={item} show={delayShow(index)}>
              <Drag
                draggable={!selectAlready(item)}
                onDragEnter={(e) => e.preventDefault()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handlePic(item)}
                onDragStart={() => handlePic(item)}
              >
                <Pics
                  bgUrl={images[picKind]}
                  positionX={cutSliceX(item)}
                  positionY={cutSliceY(item)}
                  active={handleValue === item}
                  size={length}
                  finish={selectAlready(item)}
                  onClick={() => handlePic(item)}
                />
              </Drag>
            </PicsContainer>
          ))}
        </SelectArea>
      </Content>
      <Menu
        visible={handleSideMenu}
        close={() => setHandleSideMenu(false)}
        membersList={membersList}
        toQuit={toQuit}
      />
      <Modal
        visible={handleOver}
        title={"是否完成拼图"}
        activeText={"完成了"}
        activePress={submit}
        closePress={() => setHandleOver(false)}
      />
      {handleTimeOver ? <TimeOver visible={handleTimeOver} submit={submit} /> : null}
    </Wrapper>
  );
}

export default JigsawPage;
