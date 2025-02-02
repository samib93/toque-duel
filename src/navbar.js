import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  CalendarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
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
        
        {/* Logo aligné à gauche */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-12 rounded-2xl" />
          <span className="ml-2 text-xl font-bold">Toque en Duel</span>
        </div>

        {/* Menu pour desktop */}
        <ul className="hidden md:flex space-x-6 items-center ml-auto">
          <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-400">
            <Link to="/recette_ia" className="flex items-center space-x-2">
              <HomeIcon className="h-6 w-6" />
              <span>Recette IA</span>
            </Link>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-400">
            <Link to="/calendrier" className="flex items-center space-x-2">
              <CalendarIcon className="h-6 w-6" />
              <span>Calendrier</span>
            </Link>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-400">
            <Link to="/media" className="flex items-center space-x-2">
              <PlayIcon className="h-6 w-6" />
              <span>Media</span>
            </Link>
          </li>
        </ul>

        {/* Bouton menu burger pour mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu mobile */}
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