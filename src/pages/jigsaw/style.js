import styled, {keyframes} from 'styled-components'

const Focus = keyframes` 
  0% {
    border: 3px solid #fff
  }
  50% {
    border: 3px solid #D8D8D8
  }
  100% {
    border: 3px solid #fff
  }
`;

const scale = keyframes` 
  0% {
    transform: scale(.88,.88);
  }
  100% {
    transform: scale(1,1);
  }
`;

const left = keyframes` 
  0% {
    transform: translateX(-22px);
  }
  100% {
    transform: translateX(0);
  }
`;

const fadeIn = keyframes` 
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Warpper = styled.div`
  background: #ECECEC;
  position: absolute;
  top: 0;left: 0;bottom: 0;right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const JigArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background: #ECECEC;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SliceContainer = styled.div`
  width: 69px;
  height: 69px;
  margin: 1.5px;
  transition: transform .27s;
  &:active{transform : scale(.88,.88);}
`

export const Slice = styled.div.attrs(({ifZero}) => ({
  style: {
    opacity: ifZero && .4
  }
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  animation: ${props => props.active ? Focus : null} 2s ease infinite;
  border: 3px solid ${props => props.same ? props.MyColor : props.otherColor};
  border-radius: 9px;
  background: url(${props=>props.bgUrl}) no-repeat -${props=>props.positionX}px -${props=>props.positionY}px / 300px;
  background-color: #EEE;
  filter: drop-shadow(0 0 10px rgba(58,58,58,.2));
  transition: opacity .55s;
  &:active{
    opacity: ${props => props.active ? .3 : 1};
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  animation: ${fadeIn} .7s ease, ${scale} .7s ease;
  animation-delay: ${props=>props.show}s;
  animation-fill-mode: backwards;
`;

export const SelectArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 12px 10px 12px 10px;
`;

export const Pics = styled.div.attrs(({bgUrl,positionX,positionY,finish}) => ({
  style: {
    background: `url(${bgUrl}) no-repeat -${positionX}px -${positionY}px / 300px`,
    opacity: finish && `.35`
  }
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props=>props.size}px;
  height: ${props=>props.size}px;
  animation: ${props => props.active && !props.finish && Focus} 2s ease infinite;
  border: 3px solid #D2D9DE;
  border-radius: 9px;
  filter: ${props => props.active ? 'drop-shadow(0 0 10px rgba(58,58,58,.63))' : 'drop-shadow(0 0 10px rgba(58,58,58,.2))'};
  transition: opacity .38s;
  &:active{
    opacity: ${props => props.active ? .3 : 1};
  }
`;

export const PicsContainer = styled.div`
  animation: ${fadeIn} .8s ease, ${scale} .8s ease, ${left} .7s ease;;
  animation-delay: ${props=>props.show}s;
  animation-fill-mode: backwards;
  transition: transform .27s;
  &:active{
    transform : scale(.88,.88);
  }
`

export const Line = styled.div`
  width: 90vw;
  height: 1px;
  line-height: 1px;
  margin: 0 auto 0 auto;
  background: #C7C7C7;
  animation: ${fadeIn} 3s ease;
`

export const Drag = styled.div`

`