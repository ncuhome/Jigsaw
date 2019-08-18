import React from "react"
import {
  MenuWrapper,
  BackArea,
  TitleContainer,
  Title,
  Quit
} from './style'
import Members from "../Members/"

function Menu({userId, handleSideMenu, hiddenMenu, membersList, difficult, roomName}) {
  const showSide = () => {
    return handleSideMenu ? 0 : -250
  };
  return (
    <div>
      <BackArea show={handleSideMenu} onClick={() => hiddenMenu()}/>
      <MenuWrapper style={{transform: `translateX(${showSide()}px)`}}>
        <Quit>
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
          userId={userId}
        />
      </MenuWrapper>
    </div>
  )
}

export default Menu;
