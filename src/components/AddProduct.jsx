import { useNavigate } from 'react-router-dom'
import { useProducts } from '../context/CartContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

const schema = yup.object().shape({
  nombre: yup.string().required("El nombre es obligatorio"),
  precio: yup.number().positive("Debe ser un número positivo").required("El precio es obligatorio"),
  imagen: yup.string().url("Debe ser una URL válida").required("La imagen es obligatoria"),
  descripcion: yup.string().required("La descripcion es obligatoria"),
  stock: yup.number().positive("Debe ser un número positivo"),
  categoria: yup.string().required("La categoria es obligatoria"),
});

export const AddProduct = () => {
    /* const [ title, setTitle ] = useState([])
    const [ price, setPrice ] = useState([])
    const [ image, setImage ] = useState([]) 
    const [ error, setError ] = useState('')*/
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
    })
    

    const { createProduct } = useProducts()
    const navigate = useNavigate()

   /*  const handleSubmit = async (e) => {
        e.preventDefault()
        if (title.trim() === '' || image.trim() === '') {
          setError('Por favor, llenar los campos')
          return
        }
        try {
            await createProduct({ title, image, price })
            navigate('/productos')
          } catch (err) {
            setError('Error creando producto')
            console.log('err -> ', err)
          }
    } */
   const onSubmit = async (data) => {
    try {
      await createProduct(data)
      navigate('/productos')
    } catch (err) {
      console.error('error ->', err)
    }
   }


  return (
    <div className="bg-[#f9f4f2] flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-xl p-8 mt-8">
          <h2 className="text-3xl font-bold text-[#5E272D] mb-6 text-center">Agregar Nuevo Producto</h2>

          <form 
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-xl mx-auto p-4 space-y-4"
          >  
            <div>
              <label>Nombre del producto</label>    
              <input 
                type="text"                 
                placeholder='Ingresar nombre del Producto'
                {...register("nombre")}  
                className="w-full p-2 border rounded"
              />
              <p className="text-red-500 text-sm">{errors.nombre?.message}</p>
            </div>
            <div>
              <label>Precio</label>
              <input type="number" 
                 name="price" 
                placeholder='Ingresa el precio'
                {...register("precio")}
                className="w-full p-2 border rounded"
              />
              <p className="text-red-500 text-sm">{errors.precio?.message}</p>
            </div>
            <div>
              <label>URL de la Imagen</label>
              <input 
                type="text" 
                placeholder='Ingresa la URL de la imagen'
                {...register ("imagen")}  
                className="w-full p-2 border rounded"
              />
              <p className="text-red-500 text-sm">{errors.imagen?.message}</p>
            </div>
            <div>
              <label>Descripcion</label>
              <input 
                type="text" 
                placeholder='Ingresa la descripcion del producto'
                {...register ("descripcion")}  
                className="w-full p-2 border rounded"
              />
              <p className="text-red-500 text-sm">{errors.descripcion?.message}</p>
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
                  className="w-full bg-[#5E272D] text-white py-2 rounded hover:bg-green-700 transition"
              >
                  Agregar Producto
              </button>          
          </form>
      </div>
      <button
              className="flex items-center gap-2  text-[#5E272D] px-4 py-2 rounded transition duration-300"
              onClick={() => navigate(-1)}
            >
              <i className="bi bi-arrow-left-circle-fill text-xl"></i>
              Volver Atras
            </button>
    </div>
  )
}
