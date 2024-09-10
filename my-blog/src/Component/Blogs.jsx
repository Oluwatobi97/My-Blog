import React from "react";
import Photo4 from "../assets/images/Photo4.jpeg";
import Photo2 from "../assets/images/Photo2.jpeg";
import Photo5 from "../assets/images/Photo5.jpeg";
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaMessage } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Blogs() {
  const navigate = useNavigate();
  const handClkck = () => {
    navigate("/blog-detail");
  };
  return (
    <div className=" bg-gray-50 ">
      <div
        className=" items-center mt-16 px-6   "
        onClick={() => navigate("blog-detail/")}
      >
        <div
          className="md:flex items-center  bg-gray-100 rounded-lg shadow-lg overflow-hidden"
          id="1"
        >
          <img
            src={Photo4}
            className="mt-10 w-[500px] md:h-[300px]  mb-7 rounded-lg"
          />
          <h2 className="justify-center gap-5 mb-3 flex md:flex-col md:ml-4  cursor-pointer">
            <FaFacebookF className="" />
            <BsInstagram className=" cursor-pointer" />
            <FaMessage />
          </h2>
          <div className="text-center md:justify-center">
            <h1 className="md:ml-36 mb-7 font-bold text-2xl">My Projects</h1>
            <h3 className=" ml-9">
              Thank you for visiting Blog you are going to see some wonder
              things
            </h3>
            <button
              className="mb-5 mt-10  hover:scale-110 border-[1px] border-gray-500 hover:bg-red-500 transition-all duration-100 ease-in-out rounded-lg p-2 px-3 pb-2"
              onClick={handClkck}
            >
              View
            </button>
          </div>
        </div>
        <div className="md:flex items-center mx-auto  bg-gray-100 rounded-lg shadow-lg overflow-hidden mt-8">
          <div className="text-center md:justify-center">
            <h1 className="md:ml-48 mb-7 font-bold text-2xl">My Best Work</h1>
            <h2 className="md:ml-9">
              In my Blog you are going to see all you want and all you love. So
              kinding go thougth all the Blog and enjkoy your time in my Blog.
            </h2>
            <h2 className="cursor-pointer mt-4 justify-center gap-5 md:ml-8 items-center  flex">
              <FaFacebookF className="" />
              <BsInstagram className="mt-3 mb-3 cursor-pointer" />
              <FaMessage />
            </h2>
            <button className="mt-4 md:ml-11 hover:scale-110 border-[1px] border-gray-500 hover:bg-red-500 transition-all duration-100 ease-in-out rounded-lg p-2 px-3 pb-2">
              View
            </button>
          </div>
          <img
            src={Photo2}
            className="mt-10 mb-5 w-[500px] h-[300px] md:h-[400px] rounded-lg"
          />
        </div>
        <div></div>
        <div className="md:flex items-center mx-auto  bg-gray-100 rounded-lg shadow-lg overflow-hidden mt-8">
          <img src={Photo5} className="mt-10 w-[500px]  mb-6 rounded-lg" />
          <h2 className="cursor-pointer flex md:flex-col items-center justify-center gap-5">
            <FaFacebookF className="" />
            <BsInstagram className="mt-3 mb-3 cursor-pointer" />
            <FaMessage />
          </h2>
          <div className="text-center md:justify-center">
            <h1 className="md:ml-36 mb-7 font-bold text-2xl">Contact Us </h1>
            <h3 className=" md:ml-9">
              Bring your imagination to us we will make it a reality for you.
            </h3>
            <button className="md:ml-44 mb-5 mt-10  hover:scale-110 border-[1px] border-gray-500 hover:bg-red-500 transition-all duration-100 ease-in-out rounded-lg p-2 px-3 pb-2">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
