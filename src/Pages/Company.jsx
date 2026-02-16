import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import CompanyNav from '../Components/Company/CompanyNav'
import { LoginUserInfo } from '../Api/Loginfo';

const Company = () => {
  const {loginuser} = useContext(LoginUserInfo)
  return (
    <div>
      <h1>
        {loginuser.status}
      </h1>
      <h2>
        {loginuser.loginfo.name}
      </h2>
        <h2>
        {loginuser.loginfo.name}
      </h2>
        <CompanyNav/>

        <Outlet/>
    </div>
  )
}

export default Company