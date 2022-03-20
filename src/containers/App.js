import React from 'react'
import './App.css'
import RobotsContainer from './RobotsContainer'

function App() {
  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
      <RobotsContainer />
    </div>
  )
}

export default App
