import { useProducts } from "../context/CartContext"
import { useUser } from "../context/UserContext";
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

const schema = yup.object().shape({
  nombre: yup.string().required("El nombre es obligatorio"),
  precio: yup.number().positive("Debe ser un número positivo").required("El precio es obligatorio"),
  imagen: yup.string().url("Debe ser una URL válida").required("La imagen es obligatoria"),
  descripcion: yup.string().required("La descripcion es obligatoria"),
  categoria: yup.string().required("La categoria es obligatoria"),
});

export const EditProduct = () => {
    const { rol } = useUser()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { products, updateProduct } = useProducts()
    const { id } = useParams()

    useEffect(() => {
        if (rol !== 'admin' && rol !== 'ventas') {
            navigate('/productos')
        }
    }, [rol, navigate]);

    useEffect(() => {
        const productToEdit = products.find((product) => product._id === id)
        if(productToEdit) {
            setValue("nombre",productToEdit.nombre)
            setValue("precio",productToEdit.precio)
            setValue("imagen",productToEdit.imagen)
            setValue("descripcion",productToEdit.descripcion)
            setValue("categoria",productToEdit.categoria)
            setValue("stock",productToEdit.stock)
        } else {
            setError('Producto no encontrado')
        }
    }, [products, id, setValue])

    /* const handleSubmit = async (e) => {
        e.preventDefault()
        if (nombre.trim() === '' || imagen.trim() === '') {
            setError('Por favor, llenar los campos')
            return
        }
        try {
            await updateProduct(id, { nombre, precio, imagen });
            navigate(`/producto/${id}`);
            
        } catch (error) {
            setError('Error al actualizar el producto')
            console.error('error ->', error);
            
        }
    } */
   const onSubmit = async (data) => {
    try {
        await updateProduct(id, data)
        navigate(`/producto/${id}`)
    } catch (err) {
        setError('Error al actualizar el producto')
        console.error('error ->', err)
    }
   }

  return (
    <div className="bg-[#f9f4f2] flex flex-col items-center justify-center">
           
        <div className="bg-white shadow-lg rounded-2xl w-full max-w-xl p-8 mt-8"> 
            <h2 className="text-3xl font-bold text-[#5E272D] mb-6 text-center">Editar Producto</h2>
            {/* error  */}
            {error && (
            <p className="text-red-400 mb-2">{error}</p>
            )}
        

            <form 
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-xl mx-auto p-4 space-y-4"
            >    
            <div>
                <label>Nombre del Producto</label>  
                <input 
                    {...register("nombre")}                 
                    placeholder='Ingresar nombre del Producto'
                    className="w-full p-2 border rounded"
                />
               {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre?.message}</p>}
            </div>  

            <div>
                <label>Precio</label>  
                <input 
                    type="number" 
                    {...register("precio")}
                    placeholder='Ingresar precio'
                    className="w-full p-2 border rounded"
                />
                {errors.precio && <p className="text-red-500 text-sm">{errors.precio?.message}</p>}
            </div>

            <div>
                <label>URL de la Imagen</label>  
                <input
                    {...register("imagen")}
                    placeholder='Ingresar la URL de la imagen'               
                    className="w-full p-2 border rounded"
                />
                {errors.imagen && <p className="text-red-500 text-sm">{errors.imagen?.message}</p>}
            </div>

            <div>
                <label>Descripcion</label>  
                <input 
                    {...register("descripcion")}                                
                    placeholder='Ingresar descripcion del Producto'
                    className="w-full p-2 border rounded"                
                />
                {errors.descripcion && <p className="text-red-500 text-sm">{errors.descripcion?.message}</p>}
            </div>

            <div>
              <label>Categoria</label>
              <input 
                type="text" 
                placeholder='Ingresa la categoria del producto'
                {...register ("categoria")}  
                className="w-full p-2 border rounded"
              />
              <p className="text-red-500 text-sm">{errors.categoria?.message}</p>
            </div>

            <div>
              <label>Stock</label>
              <input 
                type="number" 
                placeholder='Ingresa el stock'
                {...register("stock")}
                className="w-full p-2 border rounded"
              />
              <p className="text-red-500 text-sm">{errors.stock?.message}</p>
            </div>

                <button 
                    type="submit"
                    className="w-full bg-[#5E272D] text-white py-2 rounded hover:bg-fuchsia-950 transition"
                >
                    Editar Producto
                </button>
            
            </form>
        </div>
        <button
                className="flex items-center gap-2  text-[#5E272D] px-4 py-2 rounded transition duration-300"
                onClick={() => navigate('/productos')}
            >
                <i className="bi bi-arrow-left-circle-fill text-xl"></i>
                Volver Atras
            </button>
    </div>
        
  )
}
