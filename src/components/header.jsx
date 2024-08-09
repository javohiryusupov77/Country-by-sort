import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between max-w-3xl px-4">
        <div className="flex items-center">
          <span className="text-2xl font-bold cursor-pointer">
            <span className="relative z-10">Logo</span>
            <span className="absolute inset-0 bg-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            <span className="absolute inset-0 border-2 border-gray-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
          </span>
        </div>
        <nav className="flex space-x-6">
          <Link to="/" className="relative group">
            <span className="relative text-white hover:text-gray-400">
              Home
              <span className="absolute left-0 bottom-0 block w-full h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </span>
          </Link>
          <Link to="/about" className="relative group">
            <span className="relative text-white hover:text-gray-400">
              About
              <span className="absolute left-0 bottom-0 block w-full h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </span>
          </Link>
          <Link to="/contact" className="relative group">
            <span className="relative text-white hover:text-gray-400">
              Contact
              <span className="absolute left-0 bottom-0 block w-full h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
