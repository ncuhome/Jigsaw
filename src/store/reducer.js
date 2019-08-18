import { combineReducers } from 'redux'
import { reducer as archiveReducer } from '../pages/archivepage/store'
import { reducer as detailReducer } from '../pages/detail/store'
import { reducer as loginReducer } from '../pages/login/store'
import { reducer as jigsawReducer } from '../pages/jigsaw/store'
import { reducer as newReducer } from '../pages/new/store'
import { reducer as roomReducer } from '../pages/room/store'
import { reducer as joinReducer } from '../pages/join/store'

const reducer = combineReducers({
  archive: archiveReducer,
  detail: detailReducer,
  login: loginReducer,
  jigsaw: jigsawReducer,
  new: newReducer,
  room: roomReducer,
  join: joinReducer,
})

export default reducer
