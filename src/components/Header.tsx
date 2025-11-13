import { NavLink } from 'react-router-dom'
import logo from '../assets/logobg.png'

const Header = () => {
  return (
    <nav className='flex justify-between bg-slate-950 text-white p-4 '>
      <NavLink to='/' className=''><img src={logo} alt="Logo" className='max-w-20' /></NavLink>
      <div className='flex gap-4 items-center'>
        <NavLink to='/about' className=''>Nosotros</NavLink>
        <NavLink to='/coursos' className=''>Cursos</NavLink>
        {/* <NavLink to='/coursos' className=''>Noticias</NavLink> */}
        <NavLink to='/contacts' className=''>Contacts</NavLink>
      </div>
    </nav>
  )
}

export default Header