import React, {useState} from 'react';
import {
  NewPageWrapper,
  NewPageContainer,
  InputBox,
  Title,
  Message,
  ButtonsContainer,
  Button
} from './style'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

function JoinPage(props) {
  const { token } = props;
  const [RoomID, setRoomID] = useState('');
  const [message, setMessage] = useState('');

  const join = () => {
    console.log(RoomID)
  };

  return (
    <NewPageWrapper>
      <NewPageContainer>
        <Title>队伍ID</Title>
        <InputBox>
          <input
            placeholder="请输入队伍ID"
            value={RoomID}
            onChange={e => setRoomID(e.target.value)}
          />
        </InputBox>
        <Message active={message}>{message}</Message>
        <ButtonsContainer>
          <Link to="/home/">
            <Button>取消</Button>
          </Link>
          <Button onClick={() => join()}>加入</Button>
        </ButtonsContainer>
      </NewPageContainer>
    </NewPageWrapper>
  );
}

const mapStateToProps = state => {
  return {
    token: state.login.token,
  }
};

export default connect(mapStateToProps)(JoinPage);
