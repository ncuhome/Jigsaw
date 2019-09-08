import {
  UPDATE_MEMBERS_LIST,
  SET_ROOM_NAME,
} from './constants'

export const updateMembersListAction = value => ({
  type: UPDATE_MEMBERS_LIST,
  value
});

export const setRoomNameAction = value => ({
  type: SET_ROOM_NAME,
  value
});