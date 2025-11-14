import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface Props {
  selected: {
    title: string;
    img: string;
    date: string;
    excerpt?: string;
    description?: string;
    content?: string;
  } | null;
  onClose: () => void;
}

export default function NewsModal({ selected, onClose }: Props) {
  
  // === Блокировка прокрутки фона ===
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-slate-900/90 border border-amber-400/20 rounded-2xl max-w-2xl w-full shadow-xl overflow-hidden max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* === Кнопка закрытия === */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-300 hover:text-white text-2xl z-10"
            >
              ✕
            </button>

            {/* Фото гибкое — вертикальные  */}
            <div className="w-full max-h-[60vh] overflow-hidden flex items-center justify-center bg-black/20">
              <img
                src={selected.img}
                alt={selected.title}
                className="w-auto h-auto max-h-[60vh] max-w-full object-contain"
              />
            </div>

            {/* === Контент с прокруткой === */}
            <div className="px-6 pt-6 pb-14 overflow-y-auto max-h-[40vh]">
              <p className="text-sm text-amber-300 mb-2">{selected.date}</p>

              <h2 className="text-2xl font-bold text-amber-400 mb-4">
                {selected.title}
              </h2>

              <p className="text-gray-300 leading-relaxed whitespace-pre-line mb-4">
                {selected.content || selected.excerpt}
              </p>

              {selected.description && (
                <p className="text-gray-400 leading-relaxed whitespace-pre-line m-6">
                  {selected.description}
                </p>
              )}

              
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
