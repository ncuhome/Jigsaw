import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import {
  HomeWarpper,
  Content,
  Box,
  Logo,
  Btnred,
  Btnblack,
  Name,
  Tips,
  GetToAnswer
} from './style'
import {connect} from 'react-redux'
import {actionCreator} from './store'

function Homepage(props) {
  return(
      <HomeWarpper>
        <Content>
          <Box>
            <Logo/>
            <Name>{props.name}</Name>
          </Box>
          <Link to="/new/"><Btnred>创建队伍</Btnred></Link>
          <Link to="/add/"><Btnblack>加入队伍</Btnblack></Link>
          <Link to="/archive/"><Btnblack>查看排名</Btnblack></Link>
        </Content>
        {props.token === '' ? <Redirect to="/login/" /> : null}
      </HomeWarpper>
  );
}

const mapStateToProps = state => {
  return {
    name: state.login.name,
    setid: state.login.setid,
    token: state.login.token,
    sex: state.login.sex,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearEverMsg() { 
      dispatch(actionCreator.clearEverMsgAction())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage)
