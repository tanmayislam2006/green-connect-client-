import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GreenProvider from './Context/GreenProvider'
import { RouterProvider } from 'react-router'
import router from './Routers/Router'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<GreenProvider>
  <ToastContainer/>
  <RouterProvider router={router}/>
</GreenProvider>
  </StrictMode>,
)
