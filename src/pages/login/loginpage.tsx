import React from "react";
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
  SecondPicture,
} from "./style";
import { useLogin } from "./store";
import { useHistory } from "react-router-dom";
import { useEmit } from "@/lib/websocket/hooks";

const height = document.documentElement.clientHeight;

function LoginPage() {
  const [loading, setLoading] = React.useState(false);
  const { userId, password, message, token, name } = useLogin((state) => ({
    userId: state.userId,
    password: state.password,
    message: state.message,
    token: state.token,
    name: state.name,
  }));

  const { login, setValue } = useLogin((state) => ({
    login: state.login,
    setValue: state.setValue,
  }));

  const sendToken = useEmit("token");

  const history = useHistory();

  const submit = async () => {
    if (loading) return;
    setLoading(true);

    try {
      await login(userId, password);
      sendToken({
        username: name,
        token: token,
      });
      history.push("/home");
    } catch (e) {
      setValue("message", e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginWrapper style={{ height: `${height}px` }}>
      <MainPicture />
      <SecondPicture />
      <Content>
        <Title>许多人可以一起玩的拼图游戏</Title>
        <UserIdInputBox>
          <InputName>学号</InputName>
          <input
            placeholder="请输入您的学号"
            value={userId || ""}
            onChange={(e) => setValue("userId", e.target.value)}
          />
        </UserIdInputBox>
        <PwdInputBox>
          <InputName>密码</InputName>
          <input
            type="password"
            placeholder="请输入云家园密码"
            value={password || ""}
            onChange={(e) => setValue("password", e.target.value)}
          />
        </PwdInputBox>
        <Prompt>{message}</Prompt>
        <LoginBtn onClick={submit}>{loading ? "登录中" : "登录"}</LoginBtn>
      </Content>
      <BottomText>南昌大学家园工作室</BottomText>
    </LoginWrapper>
  );
}

export default LoginPage;
