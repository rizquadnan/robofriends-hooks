import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox'
import { getRobots, SET_SEARCH_FIELD, selectIsFetchRobotsPending, selectFetchRobotsError, selectSearchField, selectRobots } from '../store'

export default function RobotsContainer() {
  const dispatch = useDispatch()

  const robots = useSelector(selectRobots)
  const isFetchRobotsPending = useSelector(selectIsFetchRobotsPending)
  const fetchRobotsError = useSelector(selectFetchRobotsError)

  const searchField = useSelector(selectSearchField)

  useEffect(() => {
    dispatch(getRobots())
  }, [])

  const onSearchChange = (event) => {
    dispatch({ type: SET_SEARCH_FIELD, payload: event.target.value })
  }

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })

  if (fetchRobotsError) {
    return <h1>Error fetching robots. Please refresh the page</h1>
  }

  return (
    <>
      {isFetchRobotsPending ? (
        <h1>Loading</h1>
      ) : (
        <>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </>
      )}
    </>
  )
}
