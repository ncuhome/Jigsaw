import {
  UPDATE_MEMBERS_LIST,
  SET_ROOM_NAME,
  UPDATE_ROOM_MESSAGE,
  SET_ROOM_ID,
  SET_ROOM_DIF
} from './constants'

const defaultState = {
  roomName: "",
  roomId: null,
  members: [],
  message: "",
  difficult: null,
};

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case SET_ROOM_NAME:
      newState.roomName = action.value;
      return newState;
    case SET_ROOM_ID:
      newState.roomId = action.value;
      return newState;
    case SET_ROOM_DIF:
      newState.difficult = action.value;
      return newState;
    case UPDATE_MEMBERS_LIST:
      newState.members = action.value;
      return newState;
    case UPDATE_ROOM_MESSAGE:
      newState.message = action.value;
      return newState;
    default:
      return newState
  }
}
