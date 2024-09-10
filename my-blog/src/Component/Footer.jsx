import React from "react";

import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaMessage } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-gray-100 py-3 px-1 mt-5">
      <div className="  text-center ">
        <h2 className=" font-bold ml-6">Contact Us</h2>
        <h2 className="cursor-pointer">www.alexthecodeguy.vercel.app</h2>
        <h2>+234 903 376 6725</h2>
      </div>
      <div className="flex items-center justify-center gap-16 text-2xl cursor-pointer mt-5 ">
        <FaFacebookF className="hover:scale-110 hover:border-[1px] transition-all duration-100 ease-in-out mb-3" />
        <BsInstagram className="hover:scale-110 hover:border-[1px] transition-all duration-100 ease-in-out mb-3" />
        <FaMessage className="hover:scale-110 hover:border-[1px] transition-all duration-100 ease-in-out mb-3" />
      </div>
    </div>
  );
}

export default Footer;
