import React, { createContext, useState } from 'react'
export const Dashboards = createContext(null)

const ComDashBoard = ({children}) => {
    const [dash , setdash] = useState({})
    const [agents , setagents] = useState([])

  return (

    <Dashboards.Provider value={{dash , setdash , agents , setagents}} >
        {children}
    </Dashboards.Provider>
  )
}

export default ComDashBoard