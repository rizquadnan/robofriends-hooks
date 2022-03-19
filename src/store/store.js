import { createStore } from 'redux';
import { searchReducer } from "./reducers";

let store = createStore(searchReducer);

export { store };