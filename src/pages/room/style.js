import styled, { keyframes } from 'styled-components'

export const RoomWarpper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
`

export const TitleContainer = styled.div`
  margin-top: 40px;
  width: 85vw;
  height: 94px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const GroupNameTitle = styled.div`
  font-size: 20px;
  letter-spacing: 1.25px;
  font-weight: 800;
  color: #AFAFAF;
  line-height: 22px;
  height: 22px;
`

export const GroupNameContent = styled.div`
  line-height: 66px;
  height: 66px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  overflow: hidden;
`

export const GroupName = styled.div`
  font-size: 47px;
  letter-spacing: 2.94px;
  font-weight: 800;
  color: #4B4B4B;
  height: 66px;
  margin-right: 16px;
`

export const HelloTitle = styled.div`
  font-size: 27px;
  letter-spacing: 0;
  color: #C5C5C5;
  height: 43px;
  line-height: 43px;
`

export const MessageContainer = styled.div`
  height: 31px;
  line-height: 31px;
  text-align: center;
  width: 86vw;
  margin: 13px 0;
  border-radius: 30px;
  background: #F5F5F5;
  color: #7E7E7E;
  font-size: 16px;
  letter-spacing: 1px;
`

export const MembersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MembersTitleContainer = styled.div`
  width: 86vw;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const MembersTitle = styled.div`
  height: 28px;
  line-height: 28px;
  font-size: 20px;
  letter-spacing: 1.25px;
  color: #AFAFAF;
  font-weight: 600;
`

export const MemberContentContainer = styled.div`
  width: 100vw;
  height: 72px;
  border-top: 1px solid #F4F4F4;
  display: flex;
  justify-content: center;
`

export const MemberContent = styled.div`
  width: 86vw;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 800;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${props => props.color};
`

export const MemberMessageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 72px;
`

export const MemberMessageContent = styled.div`
  margin-left: 21px;
  height: 49px;
  display: flex;
  flex-direction: column;
`

export const MemberNameContent = styled.div`
  height: 29px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`

export const MemberName = styled.div`
  height: 29px;
  line-height: 29px;
  color: ${props => props.color};
  font-weight: 800;
  font-size: 21px;
  letter-spacing: 1.31px;
  margin-right: 8px;
`

export const Identity = styled.div`
  height: 25px;
  line-height: 25px;
  font-size: 15px;
  color: #858585;
  font-weight: 800;
  letter-spacing: .84px;
`

export const ClassMessage = styled.div`
  font-size: 14px;
  letter-spacing: .88px;
  font-weight: 500;
  color: #CBCBCB;
  height: 20px;
  line-height: 20px;
`

export const ReadyContainer = styled.div`
  font-size: 20px;
  letter-spacing: 1.25px;
  font-weight: 500;
  color: #4B4B4B;
  line-height: 28px;
  height: 28px;
  width: 64px;
`

export const BottomElements = styled.div`
  position: fixed;
  bottom: 0;
  width: 86vw;
  height: 71px;
  margin: 25px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const ExitTitle = styled.div`
  color: #9E9E9E;
  font-size: 23px;
  letter-spacing: 1.44px;
  font-weight: 600;
`

export const MainButton = styled.div`
  background: #F7F7F7;
  border-radius: 13px;
  width: 166px;
  height: 71px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 37px;
  font-weight: 600;
  color: #4B4B4B;
  letter-spacing: 2.31px;
`
export const Slider = styled.div`
  position: absolute;
  right: 0;
  width: 12px;
  height: 74px;
  background: ${props => props.color};
`