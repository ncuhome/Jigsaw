import {
  ON_CHANGE_GROUPNAME,
  UPDATE_NEW_MSG,
  UPDATE_NEW_STATUS,
  SET_DIFFICULT,
  UPDATE_PAGE
} from './constants'

const defaultState = {
  roomName: '',
  difficult: 3,
  message: '',
  page: 0,
  status: 0,
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case UPDATE_PAGE:
      newState.page = action.value
      return newState
    case SET_DIFFICULT:
      newState.difficult = action.value
      return newState
    case ON_CHANGE_GROUPNAME:
      newState.roomName = action.value
      return newState
    case UPDATE_NEW_MSG:
      newState.message = action.value
      return newState
    case UPDATE_NEW_STATUS:
      newState.status = action.value
      return newState
    default:
      return newState
  }
}
