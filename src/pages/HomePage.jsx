import { useUser } from "../context/UserContext";
import { useNavigate  } from 'react-router-dom'
import Loader from "../components/Loader";
import { useTheme } from "../context/ThemeContext";

const HomePage = () => {
    const { theme } = useTheme();
    const { loading } = useUser()
    const navigate = useNavigate()

    /* PARA MANEJAR LOS CAMBIOS DE ROLES */
    const handleClick = (rol) => {
        localStorage.setItem("rol", rol)
        if (rol === "cliente") {
          navigate("/api/productos"); // o donde quieras que vaya el cliente
        } else {
          navigate("/login");
        }
      };

      const roles = [
        { nombre: "Admin", rol: "admin" },
        { nombre: "Ventas", rol: "ventas" },
        { nombre: "Cliente", rol: "cliente" },
      ];
    

    if (loading) return <Loader/>

    return(
        <div className={`flex flex-col items-center justify-center p-6 mt-8 ${theme === "oscuro" ? "bg-[#5B0601] bg-opacity-30" : "bg-[#eccac8] bg-opacity-30"}`}>
      <h1 className={`text-2xl font-bold mb-8 ${theme === "oscuro" ? "text-white" : "text-[#5B0601]"}`}>
        Bienvenido :
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {roles.map(({ nombre, rol }) => (
          <div
            key={rol}
            onClick={() => handleClick(rol)}
            className="cursor-pointer border-2 border-[#5E272D] rounded-2xl shadow-md hover:shadow-xl transition-all bg-white p-6 text-center"
          >
            <h2 className="text-xl font-semibold mb-2 text-[#5E272D]">{nombre}</h2>
            <p className="text-gray-600">Entrar como {nombre}</p>
          </div>
        ))}
      </div>
    </div>
    )
}

export default HomePage;
