import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'

import { searchReducer } from "./reducers";

let store = createStore(searchReducer, applyMiddleware(logger));

export { store };