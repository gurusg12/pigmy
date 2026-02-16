import React, { createContext, useState } from 'react'
export const Dashboards = createContext(null)

const ComDashBoard = ({children}) => {
    const [dash , setdash] = useState({})
  return (

    <Dashboards.Provider value={{dash , setdash}} >
        {children}
    </Dashboards.Provider>
  )
}

export default ComDashBoard