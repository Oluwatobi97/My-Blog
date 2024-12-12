import React from "react";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-3 mt-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-blue-600 mb-2">
            Contact Us
          </h2>
          <a
            href="https://alexthecodeguy.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
          >
            www.alexthecodeguy.vercel.app
          </a>
          <p className="text-gray-600 dark:text-gray-100 mt-2">
            +234 903 376 6725
          </p>
        </div>
        <div className="flex justify-center space-x-6">
          <SocialIcon Icon={FaFacebookF} href="https://facebook.com" />
          <SocialIcon Icon={FaInstagram} href="https://instagram.com" />
          <SocialIcon Icon={FaEnvelope} href="mailto:contact@example.com" />
        </div>
        <div className="text-center mt-4 text-sm text-gray-500 dark:text-gray-100 ">
          © {new Date().getFullYear()} Alex The Code Guy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ Icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
    >
      <Icon className="text-2xl" />
    </a>
  );
}

export default Footer;
