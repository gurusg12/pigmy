import React, { createContext, useState } from 'react'
export const Dashboards = createContext(null)

const ComDashBoard = ({children}) => {
    const [dash , setdash] = useState({})
    const [agents , setagents] = useState([])
    const [acclist , setcclist] = useState([])


  return (

    <Dashboards.Provider value={{dash , setdash , agents , setagents , acclist , setcclist}} >
        {children}
    </Dashboards.Provider>
  )
}

export default ComDashBoard