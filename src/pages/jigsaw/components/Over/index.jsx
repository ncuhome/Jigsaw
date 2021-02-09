import React from 'react';
import {
  HelpContainer,
  HelpContent,
  BackGround,
  Back,
  Quit
} from './style'

function Over({hiddenOver, handleOver, submit}) {
  return (
    <HelpContainer show={handleOver}>
      <BackGround onClick={() => hiddenOver()}/>
      <HelpContent>
        <p>是否完成游戏</p>
        <Quit onClick={() => submit()}>完成了</Quit>
        <Back onClick={() => hiddenOver()}>再等等</Back>
      </HelpContent>
    </HelpContainer>
  )
}

export default Over