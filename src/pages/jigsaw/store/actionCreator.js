import {
  CHANGE_JIGSAW_PIC_TO_JIG, 
  CHANGE_JIGSAW_JIG_TO_JIG, 
  CHANGE_JIGSAW_JIG_TO_PIC,
  SET_CHANGE
} from './constants'

export const picToJig = value => ({
  type: CHANGE_JIGSAW_PIC_TO_JIG,
  PTJValue: value
});

export const jigToJig = value => ({
  type: CHANGE_JIGSAW_JIG_TO_JIG,
  JTJValue: value
});

export const jigToPic = value => ({
  type: CHANGE_JIGSAW_JIG_TO_PIC,
  JTPValue: value
});

export const setChange = value => ({
  type: SET_CHANGE,
  value
});