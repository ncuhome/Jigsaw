import React, { useState, useEffect } from "react"
import {
  CountdownContainer,
  TimerText,
  TimerContent,
  SText,
  TimerTextContent,
  TimerCircleLeft,
  TimerCircleRight,
  Left,
  Right,
  TimerCircleContainer,
  CountdownContent
} from '../style'

function timeShow(end) {
  const start = Math.round(new Date() / 1000)
  return end - start
}

function Countdown({ endTime }) {
  const [time, setTime] = useState(timeShow(endTime))
  const [rightRoute, setRightRoute] = useState('rotate(-135deg)')
  const [leftRoute, setLeftRoute] = useState('rotate(-135deg)')

  useEffect(() => {
    let timer;
    if (time > 0) {
      timer = setTimeout(() => setTime(t => t - 1), 1000)
    } else {
      setTime(0)
    }
    return () => clearTimeout(timer)
  }, [time])

  useEffect(() => rou())

  const redDegree = () => {
    if (time <= 60) {
      return '#FF4D4D'
    } else {
      return '#535353'
    }
  }

  const rou = () => {
    const score = (1 - (time / 300)) * 100
    if (score >= 0 && score <= 50) {
      const rotate = -135 + 18 / 5 * score
      setLeftRoute(`rotate(${rotate}deg)`)
      setRightRoute(`rotate(-135deg)`)
    } else {
      const rotate = -135 + 18 / 5 * (score - 50)
      setLeftRoute(`rotate(45deg)`)
      setRightRoute(`rotate(${rotate}deg)`)
    }
  }

  return (
    <CountdownContainer>
      <CountdownContent>
        <TimerCircleContainer>
          <Left><TimerCircleLeft timecolor={redDegree()} style={{ transform: leftRoute, display: time <= 150 && 'none'}} /></Left>
          <Right><TimerCircleRight timecolor={redDegree()} style={{ transform: rightRoute }} /></Right>
        </TimerCircleContainer>
        <TimerTextContent timecolor={redDegree()}>
          倒计时
        </TimerTextContent>
        <TimerContent timecolor={redDegree()}>
          <TimerText>{time}</TimerText>
          <SText>s</SText>
        </TimerContent>
      </CountdownContent>
    </CountdownContainer>
  )
}

export default Countdown;