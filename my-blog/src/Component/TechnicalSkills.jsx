import React from "react";
import { useNavigate } from "react-router-dom";

function TechnicalSkills() {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800  shadow-lg rounded-lg mt-10">
      <h1 className="font-bold text-xl dark:text-blue-600">
        This are all the Technical Skills that i have mastered
      </h1>
      <p className="text-gray-900 dark:text-gray-100 font-semibold mt-2">
        Over the years, I’ve gained experience in:
      </p>
      <h2 className="text-gray-800 text-left dark:text-gray-100">
        <br /> • HTML & CSS: Building responsive, visually appealing designs
        from the ground up.
        <br /> • JavaScript: With 2 years under my belt, JavaScript is a core
        part of my toolkit, enabling dynamic, interactive interfaces.
        <br /> • React: Starting in January 2024, I’ve focused on creating
        modular and efficient code with React, allowing me to build more dynamic
        web applications.
        <br /> • Tailwind CSS: This utility-first CSS framework has helped me
        standardize and speed up my styling process, improving project
        turnaround time.
        <br /> • WordPress: As a versatile platform, WordPress has allowed me to
        work on a variety of website types, from blogs to business sites.
      </h2>
    </div>
  );
}

export default TechnicalSkills;
