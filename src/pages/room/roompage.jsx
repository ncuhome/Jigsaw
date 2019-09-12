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
import {listenBroadcast, gameStart, removeSocket, listenLeave, leaveRoom, listenStart} from '../../lib/ws'
import {actionCreator as roomActionCreator} from "./store";
import {actionCreator as jigsawActionCreator} from "../jigsaw/store";

function RoomPage(props) {
  const {roomName, members, difficult, username, message, roomId, updateMembersList, updateRoomMessage, setRoomName, setRoomId, setRoomDifficult, setJigsawData} = props;
  const [showQuitAlert, setShowQuitAlert] = useState(false);
  const [status, setStatus] = useState(0);
  const long = members.length;

  const ifLeader = () => members.some(item => item.username === username && item.identity === "leader");

  const back = () => {
    setShowQuitAlert(false)
  };

  const toQuit = () => {
    leaveRoom(JSON.stringify({
      username,
      roomName
    }));
    setStatus(-1)
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
    //监听离开房间事件
    listenLeave(res => {
      res.status && setStatus(-1)
    });
    return () => removeSocket('leave')
  }, []);

  useEffect(() => {
    //监听其他人加入房间
    listenBroadcast(res => {
      const data = res.data;
      updateMembersList(data.members);
      updateRoomMessage(data.message);
      setRoomName(data.roomName);
      setRoomId(data.roomId);
      setRoomDifficult(data.difficult);
      console.log(`listen:${data}`)
    });
    return () => removeSocket('broadcast')
  }, []);

  useEffect(() => {
    listenStart(res => {
      let pics = [];
      res.data.members.map(member => member.username === username && (pics = members.pics));
      setJigsawData(
        {
          pics,
          ...res.data,
          score: 0
        }
      )
    });
    return () => removeSocket('start')
  }, []);

  const start = () => {
    //开始游戏
    console.log('start');
    gameStart(JSON.stringify({
      roomName,
      picKind: difficult - 2,
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
            {long} / {difficult}
          </MembersTitle>
        </MembersTitleContainer>
        <Members
          username={username}
          members={members}
          difficult={difficult}
          long={long}
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
    setRoomName(data) {
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
