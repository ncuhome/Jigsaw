import React from "react"
import {
  MenuWrapper,
  BackArea
} from './style'
import Members from "../Members/"

function Menu({handleSideMenu, hiddenMenu, membersList, difficult}) {
  const showSide = () => {
    return handleSideMenu ? 0 : -250
  };
  return (
    <div>
      {
        handleSideMenu ?
        <BackArea onClick={() => hiddenMenu()}/>: null
      }
      <MenuWrapper style={{transform: `translateX(${showSide()}px)`}}>
        <Members
          membersList={membersList}
          difficult={difficult}
        />
      </MenuWrapper>
    </div>
  )
}

export default Menu;
