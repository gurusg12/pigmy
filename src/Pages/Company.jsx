import React from 'react'
import { Outlet } from 'react-router-dom'
import CompanyNav from '../Components/Company/CompanyNav'

const Company = () => {
  return (
    <div>
        <CompanyNav/>

        <Outlet/>
    </div>
  )
}

export default Company