import React from 'react';
import {
  SecondPicture
} from './style'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreator } from './store'

function RoomPage(props) {
  const { userId, password, token, message } = props
  return (
    <div>这是roompage</div>
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
    login(userId, password) {
      dispatch(actionCreator.loginAsyncAction(userId, password))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
