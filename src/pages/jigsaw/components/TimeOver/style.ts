import styled from "styled-components";
import { fadeIn } from "@/style/animate";

export const HelpContainer = styled.div<{ show: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: ${(props) => (props.show ? "auto" : "none")};
  animation: ${fadeIn} 0.5s ease;
`;

export const HelpContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff;
  z-index: 1;
  line-height: 30px;
  letter-spacing: 2px;
`;

export const BackGround = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
`;
