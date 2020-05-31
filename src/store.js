import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import namesReducer from './reducers/names'

export const store = createStore(namesReducer, composeWithDevTools(applyMiddleware(thunk)))
