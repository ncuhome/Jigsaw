import {
  SET_NAME
} from './constants'

const defaultState = {
  username: '',
};

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case SET_NAME:
      newState.username = action.value;
      return newState
    default:
      return newState
  }
}
