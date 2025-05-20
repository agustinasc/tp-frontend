import { useTheme } from "../context/ThemeContext";
import { Link } from 'react-router-dom'
import { useForm } from '@formspree/react';
import { Helmet } from "react-helmet";
import Ubicacion from './Ubicacion'

const Contact = () => {

  const { theme } = useTheme()
 
  const [state, handleSubmit] = useForm("mwpoaozq");

  return (    
    <div>
                      {/* Helmet: SEO y metadatos */}
      <Helmet>
        <title>Contacto | Panificadora y Panaderia Mathius</title>
        <meta name="description" content="Contactanos para hacer pedidos o consultar disponibilidad de productos. Estamos en Catamarca." />
      </Helmet>

      <div 
        className={`min-h-screen px-4 py-10 flex flex-col items-center gap-12
        ${theme === "oscuro" ? "bg-[#320301] text-white bg-opacity-30" : "bg-[#FAE5CF] text-[#5B0601] bg-opacity-30"}`}
      >

        <div className="flex flex-col md:flex-row gap-8 w-full p-8">
                {/* Horarios */}
          <section className="flex-[1] flex flex-col justify-between p-6 rounded-2xl text-center shadow-md bg-white text-[#5B0601]"
          >
            <h2 className="text-4xl font-bold mb-6 mt-4 text-cente">Horarios</h2>
            <ul className="space-y-3 text-lg md:text-2xl">
              <li>
                <strong>Lunes:</strong> 07:00 - 14:00 y 16:30 - 21:30
              </li>
              <li>
                <strong>Martes:</strong> 07:00 - 14:00 y 16:30 - 21:30
              </li>
              <li>
                <strong>Miercoles:</strong> 07:00 - 14:00 y 16:30 - 21:30
              </li>
              <li>
                <strong>Jueves:</strong> 07:00 - 14:00 y 16:30 - 21:30
              </li>
              <li>
                <strong>Viernes:</strong> 07:00 - 14:00 y 16:30 - 21:30
              </li>
              <li>
                <strong>Sabado:</strong> 07:00 - 14:00 y 16:30 - 21:30
              </li>
              <li>
                <strong>Domingos:</strong> 08:00 - 13:00
              </li>
            </ul>
            <p className="mt-6 text-sm md:text-base text-gray-600">
              * Horarios especiales en feriados. Consultanos por WhatsApp.
            </p>
            
            <p className="mt-4 text-base md:text-lg">
              <strong>Teléfono:</strong> (383) 471-3230
            </p>
            <p className="mt-6 text-xl font-medium italic">
              "El pan calentito, todos los días."
            </p>

          </section>

                {/* Mapa de ubicación */}
          <section className="flex-[3] p-8 rounded-2xl shadow-md bg-white">
            <h2 className="text-4xl font-bold mb-4 text-center">Dónde estamos</h2>
            <Ubicacion />
          </section>
        </div>

       {/* Formulario de Cotización */}
        <section
        className={`w-full max-w-6xl p-10 rounded-2xl shadow-md
          ${theme === "oscuro"
            ? "bg-[#1f1f1f] text-white"
            : "bg-white text-black"}`}
        >
          {state.succeeded ? (
            <h3 className="text-green-600 text-center mt-4">¡Tu mensaje fue enviado con éxito!</h3>
          ) : (
          <form 
            onSubmit={handleSubmit}
            className={`w-full mx-auto mt-2 bg-black p-6 rounded shadow-md space-y-4
                        ${theme === "oscuro"
                          ? "bg-[#1f1f1f] text-white border-gray-700 placeholder-gray-400"
                          : "bg-white text-black border-gray-300 placeholder-gray-500"}`}
            >
            <h2 className="text-4xl font-bold text-gray-500">
              Solicitar Cotización 🥐
            </h2>

            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              required
              className={`w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-yellow-500
                        ${theme === "oscuro"
                          ? "bg-[#1f1f1f] text-white border-gray-600 placeholder-gray-400"
                          : "bg-white text-black border-gray-300 placeholder-gray-500"}`}
            />
            
            <input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              required
              className={`w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-yellow-500
                        ${theme === "oscuro"
                          ? "bg-[#1f1f1f] text-white border-gray-600 placeholder-gray-400"
                          : "bg-white text-black border-gray-300 placeholder-gray-500"}`}
            />
            
            <textarea
              name="mensaje"
              placeholder="¿Qué productos/servicios querés cotizar?"
              rows="4"
              required
              className={`w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-yellow-500
                        ${theme === "oscuro"
                          ? "bg-[#1f1f1f] text-white border-gray-600 placeholder-gray-400"
                          : "bg-white text-black border-gray-300 placeholder-gray-500"}`}
            ></textarea>

            <button
              type="submit"
              className="bg-[#5B0601] text-white py-2 px-4 rounded hover:bg-[#7a0a05]"
            >
              Enviar
            </button>
          </form>
          )}
        </section>
      </div>
     
    </div>
  );
};

export default Contact;