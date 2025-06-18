import Link from 'next/link'

const HomePage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-400">Academia de Periodismo</h1>
      <p className="text-lg max-w-xl text-gray-300">
        Obtenga una educación de calidad en el campo de los medios y aprenda a crear contenido en demanda.
      </p>
      <Link href="/courses" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
        Ver cursos
      </Link>
    </main>
  )
}

export default HomePage