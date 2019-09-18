import React, {useState, useEffect} from "react"
import {connect} from 'react-redux'
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
} from './style'
import {actionCreator} from "./store"
import {Redirect} from 'react-router-dom'
import {listenList, sendListChange, listenCal, sendCal, listenLeave, removeSocket, leaveRoom} from "../../lib/ws"
import {colorMapPure} from "../../lib/colorMap"
import {polyfill} from "mobile-drag-drop"
import {scrollBehaviourDragImageTranslateOverride} from "mobile-drag-drop/scroll-behaviour"

import Header from "./components/Header/"
import Menu from "./components/Menu/"
import Over from "./components/Over/"
import TimeOver from "./components/TimeOver/"
import { pictures } from "../../lib/pictures"

function JigsawPage(props) {
  const {picKind, username, jigsawList, pics, membersList, difficult, roomName, endTime, setScore} = props;

  const [handleSideMenu, setHandleSideMenu] = useState(false);
  const [handleNumber, setHandleNumber] = useState(0);
  const [handleQuit, setHandleQuit] = useState(false);
  const [handleObject, setHandleObject] = useState({
    row: null,
    column: null,
    value: 0
  });
  const [handleOver, setHandleOver] = useState(false);
  const [goResult, setGoResult] = useState(0);
  const [handleTimeOver, setHandleTimeOver] = useState(false);

  const {
    row: handleRow,
    column: handleColumn,
    value: handleValue
  } = handleObject;

  /*防止拖拽滚动*/
  useEffect(() => {
    polyfill({
      dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride
    })
  });

  /*发送移动切片事件*/
  useEffect(() => {
    handleNumber === 0 || sendListChange(JSON.stringify(
      {
        roomName,
        jigsawList,
      }
    ))
  }, [handleNumber]);

  /*监听服务器发送的切片移动*/
  useEffect(() => {
    listenList(res => {
      props.changeList(res.jigsawList);
      console.log(res)                         //TODO:记得删
    })
  }, []);

  useEffect(() => {
    //监听离开房间事件
    listenLeave(res => {
      res.status && setHandleQuit(false)
    });
    return () => removeSocket('leave')
  }, []);

  const showOver = () => setHandleOver(true);

  const hiddenOver = () => setHandleOver(false);

  const showMenu = () => setHandleSideMenu(true);

  const hiddenMenu = () => setHandleSideMenu(false);

  const length = () => 300 / difficult;

  const cutSliceX = index => (index - 1) % difficult * length();

  const cutSliceY = index => Math.floor((index - 1) / difficult) * length();

  const sameElement = item => pics.some(el => el === item);

  const toQuit = () => {
    leaveRoom(JSON.stringify({
      username,
      roomName
    }));
  };

  /*选择切片时获取坐标与数值*/
  const getHandle = (rowIndex, columnIndex, targetItem) => {
    setHandleObject({
      row: rowIndex,
      column: columnIndex,
      value: targetItem
    })
  };

  const myColor = () => {
    let id;
    membersList.map(item => item.username === username && (id = item.id));
    return colorMapPure[id]
  };

  const ifLeader = () => {
    let result = false;
    membersList.map(item => item.identity === "leader" && item.username === username && (result = true))
    return result
  };

  /*移动切片后的事件处理*/
  const handleChangeSlice = (rowIndex, columnIndex, handleValue, targetItem) => {
    switch (true) {
      case (handleValue !== 0 && targetItem === 0 && handleRow === null):
        props.changeSlicePTJ(rowIndex, columnIndex, handleValue);
        setHandleNumber(handleNumber + 1)
        getHandle(rowIndex, columnIndex, 0);
        break;
      case (handleValue === 0 && sameElement(targetItem)):
        getHandle(rowIndex, columnIndex, targetItem);
        break;
      case (handleValue !== 0 && targetItem === 0):
        props.changeSliceJTJ(rowIndex, columnIndex, handleValue, handleRow, handleColumn);
        setHandleNumber(handleNumber + 1)
        getHandle(rowIndex, columnIndex, targetItem);
        break;
      default:
        setHandleObject({
          value: 0
        })
    }
  };

  const selectAlready = item => jigsawList.some(row => row.some(el => el === item));

  const ListHavePics = item => pics.some(el => el === item);

  const handlePic = item => {
    if (handleRow !== null && handleValue !== 0 && handleValue === item) {
      props.changeSliceJTP(handleRow, handleColumn);
      setHandleNumber(handleNumber + 1)
    }
    selectAlready(item) ? setHandleObject({
      row: null,
      column: null,
      value: 0
    }) : setHandleObject({
      row: null,
      column: null,
      value: item
    });
  };

  const delayShow = x => ((x + 1) / difficult) / 1.3;

  useEffect(() => {
    listenCal(res => {
      setScore(res.score);
      setGoResult(1);
      console.log(res)
    });
    return () => removeSocket('broadcastScore')
  },[]);

  const submit = () => {
    sendCal(JSON.stringify({
      roomName
    }));
    console.log(roomName)
  };

  return (
    <Wrapper>
      <Header
        endTime={endTime}
        showMenu={showMenu}
        showOver={showOver}
        setHandleTimeOver={setHandleTimeOver}
        ifLeader={ifLeader()}
      />
      <Content>
        <JigArea>
          <JigContainer>
            {jigsawList.map((rowItem, rowIndex) => (
              <Row
                key={rowIndex}
                show={delayShow(rowIndex)}
              >
                {rowItem.map((item, columnIndex) => (
                  <SliceContainer
                    key={`slice(${rowIndex},${columnIndex})`}
                    ifZero={item === 0}
                  >
                    <Drag
                      draggable={ListHavePics(item)}
                      onDragEnter={e => e.preventDefault()}
                      onDragOver={e => e.preventDefault()}
                      onDrop={() => handleChangeSlice(rowIndex, columnIndex, handleValue, item)}
                      onDragStart={() => handleChangeSlice(rowIndex, columnIndex, handleValue, item)}
                    >
                      <Slice
                        ifZero={item === 0}
                        bgUrl={pictures[picKind]}
                        same={ListHavePics(item)}
                        positionX={cutSliceX(item)}
                        positionY={cutSliceY(item)}
                        size={length()}
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
            <PicsContainer
              key={`pics(${item})`}
              show={delayShow(index)}
            >
              <Drag
                draggable={!selectAlready(item)}
                onDragEnter={e => e.preventDefault()}
                onDragOver={e => e.preventDefault()}
                onDrop={() => handlePic(item)}
                onDragStart={() => handlePic(item)}
              >
                <Pics
                  bgUrl={pictures[picKind]}
                  positionX={cutSliceX(item)}
                  positionY={cutSliceY(item)}
                  active={handleValue === item}
                  size={length()}
                  finish={selectAlready(item)}
                  onClick={() => handlePic(item)}
                />
              </Drag>
            </PicsContainer>
          ))}
        </SelectArea>
      </Content>
      <Menu
        handleSideMenu={handleSideMenu}
        hiddenMenu={hiddenMenu}
        membersList={membersList}
        difficult={difficult}
        roomName={roomName}
        username={username}
        toQuit={toQuit}
      />
      <Over
        handleOver={handleOver}
        hiddenOver={hiddenOver}
        submit={submit}
      />
      {handleTimeOver ? <TimeOver
        handleTimeOver={handleTimeOver}
        submit={submit}
      /> : null}
      {goResult ? <Redirect to={"/result/"}/> : null}
      {handleQuit ? <Redirect to={"/home/"}/> : null}
    </Wrapper>
  )
}

const mapStateToProps = state => {
  return {
    username: state.login.username,
    token: state.login.token,

    endTime: state.jigsaw.endTime,
    roomName: state.jigsaw.roomName,
    roomId: state.jigsaw.roomId,
    difficult: state.jigsaw.difficult,
    membersList: state.jigsaw.members,
    picKind: state.jigsaw.picKind,
    pics: state.jigsaw.pics,
    jigsawList: state.jigsaw.jigsawList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSlicePTJ(PTJRowIndex, PTJColumnIndex, PTJHandleValue) {
      dispatch(actionCreator.picToJigAction({PTJRowIndex, PTJColumnIndex, PTJHandleValue}))
    },
    changeSliceJTJ(JTJRowIndex, JTJColumnIndex, JTJHandleValue, JTJHandleRow, JTJHandleColumn) {
      dispatch(actionCreator.jigToJigAction({
        JTJRowIndex,
        JTJColumnIndex,
        JTJHandleValue,
        JTJHandleRow,
        JTJHandleColumn
      }))
    },
    changeSliceJTP(JTPRowIndex, JTPColumnIndex) {
      dispatch(actionCreator.jigToPicAction({JTPRowIndex, JTPColumnIndex}))
    },
    changeList(data) {
      dispatch(actionCreator.setChangeAction(data))
    },
    setScore(data) {
      dispatch(actionCreator.setScoreAction(data))
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JigsawPage);
