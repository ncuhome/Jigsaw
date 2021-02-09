import React from 'react';
import {
  HelpContainer,
  HelpContent,
  BackGround,
  Back
} from './style'

function Help({closeHelp, handleHelp}) {
  return (
    <HelpContainer show={handleHelp}>
      <BackGround onClick={() => closeHelp()}/>
      <HelpContent>
        <p>告诉你个小秘密</p>
        <p>遇到用户未认证点击离开重试</p>
        <p>还有什么问题直接问主持人小姐姐</p>
        <p>要没什么事情的话那我就先去植个发</p>
        <p>祝游戏愉快嗷～</p>
        <Back onClick={() => closeHelp()}>点击关闭</Back>
      </HelpContent>
    </HelpContainer>
  )
}

export default Help