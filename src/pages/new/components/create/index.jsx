import React from 'react';
import {
  NewPageWrapper,
  NewPageContainer,
  InputBox,
  Title,
  Message,
  ButtonsContainer,
  Button
} from './style'

function CreatePage({username, difficult, create, roomName, setRoomName, message, back}) {
  return (
    <NewPageWrapper>
      <NewPageContainer>
        <Title>队伍名称</Title>
        <InputBox>
          <input
            placeholder="请输入队伍名称"
            value={roomName}
            onChange={e => setRoomName(e.target.value)}
          />
        </InputBox>
        <Message active={message}>{message}</Message>
        <ButtonsContainer>
          <Button onClick={() => back()}>上一步</Button>
          <Button onClick={() => create(username, roomName, difficult)}>创建</Button>
        </ButtonsContainer>
      </NewPageContainer>
    </NewPageWrapper>
  );
}

export default CreatePage;
