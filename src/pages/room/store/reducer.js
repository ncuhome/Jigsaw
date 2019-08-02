import {
  ON_CHANGE_GROUPNAME,
  UPDATE_NEW_MSG,
  UPDATE_NEW_STATUS,
  SET_DIFFICULT,
  UPDATE_PAGE
} from './constants'

const defaultState = {
  roomName: "白色相簿",
  username: "孙翔宇",
  userId: 123,
  members: [
    {
      username: "孙翔宇",
      userId: 123,
      identity: "leader",
      class: "物理学类 183班",
      ready: true,
      readyTime: 123,
      id: 1
    },
    {
      username: "赵子琦",
      userId: 11,
      identity: "member",
      class: "数学与应用数学 193班",
      ready: true,
      readyTime: 123,
      id: 2
    }
  ],
  message: "胡昊江加入本房间",
  difficult: 4,
  status: 0,
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case UPDATE_PAGE:
      newState.page = action.value
      return newState
    case SET_DIFFICULT:
      newState.difficult = action.value
      return newState
    case ON_CHANGE_GROUPNAME:
      newState.groupName = action.value
      return newState
    case UPDATE_NEW_MSG:
      newState.message = action.value
      return newState
    case UPDATE_NEW_STATUS:
      newState.status = action.value
      return newState
    default:
      return newState
  }
}
