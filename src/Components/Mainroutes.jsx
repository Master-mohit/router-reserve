import React from 'react'

const Mainroutes = () => {
  return (
    <div>
      
      <Routes>
       <Route path='/home' element={<Home/>} />
           <Route path='/about' element={<About/>} />
           <Route path='/user' element={<User/>} />
           <Route path='*' element = {<Not/>} />
       </Routes>
    </div>
  )
}

export default Mainroutes
