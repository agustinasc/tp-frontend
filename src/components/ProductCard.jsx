import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ProductCard = React.memo(({ product, addToCart }) => {

  const { theme } = useContext(ThemeContext);

  return (
    <div 
      className={`${theme === "oscuro" ? "bg-[#3E3E3E]" : "bg-[#FAE5CF]"} flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 rounded-xl shadow-md transition-all duration-300 hover:scale-[1.02]`}
    >
      <p className={`font-bold mb-2 text-sm uppercase tracking-wide ${theme === "oscuro" ? "text-xl font-bold text-white mb-2" : "text-xs font-bold text-[#5B0601] mb-2"}`}>
        {product.categoria}
      </p>
      <Link 
        to={`/producto/${product._id}`} 
        className="relative w-full group rounded-lg overflow-hidden h-72 sm:block"
      >
        <img 
          src={product.imagen} 
          alt={product.nombre} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity        duration-300 rounded-lg">
            <span className="text-white text-lg font-semibold">Ver detalle</span>
          </div>
      </Link>

      <h3 className={`text-xl font-semibold text-center mt-2 ${theme === "oscuro" ? "text-2xl font-semibold text-white" : "text-2xl font-semibold text-[#5B0601]"}`}>
        {product.nombre}
      </h3>
      <p className={`text-lg font-bold ${theme === "oscuro" ? "text-xl font-bold text-white mb-2" : "text-xl font-bold text-[#5B0601] mb-2"}`}>
        ${product.precio}
      </p>

      {/* BOTONES */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-2 w-full">
        <Link
          to={`/producto/${product._id}`}
          className="absolute inset-0 hidden hover:flex items-center justify-center bg-black bg-opacity-50 text-white font-semibold text-lg rounded-lg"
        >
          Ver detalle
        </Link> 
        <button 
          onClick={() => addToCart(product)}
          className={`w-3/4 p-2 rounded-lg flex items-center justify-center gap-2 font-semibold transition-colors ${theme === "oscuro" ? "bg-[#5B0601] text-white hover:bg-[#E0B394] hover:text-black" : "bg-[#5B0601] text-white hover:bg-green-700"}`}
        >
          Agregar al carrito
          <i className="bi bi-cart"></i>
        </button>

          {/* MOBILE VIEW */}
          <Link
            to={`/producto/${product._id}`}
            className="sm:hidden mt-2 inline-block bg-cyan-800 text-white px-4 py-2 rounded hover:bg-cyan-600 text-center"
          >
            Ver detalle
          </Link>
      </div>
    </div>
  );
})

export default ProductCard;
