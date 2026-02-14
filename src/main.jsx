import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Userprovider from './Auth/Userprovider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Userprovider>
        <BrowserRouter>
     <App />
    </BrowserRouter>
   

    </Userprovider>
  
  </StrictMode>,
)
