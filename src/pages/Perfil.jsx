import { useUser } from "../context/UserContext"
import { useTheme } from "../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";


const Perfil = () => {
  const storedRol = localStorage.getItem("rol") || "cliente"
  const { theme } = useTheme();
  const { logout, rol: contextRol } = useUser()
  const rol = contextRol || storedRol
  //const rol = localStorage.getItem('rol');
  const usuario = JSON.parse(localStorage.getItem('usuario'))?.usuario
  const navigate = useNavigate()
  

  const handleAgregarProductos = () => {
    navigate('/add-producto');
  };

  return (
    <div  className={`flex flex-col items-center justify-center min-h-screen ${theme === "oscuro" ? "bg-[#2c0301] bg-opacity-30 text-white" : "bg-[#eccac8 ] text-[#5B0601] bg-opacity-30"}`}>
      <div className="text-center mt-10 mb-6">
        <h1 className="text-3xl font-bold">¡Bienvenido!</h1>
        <p className="mt-4 text-lg">Tu usuario es: <strong>{usuario}</strong></p>
        <p className="mt-4 text-lg">Tu perfil es: <strong>{rol}</strong></p>
      </div>
     
      <button 
        className="mb-10 bg-red-800 hover:bg-red-600 text-white px-6 py-2 rounded font-semibold"
        onClick={() => logout()}
      >
        Cerrar Sesion
      </button>
      {(rol === 'admin' || rol === 'ventas') && (
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold">Panel de {rol === 'admin' ? 'Administrador' : 'Ventas'}</h2>

            <div className="flex flex-wrap justify-center gap-4">
              <button 
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-800 text-white hover:bg-cyan-600 transition"
                onClick={() => navigate('/productos')}
              >
                <i className="bi bi-box-seam text-lg"></i>
                Ver Productos
              </button>

              <button 
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-700 text-white hover:bg-emerald-600 transition"
                onClick={handleAgregarProductos}
              >
                <i className="bi bi-plus-circle text-lg"></i>
                Agregar Producto
              </button>

              {rol === 'admin' && (
                <Link to="/usuarios">
                  <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition">
                    <i className="bi bi-people text-lg"></i>
                    Ver Usuarios
                  </button>
                </Link>
              )}
            </div>
          </div>
        )}


        <button
            className="flex items-center gap-2 px-4 py-2 rounded transition duration-300"
            onClick={() => navigate(-1)}
        >
          <i className="bi bi-arrow-left-circle-fill text-xl"></i>
          Volver Atras
        </button> 
    </div>

      
  );
};

export default Perfil;