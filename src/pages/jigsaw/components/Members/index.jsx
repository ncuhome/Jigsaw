import React from "react"
import { 
  MembersContainer,
  MemberContent,
  MemberName,
  MemberAvatar,
  Identity,
  MemberHead
 } from './style'
import { colorMapGradient } from "../../../../lib/colorMap"

function EmptyMember() {
  return (
    <MemberContent>
      <MemberHead>
        <MemberAvatar color={'#6c6c6c'}>
          空
        </MemberAvatar>
        <MemberName style={{color:'#707070'}}>
          待加入...
        </MemberName>
      </MemberHead>
    </MemberContent>
  )
}

function Members({membersList, difficult, username}) {
  const emptyMember = () => {
    let arr = [];
    for (let i = membersList.length + 1; i <= difficult; i++) {
      arr.push(1)
    }
    return arr
  };

  return (
    <MembersContainer>
      {
        membersList.map((item, index) => (
            <MemberContent 
              key={index}
              ifMine={username === item.username}
            >
              <MemberHead>
                <MemberAvatar
                  color={colorMapGradient[item.id]}
                >
                  {item.username.split('').reverse().join('')[0]}
                </MemberAvatar>
                <MemberName>
                  {item.username}
                </MemberName>
              </MemberHead>
              <Identity>
                {item.identity === "leader" ? "队长" : null}
              </Identity>
            </MemberContent>
        ))
      }
      {emptyMember().map((item, index) => <EmptyMember key={index}/>)}
    </MembersContainer>
  )
}

export default Members;