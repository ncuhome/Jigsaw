import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { HeaderContainer, HeaderTitle, Menu, Over, Text } from "./style";
import { useGrid } from "@/pages/jigsaw/store";
import { useLogin } from "@pages/login/store";

const timeShow = (end: number) => {
  const start = dayjs().unix();
  return end - start;
};

interface Props {
  setHandleTimeOver: (value: boolean) => void;
  showOver: () => void;
  showMenu: () => void;
}

const Header: React.FC<Props> = ({ showMenu, showOver, setHandleTimeOver }) => {
  const [endTime, members] = useGrid((state) => [state.endTime, state.members]);
  const [time, setTime] = useState(timeShow(endTime));

  const name = useLogin((state) => state.name);
  const isLeader = () =>
    members.some((member) => member.username === name && member.identity === "leader");

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (time > 0) {
      timer = setTimeout(() => setTime((t) => t - 1), 1000);
    } else {
      setTime(0);
      setHandleTimeOver(true);
    }
    return () => clearTimeout(timer);
  }, [setHandleTimeOver, time]);

  return (
    <HeaderContainer>
      <Menu onClick={showMenu} />
      <HeaderTitle>
        <Text>倒计时</Text>
        <p>{time}</p>
      </HeaderTitle>
      {isLeader() ? (
        <Over onClick={showOver} />
      ) : (
        <div style={{ width: "23px", margin: "0 15px" }} />
      )}
    </HeaderContainer>
  );
};

export default Header;
