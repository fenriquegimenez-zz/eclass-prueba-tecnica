import { combineReducers } from 'redux'

import { searchReducer } from './searchReducer'
import { favsReducer } from './favsReducer'

export const rootReducer = combineReducers({
  search: searchReducer,
  favs: favsReducer,
})
