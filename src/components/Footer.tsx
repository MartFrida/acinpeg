import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from '../assets/logobg.png'
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white p-6 flex justify-between">
      <div><NavLink to='/' className=''><img src={logo} alt="Logo" className='max-w-32' /></NavLink></div>
      <div><ul className="mt-2 space-y-1">
        <li className="flex justify-center md:justify-start items-center">
          <a href="tel:+34696869949" className="flex flex-row items-center"> <FaPhone className="mr-2" /> +34 696 869 949</a>
        </li>
        <li className="flex justify-center md:justify-start items-center">
          <a href="mailto:acinpec@gmail.com" className="flex flex-row items-center">
            <FaEnvelope className="mr-2" /> acinpec@gmail.com</a>
        </li>
        <li className="flex justify-center md:justify-start items-center"><FaMapMarkerAlt className="mr-2" /> Barcelona, España</li>
      </ul></div>
    </footer>
  )
}

export default Footer