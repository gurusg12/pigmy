import React, { createContext, useState } from 'react'
export const Dashboards = createContext(null)

const ComDashBoard = ({children}) => {
    const [dash , setdash] = useState({})
    const [agents , setagents] = useState([])
    const [acclist , setacclist] = useState([])
    const [token , settoken] = useState('')
    const [username , setusername] = useState('')


  return (

    <Dashboards.Provider value={{dash , setdash , agents , setagents , acclist , setacclist , token , settoken , username , setusername}} >
        {children}
    </Dashboards.Provider>
  )
}

export default ComDashBoard