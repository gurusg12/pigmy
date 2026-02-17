import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from './Agent/DashBoard'
import Agent from './Pages/Agent'
import Home from './Pages/Home'


import Acclist from './Agent/Acclist'
import Profileupdate from './Agent/Profileupdate'
import Changepass from './Agent/Changepass'

import Recept from './Agent/Recept'
import CompanyDash from './Company/CompanyDash'
import Company from './Pages/Company'
import Authuser from './Auth/Authuser'
import LoginFormAgent from './Pages/LoginFormAgent'
import LoginFormCompany from './Pages/LoginFormCompany'
import Summaryagent from './Agent/Summeryagents'
import DeviceSummary from './Agent/DeviceSummary'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path = '/loginagent' element = {<LoginFormAgent/>}/>
      <Route path = '/logincompany' element = {<LoginFormCompany/>}/>

      <Route path='/agent' element={  <Authuser role='agent' > <Agent/> </Authuser>  } >
      <Route index  element={<DashBoard/>} />
        <Route path ="dashboard" element = {<DashBoard/>}  />
       

        <Route path = 'acclist'  element = {<Acclist/>}/>
        <Route path = 'profileupdate'  element = {<Profileupdate/>}/>
        <Route path='changepass' element={<Changepass/>} />
    
        <Route path='receipts' element={<Recept/>} />
        <Route path='summaryagent' element={<Summaryagent/>} />
        <Route path='deviceSummary' element={<DeviceSummary/>} />


      </Route>
      <Route path='/company' element={<Authuser role="company">{<Company/>}</Authuser>} >
        <Route path ="dashboard" element = {<CompanyDash/>}  />
        <Route path = 'acclist'  element = {<Acclist/>}/>
        <Route path = 'profileupdate'  element = {<Profileupdate/>}/>
        <Route path='changepass' element={<Changepass/>} />
        <Route path='receipts' element={<Recept/>} />
      </Route>
    </Routes>
  )
}

export default App