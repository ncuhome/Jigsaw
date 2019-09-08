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
  ButtonNumber,
} from './style'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Members from './components/Members/'
import QuitAlert from './components/QuitAlert/'

function RoomPage(props) {
  const {roomName, members, difficult, username, message, roomId} = props;
  const [showQuitAlert, setShowQuitAlert] = useState(false);
  const [status, setStatus] = useState(0);
  const long = members.length;

  const ifLeader = () => members.some(item => item.username === username && item.identity === "leader");

  const back = () => {
    setShowQuitAlert(false)
  };

  const toQuit = () => {
    setStatus(-1)
  };

  const start = () => {
    console.log('kaishi')
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
    username: state.home.username,
    message: state.room.message,
    endTime: state.room.endTime,
    status: state.room.status
  }
};

export default connect(mapStateToProps)(RoomPage);
