import { motion } from "framer-motion";

const AboutPage = () => {
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
      <section className="py-16 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto "
        >
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">
            Nuestra Misión
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            ACINPECG en estos 25 años haciendo periodismo internacional desde su
            base que está en Barcelona. Itenta ser un recurso de alta calidad
            para directores ejecutivos, empresarios, instituciones
            internacionales, diplomáticos e investigadores académicos. 
            <ul>
              <li> – Educar
            sobre prácticas de Liderazgo, Gestión Empresarial, Gestión de
            Recursos, Economía Circular, Responsabilidad Social Corporativa,
            Sostenibilidad, Ecología, Derechos Humanos, Bienestar en el trabajo,
            Igualdad, Equidad, Diversidad e Inclusión Social.</li>
            <li>– Fomentar el
            desarrollo de soluciones creativas a problemas globales dentro del
            periodismo global. </li>
            <li>– Brindar soluciones sustentables a startups,
            pequeñas organizaciones sin fines de lucro y empresas locales. </li>
            <li> –
            Apoyar el desarrollo socioeconómico comunitario en zonas rurales y
            remotas cubriendo las necesidades de prensa y comunicación en todos
            los lugares donde las voces son acalladas. </li>
            <li>– Compartir técnicas de
            comunicación no violenta, investigación en prevención de conflictos
            y estrategias de resolución de conflictos dentro de la libertad de
            expresión y de prensa. </li>
            <li>– Aumentar la conciencia ambiental sobre la
            vida sostenible y ética. </li>
            <li>– Inspirar y unir a los líderes de todo el
            mundo para ser la voz del futuro que nos gustaría ver. </li>
            <li>-El periodismo real y objetivo es la filosofía metodologica de esta
            academia con una pedagogía que va más allá del standar habitual.</li>
            </ul>
           
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Dr. Paco Miño ( Ecuador)",
              role: "Médico cirujano oriundo del Ecuador, escritor, poeta, comunicador y un gestor cultural latinoamericano.",
              img: "/images/logo.png",
            },
            {
              name: "Lic. Patricia Sosa ( Ecuador)",
              role: "Ecuatoriana master en periodismo en la universidad complutense de Madrid, ex Cónsul General de Ecuador en España, activista indigenista y en defensa de los derechos humanos de América Latina.",
              img: "/images/logo.png",
            },
            {
              name: "Dra. Cristina Russo ( Ingleterra)",
              role: "Directora general del periódico digital 'Humus 4 Change' en Londres desde hace 20 años es experta en Marketing digital y IA, abogada y psicóloga una poliglota dedicada a la defensa de los derechos humanos internacionales.",
              img: "/images/logo.png",
            },
            {
              name: "Lic. Guillermo Cervera ( España)",
              role: "Un periodista y correspondal de guerra de fama mundial ha publicado en New York Time, The Rolling Stones, Miami Herald, Nacional Geography, CNN, ABC, El país, La Vanguardia, TVE1, etc. Español con 40 años en funciones y fotoperiodista.",
              img: "/images/logo.png",
            },
            {
              name: "Prof. Jorge Rivera ( Colombia)",
              role: "Un periodista con más de 30 años de profesión director del programa el Café mañanero por redes sociales.",
              img: "/images/logo.png",
            },
            {
              name: "Sr. Cristhian Esquivel ( Perú)",
              role: "Un Actor, comunicador ,productor audiovisual y Comunicador de amplia experiencia",
              img: "/images/logo.png",
            },
            {
              name: "Prof. Carlos Santos ( Argentina)",
              role: "Un director, productor y Comunicador audiovisual argentino de fama y reconocimiento internacional.",
              img: "/images/logo.png",
            },
            {
              name: "Lic. Istar Montul ( España)",
              role: "Una bióloga marina experta en antropología humana y periodista especialista en la cultura árabe es originaria de España y reside en Marruecos y Barcelona",
              img: "/images/logo.png",
            },
            {
              name: "Lic. Amaruk Kayshapanta ( Ecuador)",
              role: "Indígena Kichwa humanista un filantropo, considerado un Polímata, el primer indígena del Sur América en fundar la cadena de televisión 'Canal Latino Tv' con emisión a nivel nacional en España con más de 35 años de experiencia en la formación de Periodista, Comunicadores y profesionales de la producción audiovisual. Director general actual de varios periódicos impresos y digitales y director y fundador de ACINPECG.",
              img: "/images/guest1.jpg",
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

      {/* Profesor, Tutor, Coordinador */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-10">
          Profesor, Tutor, Coordinador
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Lic. Amaruk Kayshapanta Anchapacxi",
              role: "Director General",
              img: "/images/cv-foto.jpg",
            },
            {
              name: "Lic. Jimena Rosero Morales",
              role: "Coordinadora general. Experta directora en eventos de belleza, moda y gestión cultural y empresaria y presidenta de la Aso Círculo de Comunicación  y medios en Europa.",
              img: "/images/logo.png",
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

      {/* Diploma Ceremony Photos */}
      <section className="py-16 bg-gray-50 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-10">
          Ceremonia de Entrega de Diplomas
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
            src="/images/diploma5.jpg"
            alt="Entrega de diplomas 3"
            className="rounded-2xl shadow-lg object-cover w-full h-64"
          />
        </div>
      </section>

      {/* Honored Guests */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center text-blue-900 mb-10">
          Invitados de Honor
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Dr. Carlos Fernández",
              role: "Periodista y Analista Internacional",
              img: "/images/guest1.jpg",
            },
            {
              name: "Lic. María López",
              role: "Directora de Comunicación Global",
              img: "/images/guest2.jpg",
            },
            {
              name: "Prof. Juan Ramírez",
              role: "Editor en Jefe – Diario Internacional",
              img: "/images/guest3.jpg",
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
    </div>
  );
};

export default AboutPage;
