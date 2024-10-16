import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white fixed w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <h1>Green Card</h1>
        </div>

        {/* Navigation */}
        <nav className={`lg:flex space-x-6 hidden`}>
          <ul className="flex space-x-6 text-lg font-medium">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <div
              className={`${
                isOpen ? "transform rotate-45" : ""
              } w-6 h-1 bg-white mb-1 transition-all duration-300`}
            ></div>
            <div
              className={`${
                isOpen ? "opacity-0" : ""
              } w-6 h-1 bg-white mb-1 transition-all duration-300`}
            ></div>
            <div
              className={`${
                isOpen ? "-rotate-45" : ""
              } w-6 h-1 bg-white transition-all duration-300`}
            ></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav className={`${isOpen ? "block" : "hidden"} lg:hidden bg-blue-800`}>
        <ul className="flex flex-col space-y-4 py-4 px-6 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-300">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
