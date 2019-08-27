import styled from 'styled-components'

export const HelpContainer = styled.div`
  position: absolute;
  top: 0;right: 0;left: 0;bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity .5s ease;
  pointer-events: ${props => props.show ? 'auto' : 'none'};
  opacity: ${props => props.show ? 1 : 0};
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
  top: 0;right: 0;left: 0;bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.7);
`;

export const Quit = styled.div`
  pointer-events: auto;
  font-size: 18px;
  color: #d8d8d8;
  margin-top: 29px;
`;

export const Back = styled.div`
  pointer-events: auto;
  font-size: 18px;
  color: #a0a0a0;
  margin-top: 12px;
`;