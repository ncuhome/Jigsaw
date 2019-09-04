import {keyframes} from "styled-components";

export const fadeIn = keyframes` 
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const showDown = keyframes` 
  0% {
    transform: translateY(-25px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const scale = keyframes` 
  0% {
    transform: scale(.88);
  }
`;

export const showUp = keyframes` 
  0% {
    transform: translateY(25px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const breath = keyframes`
  0% {
    border: 2px solid #ADADAD
  }
  50% {
    border: 2px solid #404040
  }
  100% {
    border: 2px solid #ADADAD
  }
`;

export const mainShake = keyframes` 
  0% {
    top: 10vh;
  }
  50% {
    top: 18vh;
  }
  100% {
    top: 10vh;
  }
`;

export const mainShow = keyframes` 
  0% {
    transform: translateY(-255px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const otherShake = keyframes` 
  0% {
    left: -8vw;
  }
  50% {
    left: 0;
  }
  100% {
    left: -8vw;
  }
`;

export const otherShow = keyframes` 
  0% {
    transform: translateX(-222px);
  }
  100% {
    transform: translateX(0);
  }
`;
