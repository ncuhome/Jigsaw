import {
  CHANGE_JIGSAW_PIC_TO_JIG, 
  CHANGE_JIGSAW_JIG_TO_JIG, 
  CHANGE_JIGSAW_JIG_TO_PIC,
  SET_CHANGE
} from './constants'

const defaultState = {
  roomId: 114512,
  picKind: 2,
  difficult: 4,
  jigsawList: [    
    [0, 2, 3, 0],
    [0, 6, 0, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ],
  pics: [1, 4, 5, 7],
  members: [
    {
      username: "蔡徐坤",
      color: "#07E6FF",
      identity: "leader"
    },
    {
      username: "吴亦凡",
      color: "#fff",
      identity: "member"
    },
    {
      username: "王源",
      color: "#fff",
      identity: "member"
    },
    {
      username: "赵子琦",
      color: "#fff",
      identity: "member"
    }
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