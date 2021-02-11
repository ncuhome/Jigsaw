import React from "react";
import { MenuWrapper, BackArea, TitleContainer, Title, Quit } from "./style";
import Members from "../Members";
import type { GameMember } from "@/pages/jigsaw/store";
import { useGrid } from "@/pages/jigsaw/store";

interface Props {
  visible: boolean;
  close: () => void;
  toQuit: () => void;
  membersList: GameMember[];
}

const Menu: React.FC<Props> = ({ visible, close, membersList, toQuit }) => {
  const showSide = visible ? 0 : -250;
  const roomName = useGrid((state) => state.roomName);

  return (
    <div>
      <BackArea show={visible} onClick={close} />
      <MenuWrapper style={{ transform: `translateX(${showSide}px)` }}>
        <Quit onClick={() => toQuit()}>退出</Quit>
        <TitleContainer>
          队名
          <Title>{roomName}</Title>
        </TitleContainer>
        <Members membersList={membersList} />
      </MenuWrapper>
    </div>
  );
};

export default Menu;
