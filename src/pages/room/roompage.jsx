import React, { useState, useEffect } from "react";
import {
  RoomWrapper,
  TitleContainer,
  GroupNameTitle,
  MessageContainer,
  GroupName,
  GroupID,
  MembersContainer,
  MembersTitleContainer,
  MembersTitle,
  BottomElements,
  ExitTitle,
  MainButton,
} from "./style";
import { useHistory } from "react-router-dom";
import {
  listenAddBroadcast,
  listenBroadcastStart,
  gameStart,
  removeSocket,
  listenLeave,
  leaveRoom,
  listenStart,
  listenLeaveBroadcast,
} from "@/lib/ws";
import { useRoom } from "./store";
import { useLogin } from "@/pages/login/store";
import { useGrid } from "@/pages/jigsaw/store";

import Members from "./components/Members/";
import Modal from "@/components/Modal/";

function RoomPage() {
  const [showQuitAlert, setShowQuitAlert] = useState(false);
  const username = useLogin((state) => state.name);
  const { setValue, setMutiValue } = useRoom((state) => ({
    setValue: state.setValue,
    setMutiValue: state.setMutiValue,
  }));
  const { roomName, members, difficult, roomId, message } = useRoom((state) => ({
    roomName: state.roomName,
    members: state.members,
    difficult: state.difficult,
    roomId: state.roomId,
    message: state.message,
  }));
  const setJigsawData = useGrid((state) => state.setMutiValue);

  const history = useHistory();
  const long = () => members.length;

  const updateRoomMessage = (str) => {
    setValue("message", str || "网络错误");
  };

  const myID = () => {
    let result = 0;
    members.map((item) => item.username === username && (result = item.id));
    return result;
  };

  const ifLeader = () =>
    members.some((item) => item.username === username && item.identity === "leader");

  const back = () => {
    setShowQuitAlert(false);
  };

  const toQuit = () => {
    leaveRoom(
      JSON.stringify({
        username,
        roomName,
        id: myID(),
      })
    );
    console.log(`send Leave: ${username}, ${roomName}`);
  };

  const array = (n) => {
    let myArr = [];
    for (let i = 0; i < n; i++) {
      myArr[i] = [];
      for (let j = 0; j < n; j++) {
        myArr[i][j] = 0;
      }
    }
    return myArr;
  };

  useEffect(() => {
    //监听某人离开房间事件
    listenLeaveBroadcast((res) => {
      if (res.status) {
        const data = res.data;
        setValue("members", data.members);
      } else {
        updateRoomMessage("网络错误");
      }
      console.log(res);
    });
    return () => removeSocket("broadcastRoomLeave");
  }, []);

  useEffect(() => {
    //监听自己离开房间事件
    listenLeave((res) => {
      if (res.status) {
        history.push("/home");
      }
      console.log(res);
    });

    return () => removeSocket("leave");
  }, []);

  useEffect(() => {
    //监听其他人加入房间
    listenAddBroadcast((res) => {
      if (res.status) {
        const data = res.data;
        setMutiValue({
          members: data.members,
          roomName: data.roomName,
          roomId: data.roomId,
          difficult: data.difficult,
          message: data.message,
        });
        console.log(data);
      } else {
        updateRoomMessage(res.message);
      }
      console.log(res);
    });
    return () => removeSocket("broadcastRoomJoin");
  }, []);

  useEffect(() => {
    listenBroadcastStart((res) => {
      if (res.status) {
        let pics = [];
        res.data.members.map((item) => item.username === username && (pics = item.pics));
        setJigsawData({
          pics,
          ...res.data,
          score: 0,
        });
        history.push("/jigsaw");
      } else {
        updateRoomMessage(res.message);
      }
      console.log(res);
    });
    return () => removeSocket("broadcastGameStart");
  }, []);

  useEffect(() => {
    listenStart((res) => {
      updateRoomMessage(res.message);
      console.log(res);
    });

    return () => removeSocket("start");
  }, []);

  const start = () => {
    //开始游戏
    console.log("start");
    gameStart(
      JSON.stringify({
        roomName,
        picKind: difficult - 3,
        jigsawList: array(difficult),
      })
    );
  };

  return (
    <RoomWrapper>
      <TitleContainer>
        <GroupNameTitle>队名</GroupNameTitle>
        <GroupName>{roomName}</GroupName>
        <GroupID>ID: {roomId}</GroupID>
      </TitleContainer>
      <MessageContainer>{message}</MessageContainer>
      <MembersContainer>
        <MembersTitleContainer>
          <MembersTitle>队伍成员</MembersTitle>
          <MembersTitle style={{ fontWeight: 500 }}>
            {long()} / {difficult}
          </MembersTitle>
        </MembersTitleContainer>
        <Members username={username} members={members} difficult={difficult} long={long()} />
      </MembersContainer>
      <BottomElements>
        <ExitTitle onClick={() => setShowQuitAlert(true)}>退出</ExitTitle>
        {ifLeader() ? <MainButton onClick={() => start()}>开始</MainButton> : <div />}
      </BottomElements>
      <Modal
        visible={showQuitAlert}
        title={"是否退出房间"}
        decs={"退出后将返回主页"}
        activePress={toQuit}
        closePress={back}
        activeText={"退出"}
      />
    </RoomWrapper>
  );
}

export default RoomPage;
