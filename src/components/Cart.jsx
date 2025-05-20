import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import {ThemeContext} from "../context/ThemeContext"
import { motion, AnimatePresence } from "framer-motion";




export const Cart = () => {
    const { cart, addToCart, removeFromCart, closeCart, clearCart, removeProduct } = useContext(CartContext)
    const { theme } = useContext(ThemeContext)
    const totalCart = cart.reduce((acc, item) => acc + (parseFloat(item.precio)) * item.quantity, 0).toFixed(2);

     return (
  <>
    {/* Fondo oscurecido (click para cerrar) */}
    <div
      className={`fixed inset-0 z-50 ${theme === "oscuro" ? "bg-black bg-opacity-60" : "bg-[#034b1f]/30  backdrop-blur-sm"}`}
      onClick={closeCart}
    />

    {/* Contenedor del carrito animado desde la derecha */}
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className={`fixed top-0 right-0 h-full z-50 w-[90%] sm:w-[400px] md:w-[500px] overflow-y-auto shadow-xl 
        ${theme === "oscuro" ? "bg-[#2D2D2D] text-white" : "bg-[#FAE5CF] text-[#5B0601]"} p-6`}
    >
      <h2 className="text-lg sm:text-xl font-bold">Mi Carrito de Compras</h2>

      <button
        onClick={closeCart}
        className={`absolute top-4 right-6 text-2xl transition 
          ${theme === "oscuro" ? "text-white hover:text-red-400" : "text-[#5B0601] hover:text-red-700"}`}
      >
        Cerrar
        <i className="bi bi-x"></i>
      </button>

      {
        cart.length === 0 ? (
          <p className='text-gray-400 text-center text-lg mt-6'>Carrito Vacío</p>
        ) : (
          cart.map((product, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-center p-2 m-2 sm:p-4 rounded-lg shadow-md
                ${theme === "oscuro" ? "bg-[#3E3E3E]" : "bg-white"}`}
            >
              <img src={product.imagen} alt={product.nombre}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md mb-2 sm:mb-0 sm:mr-4"
              />
              <div className="flex-1 text-center sm:text-left">
                <p className="text-sm sm:text-lg font-semibold">{product.nombre}</p>
                <p className={`text-xs sm:text-sm ${theme === "oscuro" ? "text-white" : "text-gray-600"}`}>
                  {product.quantity} unidades
                </p>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-sm sm:text-base">${product.precio} c/u</p>
                <p className="text-xs sm:text-sm font-bold">
                  Subtotal: ${(product.precio * product.quantity).toFixed(2)}
                </p>
              </div>
              <div className="flex space-x-2 m-2 sm:mt-0">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-emerald-700 text-white w-8 sm:w-12 px-1 py-1 rounded-lg hover:bg-green-500 transition"
                >
                  <i className="bi bi-plus-lg"></i>
                </button>
                <button
                  onClick={() => removeFromCart(product)}
                  className="bg-red-700 text-white w-8 sm:w-12 px-1 py-1 rounded-lg hover:bg-red-500 transition"
                >
                  <i className="bi bi-dash-lg"></i>
                </button>
              </div>
              <button
                onClick={() => removeProduct(product.id)}
                className="bg-blue-800 text-white w-8 sm:w-12 px-1 py-1 rounded-lg hover:bg-blue-500 transition"
              >
                <i className="bi bi-trash-fill"></i>
              </button>
            </div>
          ))
        )
      }

      {cart.length > 0 && (
        <>
          <div className={`flex flex-col sm:flex-row items-center justify-between p-3 rounded-lg shadow-md mt-4
            ${theme === "oscuro" ? "bg-[#3E3E3E]" : "bg-white"}`}>
            <img src="/logo2.png" className="w-16 h-16 object-cover rounded-md mb-2 sm:mb-0 sm:mr-4" />
            <p className={`text-lg sm:text-xl font-bold ${theme === "oscuro" ? "text-white" : "text-[#5B0601]"}`}>
              TOTAL CARRITO ${totalCart}
           </p>
            <button className="m-4 w-40 bg-emerald-800 text-white p-2 rounded-lg font-bold hover:bg-green-500 transition">
              Comprar
            </button>
          </div>

          <button
            onClick={clearCart}
            className="mt-4 w-full bg-indigo-800 text-white py-2 rounded-lg font-bold hover:bg-red-500 transition flex justify-center items-center gap-2"
          >
            Vaciar el carrito
            <i className="bi bi-trash3"></i>
          </button>
        </>
      )}
    </motion.div>
  </>


    )
}