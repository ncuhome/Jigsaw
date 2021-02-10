import styled from "styled-components";
import { fadeIn, showDown, scale, showUp } from "@/style/animate.js";

interface SliceType {
  ifZero: boolean;
  size: number;
  bgUrl: string;
  positionX: number;
  positionY: number;
}

export const ResultWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
`;

export const JigContainer = styled.div`
  padding: 6px;
  margin: 15px;
  border-radius: 14px;
  background: #212121;
  transform: scale(0.88);
  animation: ${fadeIn} 0.7s ease, ${showDown} 0.5s ease, ${scale} 0.5s ease;
  animation-delay: 0.35s;
  animation-fill-mode: backwards;
`;

export const SliceContainer = styled.div`
  margin: 1.5px;
`;

export const Slice = styled.div.attrs<SliceType>(({ ifZero }) => ({
  style: {
    opacity: ifZero ? 0.4 : 1,
  },
}))<SliceType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: 3px solid #2e2e2e;
  border-radius: 9px;
  background: url(${(props) => props.bgUrl}) no-repeat -${(props) => props.positionX}px -${(
      props
    ) => props.positionY}px / 300px;
  background-color: #7b7b7b;
  filter: drop-shadow(0 0 10px rgba(58, 58, 58, 0.2));
`;

export const Title = styled.div`
  font-size: 31px;
  font-weight: 500;
  color: #e5e5e5;
  letter-spacing: 1.6px;
`;

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.7s ease, ${showDown} 0.5s ease;
`;

export const ScoreText = styled.div`
  font-size: 19px;
  color: #828282;
  margin: 11px;
  letter-spacing: 0.98px;
`;

export const Score = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const Number = styled.div`
  font-size: 38px;
  font-weight: 500;
  color: #e5e5e5;
  letter-spacing: 1.6px;
`;

export const Text = styled.div`
  font-size: 25px;
  font-weight: 400;
  color: #b2b2b2;
  letter-spacing: 1px;
  margin: 4px;
`;

export const ToSort = styled.div`
  margin: 11px;
  font-size: 23px;
  font-weight: 500;
  color: #a5a5a5;
  letter-spacing: 1.3px;
  transition: transform 0.18s ease;
  animation: ${fadeIn} 0.7s ease, ${showUp} 0.5s ease;
  animation-delay: 0.6s;
  animation-fill-mode: backwards;
  &:active {
    transform: scale(0.9);
  }
`;
