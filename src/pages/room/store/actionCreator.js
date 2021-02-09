import {
  UPDATE_MEMBERS_LIST,
  SET_ROOM_NAME,
  SET_ROOM_ID,
  SET_ROOM_DIF,
  UPDATE_ROOM_MESSAGE
} from './constants'

export const updateMembersListAction = value => ({
  type: UPDATE_MEMBERS_LIST,
  value
});

export const updateRoomMessageAction = value => ({
  type: UPDATE_ROOM_MESSAGE,
  value
});

export const setRoomDifficultAction = value => ({
  type: SET_ROOM_DIF,
  value
});

export const setRoomNameAction = value => ({
  type: SET_ROOM_NAME,
  value
});

export const setRoomIdAction = value => ({
  type: SET_ROOM_ID,
  value
});