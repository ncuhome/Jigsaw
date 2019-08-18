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
        <p>本以为你不会看</p>
        <p>实际上你还是看了</p>
        <Back onClick={() => closeHelp()}>点击关闭</Back>
      </HelpContent>
    </HelpContainer>
  )
}

export default Help