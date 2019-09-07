import {
  UPDATE_MEMBERS_LIST,
  SET_ROOM_NAME
} from './constants'

const defaultState = {
  roomName: "白色相簿",
  roomId: 13321452314,
  username: "孙翔宇",
  userId: 123,
  members: [
    {
      username: "胡昊江",
      userId: 123,
      identity: "leader",
      class: "物理学类 183班",
      ready: true,
      id: 1
    },
    {
      username: "赵子琦",
      userId: 11,
      identity: "member",
      class: "数学与应用数学 193班",
      ready: true,
      id: 2
    },
    {
      username: "田承涵",
      userId: 13,
      identity: "member",
      class: "信息与计算科学 181班",
      ready: false,
      id: 3
    }
  ],
  message: "胡昊江加入本房间",
  difficult: 4,
};

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case SET_ROOM_NAME:
      newState.roomName = action.value;
      return newState;
    case UPDATE_MEMBERS_LIST:
      newState.members = action.value;
      return newState;
    default:
      return newState
  }
}
