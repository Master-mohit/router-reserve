import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './Components/Nav'
import Mainroutes from './Components/Mainroutes'

const App = () => {
  return (
    <Router>
      <Nav />
      <Mainroutes />
    </Router>
  );
}

export default App
