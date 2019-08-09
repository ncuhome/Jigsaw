import styled, {keyframes} from "styled-components";
import arrow from '../../img/arrow.svg'

const fadeIn = keyframes` 
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const HeaderContainer = styled.div`
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

export const Arrow = styled.div`
  width: 13px;
  height: 24px;
  background: url(${arrow});
  margin: 0 15px 0 15px;
`;
