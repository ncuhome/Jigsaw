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
  Line,
  Drag,
  JigContainer,
} from './style'
import {actionCreator} from "./store"
import {Redirect} from 'react-router-dom'
import {listenList, sendListChange} from "../../lib/ws"
import colorMap from "../../lib/colorMap"
import { polyfill } from "mobile-drag-drop"
import {scrollBehaviourDragImageTranslateOverride} from "mobile-drag-drop/scroll-behaviour"

import Header from "./components/Header/"
import Menu from "./components/Menu/"
import Members from "./components/Members";

const pictures = [
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562336127688&di=8b3b64da7ea88ddb1a14b95b9ba2e7cc&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201705%2F29%2F20170529020618_QMZXK.jpeg",
  "http://b-ssl.duitang.com/uploads/item/201706/17/20170617111634_Uxyrk.jpeg",
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562930803&di=efa158df98e214314b3bc5c235fbba81&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F23%2F20180423194810_yywff.jpg"
]

function JigsawPage(props) {
  const {token, userId, picKind, jigsawList, pics, membersList, difficult, roomName, endTime, username} = props;

  const [handleSideMenu, setHandleSideMenu] = useState(false)
  const [handleNumber, setHandleNumber] = useState(0);
  const [handleObject, setHandleObject] = useState({
    row: null,
    column: null,
    value: 0
  });

  const {
    row: handleRow,
    column: handleColumn,
    value: handleValue
  } = handleObject

  const [otherhandleObject, setOtherhandleObject] = useState({
    row: null,
    column: null,
    value: null,
    userId: null
  })

  const {
    row: otherSelectRow,
    column: otherSelectColum,
    value: otherSelectValue,
    userId: otherSelectUserId
  } = otherhandleObject

  useEffect(()=>{
    polyfill({
      dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride
    })
  })

  useEffect(() => {
    handleNumber === 0 || sendListChange(JSON.stringify(
      {
        list: jigsawList,
        handleRow,
        handleColumn,
        handleValue,
        id: 2
      }
    ))
  }, [handleNumber]);

  useEffect(() => {
    listenList(data => {
      const res = JSON.parse(data)
      props.changeList(res.list)
      setOtherhandleObject({
        row: res.handleRow,
        column: res.handleColumn,
        value: res.handleValue,
        userId: res.id
      })
      console.log(res)                         //TODO:记得删
    })
  }, []);

  const showMenu = () => {
    setHandleSideMenu(true)
  }

  const hiddenMenu = () => {
    setHandleSideMenu(false)
  }

  const length = () => {
    return 300 / difficult
  }

  const cutSliceX = index => {
    return (index - 1) % difficult * length()
  };

  const cutSliceY = index => {
    return Math.floor((index - 1) / difficult) * length()
  };

  const sameElement = item => {
    let result;
    pics.map(el => el === item && (result = true));
    return result
  };

  const getHandle = (rowIndex, columnIndex, targetItem) => {
    setHandleObject({
      row: rowIndex,
      column: columnIndex,
      value: targetItem
    })
  };

  const MyColor = () => {
    let id
    membersList.map(item => item.username === username && (id = item.id))
    return colorMap[id]
  }

  const otherColor = () => {
    return colorMap[otherSelectUserId]
  }

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

  const selectAlready = item => {
    let finish = false;
    jigsawList.map(
      row => row.map(
        el => el === item && (finish = true)
      )
    );
    return finish
  };

  const ListHavePics = item => {
    let result = false;
    pics.map(el => el === item && (result = true))
    return result
  };

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

  const otherActionSlice = (rowIndex, columnIndex) => {
    if (otherSelectRow === rowIndex && otherSelectColum === columnIndex) {
      return otherColor()
    } else {
      return '#333537'
    }
  }

  const otherActionPics = (value) => {
    if (otherSelectValue === value) {
      return otherColor()
    }
  }

  const delayShow = x => ((x + 1) / difficult) / 1.3;

  return (
    <Wrapper>
      <Header endTime={endTime}
              showMenu={showMenu}
      />
      <Content>
        <JigArea>
          <JigContainer>
          {jigsawList.map((rowItem, rowIndex) => (
            <Row key={rowIndex}
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
                      MyColor={MyColor()}
                      otherColor={otherActionSlice(rowIndex, columnIndex)}
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
      <Menu handleSideMenu={handleSideMenu}
            hiddenMenu={hiddenMenu}
            membersList={membersList}
            difficult={difficult}
            roomName={roomName}
            userId={userId}
      />
      {token === '' ? <Redirect to="/login/"/> : null}
    </Wrapper>
  )
}

const mapStateToProps = state => {
  return {
    username: state.login.username,
    userId: state.login.userId,
    token: state.login.token,

    endTime: state.jigsaw.endTime,
    roomName: state.jigsaw.roomName,
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
      dispatch(actionCreator.picToJig({PTJRowIndex, PTJColumnIndex, PTJHandleValue}))
    },
    changeSliceJTJ(JTJRowIndex, JTJColumnIndex, JTJHandleValue, JTJHandleRow, JTJHandleColumn) {
      dispatch(actionCreator.jigToJig({JTJRowIndex, JTJColumnIndex, JTJHandleValue, JTJHandleRow, JTJHandleColumn}))
    },
    changeSliceJTP(JTPRowIndex, JTPColumnIndex) {
      dispatch(actionCreator.jigToPic({JTPRowIndex, JTPColumnIndex}))
    },
    changeList(data) {
      dispatch(actionCreator.setChange(data))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JigsawPage);
