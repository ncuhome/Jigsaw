import React, {useState, useEffect} from "react"
import {
  HeaderContainer,
  HeaderTitle,
  Menu,
  Over,
  Text
} from './style'

function timeShow(end) {
  const start = Math.round(new Date() / 1000);
  return end - start
}

function Header({endTime, showMenu, showOver, setHandleTimeOver, ifLeader}) {
  const [time, setTime] = useState(timeShow(endTime));

  useEffect(() => {
    let timer;
    if (time > 0) {
      timer = setTimeout(() => setTime(t => t - 1), 1000)
    } else {
      setTime(0);
      setHandleTimeOver(true)
    }
    return () => clearTimeout(timer)
  }, [time]);

  return (
    <HeaderContainer>
      <Menu onClick={() => showMenu()}/>
      <HeaderTitle>
        <Text>倒计时</Text>
        <p>{time}</p>
      </HeaderTitle>
      {
        ifLeader ?
          <Over onClick={() => showOver()}/>
          : <div style={{width: '23px',margin: '0 15px'}}/>
      }
    </HeaderContainer>
    )
  }

export default Header;