import {
  ON_CHANGE_USERID,
  ON_CHANGE_PASSWORD,
  SET_TOKEN,
  SET_NAME,
  UPDATE_MSG
} from './constants'
import post from '../../../lib/post'

export const onUserIdChangeAction = (value) => ({
  type: ON_CHANGE_USERID,
  value
})

export const onPasswordChangeAction = (value) => ({
  type: ON_CHANGE_PASSWORD,
  value
})

export const loginAsyncAction = (userId, password) => {
  return dispatch => {
    let data = {
      userId,
      password
    }
    new Promise(resolve => {
      let ret = post('/api/user/login', data, '')
      resolve(ret)
    })
      .then(ret => {
        dispatch(setTokenAction(ret.token))
        dispatch(setUserNameAction(ret.username))
        dispatch(updateStatusMessage(ret.message))
      })
      .catch(err => {
        throw new Error(err)
      })
  }
}

export const setUserNameAction = value => ({
  type: SET_NAME,
  value
})

export const setTokenAction = (value) => ({
  type: SET_TOKEN,
  value
})

export const updateStatusMessage = value => ({
  type: UPDATE_MSG,
  value
})