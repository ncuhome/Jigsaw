import {
  SET_NAME,
} from './constants'
import get from '../../../lib/get'
import {sendToken} from '../../../lib/ws'

const setUserNameAction = value => ({
  type: SET_NAME,
  value
});

export const getUsernameAsyncAction = (token) => {
  return dispatch => {
    new Promise(resolve => {
      let ret = get('https://os.ncuos.com/api/user/profile/index', token);
      resolve(ret)
    })
      .then(ret => {
        dispatch(setUserNameAction(ret.name));
        window.localStorage.setItem('username', ret.name);
        sendToken(JSON.stringify({
          username: ret.name,
          token
        }))
      })
      .catch(err => {
        throw new Error(err)
      })
  }
};