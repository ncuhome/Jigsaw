import React from 'react';
import {
  NewPageWrapper,
  NewPageContainer,
  InputBox,
  Title,
  Message,
  ButtonsContainer,
  Button,
  InputContainer
} from './style'
import {Link} from 'react-router-dom'

function SelectPage({difficult, setDifficult, next}) {
  return (
    <NewPageWrapper>
      <NewPageContainer>
        <Title>队伍人数</Title>
        <InputContainer>
          <InputBox
            borderColor={difficult === 3 ? '#FF8D6E' : '#424242'}
            textColor={'#FF8D6E'}
            onClick={() => setDifficult(3)}
          >3人</InputBox>
          <InputBox
            borderColor={difficult === 4 ? '#FFC516' : '#424242'}
            textColor={'#FFC516'}
            onClick={() => setDifficult(4)}
          >4人</InputBox>
          <InputBox
            borderColor={difficult === 5 ? '#60D8FF' : '#424242'}
            textColor={'#60D8FF'}
            onClick={() => setDifficult(5)}
          >5人</InputBox>
        </InputContainer>
        <Message>生成一个 {difficult}x{difficult} 拼图</Message>
        <ButtonsContainer>
          <Link to={"home"}>
            <Button>取消</Button>
          </Link>
          <Button onClick={() => next()}>下一步</Button>
        </ButtonsContainer>
      </NewPageContainer>
    </NewPageWrapper>
  );
}

export default SelectPage;
