import { useContext } from 'react'
import  { routes }  from './routes/routes.jsx'
import './App.css'
import { Cart } from './components/Cart'
import  { Navbar }  from './components/Navbar'
import { CartContext } from './context/CartContext'
import { useRoutes } from 'react-router-dom'
import { Footer } from './components/Footer.jsx'



function App() {
  
  const { isCartOpen, openCart, closeCart } = useContext(CartContext)
  const routing = useRoutes(routes)

  return (
    <>
      <Navbar openCart={openCart}/>
      { routing }
      {isCartOpen && <Cart closeCart={closeCart}/>}
      <Footer />
    </>
  )
}

export default App

