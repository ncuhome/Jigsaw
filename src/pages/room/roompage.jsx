import React, { useState, useEffect } from 'react';
import {
  RoomWarpper,
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
  MainButton
} from './style'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import Members from './components/Members/'

function RoomPage(props) {
  const { roomName, members, difficult, userId, message } = props;
  const [activeReady, setActiveReady] = useState(false)
  const long = members.length

  const ifLeader = () => members.some(item => item.userId === userId && item.identity === "leader")

  const startShow = () => {
    let num = 0;
    members.map(item => item.ready && num++)
    if (num === difficult && ifLeader()) {
      return true
    } else {
      return false
    }
  }

  const toReady = () => {
    setActiveReady(!activeReady)
  }

  return (
    <RoomWarpper>
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
          <MembersTitle style={{ fontWeight: 500 }}>
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
        <ExitTitle>
          {activeReady || '退出'}
        </ExitTitle>
        <MainButton onClick={() => toReady()}>
          {startShow() ? "开始游戏" : "准备"}
        </MainButton>
      </BottomElements>
    </RoomWarpper>
  );
}

const mapStateToProps = state => {
  return {
    roomName: state.room.roomName,
    members: state.room.members,
    difficult: state.room.difficult,
    userId: state.room.userId,
    message: state.room.message
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeUserId(e) {
      dispatch(actionCreator.onUserIdChangeAction(e.target.value))
    },
    onChangePassword(e) {
      dispatch(actionCreator.onPasswordChangeAction(e.target.value))
    },
    login(userId, password) {
      dispatch(actionCreator.loginAsyncAction(userId, password))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
