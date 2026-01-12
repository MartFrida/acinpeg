import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contacts from "./pages/Contacts";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseDetails from "./pages/CourseDetailsPage";
import CoursosPage from "./pages/CoursosPage";
import NoticiasPage from "./pages/NoticiasPage";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { useEffect, useState } from "react";
import Logo from "./assets/logo.svg";
import StudentDashboard from "./pages/StudentDashboard";
// import { useAuthStore } from "./stores/auth";
import LoginPage from "./pages/LoginPage";
import EditorPage from "./pages/EditorPage";
import InstructorDashboard from "./pages/InstructorDashboard";

function App() {
  // const { user } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Симуляция загрузки данных/ассетов
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="preloader">
        <div className="preloader-spinner"></div>
        <img src={Logo} alt="Logo" className="preloader-logo" />
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/coursos" element={<CoursosPage />} />
        <Route path="/coursos/:id" element={<CourseDetails />} />
        <Route path="/noticias" element={<NoticiasPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/alumno" element={<StudentDashboard />} />
        <Route path="/profesor" element={<InstructorDashboard />} />
        <Route path="editor/:id" element={<EditorPage/>} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route index element={<Navigate to={user?.role === 'profesor' ? '/profesor' : '/student'} />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
