import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logobg.webp";
import { HiMenu, HiX } from "react-icons/hi"; // icons

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-950 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <NavLink to="/" className="">
          <img src={logo} alt="Logo" className="w-20" />
        </NavLink>

        {/* BURGER button (mobile) */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

        {/* NAV LINKS — Desktop */}
        <div className="hidden md:flex gap-6 text-lg items-center">
          <NavLink to="/about" className="hover:text-amber-400">Nosotros</NavLink>
          <NavLink to="/coursos" className="hover:text-amber-400">Cursos</NavLink>
          <NavLink to="/noticias" className="hover:text-amber-400">Noticias</NavLink>
          <NavLink to="/contacts" className="hover:text-amber-400">Contacts</NavLink>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 mt-4 pb-4 text-lg bg-slate-900/80 backdrop-blur border-t border-slate-700 p-4 rounded-b-xl animate-fadeIn">
          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className="hover:text-amber-400"
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/coursos"
            onClick={() => setOpen(false)}
            className="hover:text-amber-400"
          >
            Cursos
          </NavLink>
          <NavLink
            to="/noticias"
            onClick={() => setOpen(false)}
            className="hover:text-amber-400"
          >
            Noticias
          </NavLink>
          <NavLink
            to="/contacts"
            onClick={() => setOpen(false)}
            className="hover:text-amber-400"
          >
            Contacts
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Header;
