import { Link } from 'react-router-dom'
import { useTheme } from "../context/ThemeContext";
import MapaPanaderia from "../components/MapaPanaderia"
import 'leaflet/dist/leaflet.css';

const Contact = () => {

  const { theme, } = useTheme();

  return (
  /*   <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold text-[#5B0601]">Contacto</h1>
      <p className="text-lg mt-2 text-gray-700">Podés contactarnos al 📞 1234-5678 o por mail 📧 panaderia@ejemplo.com</p>
    </div> */
    <div>
      <div className={`flex flex-col items-center justify-center p-6 mt-8 ${theme === "oscuro" ? "bg-[#320301] text-white bg-opacity-30" : "bg-[#FAE5CF] text-[#5B0601] bg-opacity-30"}`}>
        <h1 className="text-6xl font-bold mb-4">Horarios</h1>
        <br />
        <p className='text-2xl font-semibold mb-2'>De Lunes a Sabado: </p><span>07hs a 14hs y de 16.30hs a 21.30hs</span>
        <p className='text-2xl font-semibold mb-2'>Domingos </p><span>08hs a 13hs</span>
        <br />
        <h1 className="text-6xl font-bold mb-4">Contacto</h1>
        <br />
        <h2 className="text-2xl font-semibold mb-2">Podés contactarnos al 📞 0383 15-471-3230</h2>
        <p className="mb-6">Por mail 📧 Panificadora.mathius@gmail.com</p>
        <p className="mb-6">O nuestras Redes Sociales</p>
        <br />
      
      </div>
      <div className={`flex flex-col items-center justify-center p-6 mt-8 ${theme === "oscuro" ? "bg-[#320301] text-white bg-opacity-30" : "bg-[#FAE5CF] text-[#5B0601] bg-opacity-30"}`}>
        <h2 className="text-6xl font-bold mb-4">Ubicacion</h2>
        <h3 className="text-2xl font-semibold mb-2">Ayacucho 909 esq. Mota Botello.</h3>
        <p className="mb-6">San Fernando del Valle de Catamarca</p>
        <br />
        <MapaPanaderia />
      </div>
    <Link
        to="/"
        className=" text-[#5B0601] px-6 py-3 rounded-lg transition-all"
      >
        Volver atras
      </Link>
    </div>
  );
};

export default Contact;