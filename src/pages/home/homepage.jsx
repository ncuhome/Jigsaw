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

import Help from "./components/Help/";
import Leave from "./components/Leave/";
import halo from "../../lib/helloText";

function Homepage() {
  const [name, userId, status, password] = useLogin((state) => [
    state.name,
    state.userId,
    state.status,
    state.password,
  ]);
  const [login, logout] = useLogin((state) => [state.login, state.logout]);
  const [handleHelp, setHandleHelp] = useState(false);
  const [handleLeave, setHandleLeave] = useState(false);
  const [haloText] = useState(halo());

  const closeHelp = () => {
    setHandleHelp(false);
  };

  const closeLeave = () => {
    setHandleLeave(false);
  };

  useEffect(() => {
    if (!status) {
      login(userId, password);
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
      <Leave handleLeave={handleLeave} closeLeave={closeLeave} clearLogin={logout} />
    </HomeWarpper>
  );
}

export default Homepage;
