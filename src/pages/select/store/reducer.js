import {
  UPDATE_SELECT_MSG,
  UPDATE_SELECT_STATUS,
  SET_DIFFICULT
} from './constants'

const defaultState = {
  difficult: 3,
  message: '',
  status: 0,
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case SET_DIFFICULT:
      newState.difficult = action.value
      return newState
    case UPDATE_SELECT_MSG:
      newState.message = action.value
      return newState
    case UPDATE_SELECT_STATUS:
      newState.status = action.value
      return newState
    default:
      return newState
  }
}
