import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'



const Nav = () => {
  const navigae = useNavigate()

  const submitHandler = (e) => {
    e.prevantDefault()
    console.log("form submited");
    navigae("/home")
  };

  return (
    <div>
     
      
        <NavLink style={(e) => ({fontWeight: e.isActive ? "900" : "400"})} to = "/home"> Home </NavLink>
        <NavLink style={(e) => ({color : e.isActive ? "green" : ""})} to = "/about"> About </NavLink>
        <NavLink to = "/user"> User </NavLink>

        <form onSubmit={submitHandler}>
          <input type="submit" />
        </form>

    </div>
  )
}

export default Nav
