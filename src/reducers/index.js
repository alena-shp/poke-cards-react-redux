import { combineReducers } from 'redux'
import namesReducer from './../reducers/names'
import detailsReducer from './../reducers/details'
import abilityReducer from './../reducers/ability'
import filterReducer from './../reducers/filter'

export const rootReducer = combineReducers({
  names: namesReducer,
  details: detailsReducer,
  ability: abilityReducer,
  filter: filterReducer
})
