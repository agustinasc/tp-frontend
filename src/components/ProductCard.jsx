import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ProductCard = ({ product, addToCart }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === "oscuro" ? "bg-[#3E3E3E]" : "bg-[#FAE5CF]"} flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 rounded-t-lg`}>
      <p className={`${theme === "oscuro" ? "text-xl font-bold text-white mb-2" : "text-xs font-bold text-[#5B0601] mb-2"}`}>
        {product.categoria}
      </p>
      <img 
        src={product.imagen} 
        alt={product.nombre} 
        className="w-full h-80 object-cover rounded-lg mt-4 mb-2"
      />
      <h3 className={`${theme === "oscuro" ? "text-2xl font-semibold text-white" : "text-2xl font-semibold text-[#5B0601]"}`}>
        {product.nombre}
      </h3>
      <p className={`${theme === "oscuro" ? "text-xl font-bold text-white mb-2" : "text-xl font-bold text-[#5B0601] mb-2"}`}>
        ${product.precio}
      </p>
      <Link
        to={`/producto/${product._id}`}
        className="m-2 inline-block bg-cyan-800 text-white px-4 py-2 rounded hover:bg-cyan-600"
      >
        Ver detalle
      </Link>
      <button 
        onClick={() => addToCart(product)}
        className={`${theme === "oscuro" ? "bg-[#5B0601] text-white hover:bg-[#E0B394] hover:text-black" : "bg-[#5B0601] text-white hover:bg-green-700"} px-4 py-2 rounded-lg transition-all`}
      >
        Agregar al carrito
        <i className="m-1 bi bi-cart"></i>
      </button>
    </div>
  );
};

export default ProductCard;
