import styled from 'styled-components'
import Picture1 from './img/loginImg1.svg'
import LittleImg from './img/loginImg2.svg'
import {mainShake, mainShow, otherShake, otherShow, fadeIn} from '@/style/animate.js'

export const MainPicture = styled.div`
  position: absolute;
  right: 0;
  top: 15vh;
  width: 255px;
  height: 464px;
  animation: ${mainShow} 1s ease, ${fadeIn} 1s ease, ${mainShake} 4s ease infinite;
  background: url(${Picture1});
`;

export const SecondPicture = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 219px;
  height: 222px;
  animation: ${otherShow} 1.4s ease, ${fadeIn} 1s ease, ${otherShake} 4s ease infinite;
  background: url(${LittleImg});
`;

export const LoginWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8vh;
  z-index: 1;
`;

export const Title = styled.div`
  height: 98px;
  width: 324px;
  font-size: 35px;
  font-weight: 800;
  color: #FBFBFB;
  line-height: 49px;
  letter-spacing: 1px;
  margin-bottom: 41px;
  animation: ${fadeIn} 2s ease;
  animation-delay: .3s;
  animation-fill-mode: backwards;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  width: 319px;
  margin-top: 31px;
  background: #464646;
  border-radius: 8px;
  border: 1px solid #4D4D4D;
  color: #D6D6D6;
  font-size: 18px;
  box-shadow: 0 2px 15px 0 rgba(0,0,0,.15);
  input {
    width: 240px;
    height: 30px;
    line-height: 30px;
    letter-spacing: .8px;
    font-size: 18px;
    color: #D6D6D6;
    background: #464646;
  }
  input::-webkit-input-placeholder {
    height: 30px;
    color: #939393;
  }
`;

export const UserIdInputBox = styled(InputBox)`
  animation: ${fadeIn} 1s ease;
  animation-delay: .5s;
  animation-fill-mode: backwards;
`;

export const PwdInputBox = styled(InputBox)`
  animation: ${fadeIn} 1s ease;
  animation-delay: .7s;
  animation-fill-mode: backwards;
`;

export const InputName = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  width: 40px;
  text-align: center;
  font-weight: 500;
  margin: 0 14px;
`;

export const Prompt = styled.div`
  width: 240px;
  height: 40px;
  margin-top: 20px;
  line-height: 20px;
  font-size: 15px;
  text-align: center;
  color: #ededed;
  letter-spacing: 1.2px;
  font-weight: 500;
  filter: drop-shadow(0 0 10px rgba(58,58,58,.2));
  animation: ${props => props.active ? fadeIn : null} 1s ease;
`;

export const LoginBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 109px;
  line-height: 45px;
  margin-top: 30px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  background: #494C4F;
  color: #fff;
  border-radius: 22.5px;
  animation: ${fadeIn} 1s ease;
  animation-delay: 1s;
  animation-fill-mode: backwards;
  box-shadow: 0 13px 16px 0 rgba(0,0,0,.19);
  transition: opacity .38s;
  &:active{
    opacity: 0;
  }
`;

export const BottomText = styled.div`
  position: absolute;
  width: 123px;
  height: 13px;
  bottom: 18px;
  font-size: 12px;
  color: #d7d7d7;
  letter-spacing: 1.6px;
  animation: ${fadeIn} 1s ease;
  animation-delay: 1.2s;
  animation-fill-mode: backwards;
`;
