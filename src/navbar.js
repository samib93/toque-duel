import React from "react";
import { HomeIcon, CalendarIcon, ChatBubbleOvalLeftEllipsisIcon, PlayIcon } from "@heroicons/react/24/outline";
import logo from "../src/images/logo-duel.png";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-20 w-20 rounded-2xl"
          />
          <span className="ml-2 text-xl font-bold">Toque en Duel</span>
        </div>

        {/* Menu */}
        <ul className="flex space-x-6 items-center">
          <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-400">
            <HomeIcon className="h-6 w-6" />
            <span>Recette IA</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-400">
            <CalendarIcon className="h-6 w-6" />
            <span>Calendrier</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-400">
            <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
            <span>Forum</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-400">
            <PlayIcon className="h-6 w-6" />
            <span>Media</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
