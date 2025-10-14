import { motion } from "framer-motion";
import { useState } from "react";
import colaboradores from '../data/profesorado_colaboradores.json'
import apoyanos from '../data/apoyan.json'
import logos from '../data/partnners_logos.json'

interface Guest {
  name: string;
  role: string;
  img: string;
  fullDescription?: string;
}

const AboutPage = () => {
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);

  const guests: Guest[] = colaboradores
  const apoyan: Guest[]= apoyanos

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-950 to-slate-700 text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Academia Internacional de Periodismo y Comunicación Global
        </motion.h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Formando profesionales del periodismo para un mundo global e
          interconectado
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 md:px-20 text-justify">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto "
        >
          <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">
            Nuestra Misión
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            ACINPECG en estos 25 años haciendo periodismo internacional desde su
            base que está en Barcelona. Itenta ser un recurso de alta calidad
            para directores ejecutivos, empresarios, instituciones
            internacionales, diplomáticos e investigadores académicos.{" "}
          </p>
          <ul>
            <li>
              {" "}
              – Educar sobre prácticas de Liderazgo, Gestión Empresarial,
              Gestión de Recursos, Economía Circular, Responsabilidad Social
              Corporativa, Sostenibilidad, Ecología, Derechos Humanos, Bienestar
              en el trabajo, Igualdad, Equidad, Diversidad e Inclusión Social.
            </li>
            <li>
              – Fomentar el desarrollo de soluciones creativas a problemas
              globales dentro del periodismo global.{" "}
            </li>
            <li>
              – Brindar soluciones sustentables a startups, pequeñas
              organizaciones sin fines de lucro y empresas locales.{" "}
            </li>
            <li>
              {" "}
              – Apoyar el desarrollo socioeconómico comunitario en zonas rurales
              y remotas cubriendo las necesidades de prensa y comunicación en
              todos los lugares donde las voces son acalladas.{" "}
            </li>
            <li>
              – Compartir técnicas de comunicación no violenta, investigación en
              prevención de conflictos y estrategias de resolución de conflictos
              dentro de la libertad de expresión y de prensa.{" "}
            </li>
            <li>
              – Aumentar la conciencia ambiental sobre la vida sostenible y
              ética.{" "}
            </li>
            <li>
              – Inspirar y unir a los líderes de todo el mundo para ser la voz
              del futuro que nos gustaría ver.{" "}
            </li>
            <li>
              -El periodismo real y objetivo es la filosofía metodologica de
              esta academia con una pedagogía que va más allá del standar
              habitual.
            </li>
          </ul>

          <p>
            Hacemos un periodismo de vanguardia donde la verdad que no salen en
            todos los medios de mundo. Nosotros al no tener un testaferro de
            turno hacemos que la noticia sea informar, investigar, proteger a la
            fuente y honrar la palabra. Durante 30 años vengo haciendo
            periodismo en todos los niveles y los resultados están ya siendo
            historia para las generaciones vendrás producto de la mochila de ser
            inmigrantes. Amaruk Kayshapanta es Fundador y productor general de
            la primera cadena de televisión con emisión gratuita a toda España
            llamando al proyecto hasta ahora en vigor " Canal Latino TV" 8 años
            la cadena analógica más vista en España. Se suman la creación de
            periódicos gratuitos con distribución nacional e internacional como:
            Más Latinos, LatiNews.com, El Migrante, El Ecuatoriano, Diáspora,
            Equinoccio, El Extra. La comunicación es la ciencia de la
            información donde por ejercer tus funciones muchas veces te juegas
            la vida. Pero estoy seguro que el periodismo puede ayudarnos a
            construir un mundo mejor y para todos.
          </p>
          <br></br>
          <p className="text-lg leading-relaxed text-gray-700">Atentamente </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Amaruk Kayshapanta Anchapacxi
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Director General de la Academia Internacional de Periodismo y
            Comunicación Global "ACINPECG"
          </p>
        </motion.div>
      </section>

      {/* Profesorado y Colaboradores */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-10">
          Profesorado y Colaboradores
        </h2>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {guests.map((guest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={guest.img}
                alt={guest.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-900">
                  {guest.name}
                </h3>
                <button
                  onClick={() => setSelectedGuest(guest)}
                  className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
                >
                  Más información
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Modal */}
        {selectedGuest && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setSelectedGuest(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 relative shadow-lg"
              onClick={(e) => e.stopPropagation()} // чтобы не закрывалось при клике внутри
            >
              <button
                onClick={() => setSelectedGuest(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
              >
                ✕
              </button>
              <img
                src={selectedGuest.img}
                alt={selectedGuest.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                {selectedGuest.name}
              </h3>
              <p className="text-gray-700">{selectedGuest.role}</p>
            </motion.div>
          </div>
        )}
      </section>

      {/* Apoyan */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-10">
          Apoyan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {apoyan.map((guest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={guest.img}
                alt={guest.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-900">
                  {guest.name}
                </h3>
                
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Coordinación y equipo de coordinación */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-10">
          Coordinación y equipo de coordinación
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Lic. Jimena Rosero Morales",
              role: "Coordinadora general. Experta directora en eventos de belleza, moda y gestión cultural y empresaria y presidenta de la Aso Círculo de Comunicación  y medios en Europa.",
              img: "/images/juimena.jpg",
            },
            {
              name: "Nelly Rojas",
              role: "Coordinadora Programas Debecas",
              img: "/images/nelly_rojas.jpg",
            },
          ].map((guest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={guest.img}
                alt={guest.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-900">
                  {guest.name}
                </h3>
                <p className="text-gray-600 mt-2">{guest.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

       {/*  El director con persolidades relevantes */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-10">
           El director con persolidades relevantes
        </h2>
        <div className="grid grid-cols-1  gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Jaume Collboni Alcalde de la Cuidad de Barcelona",
              role: "El director con persolidades relevantes aquí con Jaume Collboni Alcalde de la Cuidad de Barcelona",
              img: "/images/PersolidadesRelevantes.jpg",
            },
            
          ].map((guest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={guest.img}
                alt={guest.name}
                className="w-full h-auto object-cover"
              />
              <div className="p-6 text-center">
                
                <p className="text-gray-600 mt-2">{guest.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Graduacion, Promocion 2025 */}
      <section className="py-16 bg-gray-50 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-10">
          Graduacion, Promocion 2025
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <img
            src="/images/diploma1.jpg"
            alt="Entrega de diplomas 1"
            className="rounded-2xl shadow-lg object-cover w-full h-64"
          />
          <img
            src="/images/diploma2.jpg"
            alt="Entrega de diplomas 2"
            className="rounded-2xl shadow-lg object-cover w-full h-64"
          />
          <img
            src="/images/diploma3.jpg"
            alt="Entrega de diplomas 1"
            className="rounded-2xl shadow-lg object-cover w-full h-64"
          />
          <img
            src="/images/guest3.jpg"
            alt="Entrega de diplomas 2"
            className="rounded-2xl shadow-lg object-cover w-full h-64"
          />
          <img
            src="/images/diploma5.jpg"
            alt="Entrega de diplomas 3"
            className="rounded-2xl shadow-lg object-cover w-full h-64"
          />
          <img
            src="/images/diploma6.jpg"
            alt="Entrega de diplomas 3"
            className="rounded-2xl shadow-lg object-cover w-full h-64"
          />
        </div>
      </section>

      {/* NUESTROS PARTNERS LOGOS */}
      <section className="py-16 bg-gray-50 px-6 md:px-20 h-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-center text-blue-800 mb-10"
      >
        Nuestros Partners
      </motion.h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 items-center justify-items-center max-w-6xl mx-auto  ">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.1 }}
            className="flex items-center justify-center w-full h-full transition-transform duration-100"
          >
            <img
              src={logo}
              alt={`logo-${index + 1}`}
              className="h-28 w-auto object-contain hover:grayscale-0 transition-all duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default AboutPage;
