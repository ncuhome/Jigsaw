import React, {useState, useEffect} from 'react';
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
import {connect} from 'react-redux'
import {actionCreator} from './store'
import {Redirect} from 'react-router-dom'

function LoginPage({userId, password, message, status, onChangeUserId, onChangePassword, login}) {
  const [height, setHeight] = useState(document.documentElement.clientHeight);

  return (
    <LoginWrapper style={{height: `${height}px`}}>
      <MainPicture/>
      <SecondPicture/>
      <Content>
        <Title>
          许多人可以一起玩的拼图游戏
        </Title>
        <UserIdInputBox>
          <InputName>学号</InputName>
          <input
            placeholder="请输入您的学号"
            value={userId}
            onChange={e => onChangeUserId(e)}
          />
        </UserIdInputBox>
        <PwdInputBox>
          <InputName>密码</InputName>
          <input
            type="password"
            placeholder="请输入云家园密码"
            value={password}
            onChange={e => onChangePassword(e)}
          />
        </PwdInputBox>
        <Prompt active={message}>{message}</Prompt>
        <LoginBtn onClick={() => login(userId, password)}>登录</LoginBtn>
      </Content>
      <BottomText>南昌大学家园工作室</BottomText>
      {status ? <Redirect to={"/home/"}/> : null}
    </LoginWrapper>
  );
}

const mapStateToProps = state => {
  return {
    userId: state.login.userId,
    password: state.login.password,
    message: state.login.message,
    status: state.login.status,
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
    login(userId, password) {
      dispatch(actionCreator.loginAsyncAction(userId, password))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
