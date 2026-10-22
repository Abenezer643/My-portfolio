import React from 'react';
import {
  FaGithub,
  FaTelegramPlane,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-[#0f0f0f] border-t border-gray-200 dark:border-white/10 py-12 mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://github.com/Abenezer643"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors transform hover:scale-110 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://t.me/abnezer12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors transform hover:scale-110 text-2xl"
            title="@abnezer12"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://www.instagram.com/abu_sol.1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors transform hover:scale-110 text-2xl"
            title="abu_sol.1"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="text-gray-500 dark:text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Abenezer Design. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
