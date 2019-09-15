import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import SelectPage from './components/select'
import CreatePage from './components/create'
import {Redirect} from 'react-router-dom'
import {listenJoin, joinRoom, removeSocket} from '../../lib/ws'
import {actionCreator as roomActionCreator} from "../room/store";

function NewPage({username, updateRoomMessage, setRoomPageName, setRoomId, setRoomDifficult, updateMembersList}) {
  const [status, setStatus] = useState(0);
  const [roomName, setRoomName] = useState('');
  const [difficult, setDifficult] = useState(3);
  const [message, setMessage] = useState('');
  const [page, setPage] = useState(1);

  const back = () => {
    setPage(1)
  };

  const next = () => {
    setPage(2)
  };

  useEffect(() => {
    listenJoin(res => {
      if(res.status){
        updateMembersList(res.data.members);
        updateRoomMessage(res.message);
        setRoomId(res.data.roomId);
        setRoomDifficult(difficult);
        setRoomPageName(res.data.roomName);
      }else {
        setMessage(res.message);
      }
      setStatus(res.status);
      console.log(res);
    });
    return () => removeSocket('join')
  },[page]);

  const create = (username, roomName, difficult) => {
    const sendData = JSON.stringify({
      username,
      roomName,
      difficult
    });
    joinRoom(sendData);
    console.log('send:'+ sendData)
  };

  return (
    <div>
      {page === 1 ?
        <SelectPage
          next={next}
          difficult={difficult}
          setDifficult={setDifficult}
        /> : null}
      {page === 2 ?
        <CreatePage
          username={username}
          difficult={difficult}
          roomName={roomName}
          setRoomName={setRoomName}
          message={message}
          back={back}
          create={create}
        /> : null}
      {status ? <Redirect to={"/room/"}/> : null}
    </div>
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPage);
