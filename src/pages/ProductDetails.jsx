import { useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import { useUser } from "../context/UserContext"
import { useTheme } from "../context/ThemeContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


export const ProductDetails = () => {
    const { id } = useParams()
    const { rol } = useUser();
    const { theme } = useTheme();
    const { products, addToCart, deleteProduct } = useContext(CartContext);
    const navigate = useNavigate()

    const product = products.find((item) => item._id === id);

    const handleDelete = async () => {
        //const confirmDelete = window.confirm("Estas seguro que quieres eliminar este producto?")
        const result = await Swal.fire({
                title: "Queres eliminar este producto??",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Eliminar",
                denyButtonText: `No Eliminar`
              })

        if (result.isConfirmed){    
            try {
                await deleteProduct(id)
                toast.success('Producto Eliminado!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                navigate('/productos')
            } catch (error) {
                toast.error('Error al eliminar el producto!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                console.error('error ->', error);              
            }
        }
    }
  
    if (!product) {
              return <p className="text-center text-red-500 mt-10">Producto no encontrado</p>;
    }
  
    return (
            <div
            className="flex flex-col items-center justify-center m-8 sm:px-10 lg:px-20">
                <div className=" bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
                    
                    {/* Columna de imagen */}
                    <div className="flex-shrink-0">
                    <img
                        src={product.imagen}
                        alt={product.nombre}
                        className="max-w-md w-full object-cover rounded-xl shadow-md mx-auto md:mx-0"
                        loading="lazy"
                    />
                    </div>

                    {/* Columna de contenido */}
                    <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl font-extrabold mb-4 text-white">{product.nombre}</h2>
                        <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                        {product.descripcion}
                        </p>
                        <p className="mb-2 text-xl font-semibold text-white">
                        Precio: <span className="text-green-600">${product.precio}</span>
                        </p>
                        <p className="mb-6 text-lg font-medium text-gray-600 dark:text-gray-400">
                        Categoría: {product.categoria}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <button
                        className="bg-[#5e363b] hover:bg-green-700 text-white px-5 py-3 rounded-lg shadow-md transition-colors duration-300 flex items-center gap-2"
                        onClick={() => addToCart(product)}
                        >
                        Agregar al carrito
                        <i className="bi bi-cart-fill"></i> 
                        </button>

                        {(rol === "admin" || rol === "ventas") && (
                        <>
                            <button
                            className="bg-indigo-800 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg shadow"
                            onClick={() => navigate(`/producto/${id}/edit`)}
                            >
                            Editar producto
                            </button>
                            <button
                            className="bg-rose-800 hover:bg-rose-500 text-white px-4 py-2 rounded-lg shadow"
                            onClick={handleDelete}
                            >
                            Eliminar producto
                            </button>
                        </>
                        )}
                    </div>
                    </div>
                </div>

            {/* Botón de volver */}
                <button
                    className={`mt-10 flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
                    theme === "oscuro"
                        ? "text-white hover:text-cyan-400"
                        : "text-gray-800 hover:text-cyan-600"
                    }`}
                    onClick={() => navigate(-1)}
                >
                    <i className="bi bi-arrow-left-circle-fill text-xl"></i>
                    Volver atrás
                </button>
            </div>

    );
};
  
