import { useContext } from 'react'
import { useTheme } from "./context/ThemeContext.jsx"
import  { routes }  from './routes/routes.jsx'
import './App.css'
import { Cart } from './components/Cart'
import  { Navbar }  from './components/Navbar'
import { CartContext } from './context/CartContext'
import { useRoutes } from 'react-router-dom'
import { Footer } from './components/Footer.jsx'
import { Helmet } from "react-helmet"



function App() {

  const { theme } = useTheme()
  const { isCartOpen, openCart, closeCart } = useContext(CartContext)
  const routing = useRoutes(routes)

  return (
    <>
      <Helmet>
          <meta
            name="google-site-verification"
            content="B6rnbFug4UvuiH3s-FeAiNhYhb_JOGiNQtijBOqZdKA"
          />
          <title>Panificadora Mathius | Pan artesanal en Catamarca</title>
          <meta name="description" content="Panificadora y Panadería artesanal en Catamarca. Productos frescos, facturas, panes artesanales y más. ¡Visitanos!" />
        </Helmet>
      <Navbar openCart={openCart}/>
      { routing }
      {isCartOpen && <Cart closeCart={closeCart}/>}

      {/* Boton Whatsapp */}
      <a
        href="https://wa.me/5493834713230?text=Hola%2C%20quiero%20hacer%20una%20consulta%20a%20la%20panificadora"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-5 right-5 z-50 p-4 rounded-full shadow-lg transition-all duration-300
                   ${theme === 'oscuro' ? 'bg-green-600 hover:bg-green-500 text-white' : 'bg-green-500 hover:bg-green-600 text-white'}`}
        aria-label="Contactar por WhatsApp"
      >
        <i className="bi bi-whatsapp text-3xl"></i>
      </a>

      <Footer />
    </>
  )
}

export default App

