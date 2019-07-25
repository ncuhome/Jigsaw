import {
  UPDATE_SELECT_MSG,
  UPDATE_SELECT_STATUS,
  SET_DIFFICULT
} from './constants'
import post from '../../../lib/post'

export const setDifficultAction = value => ({
  type: SET_DIFFICULT,
  value
})

export const updateSelectMessageAction = value => ({
  type: UPDATE_SELECT_MSG,
  value
})

export const updateSelectStatusAction = value => ({
  type: UPDATE_SELECT_STATUS,
  value
})

export const createAsyncAction = (groupName, difficult, token) => {
  return dispatch => {
    let data = {
      groupName,
      difficult
    }
    new Promise(resolve => {
      let ret = post('/api/room/select', data, token)
      resolve(ret)
    })
      .then(ret => {
        dispatch(updateSelectMessageAction(ret.message))
        dispatch(updateSelectStatusAction(ret.status))
      })
      .catch(err => {
        throw new Error(err)
      })
  }
}