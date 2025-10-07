import { motion } from "framer-motion";

const AboutPage = () => {
  return (
     <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Academia Internacional de Periodismo – Comunicación Global
        </motion.h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Formando profesionales del periodismo para un mundo global e interconectado.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">Nuestra Misión</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Nuestra misión es ofrecer una formación periodística de excelencia,
            combinando la ética profesional, la investigación rigurosa y las nuevas
            tecnologías de la comunicación. Buscamos formar comunicadores capaces de
            analizar críticamente la realidad global y contribuir al fortalecimiento
            de una sociedad informada, plural y democrática.
          </p>
        </motion.div>
      </section>

      {/* Diploma Ceremony Photos */}
      <section className="py-16 bg-gray-50 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-10">
          Primera Ceremonia de Entrega de Diplomas
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
            alt="Entrega de diplomas 3"
            className="rounded-2xl shadow-lg object-cover w-full h-64"
          />
        </div>
      </section>

      {/* Honored Guests */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-10">
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
                <h3 className="text-xl font-semibold text-blue-900">{guest.name}</h3>
                <p className="text-gray-600 mt-2">{guest.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutPage