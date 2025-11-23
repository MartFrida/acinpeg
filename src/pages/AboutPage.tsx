import { motion } from "framer-motion";
import { useState } from "react";
import colaboradores from "../data/profesorado_colaboradores.json";
import apoyanos from "../data/apoyan.json";
import graduacion from "../data/graduacion20251004.json";
import equipo from "../data/equipo.json";
import logos from "../data/partnners_logos.json";
import noslogos from "../data/partnners_nos_logos.json";
import SectionTitle from "../components/SectionTitle";
import Divider from "../components/Divider";
import AnimatedCard from "../components/AnimatedCard";
import CardGrid from "../components/CardGrid";
import LogoGrid from "../components/LogoGrid";

interface Guest {
  name: string;
  role: string;
  img: string;
  fullDescription?: string;
}

interface Graduacion {
  src: string;
  alt: string;
}

const AboutPage = () => {
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);

  const guests: Guest[] = colaboradores;
  const apoyan: Guest[] = apoyanos;
  const grad: Graduacion[] = graduacion;
  const nosequipo: Guest[] = equipo;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-gray-200 font-sans leading-relaxed">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-950 to-slate-700 shadow-inner text-white py-16 md:py-24 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold leading-12 md:leading-14 lg:leading-16 mb-4 uppercase tracking-wide drop-shadow-[0_0_20px_rgba(255,191,0,0.15)]"
        >
          Academia Internacional de Periodismo y Comunicación Global
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300"
        >
          Formando profesionales del periodismo con ética, pensamiento crítico y
          vocación global
        </motion.p>
      </section>
      <Divider />
      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-10 lg:py-20 px-2 md:px-10"
      >
        <div className="lg:max-w-5xl mx-auto bg-slate-800/60 p-4 md:p-10 rounded-2xl border border-slate-700 shadow-lg backdrop-blur-md">
          <SectionTitle>Nuestra Misión</SectionTitle>

          <p className="text-gray-300 md:text-lg text-justify leading-relaxed mb-6">
            <span className="font-semibold text-amber-300">ACINPECG</span> en
            estos 25 años haciendo periodismo internacional desde Barcelona.
            Proporciona recursos de alta calidad a directores ejecutivos,
            empresarios, instituciones internacionales, diplomáticos e
            investigadores académicos.
          </p>
          <ul className="list-disc ml-6 text-gray-300 mb-6 space-y-2">
            <li>
              Educar sobre liderazgo, gestión empresarial y responsabilidad
              social.
            </li>
            <li>Fomentar soluciones creativas en periodismo global.</li>
            <li>
              Brindar soluciones sustentables a startups y organizaciones sin
              fines de lucro.
            </li>
            <li>
              Apoyar el desarrollo socioeconómico en zonas rurales y remotas.
            </li>
            <li>
              Compartir técnicas de comunicación no violenta y resolución de
              conflictos.
            </li>
            <li>
              Aumentar la conciencia ambiental y la vida ética y sostenible.
            </li>
            <li>Inspirar y unir a líderes para construir el futuro deseado.</li>
            <li>
              Practicar periodismo objetivo y ético con pedagogía avanzada.
            </li>
          </ul>

          <p className="text-gray-300 leading-relaxed mt-4 text-justify">
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

          <div className="mt-8 border-t border-slate-700 pt-6">
            <p className="text-lg font-semibold text-gray-100 tracking-wide">
              Amaruk Kayshapanta Anchapacxi
            </p>
            <p className="text-sm text-gray-400">
              Director General — Academia Internacional de Periodismo y
              Comunicación Global (ACINPECG)
            </p>

            <p className="text-sm text-gray-400">
              Fundador de la primera cadena de televisión nacional en España
              "Canal Latino TV"
            </p>
            <p className="text-sm text-gray-400">
              Miembro de la FeSP, SPM, SPB, Federación Internacional de
              Periodistas, IJF
            </p>
            <p className="text-sm text-gray-400">
              Jefe de redacción periódicos: Equinoccio, El Migrante, LatiNews,
              Diáspora
            </p>
          </div>
        </div>
      </motion.section>
      <Divider />
      {/* Profesorado y Colaboradores */}
      <section className="py-10 lg:py-20 px-2 md:px-10 pb-0 ">
        <SectionTitle>Profesorado y Colaboradores</SectionTitle>
        {/* Cards */}
        <CardGrid>
          {guests.map((guest, i) => (
            <AnimatedCard
              key={i}
              index={i}
              imgSrc={guest.img}
              title={guest.name}
            >
              <button
                onClick={() => setSelectedGuest(guest)}
                className="mt-4 px-5 py-2 bg-amber-500 text-slate-900 rounded-lg"
              >
                Más información
              </button>
            </AnimatedCard>
          ))}
        </CardGrid>

        {/* Modal */}
        {selectedGuest && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 max-w-screen"
            onClick={() => setSelectedGuest(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900/90 backdrop-blur-xl border border-slate-700  shadow-2xl p-8 text-gray-200 rounded-2xl max-w-lg w-full relative "
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedGuest(null)}
                className="absolute top-3 right-3 text-gray-300 hover:text-white "
              >
                ✕
              </button>
              <img
                src={selectedGuest.img}
                alt={selectedGuest.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-amber-400 mb-2">
                {selectedGuest.name}
              </h3>
              <p className="text-gray-400 italic">{selectedGuest.role}</p>
            </motion.div>
          </div>
        )}
      </section>
      {/* DIVIDER */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent mt-16"></div>
      {/*Avalan */}
      <section className="py-10 lg:py-20 bg-gradient-to-b from-slate-850 via-slate-950 to-slate-850 text-gray-200 px-2 md:px-10  pb-0">
        <h2 className="text-2xl md:text-4xl font-semibold text-center text-amber-400 mb-10 uppercase tracking-wider font-serif drop-shadow-[0_0_10px_rgba(255,191,0,0.3)]">
          Nos Avalan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-10 max-w-6xl mx-auto ">
          {apoyan.map((guest, index) => (
            <AnimatedCard
              key={index}
              index={index}
              imgSrc={guest.img}
              title={guest.name}
            ></AnimatedCard>
          ))}
        </div>
      </section>
      {/* DIVIDER */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent mt-16"></div>
      {/* Coordinación y equipo de coordinación */}
      <section className="py-10 lg:py-20 px-2 md:px-10 ">
        <SectionTitle>Coordinación y equipo de coordinación</SectionTitle>
        {/* Cards */}
        <CardGrid>
          {nosequipo.map((guest, i) => (
            <AnimatedCard
              key={i}
              index={i}
              imgSrc={guest.img}
              title={guest.name}
              role={guest.role}
            ></AnimatedCard>
          ))}
        </CardGrid>
      </section>
      <Divider />
      {/* Medios de Comunicación Nacional e Internacional */}
      <section className="py-10 px-4">
        <SectionTitle className="text-white">
          Medios que dirigimos, coordinamos y colaboramos
        </SectionTitle>
        <LogoGrid items={noslogos} size="h-20" />
      </section>
      <Divider />
      {/*  El director con persolidades relevantes */}
      <section className="py-10 lg:py-20 bg-gradient-to-b from-slate-850 via-slate-950 to-slate-850 text-gray-200 px-2 md:px-10 shadow-xl/20">
        <SectionTitle>El director con persolidades relevantes</SectionTitle>
        <div className="grid grid-cols-1  gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Jaume Collboni Alcalde de la Cuidad de Barcelona",
              role: "El director con persolidades relevantes aquí con Jaume Collboni Alcalde de la Cuidad de Barcelona",
              img: "/images/PersolidadesRelevantes.webp",
            },
          ].map((guest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={guest.img}
                alt={guest.name}
                className="w-full h-auto object-cover"
              />
              <div className="p-6 text-center">
                <p className="text-gray-300 mt-2">{guest.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Divider />
      {/* Graduacion, Promocion 2025 */}
      <section className="py-10 lg:py-20 bg-gradient-to-b from-slate-900 via-slate-700 to-slate-900 text-gray-200 px-2 md:px-10">
        <SectionTitle> Graduacion, Promocion 2025</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {grad.map((alumnos, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/80 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={alumnos.src}
                alt={alumnos.alt}
                className="w-full h-48 lg:h-64 object-cover rounded-t-2xl"
              />
            </motion.div>
          ))}
        </div>
      </section>
      <Divider />
      {/* NUESTROS PARTNERS LOGOS */}
      <section className="py-10 lg:py-20 bg-white/5 rounded-xl hover:bg-white/10 transition px-2 md:px-10 ">
        <SectionTitle className="text-white">
          Nuestros Colaboradores y Patrocinadores
        </SectionTitle>

        <div className="grid grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6 items-center justify-items-center max-w-6xl mx-auto  ">
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
      <Divider />{" "}
    </div>
  );
};

export default AboutPage;
