import { motion } from "framer-motion";
import noticias from "../data/noticias.json";
import { useState } from "react";
import NewsModal from "../components/NewsModal";

interface NewsItem {
  id: string;
  title: string;
  img: string;
  date: string;
  excerpt: string;
  content?: string;
}

const newsData: NewsItem[] = noticias;

export default function NoticiasPage() {
  const [selected, setSelected] = useState<NewsItem | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-gray-200 font-sans">
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 py-20 text-center shadow-inner">
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-white drop-shadow-[0_0_20px_rgba(255,191,0,0.15)]"
        >
          Noticias y Anuncios
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mt-4"
        >
          Actualidad, iniciativas, eventos y comunicados oficiales de nuestra Academia.
        </motion.p>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent my-16"></div>

      {/* GRID */}
      <section className="px-6 md:px-20 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {newsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col h-full bg-slate-900/70 border border-slate-700 rounded-2xl overflow-hidden shadow-md hover:shadow-amber-400/20 hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm"
                          >
              <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />

              <div className="p-6 flex flex-col h-full">
                <p className="text-sm text-amber-300 tracking-wide mb-2">{item.date}</p>

                <h3 className="text-xl font-semibold text-gray-100 mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>

                <button
                  className="mt-auto w-fit px-4 py-2 bg-amber-500/80 hover:bg-amber-500 text-slate-900 font-medium rounded-lg transition"
                  onClick={() => setSelected(item)}
                >
                  Leer más
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Модальное окно */}
      <NewsModal selected={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
