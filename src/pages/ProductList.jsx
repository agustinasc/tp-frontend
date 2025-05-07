import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { useUser } from "../context/UserContext"
import { useNavigate } from 'react-router-dom';

export const Products = () => {
  const { products, addToCart, loading } = useContext(CartContext);
  const { rol } = useUser()
  const { theme } = useContext(ThemeContext);
  const [search, setSearch] = useState('');
  const [selectedCategoria, setSelectedCategoria] = useState('');
  const navigate = useNavigate();

  const filteredProducts = products.filter(product => {
    const matchNombre = product.nombre.toLowerCase().includes(search.toLowerCase());
    const matchCategoria = selectedCategoria === '' || product.categoria === selectedCategoria;
    return matchNombre && matchCategoria;
  });

  return (
    <div className={`p-4  ${theme === "oscuro" ? " bg-[#2D2D2D]" : "p-4"}`}>
      <div className="flex flex-col sm:flex-row sm:items-end gap-4">
        <h2 className={`font-semibold text-lg ${theme === "oscuro" ? " text-white" : "text-[#5B0601]"}`}>Busqueda de Productos: </h2>
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`border rounded px-4 py-2 w-full sm:w-64 transition duration-300 ${
            theme === "oscuro"
              ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
              : "bg-white border-gray-300 text-black placeholder-gray-500"
          }`}
        />

        <select
          value={selectedCategoria}
          onChange={(e) => setSelectedCategoria(e.target.value)}
          className={`border rounded px-4 py-2 w-full sm:w-48 transition duration-300 ${
            theme === "oscuro"
              ? "bg-gray-800 border-gray-600 text-white"
              : "bg-white border-gray-300 text-black"
          }`}
        >
          <option value="">Todas las categorías</option>
          <option value="Panaderia">Panaderia</option>
          <option value="Pasteleria">Pasteleria</option>
          <option value="Bolleria">Bolleria</option>
          <option value="Especiales">Especiales</option>
        </select>
        <button 
          className={`px-6 py-2 rounded font-semibold transition duration-300
            ${theme === "oscuro"
              ? "bg-cyan-500 hover:bg-cyan-800 text-white"
              : "bg-cyan-800 hover:bg-cyan-400 text-white"}
          `}
        >
          Buscar
        </button>

      </div>

      <h1 className={`text-3xl font-semibold text-center mb-8 ${theme === "oscuro" ? "text-[#FAE5CF]" : "text-[#5B0601]"}`}>
        Lista de Productos
      </h1>
      <button
          onClick={() => navigate(-1)}
          className={`flex items-center gap-2 px-4 py-2 rounded transition duration-300 ${theme === "oscuro" ? "text-[#FAE5CF]" : "text-[#5B0601]"}`}
        >
          <i className="bi bi-arrow-left-circle-fill text-xl"></i>
          Volver Atras
        </button> 
      <div className="flex flex-wrap justify-center gap-6">
        {/* Card para Agregar Producto */}
          {/* SOLO admins ven el botón para agregar productos */}
        {(rol === "admin" || rol === "ventas") && (
          <div className={`${theme === "oscuro" ? "bg-[#3E3E3E]" : "bg-[#FAE5CF]"} flex flex-col items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 rounded-t-lg cursor-pointer hover:opacity-90`}>
            <Link to="/add-producto" className="flex flex-col items-center w-full h-full">
              <div className="w-full h-80 bg-gray-300 dark:bg-gray-600 flex items-center justify-center rounded-lg mb-4">
                <i className="bi bi-plus-circle text-6xl text-gray-700 dark:text-white"></i>
              </div>
              <h3 className={`${theme === "oscuro" ? "text-2xl font-semibold text-white" : "text-2xl font-semibold text-[#5B0601]"}`}>
                AGREGAR PRODUCTO
              </h3>
            </Link>
          </div>
        )}  


        {loading ? (
          <div>
            <p className={`text-xl font-semibold animate-pulse ${theme === "oscuro" ? "text-white" : "text-[#5B0601]"}`}>
              Cargando productos...
            </p>
            <Loader />
          </div>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} addToCart={addToCart} />
          ))
        )}
      </div>
    </div>
  );
};
