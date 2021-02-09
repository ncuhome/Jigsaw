import React from "react"
import {
  MenuWrapper,
  BackArea,
  TitleContainer,
  Title,
  Quit
} from './style'
import Members from "../Members/"

function Menu({username, handleSideMenu, hiddenMenu, membersList, difficult, roomName, toQuit}) {
  const showSide = () => {
    return handleSideMenu ? 0 : -250
  };
  return (
    <div>
      <BackArea show={handleSideMenu} onClick={() => hiddenMenu()}/>
      <MenuWrapper style={{transform: `translateX(${showSide()}px)`}}>
        <Quit onClick={() => toQuit()}>
          退出
        </Quit>
        <TitleContainer>
          队名
          <Title>
            {roomName}
          </Title>
        </TitleContainer>
        <Members
          membersList={membersList}
          difficult={difficult}
          username={username}
        />
      </MenuWrapper>
    </div>
  )
}

export default Menu;
