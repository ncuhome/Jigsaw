import styled from 'styled-components'
import {fadeIn, showDown} from '@/style/animate.js'

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
`

export const NewPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  font-size: 27px;
  font-weight: 800;
  color: #DEDEDE;
  letter-spacing: 1.69px;
  animation: ${fadeIn} 1s ease, ${showDown} .7s ease;
`

export const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 86px;
  background: #474747;
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
  color: #B7B7B7;
  height: 18px;
  line-height: 18px;
  letter-spacing: .81px;
  animation: ${fadeIn} 1s ease, ${showDown} .7s ease;
  animation-delay: .65s;
  animation-fill-mode: backwards;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 6px;
  animation: ${fadeIn} 1s ease, ${showDown} .7s ease;
  animation-delay: .95s;
  animation-fill-mode: backwards;
`

export const Button = styled.div`
  font-size: 27px;
  color: #DEDEDE;
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