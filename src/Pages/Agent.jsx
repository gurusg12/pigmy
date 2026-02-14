import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Components/Agent/Nav'

const Agent = () => {
  return (
    <div>
        <Nav/>
    
        <Outlet/>
    </div>
  )
}

export default Agent