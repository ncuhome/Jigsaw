import React, { useState } from 'react';
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
import { actionCreator } from './store'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function SelectPage(props) {
  const { groupName, message, status, difficult, token } = props;
  const { setDifficult, create, updateStatus } = props;
  const [showCancel, setShowCancel] = useState(false);

  const handleCancel = () => {
    setShowCancel(true)
  }

  return (
    <NewPageWrapper>
      <NewPageContainer>
        <Title>队伍人数</Title>
        <InputContainer>
          <InputBox
            borderColor={difficult === 3 ? '#FF8D6E' : '#F2F2F2'}
            textColor={'#FF8D6E'}
            onClick={() => setDifficult(3)}
          >3人</InputBox>
          <InputBox
            borderColor={difficult === 4 ? '#FFC516' : '#F2F2F2'}
            textColor={'#FFC516'}
            onClick={() => setDifficult(4)}
          >4人</InputBox>
          <InputBox
            borderColor={difficult === 5 ? '#60D8FF' : '#F2F2F2'}
            textColor={'#60D8FF'}
            onClick={() => setDifficult(5)}
          >5人</InputBox>
        </InputContainer>
        <Message active={message}>{message}</Message>
        <ButtonsContainer>
          <Button onClick={() => handleCancel()}>取消</Button>
          <Button onClick={() => create(groupName, difficult, token)}>创建</Button>
        </ButtonsContainer>
      </NewPageContainer>
      {status ? (updateStatus(0), <Redirect to="/select/" />) : null}
      {showCancel ? <Redirect to="/home/" /> : null}
    </NewPageWrapper>
  );
}

const mapStateToProps = state => {
  return {
    token: state.login.token,
    groupName: state.new.groupName,
    message: state.select.message,
    status: state.select.status,
    difficult: state.select.difficult
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setDifficult(e) {
      dispatch(actionCreator.setDifficultAction(e))
    },
    updateStatus(status) {
      dispatch(actionCreator.updateSelectStatusAction(status))
    },
    create(groupName, difficult, token) {
      dispatch(actionCreator.createAsyncAction(groupName, difficult, token))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectPage);
