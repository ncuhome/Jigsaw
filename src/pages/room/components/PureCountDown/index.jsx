import React, { useState, useEffect } from "react"

function timeShow(end) {
  const start = Math.round(new Date() / 1000)
  return end - start
}

function PureCountdown(props) {
  const {endTime, toQuit, setShowTimeAlert} = props;
  const [time, setTime] = useState(timeShow(endTime));

  useEffect(() => {
    let timer;
    if (time > 0) {
      timer = setTimeout(() => setTime(t => t - 1), 1000)
    } else {
      setTime(0)
      setShowTimeAlert(true)
      setTimeout(() => toQuit(-1), 3000)
    }
    return () => clearTimeout(timer)
  }, [time])

  return (
    time !== 0 && <div style={{color: time < 10 && 'red',transition: 'color 1s easy'}}>{time}s</div>
  )
}

export default PureCountdown;