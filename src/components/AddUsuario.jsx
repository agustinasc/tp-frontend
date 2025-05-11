import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

const schema = yup.object().shape({
  usuario: yup.string().required("El usuario es obligatorio"),
  email: yup.string().required("El email es obligatorio"),
  contraseña: yup.string().required("La contraseña es obligatoria"),
  imagen: yup.string().url("Debe ser una URL válida"),
  estado: yup.string().required("El estado es obligatoria"),
  rol: yup.string().required("El rol es obligatoria")
});

export const AddUsuario = () => {
   
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
    })
    

    const { createUser } = useUser()
    const navigate = useNavigate()

    
   const onSubmit = async (data) => {
    try {
      await createUser(data)
      navigate('/usuarios')
    } catch (err) {
      console.error('error ->', err)
    }
   }


  return (
    <div className="bg-[#f9f4f2] flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-xl p-8 mt-8">
          <h2 className="text-3xl font-bold text-[#5E272D] mb-6 text-center">Agregar Nuevo Usuario</h2>

          <form 
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-xl mx-auto p-4 space-y-4"
          >  
            <div>
              <label>Nombre del usuario</label>    
              <input 
                type="text"                 
                placeholder='Ingresar nombre del usuario'
                {...register("usuario")}  
                className="w-full p-2 border rounded"
              />
              <p className="text-red-500 text-sm">{errors.usuario?.message}</p>
            </div>
            <div>
              <label>Email</label>
              <input 
                type="text" 
                name="email" 
                placeholder='Ingresa el email'
                {...register("email")}
                className="w-full p-2 border rounded"
              />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
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
              <label>Contraseña</label>
              <input 
                type="text" 
                placeholder='Ingresa la contraseña'
                {...register ("contraseña")}  
                className="w-full p-2 border rounded"
              />
              <p className="text-red-500 text-sm">{errors.contraseña?.message}</p>
            </div>
            <div>
                <label>Estado</label>
                <select  
                    {...register("estado")} 
                    className="w-full p-2 border rounded"
                    defaultValue="activo">
                        <option value="" disabled>Selecciona el rol</option>
                        <option value="activo">Activo</option>
                        <option value="deshabilitar">Deshabilitar</option>
                </select>
                <p className="text-red-500 text-sm">{errors.rol?.message}</p>
            </div>
            <div>
                <label>Rol</label>
                <select  
                    {...register("rol")} 
                    className="w-full p-2 border rounded"
                    defaultValue="cliente">
                        <option value="" disabled>Selecciona el rol</option>
                        <option value="admin">Administrador</option>
                        <option value="ventas">Ventas</option>
                        <option value="cliente">Clientes</option>
                </select>
                <p className="text-red-500 text-sm">{errors.rol?.message}</p>
            </div>

              <button 
                  type="submit"
                  className="w-full bg-[#5E272D] text-white py-2 rounded hover:bg-green-700 transition"
              >
                  Agregar Usuario
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
