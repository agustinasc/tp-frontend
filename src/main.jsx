import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './context/CartContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <UserProvider>
          <CartProvider>
            <App />
            <ToastContainer />
          </CartProvider>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
