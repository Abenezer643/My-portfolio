import React from 'react';
import {
  FaGithub,
  FaBehance,
  FaTelegramPlane,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] border-t border-white/10 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://github.com/melekdereje"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.behance.net/mlkdrj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 text-2xl"
          >
            <FaBehance />
          </a>
          <a
            href="https://t.me/Abe_Melek"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 text-2xl"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://www.instagram.com/melekdereje"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 text-2xl"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Abemelek Design. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
