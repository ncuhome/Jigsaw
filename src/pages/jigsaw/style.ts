import styled, { keyframes } from "styled-components";

interface SliceType {
  isZero?: boolean;
  size: number;
  bgUrl: string;
  positionX: number;
  positionY: number;
  active: boolean;
  same: boolean;
  myColor: string;
}

interface Pics {
  active: boolean;
  bgUrl: string;
  positionX: number;
  positionY: number;
  finish: boolean;
  size: number;
}

const Focus = keyframes` 
  0% {
    border: 3px solid #b8b8b8
  }
  50% {
    border: 3px solid #333537
  }
  100% {
    border: 3px solid #b8b8b8
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

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const JigArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const SliceContainer = styled.div`
  margin: 1.5px;
  transition: transform 0.27s;
  &:active {
    transform: scale(0.88, 0.88);
  }
`;

export const Slice = styled.div.attrs<SliceType>(({ isZero }) => ({
  style: {
    opacity: isZero && 0.4,
  },
}))<SliceType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  animation: ${(props) => (props.active ? Focus : null)} 2s ease infinite;
  border: 3px solid ${(props) => (props.same ? props.myColor : "#333537")};
  border-radius: 9px;
  background: url(${(props) => props.bgUrl}) no-repeat -${(props) => props.positionX}px -${(
      props
    ) => props.positionY}px / 300px;
  background-color: #7b7b7b;
  filter: drop-shadow(0 0 10px rgba(58, 58, 58, 0.2));
  transition: opacity 0.55s ease;
  &:active {
    opacity: ${(props) => (props.active ? 0.3 : 1)};
  }
`;

export const Row = styled.div<{ show: number }>`
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 0.7s ease, ${scale} 0.7s ease;
  animation-delay: ${(props) => props.show}s;
  animation-fill-mode: backwards;
`;

export const SelectArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 10px;
`;

export const Pics = styled.div.attrs<Pics>(({ bgUrl, positionX, positionY, finish }) => ({
  style: {
    background: `url(${bgUrl}) no-repeat -${positionX}px -${positionY}px / 300px`,
    opacity: finish && `.35`,
  },
}))<Pics>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  animation: ${(props) => props.active && !props.finish && Focus} 2s ease infinite;
  border: 3px solid #333537;
  border-radius: 11px;
  filter: ${(props) =>
    props.active
      ? `drop-shadow(0 0 10px rgba(58,58,58,.63))`
      : `drop-shadow(0 0 10px rgba(58,58,58,.2))`};
  transition: opacity 0.2s ease;
  &:active {
    opacity: ${(props) => (props.active ? 0.3 : 1)};
  }
`;

export const PicsContainer = styled.div<{ show: number }>`
  animation: ${fadeIn} 0.8s ease, ${scale} 0.8s ease, ${left} 0.7s ease;
  animation-delay: ${(props) => props.show}s;
  animation-fill-mode: backwards;
  transition: transform 0.18s ease;
  &:active {
    transform: scale(0.9);
  }
`;

export const Drag = styled.div``;

export const JigContainer = styled.div`
  padding: 6px;
  border-radius: 14px;
  background: #212121;
  transform: scale(0.94);
  animation: ${fadeIn} 2.4s ease;
`;
