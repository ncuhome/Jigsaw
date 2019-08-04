import {
  UPDATE_ROOM_STATUS,
  UPDATE_MEMBERS_LIST
} from './constants'

const defaultState = {
  roomName: "白色相簿",
  username: "孙翔宇",
  userId: 123,
  endTime: Math.round(new Date() / 1000)+20,
  members: [
    {
      username: "胡昊江",
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
  difficult: 3,
  status: 0,
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case UPDATE_ROOM_STATUS:
      newState.status = action.value
      return newState
    case UPDATE_MEMBERS_LIST:
      newState.members = action.value
      return newState
    default:
      return newState
  }
}
