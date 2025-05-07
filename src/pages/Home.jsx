import React from 'react'
import HomePage from './HomePage'

const Home = () => {
    return (
      <div className=" h-[80vh] bg-cover bg-center flex flex-col items-center justify-center text-white" style={{ backgroundImage: "url('/fotoLocal.jpg')" }}>
        <div className="bg-[#5E272D] bg-opacity-60 p-8 rounded-xl text-center max-w-2xl mx-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Panificadora y Cafetería <span className="text-[#E6A55D]">Mathius</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            🎉 Este julio cumplimos <strong>32 años</strong> llevando el verdadero sabor artesanal de nuestras manos a tu mesa.
            <br /><br />
            Te esperamos en <strong>Ayacucho 909, esq. Mota Botello</strong> 🥐☕
            <br /><br />
            ¡Hecho con amor por maestros de la panificación catamarqueña! 
          </p>
        </div>
        <HomePage />
      </div>
    )
  }

export default Home