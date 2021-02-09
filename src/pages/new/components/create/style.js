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
  align-items: center;
  height: 45px;
  width: 319px;
  background: #474747;
  border-radius: 8px;
  border: 1px solid #424242;
  color: #DEDEDE;
  font-size: 18px;
  margin: 32px 0 16px 0;
  box-shadow: 0 2px 15px 0 rgba(0,0,0,.15);
  input {
    width: 289px;
    height: 30px;
    line-height: 30px;
    letter-spacing: .8px;
    font-size: 18px;
    color: #DEDEDE;
    margin: 0 15px 0 15px;
    background: #474747;
  }
  input::-webkit-input-placeholder {
    height: 30px;
    color: #BCBCBC;
  }
  animation: ${fadeIn} 1s ease, ${showDown} .7s ease;
  animation-delay: .3s;
  animation-fill-mode: backwards;
`

export const Message = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #B7B7B7;
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
  color: #DEDEDE;
  font-weight: 800;
  letter-spacing: 1.69px;
  transition: opacity .38s;
  &:active{
    opacity: 0;
  }
`