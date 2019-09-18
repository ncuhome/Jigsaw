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
import {joinRoom, listenAddBroadcast, listenJoin, removeSocket} from '../../lib/ws'
import {actionCreator as roomActionCreator} from "../room/store";
import {actionCreator as jigsawActionCreator} from "../jigsaw/store";

function JoinPage({username, updateMembersList, updateRoomMessage, setRoomPageName, setRoomId, setRoomDifficult}) {
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
      if(res.status){
        listenAddBroadcast(addRes => {
          const data = addRes.data;
          updateMembersList(data.members);
          updateRoomMessage(addRes.message);
          setRoomPageName(data.roomName);
          setRoomId(data.roomId);
          setRoomDifficult(data.difficult);
          console.log(addRes)
        });
      }else{
        setMessage(res.message);
      }
      setStatus(res.status);
      console.log(res)
    });
    return () => removeSocket('join')
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

const mapDispatchToProps = dispatch => {
  return {
    updateMembersList(data) {
      dispatch(roomActionCreator.updateMembersListAction(data))
    },
    updateRoomMessage(data) {
      dispatch(roomActionCreator.updateRoomMessageAction(data))
    },
    setRoomPageName(data) {
      dispatch(roomActionCreator.setRoomNameAction(data))
    },
    setRoomId(data) {
      dispatch(roomActionCreator.setRoomIdAction(data))
    },
    setRoomDifficult(data) {
      dispatch(roomActionCreator.setRoomDifficultAction(data))
    },
    setJigsawData(data) {
      dispatch(jigsawActionCreator.setJigsawDataAction(data))
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(JoinPage);
