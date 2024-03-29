import styled from "styled-components";
import { fadeIn, showDown, breath } from "@/style/animate.js";

export const AllSortContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  margin-top: 53px;
  animation: ${fadeIn} 1s ease, ${showDown} 0.7s ease;
  animation-delay: 0.7s;
  animation-fill-mode: backwards;
`;

export const Title = styled.div`
  width: 90vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #afafaf;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0.88px;
  margin-bottom: 12px;
`;

export const Item = styled.div`
  display: flex;
  width: 90vw;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
`;

export const Number = styled.div<{ textColor: string; bg: string }>`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: #3fbeff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: ${(props) => props.textColor};
  margin-right: 5vw;
  background: ${(props) => props.bg};
`;

export const Card = styled.div<{ myGroup: boolean }>`
  flex: 1;
  background: #393939;
  border-radius: 14px;
  border: 2px solid #404040;
  animation: ${(props) => props.myGroup && breath} 2.6s ease infinite;
  box-shadow: 0 17px 21px 0 rgba(0, 0, 0, 0.17);
  padding: 11px 15px;
`;

export const CardHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Name = styled.div`
  font-size: 26px;
  font-weight: 500;
  color: #e9e9e9;
  line-height: 30px;
  margin-right: 8px;
`;

export const MembersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0 4px 0;
  line-height: 19px;
`;

export const Member = styled.div<{ mine: boolean }>`
  margin-right: 14px;
  font-size: 15px;
  color: ${(props) => (props.mine ? "#BABABA" : "#7C7C7C")};
  letter-spacing: 0.6px;
`;

export const ScoreNumber = styled.div`
  font-size: 33px;
  font-weight: 500;
`;

export const ScoreText = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 20px;
  font-weight: 500;
  margin: 4px;
`;

export const Score = styled.div`
  display: flex;
  align-items: flex-end;
  color: #e0e0e0;
`;
