import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
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

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        <p>Curso no encontrado.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/40">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold"
          >
            {course.title}
          </motion.h1>
          
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 mt-8">
        <Link
          to="/coursos"
          className="inline-flex items-center text-blue-900 font-medium hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Volver a cursos
        </Link>
      </div>

      {/* Course Content */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Descripción
          </h2>
          <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
            {course.description}
          </p>

          <h2 className="text-2xl font-semibold text-blue-900 mt-10 mb-4">
            {course.contenido.title}
          </h2>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            {Array.isArray(course.contenido.description)
              ? course.contenido.description.join("\n")
              : course.contenido.description}
          </p>
          <div className="mt-10 flex flex-wrap flex-col gap-6 text-gray-700">
            <div>
              <span className="font-semibold text-blue-900">{course.dirigido.title}: </span>
              {course.dirigido.description}
            </div>  
            <div>
              <span className="font-semibold text-blue-900">{course.duracion.title}: </span>
              {course.duracion.description}
            </div>
            <div>
              <span className="font-semibold text-blue-900">{course.modalidad.title}: </span>
              {course.modalidad.description}
            </div>
            <div>
              <span className="font-semibold text-blue-900">Profesor: </span>
              {course.teacher}
            </div>
            <div>
              <span className="font-semibold text-blue-900">Nivel: </span>
              {course.level}
            </div>
            <div>
              <span className="font-semibold text-blue-900">{course.certificacion.title}: </span>
              {course.certificacion.description}
            </div>
            <div>
              <span className="font-semibold text-blue-900">Idioma: </span>
              {course.language}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-12 bg-blue-900 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            Inscribirse Ahora
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
