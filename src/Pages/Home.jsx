import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <NavLink to='/agent'>
        Agent
        </NavLink>
        <NavLink to='/company'>
        Company
        </NavLink>
    </div>
  )
}

export default Home