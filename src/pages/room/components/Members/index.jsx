import React,{useState} from 'react';
import {
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
  Slider
} from './style'
import colorMap from "../../../../lib/colorMap"

function AwaitMember() {
  return (
    <MemberContentContainer>
      <MemberContent>
        <MemberMessageContainer>
          <Avatar color={'#D8D8D8'}>
            空
            </Avatar>
          <MemberMessageContent>
            <MemberNameContent>
              <MemberName color={'#CDCDCD'}>
                待加入...
                </MemberName>
              <Identity> </Identity>
            </MemberNameContent>
            <ClassMessage>
              未知
              </ClassMessage>
          </MemberMessageContent>
        </MemberMessageContainer>
        <ReadyContainer> </ReadyContainer>
      </MemberContent>
    </MemberContentContainer>
  );
}

function Members(props) {
  const { members, userId, difficult,long } = props;

  const emptyMemeber = () => {
    let arr = []
    for (let i = long + 1;i<=difficult;i++){
      arr.push(1)
    }
    return arr
  }

  const avatarColor = ({ id }) => colorMap[id]

  const usernameFormat = ({ username }) => username.split('').reverse().join('')[0]

  const identityFormat = ({ identity }) => identity === "leader" ? '队长' : null

  const sliderColor = (itemUserId, id) => itemUserId === userId ? colorMap[id] : '#fff'
  return (
    <div>
      {
        members.map((item, index) => (
          <MemberContentContainer key={`user ${index}`}>
            <MemberContent>
              <MemberMessageContainer>
                <Avatar color={avatarColor(item)}>
                  {usernameFormat(item)}
                </Avatar>
                <MemberMessageContent>
                  <MemberNameContent>
                    <MemberName color={'#595959'}>
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
              <Slider color={sliderColor(item.userId, item.id)} />
            </MemberContent>
          </MemberContentContainer>))
      }
      {emptyMemeber().map((item, index) => <AwaitMember key={`empty ${index}`}/>)}
    </div>
  );
}

export default Members;
