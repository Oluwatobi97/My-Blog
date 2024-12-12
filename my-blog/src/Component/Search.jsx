import React, { useState } from "react";
import Banner from "../assets/images/Banner.jpeg";
import { FaSearch } from "react-icons/fa";
import { useNavigate, NavLink } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const tags = [
    {
      id: 1,
      description: "Photos",
    },
    {
      id: 2,
      description: "Projects",
      path: "/FirstProject",
    },
    {
      id: 3,
      description: "Best Work",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-3xl">
          <img
            src={Banner}
            alt="Banner"
            className="w-full h-48 object-cover rounded-2xl shadow-lg"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white dark:bg-gray-800 shadow-lg w-4/5 max-w-xl p-2 rounded-lg flex items-center">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none dark:bg-gray-800 dark:text-gray-100 px-2 py-1"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {tags.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveIndex(index);
                if (item.path) {
                  navigate(item.path);
                }
              }}
              className={`
                px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out
                ${
                  index === activeIndex
                    ? "bg-indigo-500 text-gray-500 dark:text-black"
                    : "bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-100 hover:bg-gray-100"
                }
                shadow-md hover:shadow-lg
              `}
            >
              {item.description}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
