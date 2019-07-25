import {
  ON_CHANGE_GROUPNAME,
  UPDATE_NEW_MSG,
  UPDATE_NEW_STATUS
} from './constants'
import post from '../../../lib/post'

export const OnChangeGroupNameAction = value => ({
  type: ON_CHANGE_GROUPNAME,
  value
})

export const updateNewMessageAction = value => ({
  type: UPDATE_NEW_MSG,
  value
})

export const updateNewStatusAction = value => ({
  type: UPDATE_NEW_STATUS,
  value
})

export const nextAsyncAction = (groupName, token) => {
  return dispatch => {
    let data = {
      groupName
    }
    new Promise(resolve => {
      let ret = post('/api/room/new', data, token)
      resolve(ret)
    })
      .then(ret => {
        dispatch(updateNewMessageAction(ret.message))
        dispatch(updateNewStatusAction(ret.status))
      })
      .catch(err => {
        throw new Error(err)
      })
  }
}
