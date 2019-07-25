import React, { useState, useEffect } from 'react';
import {
  NewPageWrapper,
  NewPageContainer,
  InputBox,
  Title,
  Message,
  ButtonsContainer,
  Button
} from './style'
import { actionCreator } from './store'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function NewPage(props) {
  const { groupName, message, status, token } = props;
  const { OnChangeGroupName, next, updateNewStatus } = props;
  const [showCancel, setShowCancel] = useState(false);

  useEffect(() => {
    OnChangeGroupName('')
  }, [])

  const handleCancel = () => {
    setShowCancel(true)
  }

  return (
    <NewPageWrapper>
      <NewPageContainer>
        <Title>队伍名称</Title>
        <InputBox>
          <input
            placeholder="请输入队伍名称"
            value={groupName}
            onChange={e => OnChangeGroupName(e.target.value)}
          />
        </InputBox>
        <Message active={message}>{message}</Message>
        <ButtonsContainer>
          <Button onClick={() => handleCancel()}>取消</Button>
          <Button onClick={() => next(groupName)}>下一步</Button>
        </ButtonsContainer>
      </NewPageContainer>
      {status ? (updateNewStatus(0), <Redirect to="/select/" />) : null}
      {showCancel ? <Redirect to="/home/" /> : null}
    </NewPageWrapper>
  );
}

const mapStateToProps = state => {
  return {
    token: state.login.token,
    groupName: state.new.groupName,
    message: state.new.message,
    status: state.new.status
  }
};

const mapDispatchToProps = dispatch => {
  return {
    OnChangeGroupName(e) {
      dispatch(actionCreator.OnChangeGroupNameAction(e))
    },
    updateNewStatus(status) {
      dispatch(actionCreator.updateNewStatusAction(status))
    },
    next(groupName, token) {
      dispatch(actionCreator.nextAsyncAction(groupName, token))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPage);
