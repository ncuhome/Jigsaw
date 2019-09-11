import {
  CHANGE_JIGSAW_PIC_TO_JIG,
  CHANGE_JIGSAW_JIG_TO_JIG,
  CHANGE_JIGSAW_JIG_TO_PIC,
  SET_CHANGE,
  SET_SCORE,
  UPDATE_JIGSAW_DATA
} from './constants'

export const setJigsawDataAction = value => ({
  type: UPDATE_JIGSAW_DATA,
  value
});

export const setScoreAction = value => ({
  type: SET_SCORE,
  value
});

export const picToJigAction = value => ({
  type: CHANGE_JIGSAW_PIC_TO_JIG,
  PTJValue: value
});

export const jigToJigAction = value => ({
  type: CHANGE_JIGSAW_JIG_TO_JIG,
  JTJValue: value
});

export const jigToPicAction = value => ({
  type: CHANGE_JIGSAW_JIG_TO_PIC,
  JTPValue: value
});

export const setChangeAction = value => ({
  type: SET_CHANGE,
  value
});
