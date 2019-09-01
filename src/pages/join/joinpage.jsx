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
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import {joinRoom,listenJoin} from '../../lib/ws'
import {actionCreator} from "../room/store";

function JoinPage({userId}) {
  const [roomID, setRoomID] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(0);

  const join = () => {
    joinRoom(JSON.stringify({
      roomId: roomID,
      userId,
    }));
  };

  useEffect(() => {
    listenJoin(data => {
      setMessage(data.message);
      setStatus(data.status)
    })
  },[]);

  return (
    <NewPageWrapper>
      <NewPageContainer>
        <Title>队伍ID</Title>
        <InputBox>
          <input
            placeholder="请输入队伍ID"
            value={roomID}
            onChange={e => setRoomID(e.target.value)}
          />
        </InputBox>
        <Message active={message}>{message}</Message>
        <ButtonsContainer>
          <Link to="/home/">
            <Button>取消</Button>
          </Link>
          <Button onClick={() => join()}>加入</Button>
        </ButtonsContainer>
      </NewPageContainer>
      {status ? <Redirect to={"/room/"} /> : null}
    </NewPageWrapper>
  );
}

const mapStateToProps = state => {
  return {
    token: state.login.token,
    userId: state.login.userId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateStatus(status) {
      dispatch(actionCreator.updateStatusAction(status))
    },
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(JoinPage);
