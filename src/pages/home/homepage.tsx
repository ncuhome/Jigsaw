import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HomeWarpper,
  Text,
  TextContainer,
  Name,
  Title,
  Welcome,
  Item,
  RedImg,
  BlueImg,
  HelpButton,
  LeaveButton,
  AddIcon,
  JoinIcon,
  RankIcon,
} from "./style";
import { useLogin } from "@/pages/login/store";
import { useEmit } from "@/lib/websocket/hooks";

import Modal from "@/components/Modal/";
import Help from "./components/Help";
import halo from "@/lib/helloText";

function Homepage() {
  const [name, userId, status, password, token] = useLogin((state) => [
    state.name,
    state.userId,
    state.status,
    state.password,
    state.token,
  ]);
  const [login, logout] = useLogin((state) => [state.login, state.logout]);
  const [handleHelp, setHandleHelp] = useState(false);
  const [handleLeave, setHandleLeave] = useState(false);
  const [haloText] = useState(halo());
  const sendToken = useEmit("token");

  const closeHelp = () => {
    setHandleHelp(false);
  };

  const closeLeave = () => {
    setHandleLeave(false);
  };

  const refreshToken = async () => {
    await login(userId, password);
    
    setTimeout(() => {
      sendToken({
        username: name,
        token,
      });
    }, 500);
  };

  useEffect(() => {
    if (!status) {
      refreshToken();
    }
  }, [status]);

  return (
    <HomeWarpper>
      <BlueImg />
      <RedImg />
      <Title>
        <Welcome>{haloText}</Welcome>
        <Name>{name}</Name>
      </Title>
      <TextContainer>
        <Link to="/new/">
          <Item>
            <AddIcon />
            <Text>创建队伍</Text>
          </Item>
        </Link>
        <Link to="/join/">
          <Item>
            <JoinIcon />
            <Text>加入队伍</Text>
          </Item>
        </Link>
        <Link to="/sort/">
          <Item>
            <RankIcon />
            <Text>查看排名</Text>
          </Item>
        </Link>
      </TextContainer>
      <HelpButton onClick={() => setHandleHelp(true)}>帮助</HelpButton>
      <LeaveButton onClick={() => setHandleLeave(true)}>离开</LeaveButton>
      <Help handleHelp={handleHelp} closeHelp={closeHelp} />
      <Modal
        visible={handleLeave}
        title={"是否确认退出"}
        activePress={logout}
        closePress={closeLeave}
      />
    </HomeWarpper>
  );
}

export default Homepage;
