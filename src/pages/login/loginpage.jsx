import React from 'react';
import {
  BottomText,
  Content,
  UserIdInputBox,
  PwdInputBox,
  InputName,
  LoginBtn,
  LoginWrapper,
  Prompt,
  Title,
  MainPicture,
  SecondPicture
} from './style'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreator } from './store'

function LoginPage(props) {
  const { userId, password, token, message } = props;
  return (
    <LoginWrapper>
      <MainPicture />
      <SecondPicture />
      <Content>
        <Title>
          许多人可以一起玩的拼图游戏
        </Title>
        <UserIdInputBox>
          <InputName>学号</InputName>
          <input
            type="number"
            placeholder="请输入您的学号"
            value={userId}
            onChange={e => props.onChangeUserId(e)}
          />
        </UserIdInputBox>
        <PwdInputBox>
          <InputName>密码</InputName>
          <input
            type="password"
            placeholder="请输入云家园密码"
            value={password}
            onChange={e => props.onChangePassword(e)}
          />
        </PwdInputBox>
        <Prompt active={message}>{message}</Prompt>
        <LoginBtn onClick={() => props.login(userId, password, token)}>登录</LoginBtn>
      </Content>
      <BottomText>南昌大学家园工作室</BottomText>
      {token ? <Redirect to="/home/" /> : null}
    </LoginWrapper>
  );
}

const mapStateToProps = state => {
  return {
    userId: state.login.userId,
    password: state.login.password,
    token: state.login.token,
    message: state.login.message,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeUserId(e) {
      dispatch(actionCreator.onUserIdChangeAction(e.target.value))
    },
    onChangePassword(e) {
      dispatch(actionCreator.onPasswordChangeAction(e.target.value))
    },
    login(userId, password, token) {
      dispatch(actionCreator.loginAsyncAction(userId, password, token))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
