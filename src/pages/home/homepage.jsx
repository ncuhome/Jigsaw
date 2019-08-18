import React,{useState} from 'react';
import { Link, Redirect } from 'react-router-dom'
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
  AddIcon,
  JoinIcon,
  RankIcon
} from './style'
import { connect } from 'react-redux'
import Help from './components/Help/'

function Homepage(props) {
  const [handleHelp, setHandleHelp] = useState(false);

  const closeHelp = () => {
    setHandleHelp(false)
  };

  return (
    <HomeWarpper>
      <BlueImg />
      <RedImg />
      <Title>
        <Welcome>你好，</Welcome>
        <Name>{props.name}</Name>
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
      <Help
        handleHelp={handleHelp}
        closeHelp={closeHelp}
      />
      {props.token === '' ? <Redirect to="/login/" /> : null}
    </HomeWarpper>
  );
}

const mapStateToProps = state => {
  return {
    name: state.login.username,
    token: state.login.token,
  }
}

export default connect(mapStateToProps)(Homepage)
