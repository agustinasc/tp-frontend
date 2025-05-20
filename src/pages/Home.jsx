import React from 'react'
import HomePage from './HomePage'
import * as motion from "motion/react-client"
import { Helmet } from "react-helmet"

const Home = () => {


    return (
      <div className="min-h-[100vh] flex flex-col">
              {/* Helmet: SEO y metadatos */}
        <Helmet>
            <title> Inicio | Panificadora y Panaderia Mathius</title>
              <meta
                name="google-site-verification"
                content="B6rnbFug4UvuiH3s-FeAiNhYhb_JOGiNQtijBOqZdKA"
                />
              <meta
                name="description"
                content="Panaderia artesanal en Catamarca. Facturas, panes frescos y atención familiar todos los días."
              />
              <meta name="robots" content="index, follow" />
              <meta property="og:title" content="Panadería y Cafetería Mathiu's en Catamarca" />
              <meta property="og:description" content="Mas de 30 años de sabor artesanal. Facturas, pan frances, pan de masa madre y amor por la panificación." />
              <meta property="og:image" content="https://mathius.com.ar/fotoLocal.jpg" />
              <meta property="og:type" content="website" />
              <meta property="og:locale" content="es_AR" />
              <script type="application/ld+json">
                {`
                  {
                    "@context": "https://schema.org",
                    "@type": "Bakery",
                    "name": "Panadería y Cafetería Mathiu's",
                    "image": "https://mathius.com.ar/fotoLocal.jpg",
                    "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "Ayacucho 909, esquina Mota Botello",
                      "addressLocality": "San Fernando del Valle de Catamarca",
                      "addressRegion": "Catamarca",
                      "postalCode": "4700",
                      "addressCountry": "AR"
                    },
                    "geo": {
                      "@type": "GeoCoordinates",
                      "latitude": -28.469843,
                      "longitude": -65.781123
                    },
                    "url": "https://mathius.com.ar",
                    "telephone": "+54 383 471-3230",
                    "openingHours": "Mo-Su 07:00-21:00",
                    "priceRange": "$",
                    "servesCuisine": ["Panadería", "Cafetería", "Panificadora"],
                    "sameAs": [
                      "https://www.instagram.com/panificadora.mathius/",
                      "https://www.facebook.com/panificadoramathius"
                    ]
                  }
                `}
              </script>
        </Helmet>

              {/* Imagen de portada (70vh) */}

         <div className="w-full">
            <img 
              src="/fotoLocal.jpg" 
              alt="Foto del local con logo Mathius Panaderia"  
              className="w-full max-h-[900px] object-cover"
            />
         </div>
{/*         <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            scale: { type: "spring", bounce: 0.5 },
          }}
          whileHover={{
            scale: [null, 1.1, 1.2],
            transition: {
              duration: 0.5,
              times: [0, 0.6, 1],
              ease: ["easeInOut", "easeOut"],
            },
          }}
        > */}
        <div className="bg-[#FBE8A6] bg-opacity-60 py-20 px-10 rounded-xl text-center">
          <h1 className="text-[#5E272D] text-6xl md:text-5xl font-bold mb-4">
            Panadería artesanal y Cafetería en Catamarca 
            <br />
            <span className="text-[#b56b74] text-shadow">Mathiu's</span>
          </h1>
          <p className="text-2xl leading-relaxed text-[#5E272D] max-w-4xl mx-auto">
            En <strong>Mathiu's</strong>, elaboramos <strong>el mejor pan frances de la ciudad</strong>, facturas frescas y <strong>delicias artesanales </strong>con recetas tradicionales y mucho amor.
            <br /><br />
            🥖 La <strong>panadería y cafetería familiar en Catamarca</strong>, con <strong>mas de 30 años</strong> de historia llevando el verdadero sabor local a tu mesa.
            <br /><br />
           ¡Te esperamos con aroma a pan recién horneado y atención cálida! ☕
          </p>

        </div>
{/*         </motion.div>
 */}
        {/* <HomePage /> */}
      </div>
    )
  }

export default Home