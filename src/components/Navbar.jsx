import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";
import { useUser } from "../context/UserContext";
import logo from '../assets/logo2.png';

export const Navbar = () => {
  const { openCart } = useContext(CartContext);
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useUser();
  //const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setMenuOpen(!menuOpen);
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen)

  //const navigate = useNavigate();

  return (
    <nav className={`w-full shadow-md z-50 ${theme === "oscuro" ? "bg-[#5B0601] bg-opacity-30" : "bg-[#eccac8] bg-opacity-30"}`}>
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-12 sm:w-20 rounded-full" />
          <p className={`text-xl font-bold ${theme === "oscuro" ? "text-white" : "text-[#5B0601]"}`}>PANIFICADORA</p>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          <li className="relative hidden md:block focus-within:group group">
            <Link to="/"
              className={`font-semibold ${theme === "oscuro" ? "text-white" : "text-black"} hover:text-yellow-800 px-4 py-2`}
            >
              Inicio
            </Link>
            <button
              onClick={toggleDropdown}
              className={`font-semibold ${theme === "oscuro" ? "text-white" : "text-black"} hover:text-yellow-800`}
            >
              Menú <i className="bi bi-chevron-down ml-1"></i>
            </button>
            {menuOpen && (
              <ul className="absolute left-0 mt-2 w-40 rounded shadow bg-white z-10 opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 pointer-events-none    group-focus-within:pointer-events-auto group-hover:pointer-events-auto transition-opacity">
                <li><Link to="/nosotros" className="block px-4 py-2 hover:bg-gray-100">Nosotros</Link></li>
                <li><Link to="/contacto" className="block px-4 py-2 hover:bg-gray-100">Contacto</Link></li>
                <li><Link to="/perfil" className="block px-4 py-2 hover:bg-gray-100">Perfiles</Link></li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/productos" className={`${theme === "oscuro" ? "text-white" : "text-black"} hover:text-yellow-800 font-semibold`}>Productos</Link>
          </li>
          <li>
            <button onClick={openCart} className={`${theme === "oscuro" ? "text-white" : "text-black"} hover:text-yellow-800 font-semibold`}>
              <i className="bi bi-cart text-xl"></i>
            </button>
          </li>
         {/*  <li>
            {user ? (
              <span className={`${theme === "oscuro" ? "text-white" : "text-black"} font-semibold`}>
                <i className="bi bi-person-circle mr-1"></i>{user.nombre}
              </span>
            ) : (
              <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
            )}
          </li> */}
          <li className="relative">
                      {user ? (
                        <>
                          <button
                            onClick={toggleUserMenu}
                            className={`${theme === "oscuro" ? "text-white" : "text-black"} font-semibold flex items-center gap-1 hover:text-yellow-800`}
                          >
                            <i className="bi bi-person-circle"></i> {user.usuario}
                          </button>
                          {userMenuOpen && (
                            <ul className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
                              <li>
                                <button onClick={openCart} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                  🛒 Ver Carrito
                                </button>
                              </li>
                              <li>
                                <button onClick={logout} className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600">
                                  🚪 Cerrar Sesión
                                </button>
                              </li>
                            </ul>
                          )}
                        </>
                      ) : (
                        <Link to="/login" className="text-blue-400 hover:underline ">Login</Link>
                      )}
          </li>
          <li>
            <button onClick={toggleTheme} className="ml-4">
              <i className={`bi ${theme === "oscuro" ? "bi-sun text-white hover:text-yellow-400" : "bi-moon-fill text-black hover:text-yellow-800"} text-xl`}></i>
            </button>
          </li>
        </ul>

        
        {/* Botón menú móvil */}
        <button className="md:hidden text-2xl" onClick={toggleMobileMenu}>
          <i className={`bi ${isOpen ? "bi-x" : "bi-list"} ${theme === "oscuro" ? "text-white" : "text-black"}`}></i>
        </button>
      </div>

      {/* VIEW MOVIL */}
      {isOpen && (
        <ul className="md:hidden absolute w-full bg-gray-600 bg-opacity-30 transition-all duration-300 flex flex-col px-4 py-2">
          <li className="text-lg text-white p-0.5 rounded-xl">
            <Link to="/">Inicio</Link>
          </li>
          <li className="text-lg text-white p-0.5 rounded-xl">
            <Link to="/contacto">Contacto</Link>
          </li>
          <li className="text-lg text-white p-0.5 rounded-xl">
            <Link to="/nosotros" >Nosotros</Link>
          </li>
          <li className="text-lg text-white p-0.5 rounded-xl">
            <Link to="/productos" >Productos</Link>
          </li>
          <li className="text-lg text-white p-0.5 rounded-xl"><button onClick={openCart}><i className="bi bi-cart mr-1"></i> Ver Carrito</button></li>
          <li className="text-lg text-white p-0.5 rounded-xl">
            {user ? (
              <>
                <span><i className="bi bi-person-circle mr-1"></i>{user.usuario}</span>
                <button onClick={logout} className="text-red-700">Cerrar Sesión</button>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
          <li className="text-lg text-white p-0.5 rounded-xl">
            <button onClick={toggleTheme}>
              <i className={`bi ${theme === "oscuro" ? "bi-sun" : "bi-moon-fill"} text-xl`}></i>
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};