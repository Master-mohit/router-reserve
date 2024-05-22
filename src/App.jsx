import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import User from './Components/User'
import Nav from './Components/Nav'

import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
       <Home/> 
       <About/> 
       <User/>

       <Nav/> 

       <Routes>
       <Route path='/home' element={<Home/>} />
           <Route path='/bout' element={<About/>} />
           <Route path='/user' element={<User/>} />
       </Routes>
    </div>
  )
}

export default App
