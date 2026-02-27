import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const DashBoard = lazy(() => import('./Agent/DashBoard'))
const Agent = lazy(() => import('./Pages/Agent'))
const Home = lazy(() => import('./Pages/Home'))
const Acclist = lazy(() => import('./Agent/Acclist'))
const Profileupdate = lazy(() => import('./Agent/Profileupdate'))
const Changepass = lazy(() => import('./Agent/Changepass'))
const CompanyDash = lazy(() => import('./Company/CompanyDash'))
const Company = lazy(() => import('./Pages/Company'))
const Authuser = lazy(() => import('./Auth/Authuser'))
const LoginFormAgent = lazy(() => import('./Pages/LoginFormAgent'))
const LoginFormCompany = lazy(() => import('./Pages/LoginFormCompany'))
const AgentsList = lazy(() => import('./Company/AgentsList'))
const AgentConfig = lazy(() => import('./Company/AgentsList/AgentConfig'))
const Accountlist = lazy(() => import('./Company/AgentsList/Accountlist'))
const Acc = lazy(() => import('./Company/Acc'))
const AgentColl = lazy(() => import('./Components/Company/Reports/AgentColl'))



const App = () => {
  return (
    <Suspense fallback={ <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-cyan-400 via-slate-600 to-lime-900 text-white">

      {/* Animated SVG Ring */}
      <div className="relative w-24 h-24">
        <svg
          className="animate-spin"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="white"
            strokeWidth="8"
            fill="none"
            strokeDasharray="200"
            strokeDashoffset="150"
            strokeLinecap="round"
          />
        </svg>

        {/* Inner Glow Circle */}
        <div className="absolute inset-0 rounded-full bg-white opacity-10 blur-xl animate-pulse"></div>
      </div>

      {/* Loading Text */}
      <p className="mt-8 text-3xl font-semibold tracking-widest animate-pulse">
        Loading...
      </p>

      {/* Small Animated Dots */}
      <div className="flex space-x-2 mt-4">
        <span className="w-3 h-3 bg-white rounded-full animate-bounce"></span>
        <span className="w-3 h-3 bg-white rounded-full animate-bounce delay-150"></span>
        <span className="w-3 h-3 bg-white rounded-full animate-bounce delay-300"></span>
      </div>

    </div>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/loginagent' element={<LoginFormAgent />} />
        <Route path='/logincompany' element={<LoginFormCompany />} />

        <Route
          path='/agent'
          element={
            <Authuser role='agent'>
              <Agent />
            </Authuser>
          }
        >
          <Route index element={<DashBoard />} />
          <Route path='dashboard' element={<DashBoard />} />
          <Route path='acclist' element={<Acclist />} />
          <Route path='profileupdate' element={<Profileupdate />} />
          <Route path='changepass' element={<Changepass />} />
        </Route>

        <Route
          path='/company'
          element={
            <Authuser role='company'>
              <Company />
            </Authuser>
          }
        >
          <Route index element={<CompanyDash />} />
          <Route path='acclist' element={<AgentsList />} />
          <Route path='agentsacclist/:id' element={<Accountlist />} />
          <Route path='acclist/:id' element={<AgentConfig />} />
          <Route path='acc' element={<Acc />} />
          <Route path='agentcollection/:id' element={<AgentColl />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
