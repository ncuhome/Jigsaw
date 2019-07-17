import React from "react"
import { 
  MembersContainer,
  MemberContent,
  MemberName,
  MemberAvatar,
  MemeberIdentity
 } from '../style'
import colorMap from "../../../lib/colorMap"

function Members({membersList, myuserId, difficult}) {
  const list = () => {
    const long = membersList.length;
    if(long === difficult){
      return membersList;
    }else{
      const newList = membersList;
      const emptyElement = {
        username: "待加入...",
        identity: "member",
        userId: null,
        id: null,
      };
      for(let i = long+1;i<=difficult;i++){
        emptyElement.id = i;
        newList.push(emptyElement);
      };
      return newList;
    }
  }
  return (
    <MembersContainer>
      {
        list().map((item, index) => (
            <MemberContent key={index}>
              <MemeberIdentity leaderColor={item.identity}>{item.identity==="leader" ? '队长' : '队员'}</MemeberIdentity>
              <MemberAvatar color={item.username === "待加入..." ? '#D8D8D8' : colorMap[item.id]}>
                {item.username === "待加入..." ? '空' :item.username.split('').reverse().join('')[0]}
              </MemberAvatar>
              <MemberName>{item.username}</MemberName>
            </MemberContent>
        ))
      }
    </MembersContainer>
  )
}

export default Members;