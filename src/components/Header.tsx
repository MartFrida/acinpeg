import { NavLink } from 'react-router-dom'
import logo from '../assets/logobg.png'

const Header = () => {
  return (
    <nav className='flex justify-between bg-slate-950 text-white p-4'>
      <NavLink to='/' className=''><img src={logo} alt="Logo" className='max-w-20' /></NavLink>
      <div className='flex gap-4'>
        <NavLink to='/about' className=''>About</NavLink>
        <NavLink to='/courses' className=''>Courses</NavLink>
        <NavLink to='/contacts' className=''>Contacts</NavLink>
      </div>
    </nav>
  )
}

export default Header