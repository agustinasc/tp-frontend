import { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";
import { useUser } from "../context/UserContext";
import logo from '/logo2.png';

export const Navbar = () => {
  const { openCart } = useContext(CartContext);
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useUser();

  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const dropdownRef = useRef(null)
  const dropdownButtonRef = useRef(null)
  const userMenuRef = useRef(null)
  const userButtonRef = useRef(null)

  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);
  const closeMobileMenu = () => setIsOpen(false);

  const navLinkClass = `${theme === "oscuro" ? "text-white" : "text-black"} hover:text-yellow-800 font-semibold`;

  /* para detectar clics fuera */
  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      menuOpen &&
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !dropdownButtonRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
    }

    if (
      userMenuOpen &&
      userMenuRef.current &&
      !userMenuRef.current.contains(event.target) &&
      !userButtonRef.current.contains(event.target)
    ) {
      setUserMenuOpen(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [menuOpen, userMenuOpen]);

  const navigate = useNavigate();


  return (
    <nav className={`w-full shadow-md z-50 ${theme === "oscuro" ? "bg-[#5B0601] bg-opacity-30" : "bg-[#eccac8] bg-opacity-30"}`}>
      <div className="flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-12 sm:w-20 rounded-full" />
          <h2 className={`text-2xl font-bold ${theme === "oscuro" ? "text-white" : "text-[#5B0601]"}`}>Panaderia</h2>
        </div>

        {/* Desktop Navigation */}

        <ul className="hidden md:flex items-center gap-6">
          <li><Link to="/" className={navLinkClass}>Inicio</Link></li>
          <li><Link to="/nosotros" className={navLinkClass}>Nosotros</Link></li>
          <li><Link to="/contacto" className={navLinkClass}>Contacto</Link></li>
          <li><Link to="/api/productos" className={navLinkClass}>Productos</Link></li>

          <li>
            <button onClick={openCart} className={navLinkClass}>
              <i className="bi bi-cart text-xl"></i>
            </button>
          </li>

          <li className="relative">
            {user ? (
              <>
                <button
                  onClick={toggleUserMenu}
                  ref={userButtonRef}
                  className={`${navLinkClass} flex items-center gap-1`}
                  aria-expanded={userMenuOpen}
                  aria-controls="user-menu"
                >
                  <i className="bi bi-person-circle"></i> {user.usuario}
                </button>
                {userMenuOpen && (
                  <ul id="user-menu"  ref={userMenuRef} className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
                    <li>
                      <button onClick={openCart} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                        🛒 Ver Carrito
                      </button>
                    </li>
                    <li>
                      <button onClick={()=> navigate('/perfil')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                        Mi Perfil
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
              <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
            )}
          </li>

        {/*   BOTON CLARO/OSCURO
          <li>
            <button onClick={toggleTheme} className="ml-4">
              <i className={`bi ${theme === "oscuro" ? "bi-sun text-white hover:text-yellow-400" : "bi-moon-fill text-black hover:text-yellow-800"} text-xl`}></i>
            </button>
          </li> */}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={toggleMobileMenu}>
          <i className={`bi ${isOpen ? "bi-x" : "bi-list"} ${theme === "oscuro" ? "text-white" : "text-black"}`}></i>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="md:hidden absolute w-full bg-gray-600 bg-opacity-30 transition-all duration-300 flex flex-col px-4 py-2 z-40">
          <li className="text-lg text-white py-1">
            <Link to="/" onClick={closeMobileMenu}>Inicio</Link>
          </li>
          <li className="text-lg text-white py-1">
            <Link to="/contacto" onClick={closeMobileMenu}>Contacto</Link>
          </li>
          <li className="text-lg text-white py-1">
            <Link to="/nosotros" onClick={closeMobileMenu}>Nosotros</Link>
          </li>
          <li className="text-lg text-white py-1">
            <Link to="/api/productos" onClick={closeMobileMenu}>Productos</Link>
          </li>
          <li className="text-lg text-white py-1">
            <button onClick={() => { openCart(); closeMobileMenu(); }}>
              <i className="bi bi-cart mr-1"></i> Ver Carrito
            </button>
          </li>
          <li className="text-lg text-white py-1">
            {user ? (
              <>
                <span><i className="bi bi-person-circle mr-1"></i>{user.usuario}</span>
                <button onClick={() => { logout(); closeMobileMenu(); }} className="text-red-400">Cerrar Sesión</button>
              </>
            ) : (
              <Link to="/login" onClick={closeMobileMenu}>Login</Link>
            )}
          </li>
          <li className="text-lg text-white py-1">
            <button onClick={toggleTheme}>
              <i className={`bi ${theme === "oscuro" ? "bi-sun" : "bi-moon-fill"} text-xl`}></i>
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};
