import React from "react"
import { 
  HeaderContainer,
  HeaderTitle,
  Arrow
} from './style'

function Header({roomName}) {
  return (
    <HeaderContainer>
      <Arrow/>
      <HeaderTitle>{roomName}</HeaderTitle>
      <Arrow style={{opacity: 0}}/>
    </HeaderContainer>
  )
}

export default Header;