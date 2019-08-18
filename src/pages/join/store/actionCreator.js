import {
  ON_CHANGE_GROUPNAME,
  UPDATE_NEW_MSG,
  UPDATE_NEW_STATUS,
} from './constants'
import post from '../../../lib/post'

export const OnChangeGroupNameAction = value => ({
  type: ON_CHANGE_GROUPNAME,
  value
})

export const updateJoinMessageAction = value => ({
  type: UPDATE_NEW_MSG,
  value
})

export const updateJoinStatusAction = value => ({
  type: UPDATE_NEW_STATUS,
  value
})

export const joinAsyncAction = (username, userId, roomName, token) => {
  return dispatch => {
    let data = {
      username,
      roomName,
      userId
    }
    new Promise(resolve => {
      let ret = post('/api/room/join', data, token)
      resolve(ret)
    })
      .then(ret => {
        dispatch(updateJoinMessageAction(ret.message))
        dispatch(updateJoinStatusAction(ret.status))
      })
      .catch(err => {
        throw new Error(err)
      })
  }
}
