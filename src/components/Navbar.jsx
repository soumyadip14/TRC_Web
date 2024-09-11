import React, { useState } from 'react';
import logo from "/src/assets/images/logo.jpg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 flex items-center justify-between p-3 bg-gray-200 z-50">
      <div className="flex items-center space-x-3">
        <img src={logo} className="h-14 w-16 rounded-md" alt="logo" />
        <h2 className="text-left font-semibold text-2xl font-mono text-yellow-600 hover:text-teal-500 cursor-pointer">Tanguria Recreation Club</h2>
      </div>
      <div className="flex md:hidden">
        <button id="button" onClick={toggleMenu}>
          <img
            className={`toggle ${isMenuOpen ? 'hidden' : 'block'}`}
            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
            width="48"
            height="48"
            alt="menu"
          />
          <img
            className={`toggle ${isMenuOpen ? 'block' : 'hidden'}`}
            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
            width="48"
            height="48"
            alt="close"
          />
        </button>
      </div>
      <div
        className={`toggle ${isMenuOpen ? 'block' : 'hidden'} w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-teal-900 md:border-none`}
      >
        <Link
          to="/"
          className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 md:border-none font-medium text-lg hover:underline hover:underline-offset-8 duration-500 transition ease-in-out transform hover:scale-110  hover:-translate-y-1"
        >
          Home
        </Link>
        <Link
          to="/commitee"
          className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 md:border-none font-medium text-lg hover:underline hover:underline-offset-8 duration-500 transition ease-in-out transform hover:scale-110  hover:-translate-y-1"
        >
          Commitee
        </Link>
        <Link
          to="/gallery"
          className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 md:border-none font-medium text-lg hover:underline hover:underline-offset-8 duration-500 transition ease-in-out transform hover:scale-110  hover:-translate-y-1"
        >
          Gallery
        </Link>
        <Link
          to="/contact"
          className="block md:inline-block text-teal-900 hover:text-teal-500 px-3 py-3 md:border-none font-medium text-lg hover:underline hover:underline-offset-8 duration-500 transition ease-in-out transform hover:scale-110  hover:-translate-y-1"
        >
          Contact Us
        </Link>
      </div>
    </nav>

  );
};

export default Navbar;
