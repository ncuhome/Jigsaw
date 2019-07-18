import styled from 'styled-components'
import btnblack from './img/btn-black.svg'

export const HomeWarpper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const Text = styled.div`
  font-size: 30px;
  width: 124px;
  height: 42px;
  line-height: 42px;
  font-weight: 500;
  color: #535353;
  letter-spacing: 1px;
  text-align: center;
  margin: auto;
  color: #535353;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 228px;
  margin-left: auto;
  margin-right: 36px;
`

export const Name = styled.div`
  width: 162px;
  height: 75px;
  line-height: 75px;
  font-size: 54px;
  font-weight: 500;
  color: #404040;
`

export const Title = styled.div`
  width: 86vw;
  margin-top: 8vh;
`

export const Welcome = styled.div`
  width: 99px;
  height: 45px;
  line-height: 45px;
  font-size: 32px;
  font-weight: 800;
  color: #7F7F7F;
  letter-spacing: 1px;
`

export const Item = styled.div`
  position: relative;
  width: 140px;
  height: 42px;
`

export const ColorBar = styled.div`
  position: absolute;
  z-index: -1;
  bottom: 0;
  width: 140px;
  height: 17px;
  border-radius: 8.5px;
  background: ${props => props.color}
`