import React, {useState} from 'react';
import {
  RoomWrapper,
  TitleContainer,
  GroupNameTitle,
  GroupNameContent,
  MessageContainer,
  GroupName,
  HelloTitle,
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
import {actionCreator} from './store'
import Members from './components/Members/'
import PureCountdown from './components/PureCountDown/'
import QuitAlert from './components/QuitAlert/'
import TimeAlert from './components/TimeAlert/'

function RoomPage(props) {
  const {roomName, members, difficult, userId, message, endTime, status} = props;
  const {updateReady, updateStatus} = props;
  const [showQuitAlert, setShowQuitAlert] = useState(false)
  const [showTimeAlert, setShowTimeAlert] = useState(false)
  const [already, setAlready] = useState(false)
  const long = members.length

  const ifLeader = () => members.some(item => item.userId === userId && item.identity === "leader")
  const startShow = () => long === difficult && already && members.every(item => item.ready)
  const setReady = () => {
    setAlready(true)
  }
  const cancelReady = () => {
    setAlready(false)
  }

  const toQuit = () => {
    updateStatus(-1)
  }

  const quit = () => {
    updateStatus(0)
    return console.log('退出')
    // TODO change
    /*return <Redirect to="/home/"/>*/
  }

  const back = () => {
    setShowQuitAlert(false)
  }

  return (
    <RoomWrapper>
      <TitleContainer>
        <GroupNameTitle>
          队名
        </GroupNameTitle>
        <GroupNameContent>
          <GroupName>{roomName}</GroupName>
          <HelloTitle>Hello！</HelloTitle>
        </GroupNameContent>
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
      {showTimeAlert ? <TimeAlert/> : null}
      {showQuitAlert ? <QuitAlert back={back} toQuit={toQuit}/> : null}
      {status === -1 ? quit() : null}
    </RoomWrapper>
  );
}

const mapStateToProps = state => {
  return {
    roomName: state.room.roomName,
    members: state.room.members,
    difficult: state.room.difficult,
    userId: state.room.userId,
    message: state.room.message,
    endTime: state.room.endTime,
    status: state.room.status
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateStatus(status) {
      dispatch(actionCreator.updateStatusAction(status))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
