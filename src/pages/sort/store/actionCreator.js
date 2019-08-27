import {
  UPDATE_SORT_LIST,
  UPDATE_SORT_STATUS,
} from './constants'
import get from '../../../lib/get'

export const updateSortListAction = (value) => ({
  type: UPDATE_SORT_LIST,
  value
});

export const updateSortStatusAction = (value) => ({
  type: UPDATE_SORT_STATUS,
  value
});
