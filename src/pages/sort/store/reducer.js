import {
  UPDATE_SORT_LIST,
} from './constants'

const defaultState = {
  list: []
};

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case UPDATE_SORT_LIST:
      newState.list = action.value;
      return newState;
    default:
      return newState
  }
}
