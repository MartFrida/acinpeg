import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logo1_con50_bg.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white p-4 md:p-6   ">
      <div className="flex justify-between">
      <div>
        <NavLink to="/" className="">
          <img src={logo} alt="Logo" className="max-w-24 " />
        </NavLink>
      </div>
      <div>
        <ul className="mt-2 space-y-1">
          <li className="flex justify-center md:justify-start items-center">
            <a href="tel:+34696869949" className="flex flex-row items-center">
              {" "}
              <FaPhone className="mr-2" /> +34 696 869 949
            </a>
          </li>
          <li className="flex justify-center md:justify-start items-center">
            <a href="tel:+34666786097" className="flex flex-row items-center">
              {" "}
              <FaPhone className="mr-2" /> +34 666 786 097
            </a>
          </li>
          <li className="flex justify-center md:justify-start items-center">
            <a
              href="mailto:acinpec@gmail.com"
              className="flex flex-row items-center"
            >
              <FaEnvelope className="mr-2" /> acinpecg@gmail.com
            </a>
          </li>
          <li className="flex justify-center md:justify-start items-center">
            <FaMapMarkerAlt className="mr-2" /> Barcelona, España
          </li>
                  </ul>
      </div>
      </div>
      <p className="pt-4 text-center text-gray-400 text-sm border-t border-slate-700 mt-8">
  © 2025 Academia Internacional de Periodismo y Comunicación Global — Todos los derechos reservados.
</p>
      
    </footer>
  );
};

export default Footer;
