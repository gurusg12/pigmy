import React, { createContext } from 'react'
export const UserContext = createContext(null)

const Userprovider = ({children}) => {
const user = {
    username :"guru" , role : "company"
}
  return (
   <UserContext.Provider value={user}>
    {children}
   </UserContext.Provider>
  )
}

export default Userprovider