import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import {
  HomeWarpper,
  Text,
  TextContainer,
  Name,
  Title,
  Welcome,
  ColorBar,
  Item,
  GreyImg,
  MainImg,
  HelpButton
} from './style'
import { connect } from 'react-redux'

function Homepage(props) {
  return (
    <HomeWarpper>
      <MainImg />
      <GreyImg />
      <Title>
        <Welcome>你好，</Welcome>
        <Name>{props.name}</Name>
      </Title>
      <TextContainer>
        <Link to="/new/">
          <Item>
            <Text>创建队伍</Text>
            <ColorBar color={'#FFB2B2'}/>
          </Item>
        </Link>
        <Link to="/add/">
          <Item>
            <Text>加入队伍</Text>
            <ColorBar color={'#B5F9FF'}/>
          </Item>
        </Link>
        <Link to="/archive/">
          <Item>
            <Text>查看排名</Text>
            <ColorBar color={'#FFECB7'}/>
          </Item>
        </Link>
      </TextContainer>
      <HelpButton>帮助</HelpButton>
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
