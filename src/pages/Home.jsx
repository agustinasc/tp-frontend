import React from 'react'
import HomePage from './HomePage'
import * as motion from "motion/react-client"
import { Helmet } from "react-helmet"

const Home = () => {

  <Helmet>
        <meta
          name="google-site-verification"
          content="B6rnbFug4UvuiH3s-FeAiNhYhb_JOGiNQtijBOqZdKA"
        />
        <title>Inicio | Panificadora y Panaderia Mathius</title>
        <meta
          name="description"
          content="Panaderia artesanal en Catamarca. Facturas, panes frescos y atención familiar todos los días."
        />
      </Helmet>

    return (
      <div className="bg-cover bg-center flex flex-col min-h-screen items-center justify-center text-white m-4" style={{ backgroundImage: "url('/fotoLocal.jpg')" }}>
        {/* <div className="bg-[#5E272D] bg-opacity-60 p-8 rounded-xl text-center max-w-2xl m-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Panadería y Cafetería <span className="text-[#E6A55D]">Mathiu's</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            ¡Hecho con amor por maestros de la panificación catamarqueña! 
            <br /><br />
            🎉 Este julio cumplimos <strong>32 años</strong> llevando el verdadero sabor artesanal de nuestras manos a tu mesa.
            <br /><br />
            Te esperamos en <strong>Ayacucho 909, esq. Mota Botello</strong> 🥐☕
          </p>
        </div> */}


        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", bounce: 0.5 },
          }}
          whileHover={{
            scale: [null, 1.1, 1.3],
            transition: {
              duration: 0.5,
              times: [0, 0.6, 1],
              ease: ["easeInOut", "easeOut"],
            },
          }}
          className="bg-[#FBE8A6] bg-opacity-60 p-8 rounded-xl text-center max-w-2xl m-4"
        >
          <h1 className="text-[#A47148] text-4xl md:text-5xl font-bold mb-4">
            Panadería y Cafetería <span className="text-[#5E272D] text-shadow">Mathiu's</span>
          </h1>
          <p className="text-[#A47148] text-lg md:text-xl leading-relaxed">
            ¡Hecho con amor por maestros de la panificación catamarqueña!
            <br /><br />
            🎉 Este julio cumplimos <strong>32 años</strong> llevando el verdadero sabor artesanal de nuestras manos a tu mesa.
            <br /><br />
            Te esperamos en <strong>Ayacucho 909, esq. Mota Botello</strong> 🥐☕
          </p>
        </motion.div>

        {/* <HomePage /> */}
      </div>
    )
  }

export default Home