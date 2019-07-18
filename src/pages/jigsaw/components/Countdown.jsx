import React,{useState, useEffect} from "react"
import { 
	CountdownContainer,
	TimerText,
	TimerContent,
	SText,
	TimerTextContent
} from '../style'

function Countdowm({endTime}) {
	const [time, setTime] = useState(Math.round(new Date() / 1000))

	useEffect(() => {
    const ca = setInterval(()=>setTime(Math.round(new Date() / 1000)), 1000)
    time <= 0 && clearInterval(ca)
	})

  const showTime = () => {
		const timer = endTime - time
		return timer >= 0 ? timer : 0
  }
  
  const redDegree = () => {
    if(showTime() <= 60){
      return '#FF4D4D'
    }else{
      return '#535353'
    }
  }

  return (
		<CountdownContainer>
			<TimerTextContent timecolor={redDegree()}>
				倒计时
			</TimerTextContent>
			<TimerContent timecolor={redDegree()}>
				<TimerText>{showTime()}</TimerText>
				<SText>s</SText>
			</TimerContent>
		</CountdownContainer>
  )
}

export default Countdowm;