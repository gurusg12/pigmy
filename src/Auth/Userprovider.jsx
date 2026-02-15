import React, { createContext, useState } from 'react'
export const UserContext = createContext(null)

const Userprovider = ({children}) => {
const[ user , setuser ] = useState({})



  return (
   <UserContext.Provider value={{user ,setuser}}>
    {children}
   </UserContext.Provider>
  )
}

export default Userprovider