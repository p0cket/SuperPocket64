import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css' // Import Tailwind CSS file first
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
