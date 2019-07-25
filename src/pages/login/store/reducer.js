import {
  ON_CHANGE_USERID,
  ON_CHANGE_PASSWORD,
  SET_TOKEN,
  SET_NAME,
  UPDATE_MSG,
} from './constants'

const defaultState = {
  token: '111',
  userId: '',
  password: '',
  message: '',
  username: '赵子琦',
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case ON_CHANGE_USERID:
      newState.userId = action.value
      return newState
    case ON_CHANGE_PASSWORD:
      newState.password = action.value
      return newState
    case SET_TOKEN:
      newState.token = action.value
      return newState
    case SET_NAME:
      newState.username = action.value
      return newState
    case UPDATE_MSG:
      newState.message = action.value
      return newState
    default:
      return newState
  }
}
