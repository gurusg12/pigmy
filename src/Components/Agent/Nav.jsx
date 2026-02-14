import React from 'react'
import {  NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='h-30 w-full bg-slate-600 flex justify-around items-center'>
      <div className='bg-amber-300'><p>Agent</p>
      <p>logo</p>
      <p>name of user</p></div>
      <NavLink to='manageuser'><span className='bg-red-600 mr-3.5'>logo</span> manageruser</NavLink>
      <NavLink to='dashboard'>
      DashBoard
      </NavLink>
      <NavLink to = 'profileupdate'>Profile update</NavLink>
      <NavLink to = 'changepass'>CHange password</NavLink>
      <NavLink to = 'logout'>logout</NavLink>


        <NavLink to = 'manageacc'>
        Manage Account
        </NavLink>
        <NavLink to = 'acclist'>Account list</NavLink>
    </div>
  )
}

export default Nav