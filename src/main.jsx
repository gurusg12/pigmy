import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Userprovider from './Auth/Userprovider.jsx'
import LoginUserSchema from './Api/Loginfo.jsx'
import ComDashBoard from './Auth/ComDashBoard.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginUserSchema>
      <Userprovider>
        <ComDashBoard>
          <BrowserRouter>
            <App />
          </BrowserRouter>
         </ComDashBoard>
      </Userprovider>
    </LoginUserSchema>
  </StrictMode>,
)
