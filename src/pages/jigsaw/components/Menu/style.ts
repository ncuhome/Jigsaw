import styled from "styled-components";

export const MenuWrapper = styled.div`
  background: rgba(46, 46, 46, 0.92);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 250px;
  justify-content: flex-start;
  backdrop-filter: blur(15px);
  transform: translateX(-250px);
  transition: transform 0.35s ease;
`;

export const BackArea = styled.div<{ show: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.58);
  transition: opacity 0.5s ease;
  pointer-events: ${(props) => (props.show ? "auto" : "none")};
  opacity: ${(props) => (props.show ? 1 : 0)};
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 13px;
  font-size: 20px;
  color: #979797;
  font-weight: 600;
`;

export const Title = styled.div`
  font-size: 32px;
  color: #ddd;
  font-weight: 600;
  padding-top: 12px;
  line-height: 40px;
  letter-spacing: 1.25px;
`;

export const Quit = styled.div`
  position: absolute;
  bottom: 18px;
  left: 22px;
  font-size: 23px;
  color: #c3c3c3;
  font-weight: 600;
  letter-spacing: 1.44px;
  transition: transform 0.18s ease, opacity 0.2s ease;
  &:active {
    transform: scale(0.9);
    opacity: 0;
  }
`;
