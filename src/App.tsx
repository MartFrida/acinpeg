import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import Contacts from './pages/Contacts';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <div className='flex flex-col justify-between h-[100vh]'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/courses' element={<CoursesPage />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
