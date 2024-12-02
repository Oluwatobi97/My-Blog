import React, { useState, useRef, useEffect } from "react";
import Logo from "./../assets/images/Logo.jpeg";
import { IoLogoYoutube, IoMenu, IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility
  const menuRef = useRef(null); // Ref for the menu container
  const navigate = useNavigate();
  // TODO: this close botton for the the meunbar is not working
  // Close the menu if clicking outside
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
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo */}
      <img
        src={Logo}
        alt="Logo"
        className="w-[80px] md:w-[150px] cursor-pointer"
        onClick={() => navigate("/")}
      />

      {/* Hamburger Menu Icon for Mobile */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <IoClose /> : <IoMenu />}
      </div>

      {/* Navigation Menu */}
      <ul
        ref={menuRef} // Attach ref to the menu
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 text-lg font-semibold transition-transform transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:static md:translate-x-0 md:flex-row md:gap-8`}
      >
        <li
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => {
            navigate("/");
            setMenuOpen(false); // Close menu on click
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

      {/* Optional Subscribe Button */}
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
