import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-6 md:py-8 rounded-xl">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-8">
        {/* Logo and Description */}
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 dark:text-white">PharmaPredictor</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-xs text-sm">
            Revolutionizing pharmaceutical sales with AI-driven insights and advanced analytics.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left text-sm">
          <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Features</a>
          <a href="#benefits" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Benefits</a>
          <a href="#cta" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Get Started</a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xl transition-colors duration-300" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xl transition-colors duration-300" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xl transition-colors duration-300" />
          </a>
          <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
            <MdEmail className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xl transition-colors duration-300" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 dark:text-gray-600 mt-6 text-xs">
        <p>&copy; {new Date().getFullYear()} PharmaPredictor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
