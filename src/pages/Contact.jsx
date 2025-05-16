import { useTheme } from "../context/ThemeContext";
import { Link } from 'react-router-dom'
import { useForm } from '@formspree/react';
import { Helmet } from "react-helmet";

const Contact = () => {

  const { theme } = useTheme()
 
  const [state, handleSubmit] = useForm("mwpoaozq");

  return (    
    <div>
      <Helmet>
        <title>Contacto | Panificadora y Panaderia Mathius</title>
        <meta name="description" content="Contactanos para hacer pedidos o consultar productos. Estamos en Catamarca." />
      </Helmet>
      <div className={`flex items-center justify-center p-6 mt-8 ${theme === "oscuro" ? "bg-[#320301] text-white bg-opacity-30" : "bg-[#FAE5CF] text-[#5B0601] bg-opacity-30"}`}>
        
         {/* Horarios */}
          <section
            className={`w-full max-w-xl p-6 rounded-xl bg-opacity-30 ${
              theme === "oscuro" ?
              "bg-[#320301] text-white" :
              "bg-[#FAE5CF] text-[#5B0601]"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Horarios</h1>
            <ul className="space-y-2 text-lg md:text-xl">
              <li>
                <strong>Lunes a Sábado:</strong> 07:00 - 14:00 y 16:30 - 21:30
              </li>
              <li>
                <strong>Domingos:</strong> 08:00 - 13:00
              </li>
            </ul>
          </section>

            {/* <h2 className="text-2xl font-semibold mb-2">Podés contactarnos al 📞 0383 15-471-3230</h2> */}

       {/* Formulario de Cotización */}
      <div>
        {state.succeeded ? (
          <p className="text-green-600 text-center mt-4">¡Tu mensaje fue enviado con éxito!</p>
        ) : (
        <form 
          onSubmit={handleSubmit}
          className={`w-full max-w-md mx-auto mt-8 bg-black p-6 rounded shadow-md space-y-4
                      ${theme === "oscuro"
                        ? "bg-[#1f1f1f] text-white border-gray-600 placeholder-gray-400"
                        : "bg-white text-black border-gray-300 placeholder-gray-500"}`}
          >
          <h2 className="text-2xl font-bold text-[#5B0601]">Solicitar Cotización</h2>

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
      </div>
    </div>
     
      <Link
        to="/"
        className=" text-[#5B0601] px-6 py-3 rounded-lg transition-all"
      >
        <i className="bi bi-arrow-left-circle-fill text-xl m-2"></i>
        Volver atras
      </Link>
    </div>
  );
};

export default Contact;