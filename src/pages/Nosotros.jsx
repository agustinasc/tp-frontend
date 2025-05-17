import { useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet"
import * as motion from "motion/react-client"

const Nosotros = () => {
  const navigate = useNavigate()

  return (
    <>
       <Helmet>
        <title>Nosotros | Panificadora Mathius</title>
        <meta
          name="description"
          content="Conocé la historia de Panificadora Mathius, nuestra pasión por el pan artesanal y nuestro compromiso con Catamarca."
        />
        <meta property="og:title" content="Nosotros | Panificadora Mathius" />
        <meta
          property="og:description"
          content="Descubrí quiénes somos y por qué amamos hacer pan artesanal en Catamarca."
        />
      </Helmet>
      
      <section className="bg-[#5E272D] text-white py-12 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold mb-4">
            Nuestra historia
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Texto */}
            <div>
              <p className="text-lg leading-relaxed">
                Desde Julio de 1993, somos una panadería y cafetería familiar ☕ con una sola misión:
                llevar a la mesa de cada catamarqueño productos frescos, artesanales y hechos con amor.❤️
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                Con el paso del tiempo ⏱️, nos convertimos en la panadería del barrio: un lugar donde el
                aroma del pan recién horneado se mezcla con la calidez de quienes nos eligen cada día.🌞
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                Nuestro equipo está formado por trabajadores catamarqueños que comparten la pasión por
                lo artesanal y el compromiso de ofrecer siempre lo mejor😉. Gracias por ser parte de esta
                historia. Esperamos seguir acompañando cada desayuno, cada merienda, cada momento
                compartido… siendo parte de tu mesa, como desde el primer día. 🥖
              </p>
            </div>

    <div className="flex flex-col gap-6">
          {/* Foto 1 */}
          <motion.div
            whileHover={{ scale: 1.10 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src="/nosotros2.jpeg"
              alt="Personal de la panadería"
              className="object-cover h-64 w-full"
            />
          </motion.div>

          {/* Foto 2 */}
          <motion.div
            whileHover={{ scale: 1.10 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src="/nosotros3.jpg"
              alt="Nuestro Equipo"
              className="object-cover h-64 w-full"
            />
          </motion.div>
        </div>
          </div>
        </div>
        
        <button
          onClick={() => navigate(-1)}
        >
          <i className="bi bi-arrow-left-circle-fill text-xl m-2"></i>
          Volver atras
        </button>
      </section>
    </>
  )
}

export default Nosotros