import {
  ON_CHANGE_USERID,
  ON_CHANGE_PASSWORD,
  SET_TOKEN,
  SET_NAME,
  UPDATE_MSG,
  SET_STATUS
} from './constants'
import post from '../../../lib/post'
import get from '../../../lib/get'

const getUsernameAsyncAction = (token) => {
  return dispatch => {
    new Promise(resolve => {
      let ret = get('https://os.ncuos.com/api/user/profile/index', token);
      resolve(ret)
    })
      .then(ret => {
        dispatch(setUserNameAction(ret.name))
      })
      .catch(err => {
        throw new Error(err)
      })
  }
};

const setUserNameAction = value => ({
  type: SET_NAME,
  value
});

const setTokenAction = (value) => ({
  type: SET_TOKEN,
  value
});

const updateStatusMessage = value => ({
  type: UPDATE_MSG,
  value
});

const setStatusAction = (value) => ({
  type: SET_STATUS,
  value
})

export const onUserIdChangeAction = (value) => ({
  type: ON_CHANGE_USERID,
  value
});


export const onPasswordChangeAction = (value) => ({
  type: ON_CHANGE_PASSWORD,
  value
});


export const loginAsyncAction = (userId, password) => {
  return dispatch => {
    let data = {
      username: userId,
      password
    };
    new Promise(resolve => {
      let ret = post('https://os.ncuos.com/api/user/token', data, '');
      resolve(ret)
    })
      .then(ret => {
        dispatch(setStatusAction(ret.status));
        if(ret.status === 1){
          dispatch(setTokenAction(ret.token));
          dispatch(updateStatusMessage(ret.message));
          dispatch(getUsernameAsyncAction(ret.token));
        }else {
          dispatch(updateStatusMessage(ret.message));
        }
      })
      .catch(err => {
        throw new Error(err)
      })
  }
};