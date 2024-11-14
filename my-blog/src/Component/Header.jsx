import React from "react";
import Logo from "./../assets/images/Logo.jpeg";
import { IoLogoYoutube } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center">
      <img src={Logo} className="w-[80px] md:w-[150px]" />
      <ul className="flex gap-6 md:gap-14">
        <li
          className="py-16 hover:font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </li>
        <li
          className="py-16 hover:font-bold cursor-pointer"
          onClick={() => navigate("/About")}
        >
          {" "}
          About
        </li>
        <li
          className="py-16 hover:font-bold cursor-pointer"
          onClick={() => navigate("/Contact")}
        >
          Contact
        </li>
      </ul>
      {/* <button className="bg-red-500 rounded-full py-2 px-3 flex items-center gap-2">
        Subcribe <IoLogoYoutube />
      </button> */}
    </div>
  );
}

export default Header;
