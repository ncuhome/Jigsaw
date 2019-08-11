import React, {useState} from 'react';
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
import {Redirect} from 'react-router-dom'

function SelectPage(props) {
  const {difficult} = props.params;
  const {setDifficult, updatePage} = props.funcs;
  const [showCancel, setShowCancel] = useState(false);

  const handleCancel = () => {
    setShowCancel(true)
  }

  const next = () => {
    updatePage(1)
  }

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
          <Button onClick={() => handleCancel()}>取消</Button>
          <Button onClick={() => next()}>下一步</Button>
        </ButtonsContainer>
      </NewPageContainer>
      {showCancel ? <Redirect to="/home/"/> : null}
    </NewPageWrapper>
  );
}

export default SelectPage;
