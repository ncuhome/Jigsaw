import styled, {keyframes} from "styled-components";
import menu from '../../img/menu.svg'
import over from '../../img/over.svg'

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
  height: 70px;
  animation: ${fadeIn} 2s ease;
`;

export const HeaderTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  color: #c9ced2;
  letter-spacing: 1px;
  transition: transform .27s ease;
  &:active{
    transform : scale(.93,.93);
  }
`;

export const Menu = styled.div`
  width: 23px;
  height: 19px;
  background: url(${menu});
  margin: 0 15px 0 15px;
  transition: transform .21s ease;
  &:active{
    transform : scale(.86);
  }
`;

export const Over = styled.div`
  width: 24px;
  height: 21px;
  background: url(${over});
  margin: 0 16px 0 16px;
  transition: transform .21s ease;
  &:active{
    transform : scale(.86);
  }
`;

export const Text = styled.div`
  font-size: 14px;
  color: #7b7b7b;
  margin-bottom: 4px;
`
