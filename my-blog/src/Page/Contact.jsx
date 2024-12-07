import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contact() {
  const contactInfo = [
    {
      icon: FaLinkedin,
      text: "Oluwatobi Victor",
      link: "https://www.linkedin.com/in/oluwatobi-victor",
    },
    {
      icon: FaGithub,
      text: "Oluwatobi97",
      link: "https://github.com/Oluwatobi97",
    },
    {
      icon: FaEnvelope,
      text: "victortobi2000@gmail.com",
      link: "mailto:victortobi2000@gmail.com",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Contact Me
      </h1>

      <p className="text-gray-700 mb-8 text-center">
        I'd love to connect with other developers, potential employers, or
        anyone interested in discussing web development! You can reach me
        through:
      </p>

      <div className="space-y-6">
        {contactInfo.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition duration-300"
          >
            <item.icon className="text-2xl text-gray-700 mr-4" />
            <span className="text-gray-800">{item.text}</span>
          </a>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Let's Work Together
        </h2>
        <p className="text-gray-700 mb-6">
          Whether you have a project in mind or just want to chat about web
          development, I'm always open to new opportunities and collaborations.
        </p>
        <button
          onClick={() =>
            (window.location.href = "mailto:victortobi2000@gmail.com")
          }
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
}

export default Contact;
