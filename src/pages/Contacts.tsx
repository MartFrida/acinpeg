import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaPhone } from "react-icons/fa";
import Divider from "../components/Divider";

export default function Contacts() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-gray-200">

      {/* === HERO SECTION === */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 py-20 text-center shadow-inner">
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-white drop-shadow-[0_0_20px_rgba(255,191,0,0.2)]"
        >
          Contáctanos
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mt-4"
        >
          Estamos aquí para ayudarte y acompañarte en tu formación profesional.
        </motion.p>
      </section>

      <Divider />

      {/* === CONTACT CARDS SECTION === */}
      <section className="px-6 md:px-20 pb-24 max-w-7xl mx-auto mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* EMAIL */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/70 border border-amber-400/40 rounded-2xl p-10 shadow-xl backdrop-blur-sm hover:shadow-amber-500/10 transition"
          >
            <Mail className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-amber-400 mb-2 text-center">
              Email
            </h3>
            <p className="text-gray-300 text-center text-lg">acinpecg@gmail.com</p>
          </motion.div>

          {/* PHONE / WHATSAPP */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-800/70 border border-amber-400/40 rounded-2xl p-10 shadow-xl backdrop-blur-sm hover:shadow-amber-500/10 transition"
          >
            <Phone className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-amber-400 mb-4 text-center">
              Teléfono / WhatsApp
            </h3>

            <div className="space-y-2 text-center">
              <a
                href="tel:+34696869949"
                className="flex justify-center items-center text-gray-300 hover:text-amber-400 transition"
              >
                <FaPhone className="mr-2" /> +34 696 869 949
              </a>

              <a
                href="tel:+34666786097"
                className="flex justify-center items-center text-gray-300 hover:text-amber-400 transition"
              >
                <FaPhone className="mr-2" /> +34 666 786 097
              </a>
            </div>
          </motion.div>

          {/* LOCATION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-800/70 border border-amber-400/40 rounded-2xl p-10 shadow-xl backdrop-blur-sm hover:shadow-amber-500/10 transition md:col-span-2"
          >
            <MapPin className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-amber-400 mb-2 text-center">
              Sede Internacional
            </h3>
            <p className="text-gray-300 text-center text-lg">Barcelona, Madrid, España</p>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
