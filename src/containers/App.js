import React, { useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { selectSearchField, SET_SEARCH_FIELD, getRobots, selectRobots, selectIsFetchRobotsPending, selectFetchRobotsError } from '../store';

function App() {
  const dispatch = useDispatch();

  const robots = useSelector(selectRobots);
  const isFetchRobotsPending = useSelector(selectIsFetchRobotsPending);
  const fetchRobotsError = useSelector(selectFetchRobotsError);

  const searchField = useSelector(selectSearchField);

  useEffect(()=> {
    dispatch(getRobots())
  },[])

  const onSearchChange = (event) => {
    dispatch({ type: SET_SEARCH_FIELD, payload: event.target.value })
  }

  const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })

  if (fetchRobotsError) {
    return <h1>Error fetching robots. Please refresh the page</h1>
  }

  return isFetchRobotsPending ?
    <h1>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <button onClick={()=>setCount(count+1)}>Click Me!</button>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
}

export default App;