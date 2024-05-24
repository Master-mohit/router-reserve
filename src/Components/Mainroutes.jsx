import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import User from './User'
import Not from './Not'

const Mainroutes = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/user' element={<User />} />
      <Route path='*' element={<Not />} />
    </Routes>
  );
}

export default Mainroutes
