import styled from "styled-components";
import {fadeIn, showDown} from '@/style/animate.js';

export const SortWrapper = styled.div`
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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 102px;
  animation: ${fadeIn} 1s ease, ${showDown} .7s ease;
  position: fixed;
  z-index: 999;
  background: 
    linear-gradient(rgba(42,42,42,1) 0%, rgba(42,42,42,1) 77%, rgba(42,42,42,0) 100%);
`

export const Title = styled.div`
  letter-spacing: 1.5px;
  color: #D9D9D9;
  font-size: 41px;
  font-weight: 500;
  margin: 0 5vw;
`

export const Back = styled.div`
  margin: 0 5vw;
  letter-spacing: .72px;
  color: #9C9C9C;
  font-size: 19px;
  font-weight: 500;
  transition: transform .4s ease;
  &:active{
    transform: scale(.91);
  }
`
