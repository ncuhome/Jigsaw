import React, { useState } from 'react';
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
  MemberContentContainer,
  MemberContent,
  MemberMessageContainer,
  Avatar,
  MemberMessageContent,
  MemberNameContent,
  MemberName,
  Identity,
  ClassMessage,
  ReadyContainer,
  BottomElements,
  ExitTitle,
  MainButton,
  Slider
} from './style'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import colorMap from "../../lib/colorMap"

function RoomPage(props) {
  const { roomName, members, difficult, userId, message } = props;

  const long = members.length

  const list = () => {
    if(long === difficult){
      return members;
    }else{
      const newList = members;
      const emptyElement = {
        username: "待加入...",
        identity: "member",
        class: "未知",
        userId: null,
        id: null,
        ready: false,
      };
      for(let i = long+1;i<=difficult;i++){
        emptyElement.id = i;
        newList.push(emptyElement);
      };
      return newList;
    }
  };

  const avatarColor = ({username, id}) => username === "待加入..." ? '#D8D8D8' : colorMap[id]

  const usernameColor = ({username}) => username === "待加入..." ? '#CDCDCD' : '#595959'

  const usernameFormat = ({username}) => username === "待加入..." ? '空' : username.split('').reverse().join('')[0]

  const identityFormat = ({identity}) => identity === "leader" ? '队长' : null

  const sliderColor = (itemUserId, id) => itemUserId === userId ? colorMap[id] : '#fff'
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
          <MembersTitle style={{fontWeight: 500}}>
            {long} / {difficult}
          </MembersTitle>
        </MembersTitleContainer>
        {list().map((item, index) => (
          <MemberContentContainer key={index}>
            <MemberContent>
              <MemberMessageContainer>
                <Avatar color={avatarColor(item)}>
                  {usernameFormat(item)}
                </Avatar>
                <MemberMessageContent>
                  <MemberNameContent>
                    <MemberName color={usernameColor(item)}>
                      {item.username}
                    </MemberName>
                    <Identity>
                      {identityFormat(item)}
                    </Identity>
                  </MemberNameContent>
                  <ClassMessage>
                    {item.class}
                  </ClassMessage>
                </MemberMessageContent>
              </MemberMessageContainer>
              <ReadyContainer>
                {item.ready && "已准备"}
              </ReadyContainer>
              <Slider color={sliderColor(item.userId, item.id)}/>
            </MemberContent>
          </MemberContentContainer>
        ))}
      </MembersContainer>
      <BottomElements>
        <ExitTitle>
          退出
        </ExitTitle>
        <MainButton>
          准备
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
