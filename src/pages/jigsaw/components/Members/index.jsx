import React from "react"
import { 
  MembersContainer,
  MemberContent,
  MemberName,
  MemberAvatar,
 } from './style'
import colorMap from "../../../../lib/colorMap"

function Members({membersList, difficult, userId}) {

  const delayShow = x => ((x+1)/difficult)/.75;

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
            <MemberContent 
              key={index}
              show={delayShow(index)}
              ifMine={userId === item.userId}
            >
              <MemberAvatar
                color={item.username === "待加入..." ? '#D8D8D8' : colorMap[item.id]}
                ifLeader={item.identity==="leader"}
              >
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