import { combineReducers } from "redux"
import namesReducer from "./../reducers/names"
import detailsReducer from "./../reducers/details"

export const rootReducer = combineReducers({
  names: namesReducer,
  details: detailsReducer,
})
