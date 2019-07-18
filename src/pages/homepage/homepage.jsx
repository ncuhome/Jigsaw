import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import {
  HomeWarpper,
  Btnred,
  Btnblack,
  Name,
} from './style'
import {connect} from 'react-redux'

function Homepage(props){
  return(
    <HomeWarpper>
      <Name>{props.name}</Name>
      <Link to="/new/"><Btnred>创建队伍</Btnred></Link>
      <Link to="/add/"><Btnblack>加入队伍</Btnblack></Link>
      <Link to="/archive/"><Btnblack>查看排名</Btnblack></Link>
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
