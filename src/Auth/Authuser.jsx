import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from './Userprovider'

const Authuser = ({children , role}) => {
    const {user} = useContext(UserContext)

    if(!user){
        return <Navigate to='/' replace />
    }

    if(role && !role.includes(user.role)){
        alert ("for these page we dont have access for your role")
        return <Navigate to = "/" replace />
    }
  return children
}

export default Authuser