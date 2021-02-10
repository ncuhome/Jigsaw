import React from "react";
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
  Slider,
} from "./style";
import { colorMapGradient } from "@/lib/colorMap";
import type { RoomMember } from "@/pages/room/store";

interface Props {
  members: RoomMember[];
  username: string;
  difficult: number;
  long: number;
}

const Members: React.FC<Props> = ({ members, username, difficult, long }) => {
  const emptyMember = () => {
    let arr = [];
    for (let i = long + 1; i <= difficult; i++) {
      arr.push(1);
    }
    return arr;
  };

  const avatarColor = ({ id }) => colorMapGradient[id];

  const usernameFormat = ({ username }) => username.split("").reverse().join("")[0];

  const identityFormat = ({ identity }) => (identity === "leader" ? "队长" : "队员");

  const sliderColor = (itemUsername: string, id: number) =>
    itemUsername === username ? colorMapGradient[id] : null;
  return (
    <div>
      {members.map((item) => (
        <MemberContentContainer key={item.id} myself={item.username === username}>
          <MemberContent>
            <MemberMessageContainer>
              <Avatar color={avatarColor(item)}>{usernameFormat(item)}</Avatar>
              <MemberMessageContent>
                <MemberName>{item.username}</MemberName>
                <Identity>{identityFormat(item)}</Identity>
              </MemberMessageContent>
            </MemberMessageContainer>
            <Slider color={sliderColor(item.username, item.id)} />
          </MemberContent>
        </MemberContentContainer>
      ))}
      {emptyMember().map((item, index) => (
        <AwaitMember key={`empty ${index}`} />
      ))}
    </div>
  );
};

function AwaitMember() {
  return (
    <MemberContentContainer>
      <MemberContent>
        <MemberMessageContainer>
          <Avatar color={"#6c6c6c"}>空</Avatar>
          <MemberMessageContent>
            <MemberNameContent>
              <WaitMemberName>待加入...</WaitMemberName>
              <Identity> </Identity>
            </MemberNameContent>
            <ClassMessage style={{ color: "#424242" }}>未知</ClassMessage>
          </MemberMessageContent>
        </MemberMessageContainer>
        <ReadyContainer> </ReadyContainer>
      </MemberContent>
    </MemberContentContainer>
  );
}

export default Members;
