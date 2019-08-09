import styled, {keyframes} from "styled-components";

const fadeIn = keyframes` 
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const CountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -1px;
  padding: 10px;
  background: #ECECEC;
`;

export const CountdownContent = styled.div`
  display: flex;
  animation: ${fadeIn} .9s ease;
  animation-delay: 1s;
  animation-fill-mode: backwards;
  transition: transform .27s;
  &:active{transform : scale(.88,.88);}
`;

export const TimerText = styled.div`
  font-size: 25px;
`;

export const SText = styled.div`
  height: 15px;
  font-size: 15px;
  margin: 0 0 0 3px;
`;

export const TimerContent = styled.div`
  display: flex;
  align-items: center;
  width: 54px;
  font-weight: 500;
  color: ${props => props.timecolor};
  transition: color 1s;
`

export const TimerTextContent = styled.div`
  line-height: 25px;
  height: 25px;
  font-weight: 500;
  margin-right: 12px;
  font-size: 22px;
  color: ${props => props.timecolor};
  transition: color 1s;
`

export const TimerCircleLeft = styled.div`
  margin: 0;
  position: absolute;
  width: 24px;
  height: 24px;
  border: 4px solid ${props => props.timecolor};
  border-bottom: 4px solid transparent;
  border-left: 4px solid transparent;
  border-radius: 50%;
  box-sizing: border-box;
  left: 0;
`

export const TimerCircleRight = styled.div`
  margin: 0;
  position: absolute;
  width: 24px;
  height: 24px;
  border: 4px solid ${props => props.timecolor};
  border-top: 4px solid transparent;
  border-right: 4px solid transparent;
  border-radius: 50%;
  box-sizing: border-box;
  right: 0;
`

export const Left = styled.div`
  position: absolute;
  overflow: hidden;
  width: 12px;
  height: 24px;
  left: 0;
`

export const Right = styled.div`
  position: absolute;
  width: 12px;
  height: 24px;
  overflow: hidden;
  right: 0;
`

export const TimerCircleContainer = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  margin-right: 12px;
`