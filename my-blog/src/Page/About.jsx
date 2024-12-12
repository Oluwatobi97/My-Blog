import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800  shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-blue-600 mb-8">
        About Me
      </h1>

      <div className="space-y-6 text-gray-700 dark:text-gray-100">
        <p>
          I'm Tobi Siyanbola, a Lagos-based web developer with 3 years of
          experience specializing in building responsive, engaging web
          applications. With a solid foundation in HTML, CSS, JavaScript, React,
          Tailwind CSS, and WordPress, I focus on crafting seamless user
          experiences that look great on any device.
        </p>
        <p>
          I hold a Bachelor's degree in Computer Science from ESGT University in
          the Republic of Benin, and I'm passionate about translating ideas into
          functional, visually appealing websites. I believe in clean,
          maintainable code, and I'm committed to continuous learning and
          improvement.
        </p>
        <p>
          In addition to working on freelance projects, I'm eager to join a
          collaborative team where I can apply my skills, tackle new challenges,
          and learn from experienced developers. If you're looking for a driven
          web developer with a strong grasp of modern front-end technologies,
          let's connect!
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 dark:text-blue-600 mt-10 mb-4">
        What Sets Me Apart
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-100">
        <li>
          Strong foundation in modern web technologies (HTML, CSS, JavaScript,
          React, Tailwind CSS)
        </li>
        <li>
          Passion for creating user-friendly and visually appealing interfaces
        </li>
        <li>Commitment to writing clean, maintainable, and efficient code</li>
        <li>Eager to collaborate and learn from experienced developers</li>
        <li>Adaptable and quick to learn new technologies and methodologies</li>
      </ul>

      <div className="mt-10 text-center">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-blue-600 mb-4">
          Let's Connect
        </h3>
        <div className="flex justify-center space-x-4">
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-gray-600"
          >
            <FaGithub className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
