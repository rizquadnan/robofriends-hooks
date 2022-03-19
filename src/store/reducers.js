import { setSearchField } from "./actions";

const initialState = {
  searchField: ''
};
const searchReducer = (state = initialState, action = {} ) => {
  switch (action.type) {
    case "SET_SEARCH_FIELD":
      return { ...state, searchField: action.payload };
    default:
      return state
  }
};

export { searchReducer }