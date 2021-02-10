import React, { useState, useEffect } from "react";
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
import { joinRoom, listenAddBroadcast, listenJoin, removeSocket } from "@/lib/ws";
import { useLogin } from "@/pages/login/store";
import { useRoom } from "@/pages/room/store";

function JoinPage() {
  const [roomName, setRoomName] = useState("");
  const [message, setMessage] = useState("");

  const history = useHistory();
  const setMutiValue = useRoom((state) => state.setMutiValue);
  const username = useLogin((state) => state.username);

  const submit = () => {
    joinRoom(
      JSON.stringify({
        roomName,
        username,
      })
    );
  };

  useEffect(() => {
    listenJoin((res) => {
      if (res.status) {
        listenAddBroadcast((addRes) => {
          const data = addRes.data;
          setMutiValue({
            members: data.members,
            message: addRes.message,
            roomName: data.roomName,
            roomId: data.roomId,
            difficult: data.difficult,
          });
          console.log(addRes);
        });
      } else {
        setMessage(res.message);
      }
      history.push("/room");
      console.log(res);
    });
    return () => removeSocket("join");
  }, []);

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
        <Message active={message}>{message}</Message>
        <ButtonsContainer>
          <Link to="/home/">
            <Button>取消</Button>
          </Link>
          <Button onClick={() => submit()}>加入</Button>
        </ButtonsContainer>
      </NewPageContainer>
    </NewPageWrapper>
  );
}

export default JoinPage;
