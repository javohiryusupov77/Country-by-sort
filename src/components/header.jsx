import React from "react";

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between max-w-3xl px-4">
        <div className="flex items-center">
          <img src="/path/to/logo.png" alt="Logo" className="h-8 w-auto" />
        </div>
        <nav className="flex space-x-6">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default Header