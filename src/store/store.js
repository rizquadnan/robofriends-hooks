import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { searchReducer, robotsReducer } from './reducers'

let store = createStore(
  combineReducers({ searchReducer, robotsReducer }),
  applyMiddleware(thunk, logger),
)

export { store }
