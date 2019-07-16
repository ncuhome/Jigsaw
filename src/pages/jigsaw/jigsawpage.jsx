import React, {useState, useEffect} from "react"
import {connect} from 'react-redux'
import {
  MainContent,
  Header,
  JigArea,
  Slice,
  Row,
  SelectArea,
  Pics,
  OverButton
} from './style'
import Members from "./components/Members"
import {actionCreator} from "./store"
import {listenList, sendListChange} from "../../lib/ws"

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
  const {picKind, jigsawList, pics, membersList, difficult} = props;

  useEffect(() => {
    handleNumber === 0 || sendListChange(JSON.stringify(
      {
        list: jigsawList,
        handleRow,
        handleColumn,
        user: "蔡徐坤"
      }
    ))
  }, [handleNumber]);

  useEffect(() => {
    listenList(data => {
      const res = JSON.parse(data)
      props.changeList(res.list)
      console.log(res)
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
    let result
    membersList.map(item => item.username === "蔡徐坤" && (result = item.color))
    return result
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
    if(handleRow !== null && handleValue !== 0 && handleValue === item){
      props.changeSliceJTP(handleRow, handleColumn);
      sethandleNumber(handleNumber + 1)
    }
    selectAlready(item) ? setHandleValue(0) : setHandleValue(item);
    setHandleRow(null);
    setHandleColumn(null);
  };

  const otherAction = item => {
    
  }

  const handleClickButton = () => {
    console.log(jigsawList)
  }

  return (
    <MainContent>
      <Header>那咋办啊</Header>
      <JigArea>
        {jigsawList.map((rowItem, rowIndex) => (
          <Row key={rowIndex}>
            {rowItem.map((item, columnIndex) => (
              <Slice key={columnIndex}
                     ifZero={item === 0}
                     bgUrl={pictures[picKind]}
                     same={ListHavePics(item)}
                     positionX={cutSliceX(item)}
                     positionY={cutSliceY(item)}
                     len={length()}
                     MyColor={MyColor()}
                     active={handleValue !== 0 && handleValue === item}
                     onClick={() => handleChangeSlice(rowIndex, columnIndex, handleValue, item)}
              />
            ))}
          </Row>
        ))}
      </JigArea>
      <SelectArea>
        {pics.map(item => (
          <Pics key={item}
                bgUrl={pictures[picKind]}
                positionX={cutSliceX(item)}
                positionY={cutSliceY(item)}
                active={handleValue === item}
                MyColor={MyColor()}
                len={length()}
                finish={selectAlready(item)}
                onClick={() => handlePic(item)}
          />
        ))}
      </SelectArea>
      <OverButton onClick={()=>handleClickButton()}>完成并提交</OverButton>
    </MainContent>
  )
}

const mapStateToProps = state => {
  return {
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
