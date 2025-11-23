"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import bgCover from "../assets/hero1.webp";

const HomePage = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [fade, setFade] = useState(false);

  // Получаем корректный URL фона
  const bgUrl =
    typeof bgCover === "string"
      ? bgCover
      : (bgCover as { src: string })?.src ?? "";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Настраиваем скорость видео (пример: 0.5 = медленнее)
    video.playbackRate = 0.4;

    const handleTimeUpdate = () => {
      // За 1 секунду до конца начинаем плавное затухание
      if (video.duration - video.currentTime < 1) setFade(true);
    };

    const handleEnded = () => {
      // После завершения видео перематываем и делаем fade-in
      setTimeout(() => {
        video.currentTime = 0;
        video.play();
        setFade(false);
      }, 300);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden">
      {/* Фоновое видео */}
      <video
        ref={videoRef}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
          fade ? "opacity-80" : "opacity-100"
        }`}
        autoPlay
        muted
        playsInline
        poster={bgUrl}
      >
        <source src="/video/hero-video3.mp4" type="video/mp4" />
        Your browser does not contain any videos.
      </video>

      {/* Полупрозрачный оверлей */}
      <div className="absolute inset-0 bg-slate-600/50" />

      {/* Контент */}
      <section className="relative z-10 rounded-lg">
        <div className="bg-slate-950/60 p-4 md:p-8 rounded-lg">
          <h1
            className="tracking-widest text-5xl md:text-7xl font-bold leading-relaxed text-center text-white"
            style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)" }}
          >
            ACINPECG
          </h1>
          <h2
            className="text-2xl mb-4 md:text-3xl font-bold leading-relaxed tracking-wide text-center text-white"
            style={{ textShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)" }}
          >
            ACADEMIA INTERNACIONAL DE PERIODISMO Y COMUNICACIÓN GLOBAL
          </h2>
          <Link
            href="/coursos"
            className="px-6 py-3 
             bg-gradient-to-r from-amber-400 to-amber-600 
             text-white font-bold leading-relaxed tracking-widest 
             rounded-xl uppercase 
             transition-all duration-500 
             hover:bg-gradient-to-l  from-amber-400 to-amber-600"
          >
            Ver cursos
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
