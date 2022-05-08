import { combineReducers } from 'redux'

import { searchReducer } from './searchReducer'
import { favsReducer } from './favsReducer'
import { idReducer } from './idReducer'

export const rootReducer = combineReducers({
  search: searchReducer,
  favs: favsReducer,
  id: idReducer,
})
