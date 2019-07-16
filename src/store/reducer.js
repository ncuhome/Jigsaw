import { combineReducers } from 'redux'
import { reducer as archiveReducer } from '../pages/archivepage/store'
import { reducer as detailReducer } from '../pages/detail/store'
import { reducer as loginReducer } from '../pages/login/store'
import { reducer as homeReducer } from '../pages/homepage/store'
import { reducer as jigsawReducer } from '../pages/jigsaw/store'

const reducer = combineReducers({
  archive: archiveReducer,
  detail: detailReducer,
  login: loginReducer,
  home: homeReducer,
  jigsaw: jigsawReducer
})

export default reducer
