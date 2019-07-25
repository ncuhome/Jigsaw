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

export const NewPageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #fff;
`

export const NewPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  font-size: 27px;
  font-weight: 800;
  color: #4B4B4B;
  letter-spacing: 1.69px;
  animation: ${fadeIn} 1s ease, ${showDown} .7s ease;
`

export const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 86px;
  background: #fff;
  border-radius: 8px;
  border: 2px solid ${props => props.borderColor};
  color: ${props => props.textColor};
  font-size: 23px;
  font-weight: 500;
  margin: 32px 0 16px 0;
  box-shadow: 0 2px 15px 0 rgba(0,0,0,.15);
  letter-spacing: 1.44px;
  transition: transform .27s ease;
  &:active{
    transform : scale(.90,.90);
  }
`

export const Message = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #777777;
  width: 83px;
  height: 18px;
  line-height: 18px;
  letter-spacing: .81px;
  animation: ${props => props.active ? fadeIn : null} 1s ease;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 6px;
  animation: ${fadeIn} 1s ease, ${showDown} .7s ease;
  animation-delay: .85s;
  animation-fill-mode: backwards;
`

export const Button = styled.div`
  font-size: 27px;
  color: #4B4B4B;
  font-weight: 800;
  letter-spacing: 1.69px;
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 319px;
  margin-top: 6px;
  letter-spacing: 1.44px;
  animation: ${fadeIn} 1s ease, ${showDown} .7s ease;
  animation-delay: .3s;
  animation-fill-mode: backwards;
`