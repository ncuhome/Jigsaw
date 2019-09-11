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
import {joinRoom, listenJoin, removeListenRoom} from '../../lib/ws'

function JoinPage({username}) {
  const [roomName, setRoomName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(0);

  const submit = () => {
    joinRoom(JSON.stringify({
      roomName,
      username
    }));
  };

  useEffect(() => {
    listenJoin(res => {
        setMessage(res.message);
        setStatus(res.status);
    });
    return () => removeListenRoom('join')
  },[]);

  return (
    <NewPageWrapper>
      <NewPageContainer>
        <Title>加入队伍</Title>
        <InputBox>
          <input
            placeholder="请输入队伍名称"
            value={roomName}
            onChange={e => setRoomName(e.target.value)}
          />
        </InputBox>
        <Message active={message}>{message}</Message>
        <ButtonsContainer>
          <Link to="/home/">
            <Button>取消</Button>
          </Link>
          <Button onClick={() => submit()}>加入</Button>
        </ButtonsContainer>
      </NewPageContainer>
      {status ? <Redirect to={"/room/"} /> : null}
    </NewPageWrapper>
  );
}

const mapStateToProps = state => {
  return {
    username: state.login.username
  }
};

export default connect(mapStateToProps)(JoinPage);
