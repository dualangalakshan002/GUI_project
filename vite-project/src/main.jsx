import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import ProductContextProvider from './Components/ProductContext/ProductContext.jsx'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductContextProvider >
    <Router>
    <React.StrictMode>
      <App />
      </React.StrictMode>,
    </Router>
  </ProductContextProvider>
  
)
