import styled,{keyframes} from 'styled-components'
import mainImg from './img/mainImg.svg'
import rightTop from './img/rightTop.svg'

const down = keyframes` 
  0% {
    transform: translateY(-132px);
  }
  100% {
    transform: translateY(0);
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

const right = keyframes` 
  0% {
    transform: translateX(132px);
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

const mainShake = keyframes` 
  0% {
    top: 24vh;
  }
  50% {
    top: 27vh;
  }
  100% {
    top: 24vh;
  }
`

const rightTopShake = keyframes` 
  0% {
    right: -8vh;
  }
  50% {
    right: 0;
  }
  100% {
    right: -8vh;
  }
`

export const HomeWarpper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: -2;
`

export const HelpButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 20px;
  width: 83px;
  height: 41px;
  border: 2px solid #D4D4D4;
  border-radius: 22px;
  background: #373737;
  color: #DBDBDB;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: .83px;
  animation: ${scale} .5s ease, ${fadeIn} .6s ease;
  animation-delay: 1.2s;
  animation-fill-mode: backwards;
`

export const GreyImg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 221px;
  height: 217px;
  animation: ${fadeIn} .7s ease, ${right} .7s ease, ${rightTopShake} 4s ease infinite;
  background: url(${rightTop});
`

export const MainImg = styled.div`
  position: absolute;
  top: 27vh;
  left: 0;
  width: 218px;
  height: 440px;
  animation: ${fadeIn} .7s ease, ${down} .7s ease, ${mainShake} 4s ease infinite;
  background: url(${mainImg});
`

export const Text = styled.div`
  font-size: 30px;
  width: 124px;
  height: 42px;
  line-height: 42px;
  font-weight: 500;
  letter-spacing: 1px;
  text-align: center;
  margin: auto;
  color: #E5E5E5;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 228px;
  margin: 15vh 4vw 0 auto;
  animation: ${right} .7s ease, ${fadeIn} .7s ease;
  animation-delay: 1s;
  animation-fill-mode: backwards;
`

export const Name = styled.div`
  width: 162px;
  height: 75px;
  line-height: 75px;
  font-size: 54px;
  font-weight: 500;
  color: #FBFBFB;
  animation: ${scale} .5s ease, ${fadeIn} .7s ease;
  animation-delay: .65s;
  animation-fill-mode: backwards;
`

export const Title = styled.div`
  width: 86vw;
  margin-top: 8vh;
`

export const Welcome = styled.div`
  width: 99px;
  height: 45px;
  line-height: 45px;
  font-size: 32px;
  font-weight: 800;
  color: #7F7F7F;
  letter-spacing: 1px;
  animation: ${scale} .5s ease, ${fadeIn} .7s ease;
  animation-delay: .4s;
  animation-fill-mode: backwards;
`

export const Item = styled.div`
  position: relative;
  width: 140px;
  height: 42px;
`
