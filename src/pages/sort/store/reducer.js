import {
  UPDATE_SORT_LIST,
} from './constants'

const defaultState = {
  list: [
    {
      roomName: "白给小队",
      roomId: 123123,
      members: [
        {
          username: "孙翔宇",
          userId: 5504118087
        },
        {
          username: "赵子琦",
          userId: 12341
        },
        {
          username: "胡昊江",
          userId: 123
        }
      ],
      score: 74
    },
    {
      roomName: "我是弟弟",
      roomId: 23333,
      members: [
        {
          username: "张纪元",
          userId: 123554332
        },
        {
          username: "我是弟弟",
          userId: 1234
        },
        {
          username: "胡昊江",
          userId: 123
        },
        {
          username: "田弟弟",
          userId: 4321123
        }
      ],
      score: 73
    },
    {
      roomName: "我是哥哥",
      roomId: 46633,
      members: [
        {
          username: "社会人",
          userId: 12332
        },
        {
          username: "赵子琦",
          userId: 1234123
        },
        {
          username: "胡昊江",
          userId: 123
        },
        {
          username: "赵弟弟",
          userId: 123123
        },
        {
          username: "胡弟弟",
          userId: 1235555
        }
      ],
      score: 76
    },
    {
      roomName: "我是",
      roomId: 4663311,
      members: [
        {
          username: "社会人",
          userId: 12332
        },
        {
          username: "赵子琦",
          userId: 1234123
        },
        {
          username: "胡昊江",
          userId: 123
        },
        {
          username: "赵弟弟",
          userId: 123123
        },
        {
          username: "胡弟弟",
          userId: 1235555
        }
      ],
      score: 76
    },
  ],
};

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case UPDATE_SORT_LIST:
      newState.list = action.value;
      return newState;
    default:
      return newState
  }
}
