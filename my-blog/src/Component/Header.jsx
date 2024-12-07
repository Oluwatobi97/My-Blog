import React, { useState, useRef, useEffect } from "react";
import Logo from "./../assets/images/Logo.jpeg";
import { IoLogoYoutube, IoMenu, IoClose } from "react-icons/io5";
import { useNavigate, NavLink } from "react-router-dom";

function Header() {
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
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-between md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <img
              src={Logo}
              alt="Logo"
              className="w-16 h-16 md:w-20 md:h-20 object-cover cursor-pointer rounded-full shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105"
              onClick={() => navigate("/")}
            />
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {menuOpen ? (
                <IoClose className="h-6 w-6" aria-hidden="true" />
              ) : (
                <IoMenu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-base font-medium ${
                    isActive
                      ? "text-indigo-600 hover:text-indigo-500"
                      : "text-gray-500 hover:text-gray-900"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {/* <button
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
              onClick={() => window.open("https://youtube.com", "_blank")}
            >
              Subscribe <IoLogoYoutube className="ml-2" />
            </button> */}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden absolute top-full inset-x-0 p-2 transition transform origin-top-right`}
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 ${
                        isActive
                          ? "text-indigo-600 hover:text-indigo-500"
                          : "text-gray-900 hover:text-gray-700"
                      }`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            {/* <button
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
              onClick={() => window.open("https://youtube.com", "_blank")}
            >
              Subscribe <IoLogoYoutube className="ml-2" />
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
