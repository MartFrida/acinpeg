import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import courses from "../data/courses.json";
import Divider from "../components/Divider";
import { Send } from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
  [key: string]: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  course?: string;
  message?: string;
}

export default function ContactForm() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [open, setOpen] = useState(false);

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) newErrors.name = "El nombre es obligatorio.";
    if (!form.email.trim()) newErrors.email = "El email es obligatorio.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Formato de email inválido.";

    if (!form.course.trim())
      newErrors.course = "Seleccione un curso por favor.";

    if (!form.message.trim())
      newErrors.message = "El mensaje no puede estar vacío.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Por favor, revisa los campos.");
      return;
    }

    emailjs.send(serviceId, templateID, form, publicKey).then(
      () => {
        toast.success("Mensaje enviado correctamente!");
        setForm({ name: "", email: "", phone: "", course: "", message: "" });
      },
      () => {
        toast.error("Error al enviar. Intenta nuevamente.");
      }
    );
  };

  return (
    <div className="w-full mt-10 pb-10 ">
      <Toaster
        containerStyle={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
      />

      <Divider />

      <section className="max-w-5xl mx-auto mt-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-800/70 border border-amber-400/40 rounded-2xl p-6 mb:p-10 shadow-xl backdrop-blur-lg w-full"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-center text-amber-400 mb-4 md:mb-6 drop-shadow">
            Inscripción / Contacto
          </h2>
          <p className="text-gray-300 text-center mb-6 md:mb-10 text-md">
            Completa el formulario y nos comunicaremos contigo lo antes posible.
          </p>

          <form onSubmit={sendEmail} className="space-y-6 w-full">
            {/* NAME */}
            <div>
              <label className="text-gray-300 block mb-2 font-medium">
                Nombre completo
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full p-3 rounded-lg bg-slate-900/40 border border-slate-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition text-gray-200"
                placeholder="Tu nombre..."
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-gray-300 block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full p-3 rounded-lg bg-slate-900/40 border border-slate-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition text-gray-200"
                placeholder="ejemplo@gmail.com"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* PHONE */}
            <div>
              <label className="text-gray-300 block mb-2 font-medium">
                Teléfono / WhatsApp
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full p-3 rounded-lg bg-slate-900/40 border border-slate-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition text-gray-200"
                placeholder="+34 ..."
              />
            </div>

            {/* COURSE SELECT */}
            <div className="relative w-full">
              <label className="text-gray-300 block mb-2 font-medium">
                Curso que te interesa
              </label>
              <button
                type="button"
                className="w-full p-3 rounded-lg bg-slate-900/40 border border-slate-700 text-gray-200/50 flex justify-between items-center"
                onClick={() => setOpen(!open)}
              >
                {form.course || "Selecciona un curso"}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {open && (
                <ul className="absolute mt-1 w-full bg-slate-900 border border-slate-700 rounded-lg shadow-lg z-50 max-h-60 overflow-auto">
                  {courses.map((c: Course) => (
                    <li
                      key={c.id}
                      onClick={() => {
                        setForm({ ...form, course: c.title });
                        setOpen(false);
                      }}
                      className="p-3 cursor-pointer hover:bg-slate-800 transition text-gray-200"
                    >
                      {c.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-gray-300 block mb-2 font-medium">
                Mensaje
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full p-3 rounded-lg bg-slate-900/40 border border-slate-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition text-gray-200"
                placeholder="Escribe tu consulta..."
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* SUBMIT */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="flex justify-center items-center gap-3 px-4 py-2 bg-amber-500/90 hover:bg-amber-500 text-slate-900 text-lg rounded-lg transition mt-auto w-fit"
            >
              Enviar mensaje
              <Send className="w-[22px] h-[22px]" />
            </motion.button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
