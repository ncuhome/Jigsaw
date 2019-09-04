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
  background: rgba(0, 0, 0, .52);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  animation: ${fadeIn} .4s ease;
`

export const AlertContainer = styled.div`
  background: #2A2A2A;
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
  color: #898989;
`

export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #d7d7d7;
  margin-bottom: 9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 29px;
  letter-spacing: 1px;
`
