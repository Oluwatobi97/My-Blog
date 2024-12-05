import React, { useState, useRef, useEffect } from "react";
import Logo from "./../assets/images/Logo.jpeg";
import { IoLogoYoutube, IoMenu, IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="flex justify-between items-center p-1 px-2  shadow-md relative">
      <img
        src={Logo}
        alt="Logo"
        className="w-[80px] md:w-[150px] cursor-pointer"
        onClick={() => navigate("/")}
      />

      {/* Hamburger Menu Icon for Mobile */}
      <div
        className="md:hidden text-2xl cursor-pointer z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <IoClose /> : <IoMenu />}
      </div>

      {/* Navigation Menu */}
      <ul
        ref={menuRef}
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 text-lg font-semibold transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:static md:opacity-100 md:visible md:flex-row md:gap-8 md:bg-transparent z-40`}
      >
        <li
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => {
            navigate("/");
            setMenuOpen(false);
          }}
        >
          Home
        </li>
        <li
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => {
            navigate("/About");
            setMenuOpen(false);
          }}
        >
          About
        </li>
        <li
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => {
            navigate("/Contact");
            setMenuOpen(false);
          }}
        >
          Contact
        </li>
      </ul>

      <button
        className="hidden md:flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600"
        onClick={() => window.open("https://youtube.com", "_blank")}
      >
        Subscribe <IoLogoYoutube />
      </button>
    </div>
  );
}

export default Header;
