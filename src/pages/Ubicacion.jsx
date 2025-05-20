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

        <div className={`min-h-[300px] items-center justify-center p-6 mt-8 ${theme === "oscuro" ? "bg-[#320301] text-white bg-opacity-30" : "bg-[#FAE5CF] text-[#5B0601] bg-opacity-30"}`}>
            <MapaPanaderia />
        </div>
    </div>
  )
}

export default Ubicacion