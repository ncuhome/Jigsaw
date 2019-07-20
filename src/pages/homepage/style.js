import styled,{keyframes} from 'styled-components'
import mainImg from './img/mainImg.svg'
import rightTop from './img/rightTop.svg'

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
  background: #fff;
  color: #5C5C5C;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: .83px;
`

export const GreyImg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 221px;
  height: 217px;
  animation: ${rightTopShake} 4s ease infinite;
  background: url(${rightTop});
`

export const MainImg = styled.div`
  position: absolute;
  top: 27vh;
  left: 0;
  width: 218px;
  height: 440px;
  animation: ${mainShake} 4s ease infinite;
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
  color: #535353;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 228px;
  margin: 15vh 4vw 0 auto;
`

export const Name = styled.div`
  width: 162px;
  height: 75px;
  line-height: 75px;
  font-size: 54px;
  font-weight: 500;
  color: #404040;
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
`

export const Item = styled.div`
  position: relative;
  width: 140px;
  height: 42px;
`

export const ColorBar = styled.div`
  position: absolute;
  z-index: -1;
  bottom: 0;
  width: 140px;
  height: 17px;
  border-radius: 8.5px;
  background: ${props => props.color};
`