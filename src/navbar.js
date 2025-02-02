import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  CalendarIcon,
  PlayIcon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import logo from "../src/images/logo-duel.png";

function Navbar({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        
        
        <Link to="Presentation" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-12 rounded-2xl" />
          <span className="ml-2 text-xl font-bold">Toque en Duel</span>
        </Link>

        
        <ul className="hidden md:flex space-x-6 items-center ml-auto">
          <li>
            <Link to="/recette_ia" className="flex items-center space-x-2 hover:text-blue-400">
              <HomeIcon className="h-6 w-6" />
              <span>Recette IA</span>
            </Link>
          </li>
          <li>
            <Link to="/calendrier" className="flex items-center space-x-2 hover:text-blue-400">
              <CalendarIcon className="h-6 w-6" />
              <span>Calendrier</span>
            </Link>
          </li>
          <li>
            <Link to="/media" className="flex items-center space-x-2 hover:text-blue-400">
              <PlayIcon className="h-6 w-6" />
              <span>Media</span>
            </Link>
          </li>
        </ul>

        
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-gray-900 p-4 space-y-4">
          <Link to="/recette_ia" className="flex items-center space-x-2 hover:text-blue-400">
            <HomeIcon className="h-6 w-6" />
            <span>Recette IA</span>
          </Link>
          <Link to="/calendrier" className="flex items-center space-x-2 hover:text-blue-400">
            <CalendarIcon className="h-6 w-6" />
            <span>Calendrier</span>
          </Link>
          <Link to="/media" className="flex items-center space-x-2 hover:text-blue-400">
            <PlayIcon className="h-6 w-6" />
            <span>Media</span>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
