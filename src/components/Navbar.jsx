import React, { useState } from 'react';
import logo from "/src/assets/images/logo.jpg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 flex items-center justify-between p-4 bg-gradient-to-r from-green-300 to-blue-500 shadow-lg z-50">
      {/* Logo and Title */}
      <div className="flex items-center space-x-3">
        <img src={logo} className="h-12 w-12 rounded-full shadow-lg" alt="logo" />
        <h2 className="text-left font-bold text-xl md:text-3xl text-white cursor-pointer transition duration-300 ease-in-out transform hover:text-yellow-500 hover:scale-105">
          Tanguria Recreation Club
        </h2>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button id="button" onClick={toggleMenu}>
          {/* Menu Icon */}
          <img
            className={`toggle ${isMenuOpen ? 'hidden' : 'block'}`}
            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
            width="32"
            height="32"
            alt="menu"
          />
          {/* Close Icon */}
          <img
            className={`toggle ${isMenuOpen ? 'block' : 'hidden'}`}
            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
            width="32"
            height="32"
            alt="close"
          />
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } w-full md:w-auto md:flex items-center text-center md:text-right mt-5 md:mt-0 md:space-x-8 border-t-2 md:border-none border-blue-700 md:border-transparent`}
      >
        <Link
          to="/"
          className="block md:inline-block text-white hover:text-yellow-500 px-4 py-2 font-semibold text-lg md:text-xl transition duration-300 transform hover:scale-105 hover:underline hover:underline-offset-8"
        >
          Home
        </Link>
        <Link
          to="/commitee"
          className="block md:inline-block text-white hover:text-yellow-500 px-4 py-2 font-semibold text-lg md:text-xl transition duration-300 transform hover:scale-105 hover:underline hover:underline-offset-8"
        >
          Committee
        </Link>
        <Link
          to="/gallery"
          className="block md:inline-block text-white hover:text-yellow-500 px-4 py-2 font-semibold text-lg md:text-xl transition duration-300 transform hover:scale-105 hover:underline hover:underline-offset-8"
        >
          Gallery
        </Link>
        <Link
          to="/contact"
          className="block md:inline-block text-white hover:text-yellow-500 px-4 py-2 font-semibold text-lg md:text-xl transition duration-300 transform hover:scale-105 hover:underline hover:underline-offset-8"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
