import { motion } from "framer-motion";
import courses from "../data/courses.json";
import CourseCard from "../components/CourseCard";
import Divider from "../components/Divider"

type Course = {
  id: string;
  title: string;
  description: string;
};

export default function CoursosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-gray-200 font-sans">

      {/* === HERO SECTION === */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 py-20 text-center shadow-inner">
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-white drop-shadow-[0_0_20px_rgba(255,191,0,0.15)]"
        >
          Cursos Disponibles
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl max-w-3xl  text-gray-300 mt-4 mx-6"
        >
          Formación profesional en periodismo, comunicación y áreas especializadas.
        </motion.p>
      </section>

      <Divider />

      {/* === GRID SECTION === */}
      <section className="px-6 md:px-10 lg:px-20 pb-24 max-w-8xl mx-auto mt-8 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {courses.map((course: Course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
