import {
  CHANGE_JIGSAW_PIC_TO_JIG,
  CHANGE_JIGSAW_JIG_TO_JIG,
  CHANGE_JIGSAW_JIG_TO_PIC,
  SET_CHANGE,
  SET_SCORE,
  UPDATE_JIGSAW_DATA
} from './constants'

const defaultState = {
  roomName: "",
  score: 0,
  picKind: 2,
  difficult: 3,
  endTime: null,
  jigsawList: [],
  pics: [],
  members: []
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