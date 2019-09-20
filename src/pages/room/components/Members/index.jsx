import React from 'react';
import {
  MemberContentContainer,
  MemberContent,
  MemberMessageContainer,
  Avatar,
  MemberMessageContent,
  MemberNameContent,
  MemberName,
  WaitMemberName,
  Identity,
  ClassMessage,
  ReadyContainer,
  Slider
} from './style'
import {colorMapGradient} from "../../../../lib/colorMap"

function AwaitMember() {
  return (
    <MemberContentContainer>
      <MemberContent>
        <MemberMessageContainer>
          <Avatar color={'#6c6c6c'}>
            空
          </Avatar>
          <MemberMessageContent>
            <MemberNameContent>
              <WaitMemberName>
                待加入...
              </WaitMemberName>
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
  const {members, username, difficult, long} = props;

  const emptyMember = () => {
    let arr = [];
    for (let i = long + 1; i <= difficult; i++) {
      arr.push(1)
    }
    return arr
  };

  const avatarColor = ({id}) => colorMapGradient[id];

  const usernameFormat = ({username}) => username.split('').reverse().join('')[0];

  const identityFormat = ({identity}) => identity === "leader" ? '队长' : '队员';

  const sliderColor = (itemUsername, id) => itemUsername === username ? colorMapGradient[id] : null;
  return (
    <div>
      {
        members.map((item, index) => (
          <MemberContentContainer
            key={`user ${index}`}
            myself={item.username === username}
          >
            <MemberContent>
              <MemberMessageContainer>
                <Avatar color={avatarColor(item)}>
                  {usernameFormat(item)}
                </Avatar>
                <MemberMessageContent>
                  <MemberName>
                    {item.username}
                  </MemberName>
                  <Identity>
                    {identityFormat(item)}
                  </Identity>
                </MemberMessageContent>
              </MemberMessageContainer>
              <ReadyContainer ifReady={item.ready}>
                {item.ready && "已准备"}
              </ReadyContainer>
              <Slider color={sliderColor(item.username, item.id)}/>
            </MemberContent>
          </MemberContentContainer>))
      }
      {emptyMember().map((item, index) => <AwaitMember key={`empty ${index}`}/>)}
    </div>
  );
}

export default Members;
