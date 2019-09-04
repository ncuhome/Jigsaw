import styled from 'styled-components'
import {fadeIn} from '@/style/animate.js'

export const AlertWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: opacity .5s ease;
  pointer-events: ${props => props.show ? 'auto' : 'none'};
  opacity: ${props => props.show ? 1 : 0};
  backdrop-filter: blur(5px);
`

export const Background = styled.div`
  position: absolute;
  top: 0;left: 0;bottom: 0;right: 0;
  background: rgba(0,0,0,0.58);
  transition: opacity .5s ease;
`

export const AlertContainer = styled.div`
  background: #2A2A2A;
  border-radius: 17px;
  width: 274px;
  height: 146px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  animation: ${fadeIn} .4s ease;
  animation-delay: .1s;
  animation-fill-mode: backwards;
  z-index: 1;
`

export const TitleContainer = styled.div`
  height: 95px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #898989;
`

export const Title = styled.div`
  font-size: 21px;
  font-weight: 600;
  color: #E4E4E4;
  margin-bottom: 7px;
`

export const DivideLine = styled.div`
  width: 100%;
  height: 1px;
  background: #474747;
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
  color: #FF5555;
`

export const BlueButton = styled(Button)`
  color: #3AB1FF;
`