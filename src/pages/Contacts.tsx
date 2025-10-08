import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Contacts() {
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
          Contáctanos
        </motion.h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Estamos aquí para responder tus preguntas y acompañarte en tu formación periodística.
        </p>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          <div>
            <Mail className="w-10 h-10 mx-auto text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Email</h3>
            <p className="text-gray-700">info@academiaperiodismo.org</p>
          </div>

          <div>
            <Phone className="w-10 h-10 mx-auto text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Teléfono / WhatsApp</h3>
            <p className="text-gray-700">+34 600 123 456</p>
          </div>

          <div>
            <Globe className="w-10 h-10 mx-auto text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Redes Sociales</h3>
            <p className="text-gray-700">Facebook · Instagram · LinkedIn</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-10">
          <h2 className="text-3xl font-semibold text-center text-blue-800 mb-8">
            Envíanos un mensaje
          </h2>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-1 gap-6"
          >
            <div>
              <label className="block text-gray-700 font-medium mb-2">Nombre</label>
              <input
                type="text"
                placeholder="Tu nombre completo"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-700 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Correo electrónico</label>
              <input
                type="email"
                placeholder="tuemail@example.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-700 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Mensaje</label>
              <textarea
                rows={5}
                placeholder="Escribe tu mensaje aquí..."
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-700 outline-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="bg-blue-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition mt-4"
            >
              Enviar Mensaje
            </motion.button>
          </form>
        </div>
      </section>

      {/* Optional: Map or Image */}
      <section className="py-16 px-6 md:px-20 text-center">
        <MapPin className="w-10 h-10 mx-auto text-blue-700 mb-4" />
        <p className="text-lg text-gray-700">
          Nuestra sede internacional – Madrid, España  
        </p>
        <img
          src="/images/academy-location.jpg"
          alt="Ubicación de la academia"
          className="rounded-2xl shadow-lg mx-auto mt-6 w-full md:w-2/3 object-cover"
        />
      </section>
    </div>
  );
}
