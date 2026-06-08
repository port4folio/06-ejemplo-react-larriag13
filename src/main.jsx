import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ToDoList from './ToDoList.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Ejemplo React</h1>
    <ToDoList/>
  </StrictMode>,
)
