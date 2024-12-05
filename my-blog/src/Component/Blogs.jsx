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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="md:flex items-center bg-blue-50 rounded-lg shadow-lg overflow-hidden">
          <img
            src={Photo4}
            className="w-full md:w-1/2 h-64 object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            alt="My Projects"
          />
          <div className="p-6 md:w-1/2">
            <h1 className="text-2xl font-bold mb-4">My Projects</h1>
            <p className="mb-4">
              Thank you for visiting my Blog. You are going to see some
              wonderful things.
            </p>
            <div className="flex justify-center space-x-4 mb-4">
              <FaFacebookF className="text-gray-600 hover:text-indigo-500 cursor-pointer" />
              <BsInstagram className="text-gray-600 hover:text-indigo-500 cursor-pointer" />
              <FaMessage className="text-gray-600 hover:text-indigo-500 cursor-pointer" />
            </div>
            <button
              className="w-full md:w-auto px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all duration-300 ease-in-out"
              onClick={() => navigate("blog-detail/")}
            >
              View
            </button>
          </div>
        </div>

        <div className="md:flex items-center bg-blue-50 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:w-1/2 md:order-2">
            <h1 className="text-2xl font-bold mb-4">My Technical Skills</h1>
            <p className="mb-4">
              In my Blog, you are going to see all the Technical skills that I
              have mastered.
            </p>
            <div className="flex justify-center space-x-4 mb-4">
              <FaFacebookF className="text-gray-600 hover:text-indigo-500 cursor-pointer" />
              <BsInstagram className="text-gray-600 hover:text-indigo-500 cursor-pointer" />
              <FaMessage className="text-gray-600 hover:text-indigo-500 cursor-pointer" />
            </div>
            <button
              className="w-full md:w-auto px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all duration-300 ease-in-out"
              onClick={() => navigate("TechnicalSkills/")}
            >
              View
            </button>
          </div>
          <img
            src={Photo2}
            className="w-full md:w-1/2 h-64 object-cover rounded-b-lg md:rounded-r-lg md:rounded-b-none md:order-1"
            alt="Technical Skills"
          />
        </div>

        <div className="md:flex items-center bg-blue-50 rounded-lg shadow-lg overflow-hidden">
          <img
            src={Photo5}
            className="w-full md:w-1/2 h-64 object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            alt="Career Goals"
          />
          <div className="p-6 md:w-1/2">
            <h1 className="text-2xl font-bold mb-4">My Career Goals</h1>
            <p className="mb-4">
              Bring your imagination to us, we will make it a reality for you.
            </p>
            <div className="flex justify-center space-x-4 mb-4">
              <FaFacebookF className="text-gray-600 hover:text-indigo-500 cursor-pointer" />
              <BsInstagram className="text-gray-600 hover:text-indigo-500 cursor-pointer" />
              <FaMessage className="text-gray-600 hover:text-indigo-500 cursor-pointer" />
            </div>
            <button
              className="w-full md:w-auto px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all duration-300 ease-in-out"
              onClick={() => navigate("CareerGoals/")}
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
