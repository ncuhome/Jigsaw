import styled from 'styled-components'
import btnred from './img/btn-red.svg'
import btnblack from './img/btn-black.svg'

export const HomeWarpper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0 0 10px rgba(58,58,58,.27));
`


export const Btnred = styled.div`
  height: 76px;
  width: 206px;
  background: url(${btnred});
  font-size: 23px;
  font-weight: 500;
  line-height: 76px;
  text-align: center;
  color: #fff;
  letter-spacing: 2px;
`

export const Btnblack = styled.div`
  height: 58px;
  width: 193px;
  margin-top: 5px;
  background: url(${btnblack});
  font-size: 16px;
  font-weight: 500;
  line-height: 58px;
  text-align: center;
  color: #fff;
  letter-spacing: 1px;
`

export const Name = styled.div`
  width: 200px;
  height: 30px;
  font-size: 23px;
  font-weight: 500;
  top: 40px;
  text-align: center;
  color: #464646;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
`