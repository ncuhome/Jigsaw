import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import SelectPage from './components/select'
import CreatePage from './components/create'
import {Redirect} from 'react-router-dom'
import {actionCreator} from "../room/store";
import {listenNew, createNew} from '../../lib/ws'

function NewPage({username, userId, setRoomID}) {
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

  useEffect(()=>{
    listenNew(res => {
      setStatus(res.status);
      setRoomID(res.data.id)
    })
  });

  const create = (username, userId, roomName, difficult) => {
    createNew(JSON.stringify({
      username,
      userId,
      roomName,
      difficult
    }));
    console.log('init')
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
          userId={userId}
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
    username: state.login.username,
    userId: state.login.userId,
    token: state.login.token,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setRoomID(data) {
      dispatch(actionCreator.setRoomIDAction(data))
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(NewPage);
