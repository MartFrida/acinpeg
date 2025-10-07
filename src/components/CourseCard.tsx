import Link from 'next/link'

type Course = {
  id: string
  title: string
  description: string
}

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <div className="border border-gray-700 rounded-xl p-4 bg-neutral-800 shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-gold-400 mb-2">{course.title}</h3>
      <p className="text-gray-400 mb-4">{course.description}</p>
      <Link href={`/courses/${course.id}`} className="text-blue-400 hover:underline">
        Saber más
      </Link>
    </div>
  )
}

export default CourseCard