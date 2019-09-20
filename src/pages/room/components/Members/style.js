import styled, {keyframes} from 'styled-components'


export const MemberContentContainer = styled.div`
  width: 100vw;
  height: 72px;
  border-top: 1px solid #3A3A3A;
  display: flex;
  justify-content: center;
  background: ${props => props.myself ? '#313131' : null};
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
  color: #2e2e2e;
  font-weight: 800;
  font-size: 18px;
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
  color: #DBDBDB;
  font-weight: 800;
  font-size: 21px;
  letter-spacing: 1.31px;
  margin-right: 8px;
`

export const WaitMemberName = styled.div`
  height: 29px;
  line-height: 29px;
  color: #5F5F5F;
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
  color: #777777;
  height: 20px;
  line-height: 20px;
`

export const ReadyContainer = styled.div`
  font-size: 20px;
  letter-spacing: 1.25px;
  font-weight: 500;
  color: ${props => props.ifReady ? '#AEAEAE' : '#5D5D5D'};
  line-height: 28px;
  height: 28px;
  width: 64px;
`

export const Slider = styled.div`
  position: absolute;
  right: 0;
  width: 12px;
  height: 74px;
  background: ${props => props.color};
`