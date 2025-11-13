import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

type Course = {
  id: string
  title: string
  description: string
}

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 200, damping: 12 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 border border-slate-600 shadow-lg hover:shadow-xl transition-all group"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative p-6 flex flex-col h-full w-full text-justify">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-5 h-5 text-amber-400" />
          <h3 className="text-2xl font-semibold text-amber-400">{course.title}</h3>
        </div>

        <p className="text-gray-300 mb-6 text-sm leading-relaxed flex-grow">
          {course.description}
        </p>

        <Link
          href={`/coursos/${course.id}`}
          className="m-auto inline-block text-sm font-medium text-blue-300 hover:text-amber-400 transition"
        >
          <span className="underline-offset-2 group-hover:underline uppercase">Saber mas</span> →
        </Link>
      </div>
    </motion.div>
  )
}

export default CourseCard
