import React, { useState } from "react";
import Banner from "../assets/images/Banner.jpeg";
import { FaSearch } from "react-icons/fa";

function Search() {
  const tags = [
    {
      id: 1,
      desciption: " Photos",
    },
    {
      id: 2,
      desciption: " Projects",
    },
    {
      id: 3,
      desciption: "Best Work",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex justify-center flex-col bg-gray-50 items-center">
      <img
        src={Banner}
        className="rounded-2xl w-[350px] md:w-[700px] h-[200px]  items-center"
      />
      <div className="bg-white shadow-lg w-[300px] md:w-[500px] p-3 rounded-lg mt-[-20px]  flex items-center">
        <FaSearch />

        <input
          type="text"
          placeholder="Search"
          className="outline-none px-[10px] "
        />
      </div>
      <div className="flex gap-2 md:gap-9  mt-3 cursor-pointer justify-center ">
        {tags.map((item, index) => (
          <ul
            onClick={() => setActiveIndex(index)}
            className={`${
              index == activeIndex ? "bg-red-500 text-white" : null
            }   rounded-2xl md:rounded-full md:px-2 cursor-pointer hover:scale-110 hover:border-[1px] border-red-500 transition-all duration-100 ease-in-out`}
          >
            <li className="text-sm font-semibold px-3 shadow-lg rounded-2xl py-1  ">
              {item.desciption}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Search;
