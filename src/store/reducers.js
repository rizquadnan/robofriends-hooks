import { GET_ROBOTS_FAILED, GET_ROBOTS_PENDING, GET_ROBOTS_SUCCESS } from "./constants";

const initialSearch = {
  searchField: ''
};
const searchReducer = (state = initialSearch, action = {} ) => {
  switch (action.type) {
    case "SET_SEARCH_FIELD":
      return { ...state, searchField: action.payload };
    default:
      return state
  }
};

const initialRobots = {
  robots: [],
  isPending: false,
  error: ''
};
const robotsReducer = (state = initialRobots, action = {} ) => {
  switch(action.type) {
    case GET_ROBOTS_PENDING:
      return { ...state, isPending: true }
    case GET_ROBOTS_SUCCESS:
      return { ...state, isPending: false, robots: action.payload }
    case GET_ROBOTS_FAILED:
      return { ...state, isPending: false, error: action.payload }
    default:
      return state
  }
}

export { searchReducer, robotsReducer }