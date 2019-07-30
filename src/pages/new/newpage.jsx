import React from 'react';
import { actionCreator } from './store'
import { connect } from 'react-redux'
import SelectPage from './components/select'
import CreatePage from './components/create'

function NewPage(props) {
  return (
    <div>
      {props.page ? <CreatePage params={props} funcs={props} /> : <SelectPage params={props} funcs={props} />}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    username: state.login.username,
    token: state.login.token,
    page: state.new.page,
    roomName: state.new.roomName,
    message: state.new.message,
    status: state.new.status,
    difficult: state.new.difficult
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updatePage(page) {
      dispatch(actionCreator.updatePageAction(page))
    },
    OnChangeGroupName(roomName) {
      dispatch(actionCreator.OnChangeGroupNameAction(roomName))
    },
    setDifficult(difficult) {
      dispatch(actionCreator.setDifficultAction(difficult))
    },
    updateNewStatus(status) {
      dispatch(actionCreator.updateNewStatusAction(status))
    },
    create(username, roomName, difficult, token) {
      dispatch(actionCreator.createAsyncAction(username, roomName, difficult, token))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPage);
