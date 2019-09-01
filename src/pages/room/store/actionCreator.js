import {
  UPDATE_ROOM_STATUS,
  UPDATE_MEMBERS_LIST,
  SET_ROOM_NAME
} from './constants'

export const updateStatusAction = value => ({
  type: UPDATE_ROOM_STATUS,
  value
})

export const updateMembersListAction = value => ({
  type: UPDATE_MEMBERS_LIST,
  value
})

export const setRoomNameAction = value => ({
  type: SET_ROOM_NAME,
  value
})
