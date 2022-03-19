const selectSearchField = (state) => state.searchReducer.searchField
const selectRobots = (state) => state.robotsReducer.robots
const selectIsFetchRobotsPending = (state) => state.robotsReducer.isPending
const selectFetchRobotsError = (state) => state.robotsReducer.error

export {
  selectSearchField,
  selectRobots,
  selectIsFetchRobotsPending,
  selectFetchRobotsError,
}
