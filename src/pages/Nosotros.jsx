import { Helmet } from "react-helmet"
import * as motion from "motion/react-client"

const Nosotros = () => {
/*   const navigate = useNavigate()
 */
  return (
    <>
       <Helmet>
        <title>Nosotros | Panificadora y Panaderia Mathius </title>
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
      
      <section className="text-[#5E272D] py-6 px-6 min-h-[calc(100vh-220px)] md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold m-6 text-center md:text-left">
            Nuestra historia
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Texto */}
            <div>
              <p className="text-lg leading-relaxed mb-4">
                Desde <strong>Julio de 1993</strong>, somos una <strong>panadería y cafetería familiar</strong> ☕ con una sola misión:
                <span className="block mt-2 text-xl font-semibold italic">Llevar a tu mesa productos frescos, artesanales y hechos con amor. ❤️</span>
              </p>
              <p className="text-lg leading-relaxed mb-4">
                  Con el paso del tiempo ⏱️, nos convertimos en la panadería del barrio: un lugar donde...
                  <span className="block mt-2 text-xl font-semibold italic">
                    El aroma del pan recién horneado se mezcla con la calidez de quienes nos eligen cada día. 🌞
                  </span>
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Nuestro equipo está formado por trabajadores catamarqueños que comparten la pasión por lo artesanal...
                  <span className="block mt-2 text-xl font-semibold italic">
                    Gracias por ser parte de esta historia. Seguiremos acompañando cada momento compartido. 🥖
                  </span>
                </p>
            </div>

            <div className="flex flex-col gap-6">
          {/* Foto 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl shadow-lg overflow-hidden"
        >
          <img
            src="/nosotros2.jpeg"
            alt="Personal de la panadería"
            className="object-cover h-72 w-full md:h-80"
          />
        </motion.div>

          {/* Foto 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl shadow-lg overflow-hidden"
        >
          <img
            src="/nosotros3.jpg"
            alt="Nuestro equipo"
            className="object-cover h-72 w-full md:h-80"
          />
        </motion.div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 p-8 bg-[#FAE5CF] text-[#5E272D] rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Texto de valores */}
          <div className="flex flex-col items-center md:w-1/2">
            <h3 className="text-4xl font-bold mb-4 text-center md:text-left">Nuestros valores</h3>
            <ul className="list-disc list-inside space-y-2 text-lg leading-relaxed">
              <li><strong>Compromiso</strong> con lo artesanal 🥐</li>
              <li><strong>Calidez</strong> en la atención 🤗</li>
              <li><strong>Amor</strong> por lo local y lo hecho en Catamarca 🇦🇷</li>
            </ul>
          </div>

          {/* Imagen */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/panCanasta.png"
              alt="Canasta de panes"
              className="w-full max-w-xs md:max-w-sm rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>
      {/* Servicios y Productos */}
      <div className="mt-16 p-8 bg-[#FFF1E6] text-[#5E272D] rounded-2xl shadow-md max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-6 text-center">Servicios y Productos</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Servicio 1 */}
          <div className="bg-white rounded-xl shadow-lg p-4 text-center hover:scale-105 transition-transform">
            <img src="/produccion.jpeg" alt="Servicio de catering" className="w-full h-40 object-cover rounded-md mb-4" />
            <h4 className="text-2xl font-semibold mb-2">Catering artesanal</h4>
            <p className="text-lg">Llevamos nuestros sabores a tus eventos con propuestas únicas y frescas.</p>
          </div>

          {/* Servicio 2 */}
          <div className="bg-white rounded-xl shadow-lg p-4 text-center hover:scale-105 transition-transform">
            <img src="/panadero.jpeg" alt="Producción para cafeterías" className="w-full h-40 object-cover rounded-md mb-4" />
            <h4 className="text-2xl font-semibold mb-2">Producción para terceros</h4>
            <p className="text-lg">Ofrecemos productos a panaderías y cafeterías que buscan calidad y sabor casero.</p>
          </div>

          {/* Servicio 3 */}
          <div className="bg-white rounded-xl shadow-lg p-4 text-center hover:scale-105 transition-transform">
            <img src="/cafeteria.jpg" alt="Nuestra cafetería" className="w-full h-40 object-cover rounded-md mb-4" />
            <h4 className="text-2xl font-semibold mb-2">Cafetería</h4>
            <p className="text-lg">Te esperamos con un ambiente cálido y nuestros clásicos recién horneados.</p>
          </div>
        </div>
      </div>

            {/* CTA Final */}
      <div className="mt-16 text-center bg-[#FFD6C2] py-12 px-6 rounded-2xl shadow-lg">
        <h3 className="text-4xl font-bold text-[#5E272D] mb-4">¿Todavía no nos conocés?</h3>
        <p className="text-lg md:text-xl text-[#5E272D] mb-6">
          Vení a degustar lo que hacemos con tanto amor en nuestra cafetería o hacé tu pedido para llevar el sabor artesanal a tu mesa. 🥐☕
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/contacto"
            className="bg-[#5E272D] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#3b1a1f] transition"
          >
            Hacé tu pedido
          </a>
          <a
            href="/contacto"
            className="border-2 border-[#5E272D] text-[#5E272D] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#5E272D] hover:text-white transition"
          >
            Visitános
          </a>
        </div>
      </div>

    </>
  )
}

export default Nosotros