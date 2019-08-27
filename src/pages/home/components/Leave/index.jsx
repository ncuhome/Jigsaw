import React from 'react';
import {
  HelpContainer,
  HelpContent,
  BackGround,
  Back,
  Quit
} from './style'

function Help({handleLeave, closeLeave, clearLogin}) {
  return (
    <HelpContainer show={handleLeave}>
      <BackGround onClick={() => closeLeave()}/>
      <HelpContent>
        <p>是否退出本账号</p>
        <Quit onClick={() => clearLogin()}>退出</Quit>
        <Back onClick={() => closeLeave()}>返回</Back>
      </HelpContent>
    </HelpContainer>
  )
}

export default Help