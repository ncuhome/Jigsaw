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
import PureCountdown from './components/PureCountDown/'
import QuitAlert from './components/QuitAlert/'
import TimeAlert from './components/TimeAlert/'

function RoomPage(props) {
  const {roomName, members, difficult, userId, message, endTime, roomId} = props;
  const [showQuitAlert, setShowQuitAlert] = useState(false);
  const [showTimeAlert, setShowTimeAlert] = useState(false);
  const [already, setAlready] = useState(false);
  const [status, setStatus] = useState(0);

  const long = members.length;

  const ifLeader = () => members.some(item => item.userId === userId && item.identity === "leader");
  const startShow = () => long === difficult && already && members.every(item => item.ready);
  const setReady = () => {
    setAlready(true)
  };

  const toQuit = () => {
    setStatus(-1)
  };

  const back = () => {
    setShowQuitAlert(false)
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
          userId={userId}
          members={members}
          difficult={difficult}
          long={long}
        />
      </MembersContainer>
      <BottomElements>
        {already ? <div/> : <ExitTitle onClick={() => setShowQuitAlert(true)}>退出</ExitTitle>}
        {startShow() ? <MainButton onClick={() => console.log("开始")}>开始</MainButton> :
          already ?
            <MainButton style={{color: '#747474'}}>已准备</MainButton> :
            <MainButton onClick={() => setReady()}>
              <p>准备</p>
              <ButtonNumber>
                <PureCountdown
                  endTime={endTime}
                  status={status}
                  toQuit={toQuit}
                  setShowTimeAlert={setShowTimeAlert}
                />
              </ButtonNumber>
            </MainButton>
        }
      </BottomElements>
      <QuitAlert
        back={back}
        toQuit={toQuit}
        showQuitAlert={showQuitAlert}
      />
      {showTimeAlert ? <TimeAlert/> : null}
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
    userId: state.room.userId,
    message: state.room.message,
    endTime: state.room.endTime,
    status: state.room.status
  }
};

export default connect(mapStateToProps)(RoomPage);
