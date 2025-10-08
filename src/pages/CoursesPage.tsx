
import courses from '../data/courses.json'
import CourseCard from '../components/CourseCard'

type Course = {
  id: string
  title: string
  description: string
}
const CoursesPage = () => {
  return (
    <div className="p-6  mx-auto text-center">
      <h2 className="text-3xl font-semibold text-blue-900 mb-6">Cursos disponibles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course: Course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}

export default CoursesPage