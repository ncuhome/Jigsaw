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
  justify-content: space-around;
  padding: 6px;
  margin-top: -1px;
`;

export const MemberContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70px;
  transition: transform .27s;
  animation: ${fadeIn} .8s ease, ${down} .8s ease;
  animation-delay: ${props=>props.show}s;
  animation-fill-mode: backwards;
  &:active{
    transform : scale(.88,.88);
  }
`;

export const MemberAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 800;
  font-size: 14px;
  background: ${props => props.color};
  width: 36px;
  height: 36px;
  margin-bottom: 10px;
  border: 2px solid ${props => props.ifLeader ? '#22c6e9' : '#dedede'};
  border-radius: 40px;
`;

export const MemberName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #bfbfbf;
`;
