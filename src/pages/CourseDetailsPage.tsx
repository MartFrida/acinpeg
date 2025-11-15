import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Clock, User, Award, Languages } from "lucide-react";
import courses from "../data/courses.json";
import Divider from "../components/Divider";

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

export default function CourseDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const course: Course | undefined = courses.find((c) => c.id === id);
  const MotionLink = motion.create(Link);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-300">
        <p>Curso no encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-gray-200">

      {/* == HERO == */}
      <section className="relative h-72 md:h-[28rem] overflow-hidden shadow-lg shadow-black/30">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover brightness-[0.45]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold uppercase tracking-wider text-white drop-shadow-[0_0_25px_rgba(255,200,50,0.2)]"
          >
            {course.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mt-4 text-gray-300 text-lg md:text-xl max-w-2xl"
          >
            Aprende con los mejores — y obtén una certificación reconocida
          </motion.p>
        </div>
      </section>

      <Divider />

      {/* == Back button == */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 mt-6 mb:mt-10">
        <Link
          to="/coursos"
          className="inline-flex items-center text-amber-400 hover:text-amber-500 transition font-semibold"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Volver a cursos
        </Link>
      </div>

      {/* === MAIN CONTENT === */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-6 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-slate-900/70 border border-slate-700 rounded-2xl shadow-xl backdrop-blur-lg p-6 md:p-12"
        >

          {/* === Descripción === */}
          <h2 className="text-2xl font-bold text-amber-400 tracking-wide mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            Descripción
          </h2>
          <p className="text-gray-300 leading-relaxed tracking-wide  whitespace-pre-line">
            {course.description}
          </p>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent my-10" />

          {/* === Contenido === */}
          <h2 className="text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            {course.contenido.title}
          </h2>

          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {Array.isArray(course.contenido.description)
              ? course.contenido.description.join("\n")
              : course.contenido.description}
          </p>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent my-10" />

          {/* === Details Grid === */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-200">

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
              <Award className="w-[70px] h-[70px] lg:w-[60px] lg:h-[60px] text-amber-400" />
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

          {/* === CTA Button === */}
          <MotionLink
            to="/contacts"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 block mt-14 w-fit mx-auto
             bg-gradient-to-r from-amber-400 to-amber-600
             text-slate-900 font-bold uppercase tracking-wider rounded-xl 
             shadow-lg hover:shadow-amber-400/30
             transition-all duration-500"
          >
            Inscribirse Ahora
          </MotionLink>

        </motion.div>
      </section>
    </div>
  );
}
