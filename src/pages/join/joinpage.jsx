import React, {useState, useEffect} from 'react';
import {
  NewPageWrapper,
  NewPageContainer,
  InputBox,
  Title,
  Message,
  ButtonsContainer,
  Button
} from './style'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreator } from './store'

function JoinPage(props) {
  const {username, roomName, message, userId, status, token} = props;
  const {OnChangeGroupName, join, updateJoinStatus} = props;
  const [showCancel, setShowCancel] = useState(false);

  useEffect(() => {
    OnChangeGroupName('')
  }, [])

  const handleCancel = () => {
    setShowCancel(true)
  }

  const clearNewState = () => {
    updateJoinStatus(0);
  }

  return (
    <NewPageWrapper>
      <NewPageContainer>
        <Title>队伍名称</Title>
        <InputBox>
          <input
            placeholder="请输入队伍名称"
            value={roomName}
            onChange={e => OnChangeGroupName(e.target.value)}
          />
        </InputBox>
        <Message active={message}>{message}</Message>
        <ButtonsContainer>
          <Button onClick={() => handleCancel()}>取消</Button>
          <Button onClick={() => join(username, userId, roomName, token)}>加入</Button>
        </ButtonsContainer>
      </NewPageContainer>
      {status ? (clearNewState(), <Redirect to="/room/"/>) : null}
      {showCancel ? <Redirect to="/home/"/> : null}
    </NewPageWrapper>
  );
}

const mapStateToProps = state => {
  return {
    username: state.login.username,
    userId: state.login.userId,
    token: state.login.token,

    roomName: state.new.roomName,
    message: state.new.message,
    status: state.new.status,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    OnChangeGroupName(roomName) {
      dispatch(actionCreator.OnChangeGroupNameAction(roomName))
    },
    updateJoinStatus(status) {
      dispatch(actionCreator.updateJoinStatusAction(status))
    },
    join(username, userId, roomName, token) {
      dispatch(actionCreator.joinAsyncAction(username, userId, roomName, token))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(JoinPage);
