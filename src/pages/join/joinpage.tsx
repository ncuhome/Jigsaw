import React, { useState } from "react";
import {
  NewPageWrapper,
  NewPageContainer,
  InputBox,
  Title,
  Message,
  ButtonsContainer,
  Button,
} from "./style";
import { Link, useHistory } from "react-router-dom";
import { useLogin } from "@/pages/login/store";
import { useRoom } from "@/pages/room/store";
import { useListener, useEmit } from "@/lib/websocket/hooks";

function JoinPage() {
  const [roomName, setRoomName] = useState("");
  const [message, setMessage] = useState("");

  const history = useHistory();
  const setMutiValue = useRoom((state) => state.setMutiValue);
  const username = useLogin((state) => state.name);
  const joinRoom = useEmit("roomJoin");

  const submit = () => {
    joinRoom({
      roomName,
      username,
    });
  };

  useListener("join", (res) => {
    if (res.status) {
      history.push("/room");
      setMessage(res.message);
    }
  });

  useListener("broadcastRoomJoin", (res) => {
    const data = res.data;
    setMutiValue({
      members: data.members,
      message: res.message,
      roomName: data.roomName,
      roomId: data.roomId,
      difficult: data.difficult,
    });
  });

  return (
    <NewPageWrapper>
      <NewPageContainer>
        <Title>加入队伍</Title>
        <InputBox>
          <input
            placeholder="请输入队伍名称"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />
        </InputBox>
        <Message active={!!message}>{message}</Message>
        <ButtonsContainer>
          <Link to="/home/">
            <Button>取消</Button>
          </Link>
          <Button onClick={submit}>加入</Button>
        </ButtonsContainer>
      </NewPageContainer>
    </NewPageWrapper>
  );
}

export default JoinPage;
