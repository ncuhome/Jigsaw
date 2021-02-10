import React from "react";
import {
  ResultWrapper,
  JigContainer,
  SliceContainer,
  Slice,
  Row,
  ScoreContainer,
  ScoreText,
  Score,
  Number,
  Text,
  ToSort,
} from "./style";
import { Link } from "react-router-dom";
import { useGrid } from "@/pages/jigsaw/store";
import { pictures } from "@/lib/pictures";

function ResultPage() {
  const { jigsawList, picKind, difficult, score } = useGrid((state) => ({
    picKind: state.picKind,
    jigsawList: state.jigsawList,
    score: state.score,
    difficult: state.difficult,
  }));

  const length = 300 / difficult;

  const cutSliceX = (index) => {
    return ((index - 1) % difficult) * length;
  };

  const cutSliceY = (index) => {
    return Math.floor((index - 1) / difficult) * length;
  };

  return (
    <ResultWrapper>
      <ScoreContainer>
        <ScoreText>分数</ScoreText>
        <Score>
          <Number>{score}</Number>
          <Text>分</Text>
        </Score>
      </ScoreContainer>
      <JigContainer>
        {jigsawList.map((rowItem, rowIndex) => (
          <Row key={rowIndex}>
            {rowItem.map((item, columnIndex) => (
              <SliceContainer key={`slice(${rowIndex}, ${columnIndex})`}>
                <Slice
                  ifZero={item === 0}
                  bgUrl={pictures[picKind]}
                  positionX={cutSliceX(item)}
                  positionY={cutSliceY(item)}
                  size={length}
                />
              </SliceContainer>
            ))}
          </Row>
        ))}
      </JigContainer>
      <ToSort>
        <Link to={"/sort/"}>查看排名</Link>
      </ToSort>
    </ResultWrapper>
  );
}

export default ResultPage;
