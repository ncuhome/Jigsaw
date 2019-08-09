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
  background: #ECECEC;
  padding: 6px;
  margin-top: -1px;
`;

export const MemberContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 100px;
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
  background: ${props => props.color};
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  border: 2px solid #CDCDCD;
  border-radius: 40px;
`;

export const MemberName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #2e2e2e;
`;

export const MemeberIdentity = styled.div`
  font-size: 12px;
  margin-bottom: 7px;
  font-weight: 500;
  color: ${props => props.leaderColor === 'leader' ? '#838383' : '#B9B9B9'};
`;