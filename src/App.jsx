import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from './Pages/LoginForm'
import DashBoard from './Agent/DashBoard'
import Agent from './Pages/Agent'
import Home from './Pages/Home'
import Manageuser from './Agent/Manageuser'
import Manageacc from './Agent/Manageacc'
import Acclist from './Agent/Acclist'
import Profileupdate from './Agent/Profileupdate'
import Changepass from './Agent/Changepass'
import Logout from './Agent/Logout'
import Recept from './Agent/Recept'
import CompanyDash from './Company/CompanyDash'
import Company from './Pages/Company'
import Authuser from './Auth/Authuser'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path = '/login' element = {<LoginForm/>}/>
      <Route path='/agent' element={  <Authuser role='agent' > {<Agent/>} </Authuser>  } >
        <Route path ="dashboard" element = {<DashBoard/>}  />
        <Route path = 'manageuser'  element = {<Manageuser/>}/>
        <Route path = 'manageacc'  element = {<Manageacc/>}/>
        <Route path = 'acclist'  element = {<Acclist/>}/>
        <Route path = 'profileupdate'  element = {<Profileupdate/>}/>
        <Route path='changepass' element={<Changepass/>} />
        <Route path='logout' element={<Logout/>} />
        <Route path='receipts' element={<Recept/>} />
      </Route>
      <Route path='/company' element={<Authuser role="company">{<Company/>}</Authuser>} >
        <Route path ="dashboard" element = {<CompanyDash/>}  />
        <Route path = 'manageuser'  element = {<Manageuser/>}/>
        <Route path = 'manageacc'  element = {<Manageacc/>}/>
        <Route path = 'acclist'  element = {<Acclist/>}/>
        <Route path = 'profileupdate'  element = {<Profileupdate/>}/>
        <Route path='changepass' element={<Changepass/>} />
        <Route path='logout' element={<Logout/>} />
        <Route path='receipts' element={<Recept/>} />
      </Route>
    </Routes>
  )
}

export default App