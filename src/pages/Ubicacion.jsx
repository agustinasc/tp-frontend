import { Link } from 'react-router-dom'
import { useTheme } from "../context/ThemeContext";
import MapaPanaderia from "../components/MapaPanaderia"
import 'leaflet/dist/leaflet.css';
import { Helmet } from "react-helmet"


const Ubicacion = () => {

    const { theme } = useTheme()

  return (
    <div>
       <Helmet>
        <title>Ubicación | Panificadora Mathius</title>
        <meta
          name="description"
          content="Encontranos fácilmente en Catamarca. Visita nuestra panificadora artesanal Mathius y disfrutá de nuestros productos frescos."
        />
        <meta property="og:title" content="Ubicación | Panificadora Mathius" />
        <meta
          property="og:description"
          content="Mapa y dirección para visitar Panificadora Mathius en Catamarca."
        />
      </Helmet>

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
        <i className="bi bi-arrow-left-circle-fill text-xl m-2"></i>
        Volver atras
      </Link>
    </div>
  )
}

export default Ubicacion