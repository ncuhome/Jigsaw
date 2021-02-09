import styled from "styled-components";

export const MembersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: -1px;
`;

export const MemberContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 69px;
  padding: 0 15px;
  background: ${props => props.ifMine ? '#393939' : null};
  transition: transform .18s ease;
  &:active{
    transform : scale(.94);
  }
`;

export const MemberHead = styled.div`
  display: flex;
  align-items: center;
`

export const MemberAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2a2a2a;
  font-weight: 800;
  font-size: 19px;
  background: ${props => props.color};
  width: 44px;
  height: 44px;
  border-radius: 44px;
`;

export const MemberName = styled.div`
  display: flex;
  font-size: 19px;
  font-weight: 500;
  color: #D0D0D0;
  margin-left: 15px;
  letter-spacing: 1.31px;
`;

export const Identity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: 600;
  color: #9e9e9e;
`
