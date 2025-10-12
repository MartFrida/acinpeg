import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Contacts from './pages/Contacts';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseDetails from './pages/CourseDetails';
import CoursosPage from './pages/CoursosPage';

function App() {

  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/coursos' element={<CoursosPage />} />
        <Route path="/coursos/:id" element={<CourseDetails />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
