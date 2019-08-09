import React,{useState,useEffect} from 'react';
import {
  AlertWrapper,
  AlertContainer,
  Title,
  TitleContainer,
} from './style'

function TimeAlert() {
  const [time, setTime] = useState(3);
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
    <AlertWrapper>
      <AlertContainer>
        <TitleContainer>
          <Title>
            <p>因您长时间未进行准备</p>
            <p>{time}s后将离开该房间</p>
          </Title>
            准备跳回至主页…
        </TitleContainer>
      </AlertContainer>
    </AlertWrapper>
  );
}

export default TimeAlert;