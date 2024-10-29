import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Scroller } from './context/PortFolioContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Scroller>
      <App />
    </Scroller>
  </StrictMode>,
)
