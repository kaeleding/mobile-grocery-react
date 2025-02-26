import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GroceryListApp from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GroceryListApp />
  </StrictMode>,
)
