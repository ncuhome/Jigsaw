import styled, {keyframes} from 'styled-components'

const Focus = keyframes` 
  0% {
    border: 3px solid #fff
  }
  50% {
    border: 3px solid #898989
  }
  100% {
    border: 3px solid #fff
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  font-size: 18px;
  background: #c9c9c9;
`;

export const JigArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background: #a8a8a8;
  border-collapse: collapse;
`;

export const Slice = styled.div.attrs(({bgUrl, positionX, positionY, ifZero}) => ({
  style: {
    background: ifZero ? `#EEEEEE` :`url(${bgUrl}) no-repeat -${positionX}px -${positionY}px / 300px`
  }
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.len}px;
  height: ${props => props.len}px;
  margin: 2px;
  animation: ${props=>props.active && Focus} 3s ease infinite;
  border: 3px solid ${props=>props.same ? props.MyColor : '#898989'};
  filter: drop-shadow(0 0 10px rgba(58,58,58,.27));
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const SelectArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  height: 100px;
  background: #797979;
`;

export const Pics = styled.div.attrs(({bgUrl, positionX, positionY, finish}) => ({
  style: {
    background: `url(${bgUrl}) no-repeat -${positionX}px -${positionY}px / 300px`,
    opacity: finish && `.45`
  }
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props=>props.len}px;
  height: ${props=>props.len}px;
  animation: ${props => props.active && !props.finish && Focus} 3s ease infinite;
  border: 3px solid ${props => props.MyColor};
  filter: drop-shadow(0 0 10px rgba(58,58,58,.27));
`;

export const OverButton = styled.div`
  display: flex;
  height: 74px;
  background: #3D91FF;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff;
`