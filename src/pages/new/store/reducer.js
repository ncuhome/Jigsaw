import {
  ON_CHANGE_GROUPNAME,
  UPDATE_NEW_MSG,
  UPDATE_NEW_STATUS
} from './constants'

const defaultState = {
  groupName: '',
  message: '',
  status: 0
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case ON_CHANGE_GROUPNAME:
      newState.groupName = action.value
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
