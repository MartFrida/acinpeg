import { Link } from "react-router-dom";
type Course = {
  id: string
  title: string
  description: string
}



export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-2xl p-6 shadow-md 
                    hover:shadow-amber-400/20 transition hover:scale-[1.02] duration-300 
                    flex flex-col min-h-[320px] h-full">

      <h3 className="text-xl font-semibold text-amber-400 mb-3">
        {course.title}
      </h3>

      <p className="text-gray-300 text-sm text-justify leading-relaxed mb-4 flex-grow">
        {course.description}
      </p>
<Link to={`/coursos/${course.id}`} className="mt-auto w-fit">
<button className="px-4 py-2 bg-amber-500/90 hover:bg-amber-500 text-slate-900 
                         font-medium rounded-lg transition mt-auto w-fit">
        Más información
      </button>
</Link>
      
    </div>
  );
}
