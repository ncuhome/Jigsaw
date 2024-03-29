import styled from "styled-components";
import { fadeIn, showDown, showUp } from "@/style/animate.js";

export const RoomWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const TitleContainer = styled.div`
  margin-top: 4vh;
  width: 85vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${fadeIn} 1s ease, ${showDown} 0.7s ease;
`;

export const GroupNameTitle = styled.div`
  font-size: 20px;
  letter-spacing: 1.25px;
  font-weight: 500;
  color: #afafaf;
  line-height: 22px;
  height: 22px;
`;

export const GroupName = styled.div`
  font-size: 39px;
  letter-spacing: 2.13px;
  font-weight: 500;
  color: #dedede;
  margin: 9px 0 13px -4px;
  line-height: 42px;
`;

export const GroupID = styled.div`
  font-size: 16px;
  letter-spacing: 0.88px;
  font-weight: 500;
  color: #7b7b7b;
`;

export const MessageContainer = styled.div`
  height: 31px;
  line-height: 31px;
  text-align: center;
  width: 86vw;
  margin: 13px 0;
  border-radius: 30px;
  background: #343434;
  color: #9c9c9c;
  font-size: 16px;
  letter-spacing: 1px;
  animation: ${fadeIn} 1s ease, ${showDown} 0.7s ease;
  animation-delay: 0.3s;
  animation-fill-mode: backwards;
`;

export const MembersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s ease, ${showDown} 0.7s ease;
  animation-delay: 0.8s;
  animation-fill-mode: backwards;
`;

export const MembersTitleContainer = styled.div`
  width: 86vw;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MembersTitle = styled.div`
  height: 28px;
  line-height: 28px;
  font-size: 20px;
  letter-spacing: 1.25px;
  color: #b4b4b4;
  font-weight: 600;
`;

export const BottomElements = styled.div`
  position: fixed;
  bottom: 0;
  width: 86vw;
  height: 71px;
  margin: 25px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  animation: ${fadeIn} 1s ease, ${showUp} 0.7s ease;
  animation-delay: 1.1s;
  animation-fill-mode: backwards;
`;

export const ExitTitle = styled.div`
  color: #9e9e9e;
  font-size: 23px;
  letter-spacing: 1.44px;
  font-weight: 600;
`;

export const MainButton = styled.div`
  background: #3a3a3a;
  border-radius: 13px;
  width: 138px;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 29px;
  font-weight: 600;
  color: #cdcdcd;
  letter-spacing: 2.31px;
  transition: color 1s ease;
`;
