import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom'
import {
  HomeWarpper,
  Text,
  TextContainer,
  Name,
  Title,
  Welcome,
  Item,
  RedImg,
  BlueImg,
  HelpButton,
  LeaveButton,
  AddIcon,
  JoinIcon,
  RankIcon
} from './style'
import { connect } from 'react-redux'
import Help from './components/Help/'
import Leave from './components/Leave/'
import {actionCreator} from "./store";
import halo from "../../lib/helloText"

function Homepage(props) {
  const {username, token, getUserName, haloText} = props;
  const [handleHelp, setHandleHelp] = useState(false);
  const [handleLeave, setHandleLeave] = useState(false);

  const closeHelp = () => {
    setHandleHelp(false)
  };

  const closeLeave = () => {
    setHandleLeave(false)
  };

  const clearLogin = () => {
    window.localStorage.removeItem('status');
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('userId');
    window.localStorage.removeItem('username');
    window.location.reload();
  };

  useEffect(()=>{
    getUserName(token)
  },[getUserName]);

  return (
    <HomeWarpper>
      <BlueImg />
      <RedImg />
      <Title>
        <Welcome>{haloText}</Welcome>
        <Name>{username}</Name>
      </Title>
      <TextContainer>
        <Link to="/new/">
          <Item>
            <AddIcon/>
            <Text>创建队伍</Text>
          </Item>
        </Link>
        <Link to="/join/">
          <Item>
            <JoinIcon/>
            <Text>加入队伍</Text>
          </Item>
        </Link>
        <Link to="/sort/">
          <Item>
            <RankIcon/>
            <Text>查看排名</Text>
          </Item>
        </Link>
      </TextContainer>
      <HelpButton onClick={()=>setHandleHelp(true)}>帮助</HelpButton>
      <LeaveButton onClick={()=>setHandleLeave(true)}>离开</LeaveButton>
      <Help
        handleHelp={handleHelp}
        closeHelp={closeHelp}
      />
      <Leave
        handleLeave={handleLeave}
        closeLeave={closeLeave}
        clearLogin={clearLogin}
      />
    </HomeWarpper>
  );
}

const mapStateToProps = state => {
  return {
    username: state.home.username,
    token: state.login.token,
    haloText: halo()
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getUserName(token) {
      dispatch(actionCreator.getUsernameAsyncAction(token))
    },
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
