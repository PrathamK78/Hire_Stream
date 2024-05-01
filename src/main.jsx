import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    {/* strictmode checks for potential problems */}
    <App />
  </React.StrictMode>,
)
