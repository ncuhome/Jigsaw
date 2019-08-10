import styled, {keyframes} from "styled-components";
import meau from '../../img/meau.svg'

const fadeIn = keyframes` 
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  animation: ${fadeIn} 2s ease;
`;

export const HeaderTitle = styled.div`
  width: 50vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  color: #c9ced2;
`;

export const Meau = styled.div`
  width: 23px;
  height: 19px;
  background: url(${meau});
  margin: 0 15px 0 15px;
`;
