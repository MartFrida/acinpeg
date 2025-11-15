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
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

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

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form, "YOUR_PUBLIC_KEY")
      .then(
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
    <div className="w-full  mt-10 pb-24">
      <Toaster />
      <Divider />

      <section className="max-w-5xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-800/70 border border-amber-400/40 rounded-2xl p-10 shadow-xl backdrop-blur-lg w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-400 mb-6 drop-shadow">
            Inscripción / Contacto
          </h2>
          <p className="text-gray-300 text-center mb-10 text-lg">
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
            <div>
  <label className="text-gray-300 block mb-2 font-medium">
    Curso que te interesa
  </label>
  <div className="relative">
    <select
      value={form.course}
      onChange={(e) => setForm({ ...form, course: e.target.value })}
      className="w-full p-3 pr-10 rounded-lg bg-slate-900/40 border border-slate-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition text-gray-200 appearance-none"
    >
      <option value="">Selecciona un curso</option>
      {courses.map((c: Course) => (
        <option key={c.id} value={c.title}>
          {c.title}
        </option>
      ))}
    </select>

    {/* Опционально можно добавить свою стрелку */}
    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-300">
      ▼
    </div>
  </div>
  {errors.course && (
    <p className="text-red-400 text-sm mt-1">{errors.course}</p>
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
