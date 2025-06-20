
import courses from '../data/courses.json'
import CourseCard from '../components/CourseCard'

const CoursesPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-blue-300">Доступные курсы</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}

export default CoursesPage