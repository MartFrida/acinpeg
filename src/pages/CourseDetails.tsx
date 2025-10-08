// type Course = {
//   id: string
//   title: string
//   description: string

// }

// const CoursePage = ({ course }: { course: Course }) => {
//   return (
//     <div>{course.title}</div>
//   )
// }

// export default CoursePage



import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

// Пример данных (в реальном проекте можно импортировать или получать с API)
const courses = [
  {
    id: "investigacion",
    title: "Periodismo de Investigación",
    image: "/images/investigacion.jpg",
    description: `
      Este curso está diseñado para formar periodistas capaces de investigar a fondo,
      descubrir verdades ocultas y exponer hechos de interés público con rigor, ética
      y responsabilidad. A través de una combinación de teoría, análisis de casos reales
      y prácticas profesionales, los participantes aprenderán a desarrollar investigaciones
      periodísticas sólidas, desde la elección del tema hasta la publicación del reportaje.
    `,
    content: `
      En este programa, los estudiantes explorarán métodos avanzados de investigación
      periodística, incluyendo:
      - Técnicas de verificación de datos y fuentes.
      - Acceso a información pública y documentos.
      - Uso de bases de datos, periodismo de datos y análisis digital.
      - Elaboración de reportajes de investigación con impacto social.
      - Consideraciones éticas y legales del periodismo de investigación.
      
      Al finalizar el curso, los participantes estarán preparados para planificar y ejecutar
      investigaciones periodísticas de alta calidad, contribuyendo a la transparencia y a la verdad.
    `,
    duration: "12 semanas",
    mode: "Online / Presencial",
    language: "Español / Inglés",
  },
  // Можно добавить другие курсы по аналогии
];

export default function CourseDetails() {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((c) => c.id === id);

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
          <p className="text-lg mt-3">{course.mode}</p>
        </div>
      </section>

      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 mt-8">
        <Link
          to="/courses"
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
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Descripción</h2>
          <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed">
            {course.description}
          </p>

          <h2 className="text-2xl font-semibold text-blue-900 mt-10 mb-4">
            Contenido del curso
          </h2>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            {course.content}
          </p>

          <div className="mt-10 flex flex-wrap gap-6 text-gray-700">
            <div>
              <span className="font-semibold text-blue-900">Duración: </span>
              {course.duration}
            </div>
            <div>
              <span className="font-semibold text-blue-900">Modalidad: </span>
              {course.mode}
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
