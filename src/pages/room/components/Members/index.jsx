import React from 'react';
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
              <MemberName style={{color: '#5F5F5F'}}>
                待加入...
              </MemberName>
              <Identity> </Identity>
            </MemberNameContent>
            <ClassMessage style={{color: '#424242'}}>
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
  const {members, userId, difficult, long} = props;

  const emptyMember = () => {
    let arr = []
    for (let i = long + 1; i <= difficult; i++) {
      arr.push(1)
    }
    return arr
  }

  const avatarColor = ({id}) => colorMap[id]

  const usernameFormat = ({username}) => username.split('').reverse().join('')[0]

  const identityFormat = ({identity}) => identity === "leader" ? '队长' : null

  const sliderColor = (itemUserId, id) => itemUserId === userId ? colorMap[id] : null
  return (
    <div>
      {
        members.map((item, index) => (
          <MemberContentContainer
            key={`user ${index}`}
            myself={item.userId === userId}
          >
            <MemberContent>
              <MemberMessageContainer>
                <Avatar color={avatarColor(item)}>
                  {usernameFormat(item)}
                </Avatar>
                <MemberMessageContent>
                  <MemberNameContent>
                    <MemberName>
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
              <ReadyContainer ifReady={item.ready}>
                {item.ready && "已准备"}
              </ReadyContainer>
              <Slider color={sliderColor(item.userId, item.id)}/>
            </MemberContent>
          </MemberContentContainer>))
      }
      {emptyMember().map((item, index) => <AwaitMember key={`empty ${index}`}/>)}
    </div>
  );
}

export default Members;
