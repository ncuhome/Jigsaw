import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLogin } from "@/pages/login/store";
import { useRoom } from "@/pages/room/store";
import { useListener, useEmit } from "@/lib/websocket/hooks";

import SelectPage from "./components/select";
import CreatePage from "./components/create";

function NewPage() {
  const username = useLogin((state) => state.name);
  const [roomName, setRoomName] = useState("");
  const [difficult, setDifficult] = useState(3);
  const [message, setMessage] = useState("");
  const [page, setPage] = useState(1);
  const joinRoom = useEmit("roomJoin");

  const setMutiValue = useRoom((state) => state.setMutiValue);
  const history = useHistory();

  const back = () => {
    setPage(1);
  };

  const next = () => {
    setPage(2);
  };

  useListener("join", (res) => {
    if (res.status) {
      setMutiValue({
        members: res.data.members,
        message: res.message,
        roomName: res.data.roomName,
        roomId: res.data.roomId,
        difficult,
      });
      history.push("/room");
    } else {
      setMessage(res.message);
    }
  });

  const create = (roomName: string) => {
    joinRoom({
      username,
      roomName,
      difficult,
    });
  };

  return (
    <div>
      {page === 1 ? (
        <SelectPage next={next} difficult={difficult} setDifficult={setDifficult} />
      ) : null}
      {page === 2 ? (
        <CreatePage
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
