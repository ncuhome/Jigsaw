import styled, {keyframes} from "styled-components";

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
  width: 90vw;
  height: 102px;
  animation: ${fadeIn} 1s ease, ${showDown} .7s ease;
  position: fixed;
  background: 
    linear-gradient(rgba(42,42,42,1) 0%, rgba(42,42,42,1) 77%, rgba(42,42,42,0) 100%);
`

export const Title = styled.div`
  letter-spacing: 1.5px;
  color: #D9D9D9;
  font-size: 41px;
  font-weight: 500;
`

export const Back = styled.div`
  letter-spacing: .72px;
  color: #9C9C9C;
  font-size: 19px;
  font-weight: 500;
`
