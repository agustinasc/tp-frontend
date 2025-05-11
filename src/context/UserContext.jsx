import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate  } from 'react-router-dom'
import axios from 'axios'
import { toast } from "react-toastify";

const UserContext = createContext()

export const useUser = ()=> {
    return useContext(UserContext)
}

const API_USUARIOS = "http://localhost:5000/api/usuarios"


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
      const usuarioGuardado = localStorage.getItem('usuario')
      if(usuarioGuardado){
        setUser(JSON.parse(usuarioGuardado))
      }
      setLoading(false)
    }, [])

        /* PARA RECARGAR DESPUES DE ALGUNA MODIFICACION */
    const reloadUsuarios = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(API_USUARIOS, {
                headers: { Authorization: `Bearer ${token}` }
              });
            setUsuarios(response.data);
        } catch (error) {
            console.error("Error al recargar usuarios", error);
        }
    };
    
    const login = ({ token, usuario}) => {
        localStorage.setItem('token', token)
        localStorage.setItem('usuario', JSON.stringify(usuario))//guarda el usuario en el localStorage
        localStorage.setItem('rol', usuario.rol);
        setUser(usuario)
    }

    const logout = () =>{
        setUser(null);
        localStorage.removeItem('usuario');
        localStorage.removeItem('token');
        localStorage.removeItem('rol'); // elimina el rol
        navigate('/')
    }
    /* PARA GUARDAR EL TOKEN y ayuda para generar los headers de autorizacion en las peticiones a la API */
    const getAuthHeaders = () => {
        const token = localStorage.getItem('token');
        return { Authorization: `Bearer ${token}` };
      };

      
     /* AGREGAR USUARIO: POST */
  const createUser = async (user) => {
    const token = localStorage.getItem('token');

    if (!token) {
        console.error("Token no disponible");
        toast.error("No autorizado, por favor inicia sesión", { theme: "dark" });
        return;
    }
    try {
        const { data } = await axios.post(API_USUARIOS, user, { headers: getAuthHeaders() })
        console.log('usuario creado ->', data);
        setUsuarios((prev) => [...prev, data])
        toast.success("Usuario creado correctamente", { theme: "dark" })       
    } catch (error) {
        console.error("Error al crear usuario", error);
        toast.error("Error al crear el usuario", { theme: "dark" });
    }
  }

    /* EDITAR USUARIO: PUT */
    const updateUser = async (id, updateData) => {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error("Token no disponible");
          toast.error("No autorizado, por favor inicia sesión", { theme: "dark" });
          return;
        }
      try {
        await axios.put(`${API_USUARIOS}/${id}`, updateData, { headers: getAuthHeaders() })
        await reloadUsuarios()
        toast.success("Usuario modificado correctamente", { theme: "dark" })
      } catch (error) {
        console.error("Error al actualizar el usuario", error);
        throw error
      }
    }

    /* ELIMINAR UN USUARIO: DELETE */
    const deleteUser = async (id) => {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error("Token no disponible");
          toast.error("No autorizado, por favor inicia sesión", { theme: "dark" });
          return;
        }
      try {
        await axios.delete(`${API_USUARIOS}/${id}`, { headers: getAuthHeaders() })
        setUsuarios((prev) => prev.filter((u) => u._id !== id))
        toast.success("Usuario eliminado correctamente");
      } catch (error) {
        console.error("Error al eliminar el usuario", error)
        toast.error("Error al eliminar usuario")
        throw error
      }
      
    }

    return(
        <UserContext.Provider 
            value={{
                user, 
                loading,
                setLoading,
                login,
                logout,
                rol: user?.rol,
                usuarios,
                createUser,
                updateUser,
                deleteUser,
                reloadUsuarios
            }}
        >
            {children}
        </UserContext.Provider>
    )
}