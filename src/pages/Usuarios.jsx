import React, { useEffect } from 'react';
//import axios from 'axios';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Usuarios = () => {
  const { rol, usuarios, setLoading, deleteUser, reloadUsuarios } = useUser();


  const navigate = useNavigate();

  useEffect(() => {
    // Solo admins pueden entrar
    if (rol !== 'admin') {
      toast.error("Acceso denegado");
      navigate('/');
      return;
    }

/*     const fetchUsuarios = async () => {
      try {
        const token = localStorage.getItem('token')
        const res = await axios.get('http://localhost:5000/api/usuarios', {
            headers: {
                Authorization: `Bearer ${token}`, // Enviar el token en el encabezado
              },
        });
        console.log('Datos de usuarios: ', res.data); // Para ver que devuelve el backend
      } catch (error) {
        console.error('Error al obtener usuarios', error);
        toast.error("Error al cargar usuarios");
      } finally {
        setLoading(false);
      }
    }; 
    fetchUsuarios();
  }, []); */

  const cargar = async () => {
    setLoading(true);
    await reloadUsuarios(); 
    setLoading(false);
  };

  cargar();
}, []);

  const handleAddUsuarios = () => {
    navigate('/add-usuario'); // Ajusta esta ruta según tu estructura
  };

  return (
    <div className="min-h-screen bg-[#FFF5EC] p-6">
          <button 
            className="bg-cyan-800 hover:bg-cyan-600 text-white px-5 py-2 rounded font-semibold"
            onClick={handleAddUsuarios}
          >
            Agregar Usuarios
          </button>
      <h1 className="text-3xl font-bold text-center text-[#5E272D] mb-6">
        Lista de Usuarios
      </h1>

      {usuarios.length === 0 ? (
        <p className="text-center text-lg text-gray-600">No hay usuarios cargados.</p>
      ) : (
        <table className="w-full table-auto bg-white shadow-lg rounded-xl overflow-hidden">
          <thead className="bg-cyan-800 text-white">
            <tr>
              <th className="p-3">Nombre</th>
              <th className="p-3">Email</th>
              <th className="p-3">Rol</th>
              <th className="p-3">Modificar</th>
              <th className="p-3">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario._id} className="text-center border-t">
                <td className="p-3">{usuario.usuario}</td>
                <td className="p-3">{usuario.email}</td>
                <td className="p-3 capitalize">{usuario.rol}</td>
                <td className="p-3 capitalize">
                    <button 
                        className="bg-yellow-600 hover:bg-yellow-400 text-white px-4 py-1 rounded"
                        onClick={() => navigate(`/edit-usuario/${usuario._id}`)}
                    >
                        Modificar
                    </button>
                </td>
                <td className="p-3 capitalize">
                    <button 
                        className="bg-red-700 hover:bg-red-500 text-white px-4 py-1 rounded"
                        onClick={() => deleteUser(usuario._id)}
                    >
                        Eliminar
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      
      <button
            className="flex items-center gap-2  text-[#5E272D] px-4 py-2 rounded transition duration-300"
            onClick={() => navigate(-1)}
        >
          <i className="bi bi-arrow-left-circle-fill text-xl"></i>
          Volver Atras
        </button> 
    </div>
  );
};

export default Usuarios;
