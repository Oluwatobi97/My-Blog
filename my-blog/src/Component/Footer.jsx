import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      Icon: FaTiktok,
      href: "https://www.tiktok.com/@johnnie_26?_t=8sAxeHsL4OE&_r=1",
      label: "TikTok",
    },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/alexcode.664284/profilecard/?igsh=ZjY4OWt3czh5OW9j",
      label: "Instagram",
    },
    {
      Icon: FaWhatsapp,
      href: "https://whatsapp.com/biz/",
      label: "WhatsApp",
    },
    {
      Icon: FaGithub,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      Icon: FaLinkedinIn,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Contact Us
            </h3>
            <div className="space-y-2">
              <a
                href="mailto:victortobi2000@gmail.com"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                <FaEnvelope className="w-5 h-5" />
                <span>victortobi2000@gmail.com</span>
              </a>
              <p className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <span>+234 903 376 6725</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/About"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/Contact"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <SocialIcon key={label} Icon={Icon} href={href} label={label} />
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {currentYear} Alex The Code Guy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ Icon, href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}

export default Footer;
