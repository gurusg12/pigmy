import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from './Agent/DashBoard'
import Agent from './Pages/Agent'
import Home from './Pages/Home'


import Acclist from './Agent/Acclist'
import Profileupdate from './Agent/Profileupdate'
import Changepass from './Agent/Changepass'

import CompanyDash from './Company/CompanyDash'
import Company from './Pages/Company'
import Authuser from './Auth/Authuser'
import LoginFormAgent from './Pages/LoginFormAgent'
import LoginFormCompany from './Pages/LoginFormCompany'
import AgentsList from './Company/AgentsList'
import AgentConfig from './Company/AgentsList/AgentConfig'
import Accountlist from './Company/AgentsList/Accountlist'
import Acc from './Company/Acc'

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
    


      </Route>
      <Route path='/company' element={<Authuser role="company"><Company/></Authuser>} >
        <Route index  element = {<CompanyDash/>}  />
        <Route path = 'acclist'  element = {<AgentsList/>}/>
        <Route path = 'agentsacclist/:id'  element = {<Accountlist/>}/>
        <Route path = 'acclist/:id'  element = {<AgentConfig/>}/>
        <Route path = 'acc'  element = {<Acc/>}/>

      </Route>
    </Routes>
  )
}

export default App