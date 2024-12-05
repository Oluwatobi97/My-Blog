import React from "react";
import Banner from "../assets/images/Banner.jpeg";
import { useNavigate } from "react-router-dom";

function IntroPost() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-8">
      <div
        className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={() => navigate("blog-detail/")}
      >
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={Banner}
              alt="Tech Blog Banner"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">
              Welcome To My Tech Blog
            </h1>
            <h3 className="text-xl text-gray-600">
              Discover tips, trends, and stories that matter.
            </h3>
            <button
              className="mt-6 px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-300 ease-in-out"
              onClick={(e) => {
                e.stopPropagation();
                navigate("blog-detail/");
              }}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroPost;
