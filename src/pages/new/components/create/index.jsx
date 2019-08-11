import React, {useState, useEffect} from 'react';
import {
  NewPageWrapper,
  NewPageContainer,
  InputBox,
  Title,
  Message,
  ButtonsContainer,
  Button
} from './style'
import {Redirect} from 'react-router-dom'

function CreatePage(props) {
  const {username, roomName, message, status, difficult, token} = props.params;
  const {OnChangeGroupName, create, updateNewStatus, updatePage} = props.funcs;
  const [showCancel, setShowCancel] = useState(false);

  useEffect(() => {
    OnChangeGroupName('')
  }, [])

  const handleCancel = () => {
    updatePage(0)
    setShowCancel(true)
  }

  const clearNewState = () => {
    updateNewStatus(0);
    updatePage(0)
  }

  return (
    <NewPageWrapper>
      <NewPageContainer>
        <Title>队伍名称</Title>
        <InputBox>
          <input
            placeholder="请输入队伍名称"
            value={roomName}
            onChange={e => OnChangeGroupName(e.target.value)}
          />
        </InputBox>
        <Message active={message}>{message}</Message>
        <ButtonsContainer>
          <Button onClick={() => handleCancel()}>上一步</Button>
          <Button onClick={() => create(username, roomName, difficult, token)}>创建</Button>
        </ButtonsContainer>
      </NewPageContainer>
      {status ? (clearNewState(), <Redirect to="/room/"/>) : null}
      {showCancel ? <Redirect to="/home/"/> : null}
    </NewPageWrapper>
  );
}

export default CreatePage;
