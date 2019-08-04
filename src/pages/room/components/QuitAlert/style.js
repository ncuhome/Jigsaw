import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes` 
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const AlertWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, .52);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  animation: ${fadeIn} .6s ease;
`

export const AlertContainer = styled.div`
  background: #DDD;
  border-radius: 17px;
  width: 274px;
  height: 146px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  animation: ${fadeIn} .6s ease;
  animation-delay: .2s;
  animation-fill-mode: backwards;
`

export const TitleContainer = styled.div`
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #2F2F2F;
`

export const Title = styled.div`
  font-size: 21px;
  font-weight: 600;
  color: #000;
  margin-bottom: 7px;
`

export const DivideLine = styled.div`
  width: 100%;
  height: 1px;
  background: #C5C5C5;
`

export const ButtonContainer = styled.div`
  width: 100%;
  height: 51px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.div`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1.13px;
  padding: 0 38px;
`

export const RedButton = styled(Button)`
  color: #FF2E19;
`

export const BlueButton = styled(Button)`
  color: #0097FF;
`