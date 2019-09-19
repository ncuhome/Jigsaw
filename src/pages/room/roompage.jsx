import React, {useState, useEffect} from 'react';
import {
  RoomWrapper,
  TitleContainer,
  GroupNameTitle,
  MessageContainer,
  GroupName,
  GroupID,
  MembersContainer,
  MembersTitleContainer,
  MembersTitle,
  BottomElements,
  ExitTitle, 
  MainButton,
} from './style'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Members from './components/Members/'
import QuitAlert from './components/QuitAlert/'
import {listenAddBroadcast, listenBroadcastStart, gameStart, removeSocket, listenLeave, leaveRoom, listenStart, listenLeaveBroadcast} from '../../lib/ws'
import {actionCreator as roomActionCreator} from "./store";
import {actionCreator as jigsawActionCreator} from "../jigsaw/store";

function RoomPage({roomName, members, difficult, username, message, roomId, updateMembersList, updateRoomMessage, setRoomPageName, setRoomId, setRoomDifficult, setJigsawData}) {
  const [showQuitAlert, setShowQuitAlert] = useState(false);
  const [status, setStatus] = useState(0);
  const long = () => members.length;

  const myID = () => {
    let result = 0;
    members.map(item => item.username === username && (result = item.id));
    return result
  };

  const ifLeader = () => members.some(item => item.username === username && item.identity === "leader");

  const back = () => {
    setShowQuitAlert(false)
  };

  const toQuit = () => {
    leaveRoom(JSON.stringify({
      username,
      roomName,
      id: myID()
    }));
    console.log(`send Leave: ${username}, ${roomName}`)
  };

  const array = n => {
    let myArr = [];
    for (let i = 0; i < n; i++) {
      myArr[i] = [];
      for (let j = 0; j < n; j++) {
        myArr[i][j] = 0;
      }
    }
    return myArr
  };

  useEffect(() => {
    //监听某人离开房间事件
    listenLeaveBroadcast(res => {
      if(res.status){
        const data = res.data;
        updateMembersList(data.members);
      }else{
        updateRoomMessage('网络错误')
      }
      console.log(res)
    });
    return () => removeSocket('broadcastRoomLeave')
  }, []);

  useEffect(() => {
    //监听自己离开房间事件
    listenLeave(res => {
      res.status && setStatus(-1);
      console.log(res)
    });
    return () => removeSocket('leave')
  }, []);

  useEffect(() => {
    //监听其他人加入房间
    listenAddBroadcast(res => {
      if(res.status){
        const data = res.data;
        updateMembersList(data.members);
        updateRoomMessage(res.message);
        setRoomPageName(data.roomName);
        setRoomId(data.roomId);
        setRoomDifficult(data.difficult);
        console.log(data)
      }else{
        updateRoomMessage(res.message || '网络错误');
      }
      console.log(res)
    });
    return () => removeSocket('broadcastRoomJoin')
  }, []);

  useEffect(() => {
    listenBroadcastStart(res => {
      if(res.status){
        let pics = [];
        res.data.members.map(item => item.username === username && (pics = item.pics));
        setJigsawData(
          {
            pics,
            ...res.data,
            score: 0
          }
        );
        setStatus(1)
      }else{
        updateRoomMessage(res.message || '网络错误');
      }
      console.log(res)
    });
    return () => removeSocket('broadcastGameStart')
  }, []);

  useEffect(() => {
    listenStart(res => {
      updateRoomMessage(res.message);
      console.log(res)
    });
    return () => removeSocket('start')
  },[]);

  const start = () => {
    //开始游戏
    console.log('start');
    gameStart(JSON.stringify({
      roomName,
      picKind: difficult - 3,
      jigsawList: array(difficult)
    }))
  };

  return (
    <RoomWrapper>
      <TitleContainer>
        <GroupNameTitle>
          队名
        </GroupNameTitle>
        <GroupName>{roomName}</GroupName>
        <GroupID>ID: {roomId}</GroupID>
      </TitleContainer>
      <MessageContainer>
        {message}
      </MessageContainer>
      <MembersContainer>
        <MembersTitleContainer>
          <MembersTitle>
            队伍成员
          </MembersTitle>
          <MembersTitle style={{fontWeight: 500}}>
            {long()} / {difficult}
          </MembersTitle>
        </MembersTitleContainer>
        <Members
          username={username}
          members={members}
          difficult={difficult}
          long={long()}
        />
      </MembersContainer>
      <BottomElements>
        <ExitTitle onClick={() => setShowQuitAlert(true)}>退出</ExitTitle>
        {ifLeader() ? <MainButton onClick={() => start()}>开始</MainButton> : <div/>}
      </BottomElements>
      <QuitAlert
        back={back}
        toQuit={toQuit}
        showQuitAlert={showQuitAlert}
      />
      {status === -1 ? <Redirect to="/home/"/> : null}
      {status === 1 ? <Redirect to="/jigsaw/"/> : null}
    </RoomWrapper>
  );
}

const mapStateToProps = state => {
  return {
    roomName: state.room.roomName,
    roomId: state.room.roomId,
    members: state.room.members,
    difficult: state.room.difficult,
    username: state.login.username,
    message: state.room.message,
    status: state.room.status
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


export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
