import {
  UPDATE_ROOM_STATUS,
  UPDATE_MEMBERS_LIST
} from './constants'

export const updateStatusAction = value => ({
  type: UPDATE_ROOM_STATUS,
  value
})

export const updateMembersListAction = value => ({
  type: UPDATE_MEMBERS_LIST,
  value
})