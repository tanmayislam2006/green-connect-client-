import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GreenProvider from './Context/GreenProvider'
import { RouterProvider } from 'react-router'
import router from './Routers/Router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<GreenProvider>
  <RouterProvider router={router}/>
</GreenProvider>
  </StrictMode>,
)
