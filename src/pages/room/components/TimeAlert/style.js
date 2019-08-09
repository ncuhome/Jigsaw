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
  animation: ${fadeIn} .4s ease;
`

export const AlertContainer = styled.div`
  background: #DDD;
  border-radius: 17px;
  width: 274px;
  height: 106px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} .3s ease;
  animation-delay: .13s;
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
  color: #343434;
  margin-bottom: 9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 25px;
`
