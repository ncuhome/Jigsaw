import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes` 
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const showDown = keyframes` 
  0% {
    transform: translateY(-25px);
  }
  100% {
    transform: translateY(0);
  }
`

const showUp = keyframes` 
  0% {
    transform: translateY(25px);
  }
  100% {
    transform: translateY(0);
  }
`

export const RoomWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const TitleContainer = styled.div`
  margin-top: 40px;
  width: 85vw;
  height: 94px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${fadeIn} 1s ease, ${showDown} .7s ease;
`

export const GroupNameTitle = styled.div`
  font-size: 20px;
  letter-spacing: 1.25px;
  font-weight: 800;
  color: #AFAFAF;
  line-height: 22px;
  height: 22px;
`

export const GroupNameContent = styled.div`
  line-height: 66px;
  height: 66px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  overflow: hidden;
`

export const GroupName = styled.div`
  font-size: 47px;
  letter-spacing: 2.94px;
  font-weight: 800;
  color: #DEDEDE;
  height: 66px;
  width: 54vw;
  margin-right: 16px;
  overflow: hidden;
`

export const HelloTitle = styled.div`
  font-size: 27px;
  letter-spacing: 0;
  color: #C5C5C5;
  height: 43px;
  line-height: 43px;
`

export const MessageContainer = styled.div`
  height: 31px;
  line-height: 31px;
  text-align: center;
  width: 86vw;
  margin: 13px 0;
  border-radius: 30px;
  background: #343434;
  color: #9C9C9C;
  font-size: 16px;
  letter-spacing: 1px;
  animation: ${fadeIn} 1s ease, ${showDown} .7s ease;
  animation-delay: .3s;
  animation-fill-mode: backwards;
`

export const MembersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s ease, ${showDown} .7s ease;
  animation-delay: .8s;
  animation-fill-mode: backwards;
`

export const MembersTitleContainer = styled.div`
  width: 86vw;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MembersTitle = styled.div`
  height: 28px;
  line-height: 28px;
  font-size: 20px;
  letter-spacing: 1.25px;
  color: #B4B4B4;
  font-weight: 600;
`

export const BottomElements = styled.div`
  position: fixed;
  bottom: 0;
  width: 86vw;
  height: 71px;
  margin: 25px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  animation: ${fadeIn} 1s ease, ${showUp} .7s ease;
  animation-delay: 1.1s;
  animation-fill-mode: backwards;
`

export const ExitTitle = styled.div`
  color: #9E9E9E;
  font-size: 23px;
  letter-spacing: 1.44px;
  font-weight: 600;
`

export const MainButton = styled.div`
  background: #3A3A3A;
  border-radius: 13px;
  width: 138px;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 29px;
  font-weight: 600;
  color: #CDCDCD;
  letter-spacing: 2.31px;
  transition: color 1s easy;
`

export const ButtonNumber = styled.div`
  letter-spacing: 1.25px;
  color: #CDCDCD;
  font-size: 20px;
  font-weight: 500;
  height: 29px;
  margin-left: 9px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`