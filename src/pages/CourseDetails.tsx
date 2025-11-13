import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Clock, User, Award, Languages } from "lucide-react";
import courses from "../data/courses.json";

interface Section {
  title: string;
  description: string | string[];
}

interface Course {
  id: string;
  title: string;
  description: string;
  contenido: Section;
  dirigido: Section;
  modalidad: Section;
  duracion: Section;
  teacher: string;
  level: string;
  certificacion: Section;
  language: string;
  image: string;
}

export default function CourseDetails() {
  const { id } = useParams<{ id: string }>();
  const course: Course | undefined = courses.find((c) => c.id === id);
  const MotionLink = motion.create(Link);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        <p>Curso no encontrado.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-200">
      {/* 🌅 Hero Section */}
      <section className="relative h-72 md:h-[28rem] overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-wide uppercase text-amber-400 drop-shadow-lg"
          >
            {course.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-lg md:text-xl max-w-2xl text-gray-300"
          >
            Aprende con los mejores — y obtén una certificación reconocida.
          </motion.p>
        </div>
      </section>

      {/* 🔙 Back Button */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 mt-8">
        <Link
          to="/coursos"
          className="inline-flex items-center text-amber-400 font-semibold hover:text-amber-600 transition"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Volver a cursos
        </Link>
      </div>

      {/* 📘 Course Content */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-800/80 shadow-xl rounded-2xl p-8 md:p-10 backdrop-blur-sm border border-amber-400"
        >
          {/* Descripción */}
          <h2 className="text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            Descripción
          </h2>
          <p className="text-gray-300 whitespace-pre-line leading-relaxed">
            {course.description}
          </p>

          {/* Contenido */}
          <h2 className="text-2xl font-bold text-amber-400 mt-10 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            {course.contenido.title}
          </h2>
          <p className="text-gray-300 whitespace-pre-line leading-relaxed">
            {Array.isArray(course.contenido.description)
              ? course.contenido.description.join("\n")
              : course.contenido.description}
          </p>

          {/* Detalles del curso */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-200">
            <div>
              <span className="font-semibold text-amber-400">{course.dirigido.title}:</span>{" "}
              {course.dirigido.description}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-400" />
              <span>
                <strong className="text-amber-400">{course.duracion.title}:</strong>{" "}
                {course.duracion.description}
              </span>
            </div>
            <div>
              <span className="font-semibold text-amber-400">{course.modalidad.title}:</span>{" "}
              {course.modalidad.description}
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-amber-400" />
              <span>
                <strong className="text-amber-400">Profesor:</strong> {course.teacher}
              </span>
            </div>
            <div>
              <span className="font-semibold text-amber-400">Nivel:</span> {course.level}
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>
                <strong className="text-amber-400">{course.certificacion.title}:</strong>{" "}
                {course.certificacion.description}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Languages className="w-5 h-5 text-amber-400" />
              <span>
                <strong className="text-amber-400">Idioma:</strong> {course.language}
              </span>
            </div>
          </div>

          {/* Call-to-Action Button */}
          <MotionLink
            to="/contacts"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 block mt-12 w-fit 
             bg-gradient-to-r from-amber-400 to-amber-600 
             text-slate-900 font-bold tracking-widest rounded-xl uppercase 
             shadow-md transition-all duration-500 
             hover:bg-gradient-to-l hover:from-amber-600 hover:to-amber-400 hover:shadow-lg"
          >
            Inscribirse Ahora
          </MotionLink>
        </motion.div>
      </section>
    </div>
  );
}
