import Logo from "./../assets/images/Logo.jpeg";
import { IoMenu, IoClose, IoSunny, IoMoon } from "react-icons/io5";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";

function Header({ toggleDarkMode, isDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <img
            src={Logo}
            alt="Logo"
            className="w-16 h-16 md:w-20 md:h-20 object-cover cursor-pointer rounded-full shadow-md"
            onClick={() => navigate("/")}
          />

          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <IoSunny className="w-6 h-6" />
              ) : (
                <IoMoon className="w-6 h-6" />
              )}
            </button>

            {/* Hamburger Menu Button (Mobile) */}
            <button
              type="button"
              className="md:hidden bg-white dark:bg-gray-800 p-2 rounded-md text-gray-800 dark:text-gray-200"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <IoClose className="w-6 h-6" />
              ) : (
                <IoMenu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-white dark:bg-gray-800 p-4 shadow-lg absolute top-16 inset-x-0 transition-colors duration-300"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2 text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
