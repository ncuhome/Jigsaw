import styled, {keyframes} from 'styled-components'
import arrow from './img/arrow.svg'

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

const down = keyframes` 
  0% {
    transform: translateY(-35px);
  }
  100% {
    transform: translateY(0);
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
`

export const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background: #F7F7F7;
  box-shadow: 0 2px 20px 0 rgba(173,173,173,.5);
`;

export const HeaderTitle = styled.div`
  width: 50vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: #494949;
  animation: ${fadeIn} .4s ease;
`;

export const JigArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  background: #ECECEC;
  margin-top: 60px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
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
  width: ${props => props.len}px;
  height: ${props => props.len}px;
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

export const Pics = styled.div.attrs(({bgUrl, positionX, positionY, finish}) => ({
  style: {
    background: `url(${bgUrl}) no-repeat -${positionX}px -${positionY}px / 300px`,
    opacity: finish && `.35`
  }
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props=>props.len}px;
  height: ${props=>props.len}px;
  animation: ${props => props.active && !props.finish && Focus} 2s ease infinite;
  border: 3px solid ${props => props.otherColor || '#D2D9DE'};
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
  &:active{transform : scale(.88,.88);}
`

export const MembersContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background: #ECECEC;
  padding: 6px;
  margin-top: -1px;
  
`;

export const MemberContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 100px;
  transition: transform .27s;
  &:active{transform : scale(.88,.88);}
  animation: ${fadeIn} .8s ease, ${down} .8s ease;
  animation-delay: ${props=>props.show}s;
  animation-fill-mode: backwards;
`;

export const MemberAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 800;
  background: ${props => props.color};
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  border: 2px solid #CDCDCD;
  border-radius: 40px;
`;

export const MemberName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #2e2e2e;
`;

export const MemeberIdentity = styled.div`
  font-size: 12px;
  margin-bottom: 7px;
  font-weight: 500;
  color: ${props => props.leaderColor === 'leader' ? '#838383' : '#B9B9B9'};
`;

export const Arrow = styled.div`
  width: 13px;
  height: 24px;
  background: url(${arrow});
  margin: 0 15px 0 15px;
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

export const Line = styled.div`
  width: 90vw;
  height: 1px;
  line-height: 1px;
  margin: 0 auto 0 auto;
  background: #C7C7C7;
  animation: ${fadeIn} 3s ease;
`
