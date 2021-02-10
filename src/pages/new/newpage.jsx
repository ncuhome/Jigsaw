import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { listenJoin, joinRoom, removeSocket } from "@/lib/ws";
import { useLogin } from "@/pages/login/store";
import { useRoom } from "@/pages/room/store";

import SelectPage from "./components/select";
import CreatePage from "./components/create";

function NewPage() {
  const username = useLogin((state) => state.name);
  const [roomName, setRoomName] = useState("");
  const [difficult, setDifficult] = useState(3);
  const [message, setMessage] = useState("");
  const [page, setPage] = useState(1);

  const setMutiValue = useRoom((state) => state.setMutiValue);
  const history = useHistory();

  const back = () => {
    setPage(1);
  };

  const next = () => {
    setPage(2);
  };

  useEffect(() => {
    listenJoin((res) => {
      if (res.status) {
        setMutiValue({
          members: res.data.members,
          message: res.message,
          roomName: res.data.roomName,
          roomId: res.data.roomId,
          difficult,
        });
      } else {
        setMessage(res.message);
      }
      history.push("/room");
      console.log(res);
    });
    return () => removeSocket("join");
  }, [page]);

  const create = (username, roomName, difficult) => {
    const sendData = JSON.stringify({
      username,
      roomName,
      difficult,
    });
    joinRoom(sendData);
    console.log("send:" + sendData);
  };

  return (
    <div>
      {page === 1 ? (
        <SelectPage next={next} difficult={difficult} setDifficult={setDifficult} />
      ) : null}
      {page === 2 ? (
        <CreatePage
          username={username}
          difficult={difficult}
          roomName={roomName}
          setRoomName={setRoomName}
          message={message}
          back={back}
          create={create}
        />
      ) : null}
    </div>
  );
}

export default NewPage;
