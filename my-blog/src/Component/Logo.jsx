import React from "react";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";

function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2 group">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
          <FaCode className="w-6 h-6 text-white" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-400 rounded-full" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          DevBlog
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          by Alex
        </span>
      </div>
    </Link>
  );
}

export default Logo;
