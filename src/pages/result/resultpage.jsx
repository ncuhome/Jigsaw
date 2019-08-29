import React from 'react';
import {
  ResultWrapper,
  JigContainer,
  SliceContainer,
  Slice,
  Row,
  TitleContainer,
  TitleText,
  Title,
  ScoreContainer,
  ScoreText,
  Score,
  Number,
  Text,
  ToSort
} from './style'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const pictures = [
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562336127688&di=8b3b64da7ea88ddb1a14b95b9ba2e7cc&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201705%2F29%2F20170529020618_QMZXK.jpeg",
  "http://b-ssl.duitang.com/uploads/item/201706/17/20170617111634_Uxyrk.jpeg",
  "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562930803&di=efa158df98e214314b3bc5c235fbba81&imgtype=jpg&er=1&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F23%2F20180423194810_yywff.jpg"
];

function ResultPage({jigsawList, picKind, difficult, score, roomName}) {
  const length = () => {
    return 300 / difficult
  };

  const cutSliceX = index => {
    return (index - 1) % difficult * length()
  };

  const cutSliceY = index => {
    return Math.floor((index - 1) / difficult) * length()
  };

  return (
    <ResultWrapper>
      <TitleContainer>
        <TitleText>
          队名
        </TitleText>
        <Title>
          {roomName}
        </Title>
      </TitleContainer>
      <JigContainer>
        {jigsawList.map((rowItem, rowIndex) => (
          <Row key={rowIndex}>
            {rowItem.map((item, columnIndex) => (
              <SliceContainer
                key={`slice(${rowIndex}, ${columnIndex})`}
                ifZero={item === 0}
              >
                <Slice
                  ifZero={item === 0}
                  bgUrl={pictures[picKind]}
                  positionX={cutSliceX(item)}
                  positionY={cutSliceY(item)}
                  size={length()}
                />
              </SliceContainer>
            ))}
          </Row>
        ))}
      </JigContainer>
      <ScoreContainer>
        <ScoreText>
          分数
        </ScoreText>
        <Score>
          <Number>{score}</Number>
          <Text>分</Text>
        </Score>
      </ScoreContainer>
      <ToSort>
        <Link to={"/sort/"}>
          查看排名
        </Link>
      </ToSort>
    </ResultWrapper>
  );
}

const mapStateToProps = state => {
  return {
    roomName: state.jigsaw.roomName,
    score: state.jigsaw.score,
    picKind: state.jigsaw.picKind,
    jigsawList: state.jigsaw.jigsawList,
    difficult: state.jigsaw.difficult,
  }
};

export default connect(mapStateToProps)(ResultPage);
