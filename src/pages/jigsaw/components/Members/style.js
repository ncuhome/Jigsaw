import styled, {keyframes} from "styled-components";

const down = keyframes` 
  0% {
    transform: translateY(-35px);
  }
  100% {
    transform: translateY(0);
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

export const MembersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 6px;
  margin-top: -1px;
`;

export const MemberContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 69px;
  padding: 0 13px;
  transition: transform .27s;
  animation: ${fadeIn} .8s ease, ${down} .8s ease;
  animation-delay: ${props=>props.show}s;
  animation-fill-mode: backwards;
  &:active{
    transform : scale(.88,.88);
  }
  background: ${props => props.ifMine ? '#393939' : null};
`;

export const MemberAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 800;
  font-size: 17px;
  background: ${props => props.color};
  width: 44px;
  height: 44px;
  border-radius: 44px;
`;

export const MemberName = styled.div`
  font-size: 21px;
  font-weight: 500;
  color: #D0D0D0;
  margin-left: 21px;
  letter-spacing: 1.31px;
`;
