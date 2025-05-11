import { createContext, useState, useEffect, useContext } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import React from "react";

export const CartContext = createContext();

export const useProducts = () => useContext(CartContext)

//const API = 'http://localhost:5000/api/productos'
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export const CartProvider = ({children}) => {

  const [products, setProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [ loading, setLoading ] = useState(false)

  const [cart, setCart] = useState(() => {
    try {
      const storedCart  = localStorage.getItem("cart")  //trae lo que tenemos guardado y lo convierte en un arr
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error al parsear locaStorage:", error);
      return [];      
    }
  })
 
  /* CARGA API CON LOS PRODUCTOS */
    useEffect(() => {
        const fetchProductos = async () => {
            try {
                setLoading(true)
              const response = await axios.get(API);
              setProducts(response.data); 
            } catch (error) {
              console.error('Error al traer productos:', error);
            } finally {
                setLoading(false)
            }
          };
          fetchProductos();
          
      }, []);
    
      /* PARA RECARGAR DESPUES DE ALGUNA MODIFICACION */
      const reloadProducts = async () => {
        try {
          const response = await axios.get(API);
          setProducts(response.data);
        } catch (error) {
          console.error("Error al recargar productos", error);
        }
      };

      
      /* para guardar los cambios de carrito */
    useEffect(() => {
      try {
        if(cart.length > 0){
          localStorage.setItem("cart", JSON.stringify(cart.filter((item) => item !== null)))
          console.log("Carrito guardado en localStorage", cart);         
        }
      } catch (error) {
        console.error("Error al guardar el carrito:", error);       
      }
    }, [cart])

    const openCart = () => setIsCartOpen(true)
    const closeCart = () => setIsCartOpen(false)

    const addToCart = (product) => { 

      const normalizedProduct = {
        ...product,
        id: product.id || product._id,  // Usa 'id' si existe, o '_id'
      }

      setCart((prevCart) => {
          const existingProduct = prevCart.find((item) => item.id === normalizedProduct.id);
          if (existingProduct) {
            return prevCart.map((item) =>
              item.id === normalizedProduct.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          } else {
            return [...prevCart, { ...normalizedProduct, quantity: 1 }]
          }
        });
        toast.success("⭐ Producto agregado al carrito!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,  // Permite cerrar haciendo clic
            pauseOnHover: true,  // Pausa la animación al pasar el mouse
            draggable: true,  // Permite arrastrar la notificación
            theme: "dark",
          }); 
      };

    const removeFromCart = (productRemove) => {
        setCart((prevCart) => {
          return prevCart.map((product) => product.id === productRemove.id 
            ? {...product, quantity: product.quantity - 1} 
            : product).filter(product => product.quantity > 0)
        })
         toast.error("❌ Producto eliminado",{
                position: "top-center", 
                autoClose: 3000,  
                hideProgressBar: true,
                theme: "dark",  
              }) 
    } 


    /* elimina el producto del carrito */
    const removeProduct = (productID) => {
      setCart(cart.filter(product => product.id !== productID))
      localStorage.setItem("cart", JSON.stringify([]))

      toast.error("Producto eliminado del carrito", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,  // Permite cerrar haciendo clic
        pauseOnHover: true,  // Pausa la animación al pasar el mouse
        draggable: true,  // Permite arrastrar la notificación
        theme: "dark",
      }); 
    }

    const clearCart = () => {
      setCart([]); // Vacía el carrito
      localStorage.setItem("cart", JSON.stringify([]))

      toast.info("🗑️ Carrito vacio", { position: "top-center", autoClose: 2000, theme: "dark" })
  };

  /* AGREGAR PRODUCTO A LA LISTA DE PRODUCTOS: POST */
  const createProduct = async (product) => {
    const { data } = await axios.post(API, product)
    console.log('data ->', data);
    setProducts((prev) => [...prev, data])
    toast.success("Producto creado correctamente", { theme: "dark" })
  }

    /* EDUTAR UN PRODUCTO A LA LISTA DE PRODUCTOS: PUT */
    const updateProduct = async (id, updateData) => {
      try {
        await axios.put(`${API}/${id}`, updateData)
        await reloadProducts()
        toast.success("Producto modificado correctamente", { theme: "dark" })
      } catch (error) {
        console.error("Error al actualizar el producto", error);
        throw error
      }
    }

    /* ELIMINAR UN PRODUCTO A LA LISTA DE PRODUCTOS: DELETE */
    const deleteProduct = async (id) => {
      try {
        await axios.delete(`${API}/${id}`)
        await reloadProducts()
      } catch (error) {
        console.error("Error al eliminar el producto", error);
        throw error
      }
      
    }
 

    return (
        <CartContext.Provider value={{ 
          cart, 
          products, 
          isCartOpen,
          openCart,
          closeCart,
          reloadProducts,
          addToCart, 
          removeFromCart, 
          removeProduct,
          clearCart,
          loading, 
          setLoading,
          createProduct,
          updateProduct,
          deleteProduct
          }}>
            {children}
        </CartContext.Provider>
    )
}