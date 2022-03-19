import { GET_ROBOTS_PENDING, GET_ROBOTS_SUCCESS, GET_ROBOTS_FAILED, SET_SEARCH_FIELD } from "./constants"
const setSearchField = (text) => ({
  type: SET_SEARCH_FIELD,
  payload: text 
});

const getRobots = () => (dispatch) => {
  dispatch({ type: GET_ROBOTS_PENDING });
  fetch('https://jsonplaceholder.typicode.co/users')
      .then(response=> response.json())
      .then(data => dispatch({ type: GET_ROBOTS_SUCCESS, payload: data }))
      .catch(error => dispatch({ type: GET_ROBOTS_FAILED, payload: error }))
}

export { setSearchField, getRobots }