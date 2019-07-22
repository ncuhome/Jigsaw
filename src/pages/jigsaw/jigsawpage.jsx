import React, { useState, useEffect } from "react"
import { connect } from 'react-redux'
import {
  JigArea,
  Slice,
  Row,
  SelectArea,
  Pics,
  Content,
  PicsContainer,
  SliceContainer,
  Warpper,
  Line
} from './style'
import Members from "./components/Members.jsx"
import Header from "./components/Header.jsx"
import Countdown from "./components/Countdown.jsx"
import { actionCreator } from "./store"
import { Redirect } from 'react-router-dom'
import { listenList, sendListChange } from "../../lib/ws"
import colorMap from "../../lib/colorMap"

const pictures = [
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562336127688&di=8b3b64da7ea88ddb1a14b95b9ba2e7cc&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201705%2F29%2F20170529020618_QMZXK.jpeg",
  "http://b-ssl.duitang.com/uploads/item/201706/17/20170617111634_Uxyrk.jpeg",
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562930803&di=efa158df98e214314b3bc5c235fbba81&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F23%2F20180423194810_yywff.jpg"
]

function JigsawPage(props) {
  const [handleValue, setHandleValue] = useState(0);
  const [handleRow, setHandleRow] = useState(null);
  const [handleColumn, setHandleColumn] = useState(null);
  const [handleNumber, sethandleNumber] = useState(0);

  const [otherSelectRow, setOtherSelectRow] = useState(null);
  const [otherSelectColum, setOtherSelectColum] = useState(null);
  const [otherSelectValue, setOtherSelectValue] = useState(null);
  const [otherSelectUserId, setOtherSelectUserId] = useState(null);

  const { token, picKind, jigsawList, pics, membersList, difficult, roomName, endTime, username} = props;

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
      setOtherSelectRow(res.handleRow)
      setOtherSelectColum(res.handleColum)
      setOtherSelectUserId(res.id)
      setOtherSelectValue(res.handleValue)
      console.log(res)                         //TODO:记得删
    })
  }, []);

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
    setHandleValue(targetItem);
    setHandleRow(rowIndex);
    setHandleColumn(columnIndex);
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
        sethandleNumber(handleNumber + 1)
        getHandle(rowIndex, columnIndex, 0);
        break;
      case (handleValue === 0 && sameElement(targetItem)):
        getHandle(rowIndex, columnIndex, targetItem);
        break;
      case (handleValue !== 0 && targetItem === 0):
        props.changeSliceJTJ(rowIndex, columnIndex, handleValue, handleRow, handleColumn);
        sethandleNumber(handleNumber + 1)
        getHandle(rowIndex, columnIndex, targetItem);
        break;
      default:
        setHandleValue(0);
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
      sethandleNumber(handleNumber + 1)
    }
    selectAlready(item) ? setHandleValue(0) : setHandleValue(item);
    setHandleRow(null);
    setHandleColumn(null);
  };

  const otherActionSlice = (rowIndex, columnIndex) => {
    if (otherSelectRow === rowIndex && otherSelectColum === columnIndex) {
      return otherColor()
    } else {
      return '#CDCDCD'
    }
  }

  const otherActionPics = (value) => {
    if (otherSelectValue === value) {
      return otherColor()
    }
  }

  const delayShow = x => ((x+1)/difficult)/1.3;

  return (
    <Warpper>
      <Header roomName={roomName} />
      <Content>
        <JigArea>
          {jigsawList.map((rowItem, rowIndex) => (
            <Row key={rowIndex}
                 show={delayShow(rowIndex)}
            >
              {rowItem.map((item, columnIndex) => (
                <SliceContainer 
                  key={`slice(${rowIndex},${columnIndex})`}
                  ifZero={item === 0}
                >
                  <Slice
                    ifZero={item === 0}
                    bgUrl={pictures[picKind]}
                    same={ListHavePics(item)}
                    positionX={cutSliceX(item)}
                    positionY={cutSliceY(item)}
                    len={length()}
                    MyColor={MyColor()}
                    otherColor={otherActionSlice(rowIndex, columnIndex)}
                    active={handleValue !== 0 && handleValue === item}
                    onClick={() => handleChangeSlice(rowIndex, columnIndex, handleValue, item)}
                  />
                </SliceContainer>
              ))}
            </Row>
          ))}
        </JigArea>
        <Countdown endTime={endTime} />
        <Members 
          membersList={membersList}
          difficult={difficult}
        />
        <Line/>
        <SelectArea>
          {pics.map((item, index) => (
            <PicsContainer 
              key={`pics(${item})`}
              show={delayShow(index)}
            >
              <Pics
                bgUrl={pictures[picKind]}
                positionX={cutSliceX(item)}
                positionY={cutSliceY(item)}
                active={handleValue === item}
                otherColor={otherActionPics(item)}
                len={length()}
                finish={selectAlready(item)}
                onClick={() => handlePic(item)}
              />
            </PicsContainer> 
          ))}
        </SelectArea>
      </Content>
      {token === '' ? <Redirect to="/login/" /> : null}
    </Warpper>
  )
}

const mapStateToProps = state => {
  return {
    username: state.login.username,
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
      dispatch(actionCreator.picToJig({ PTJRowIndex, PTJColumnIndex, PTJHandleValue }))
    },
    changeSliceJTJ(JTJRowIndex, JTJColumnIndex, JTJHandleValue, JTJHandleRow, JTJHandleColumn) {
      dispatch(actionCreator.jigToJig({ JTJRowIndex, JTJColumnIndex, JTJHandleValue, JTJHandleRow, JTJHandleColumn }))
    },
    changeSliceJTP(JTPRowIndex, JTPColumnIndex) {
      dispatch(actionCreator.jigToPic({ JTPRowIndex, JTPColumnIndex }))
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
