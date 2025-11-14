import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Показать кнопку после ~300px прокрутки
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Функция прокрутки вверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50
        p-3 rounded-full shadow-lg
        bg-amber-500 text-slate-900 hover:bg-amber-400
        transition transform hover:scale-110 
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      aria-label="Scroll to top"
    >
      <HiArrowUp className="text-2xl" />
    </button>
  );
};

export default ScrollToTopButton;
