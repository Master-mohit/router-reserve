import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import User from './Components/User'
import Nav from './Components/Nav'

import { Route, Routes } from 'react-router-dom'
import Not from './Components/Not'
import Mainroutes from './Components/Mainroutes'

const App = () => {
  return (
    <div>
       <Home/> 
       <About/> 
       <User/>
       <Not/>
       <Nav/> 
   <Mainroutes/>
    </div>
  )
}

export default App
