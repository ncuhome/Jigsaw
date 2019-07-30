import styled, { keyframes } from 'styled-components'
import Picture1 from './img/loginImg1.svg'
import LittleImge from './img/loginImg2.svg'

const mainShake = keyframes` 
  0% {
    top: 10vh;
  }
  50% {
    top: 18vh;
  }
  100% {
    top: 10vh;
  }
`

const mainShow = keyframes` 
  0% {
    transform: translateY(-255px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const otherShake = keyframes` 
  0% {
    left: -8vw;
  }
  50% {
    left: 0;
  }
  100% {
    left: -8vw;
  }
`

const otherShow = keyframes` 
  0% {
    transform: translateX(-222px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

const titleShow = keyframes` 
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const messageShow = keyframes` 
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const userIdInputShow = keyframes` 
  0% {
    opacity: 0;
  }
  38% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const pwdInputShow = keyframes` 
  0% {
    opacity: 0;
  }
  53% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const buttonShow = keyframes` 
  0% {
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const bottomTextShow = keyframes` 
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const MainPicture = styled.div`
  position: absolute;
  right: 0;
  top: 15vh;
  width: 255px;
  height: 464px;
  animation: ${mainShow} 1s ease, ${mainShake} 4s ease infinite;
  background: url(${Picture1});
`

export const SecondPicture = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 219px;
  height: 222px;
  animation: ${otherShow} 1.4s ease, ${otherShake} 4s ease infinite;
  background: url(${LittleImge});
`

export const LoginWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  background: #fff;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8vh;
  z-index: 1;
`

export const Title = styled.div`
  height: 98px;
  width: 324px;
  font-size: 35px;
  font-weight: 800;
  color: #535353;
  line-height: 49px;
  letter-spacing: 1px;
  margin-bottom: 41px;
  animation: ${titleShow} 2s ease;
`

const InputBox = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  width: 319px;
  margin-top: 31px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #F2F2F2;
  position: relative;
  color: #696969;
  font-size: 18px;
  box-shadow: 0 2px 15px 0 rgba(0,0,0,.15);
  input {
    width: 240px;
    height: 30px;
    line-height: 30px;
    letter-spacing: .8px;
    font-size: 18px;
    color: #696969;
  }
  input::-webkit-input-placeholder {
    height: 30px;
    color: #BCBCBC;
  }
`

export const UserIdInputBox = styled(InputBox)`
  animation: ${userIdInputShow} 2s ease;
`

export const PwdInputBox = styled(InputBox)`
  animation: ${pwdInputShow} 2s ease;
`

export const InputName = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  width: 40px;
  text-align: center;
  font-weight: 500;
  margin: 0 14px;
`

export const Prompt = styled.div`
  width: 240px;
  height: 40px;
  margin-top: 20px;
  line-height: 20px;
  font-size: 15px;
  text-align: center;
  color: #5B5B5B;
  letter-spacing: 1.2px;
  font-weight: 500;
  filter: drop-shadow(0 0 10px rgba(58,58,58,.2));
  animation: ${props => props.active ? messageShow : null} 1s ease;
`

export const LoginBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 109px;
  margin-top: 30px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  background: #494C4F;
  color: #fff;
  border-radius: 22.5px;
  animation: ${buttonShow} 2s ease;
  box-shadow: 0 13px 16px 0 rgba(0,0,0,.19);
  transition: opacity .38s;
  &:active{
    opacity: 0;
  }
`

export const BottomText = styled.div`
  position: absolute;
  width: 123px;
  height: 13px;
  bottom: 18px;
  font-size: 12px;
  color: #858585;
  letter-spacing: 1.6px;
  animation: ${bottomTextShow} 2.3s ease;
`
