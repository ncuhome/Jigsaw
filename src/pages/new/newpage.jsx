import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import SelectPage from './components/select'
import CreatePage from './components/create'
import {Redirect} from 'react-router-dom'
import {listenJoin, joinRoom, removeSocket} from '../../lib/ws'

function NewPage({username}) {
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
      setStatus(res.status);
      setMessage(res.message);
    });
    return () => removeSocket('join')
  },[]);

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

export default connect(mapStateToProps)(NewPage);
