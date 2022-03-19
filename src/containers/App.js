import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { selectSearchField, SET_SEARCH_FIELD } from '../store';

function App() {
  const [robots, setRobots] = useState([])
  const [count, setCount] = useState(0) // for demo purposes
  const searchField = useSelector(selectSearchField);
  const dispatch = useDispatch();

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {setRobots(users)});
    // console.log(count)
  },[]) // if you add count, only run if count changes.

  const onSearchChange = (event) => {
    dispatch({ type: SET_SEARCH_FIELD, payload: event.target.value })
  }

  const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })

  return !robots.length ?
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