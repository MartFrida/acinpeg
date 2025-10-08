import Link from 'next/link'
import bgCover from '../assets/hero1.jpg'

const HomePage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-4 bg-fixed bg-no-repeat bg-top bg-cover" style={{ backgroundImage: `url(${bgCover})` }}>
      {/* hero section */}
      <section className="relative rounded-lg">
        <div className=" flex justify-center flex-col " >
          <div className='bg-slate-900/60 p-4 md:p-8 rounded-lg'>
            <h1 className=" tracking-widest text-5xl md:text-7xl font-bold leading-relaxed text-center text-white"
              style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)" }}>
              ACINPECG
            </h1>
            <h2 className="text-2xl mb-4 md:text-3xl font-bold leading-relaxed tracking-wide text-center text-white"
              style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)" }}>
              ACADEMIA INTERNACIONAL DE PERIODISMO Y COMUNICACIÓN GLOBAL
            </h2>
            <Link href="/courses" className=" px-6 py-3 bg-slate-950 text-white font-bold leading-relaxed tracking-widest rounded-xl hover:bg-slate-950 transition uppercase ">
              Ver cursos
            </Link>
          </div>
        </div>
      </section>

    </main >
  )
}

export default HomePage