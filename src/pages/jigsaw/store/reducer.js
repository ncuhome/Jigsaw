import {
  CHANGE_JIGSAW_PIC_TO_JIG, 
  CHANGE_JIGSAW_JIG_TO_JIG, 
  CHANGE_JIGSAW_JIG_TO_PIC,
  SET_CHANGE
} from './constants'

const defaultState = {
  roomName: "我们是白给",
  picKind: 0,
  difficult: 5,
  endTime: Math.round(new Date() / 1000)+300,
  jigsawList: [    
    [0,2,3,0,0],
    [6,0,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,0],
    [21,22,23,24,25]
  ],
  pics: [1, 4, 5, 7, 20],
  members: [
    {
      username: "蔡徐坤",
      identity: "leader",
      userId: 12,
      id: 1,
    },
    {
      username: "吴亦凡",
      identity: "member",
      userId: 13,
      id: 2,
    },
    {
      username: "王源",
      identity: "member",
      userId: 14,
      id: 3,
    },
    {
      username: "赵子琦",
      identity: "member",
      userId: 15,
      id: 4,
    },
  ]
};

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case CHANGE_JIGSAW_PIC_TO_JIG:
      const {PTJRowIndex, PTJColumnIndex, PTJHandleValue} = action.PTJValue;
      let PTJList = newState.jigsawList;
      PTJList[PTJRowIndex][PTJColumnIndex] = PTJHandleValue;
      return {...newState,...PTJList};
    case CHANGE_JIGSAW_JIG_TO_JIG:
      const {JTJRowIndex, JTJColumnIndex, JTJHandleValue, JTJHandleRow, JTJHandleColumn} = action.JTJValue;
      let JTJList = newState.jigsawList;
      JTJList[JTJHandleRow][JTJHandleColumn] = 0;
      JTJList[JTJRowIndex][JTJColumnIndex] = JTJHandleValue;
      return {...newState,...JTJList};
    case CHANGE_JIGSAW_JIG_TO_PIC:
      const {JTPRowIndex, JTPColumnIndex} = action.JTPValue;
      let JTPList = newState.jigsawList;
      JTPList[JTPRowIndex][JTPColumnIndex] = 0;
      return {...newState,...JTPList};
    case SET_CHANGE:
      newState.jigsawList = action.value;
      return newState
    default:
      return newState
  }
}