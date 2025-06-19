import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex justify-between bg-gradient-to-r from-gray-600 to-gray-950 text-white p-4'>
      <NavLink to='/' className=''>Logo</NavLink>
      <div className='flex gap-4'>
        <NavLink to='/about' className=''>About</NavLink>
        <NavLink to='/courses' className=''>Courses</NavLink>
        <NavLink to='/contacts' className=''>Contacts</NavLink>
      </div>
    </nav>
  )
}

export default Header