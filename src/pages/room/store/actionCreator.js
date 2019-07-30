import {
  ON_CHANGE_GROUPNAME,
  UPDATE_NEW_MSG,
  UPDATE_NEW_STATUS,
  SET_DIFFICULT,
  UPDATE_PAGE
} from './constants'
import post from '../../../lib/post'

export const OnChangeGroupNameAction = value => ({
  type: ON_CHANGE_GROUPNAME,
  value
})

export const updatePageAction = value => ({
  type: UPDATE_PAGE,
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

export const setDifficultAction = value => ({
  type: SET_DIFFICULT,
  value
})

export const createAsyncAction = (username, groupName, difficult, token) => {
  return dispatch => {
    let data = {
      username,
      groupName,
      difficult
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
