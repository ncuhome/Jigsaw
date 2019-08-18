import React from 'react';
import {
  AlertWrapper,
  AlertContainer,
  Title,
  TitleContainer,
  DivideLine,
  ButtonContainer,
  RedButton,
  BlueButton,
  Background
} from './style'

function QuitAlert({back, toQuit, showQuitAlert}) {
  return (
    <AlertWrapper show={showQuitAlert}>
      <Background onClick={() => back()}/>
      <AlertContainer>
        <TitleContainer>
          <Title>
            是否确认退出
          </Title>
            退出后将跳回主页
        </TitleContainer>
        <DivideLine/>
        <ButtonContainer>
          <RedButton onClick={() => toQuit()}>
            退出
          </RedButton>
          <BlueButton onClick={() => back()}>
            返回
          </BlueButton>
        </ButtonContainer>
      </AlertContainer>
    </AlertWrapper>
  );
}

export default QuitAlert;