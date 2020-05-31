import { combineReducers } from 'redux'
import namesReducer from './../reducers/names'
import detailsReducer from './../reducers/details'
import abilityReducer from './../reducers/ability'

export const rootReducer = combineReducers({
  names: namesReducer,
  details: detailsReducer,
  ability: abilityReducer
})
