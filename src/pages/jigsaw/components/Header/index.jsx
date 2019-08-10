import React, {useState, useEffect} from "react"
import {
  HeaderContainer,
  HeaderTitle,
  Meau,
} from './style'

function timeShow(end) {
  const start = Math.round(new Date() / 1000)
  return end - start
}

function Header({endTime, showMenu}) {
  const [time, setTime] = useState(timeShow(endTime))


  useEffect(() => {
    let timer;
    if (time > 0) {
      timer = setTimeout(() => setTime(t => t - 1), 1000)
    } else {
      setTime(0)
    }
    return () => clearTimeout(timer)
  }, [time])


  return (
    <HeaderContainer>
      <Meau onClick={() => showMenu()}/>
      <HeaderTitle>
        {time} s
      </HeaderTitle>
      <Meau style={{opacity: 0}}/>
    </HeaderContainer>
    )
  }

export default Header;