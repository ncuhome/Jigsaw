import {
  CHANGE_JIGSAW_PIC_TO_JIG,
  CHANGE_JIGSAW_JIG_TO_JIG,
  CHANGE_JIGSAW_JIG_TO_PIC,
  SET_CHANGE,
  SET_SCORE,
  UPDATE_JIGSAW_DATA
} from './constants'

const defaultState = {
  roomName: "来发张自拍",
  score: 0,
  picKind: 2,
  difficult: 5,
  endTime: Math.round(new Date() / 1000) + 300,
  jigsawList: [
    [0, 2, 3, 0, 0],
    [6, 0, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 0],
    [21, 22, 23, 24, 25]
  ],
  pics: [1, 4, 5, 7, 20],
  members: [
    {
      username: "孙翔宇",
      identity: "leader",
      id: 1,
    },
    {
      username: "吴亦凡",
      identity: "member",
      id: 2,
    },
    {
      username: "王源",
      identity: "member",
      id: 3,
    },
    {
      username: "孙翔",
      identity: "member",
      id: 4,
    },
  ]
};

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case UPDATE_JIGSAW_DATA:
      newState = action.value;
      return newState;
    case CHANGE_JIGSAW_PIC_TO_JIG:
      const {PTJRowIndex, PTJColumnIndex, PTJHandleValue} = action.PTJValue;
      let PTJList = newState.jigsawList;
      PTJList[PTJRowIndex][PTJColumnIndex] = PTJHandleValue;
      return {...newState, ...PTJList};
    case CHANGE_JIGSAW_JIG_TO_JIG:
      const {JTJRowIndex, JTJColumnIndex, JTJHandleValue, JTJHandleRow, JTJHandleColumn} = action.JTJValue;
      let JTJList = newState.jigsawList;
      JTJList[JTJHandleRow][JTJHandleColumn] = 0;
      JTJList[JTJRowIndex][JTJColumnIndex] = JTJHandleValue;
      return {...newState, ...JTJList};
    case CHANGE_JIGSAW_JIG_TO_PIC:
      const {JTPRowIndex, JTPColumnIndex} = action.JTPValue;
      let JTPList = newState.jigsawList;
      JTPList[JTPRowIndex][JTPColumnIndex] = 0;
      return {...newState, ...JTPList};
    case SET_SCORE:
      newState.score = action.value;
      return newState
    case SET_CHANGE:
      newState.jigsawList = action.value;
      return newState
    default:
      return newState
  }
}