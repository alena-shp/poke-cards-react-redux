import { combineReducers } from "redux"
import namesReducer from "./../reducers/names"

export const rootReducer = combineReducers({
  names: namesReducer
})
