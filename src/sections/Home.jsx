import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { FaGithub, FaBehance, FaFileAlt } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';
import resumePdf from '../assets/Resume.pdf';

const Home = () => {
  return (
    <SectionWrapper
      id="home"
      className="flex flex-col md:flex-row items-center justify-between min-h-screen pt-32"
    >
      <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left">
        <p className="text-gray-400 text-lg uppercase tracking-wide">
          I am Abemelek
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          A Creative <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            Developer
          </span>{' '}
          & <br />
          UI Specialist
        </h1>
        <p className="text-gray-400 max-w-xl text-lg mx-auto md:mx-0">
          Blending thoughtful UI design with clean, responsive development to
          create websites that look great and perform flawlessly.
        </p>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-white/10"
          >
            View My Work
          </a>
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-white/30 transition-all text-white"
          >
            <FaFileAlt />
            <span>Resume</span>
          </a>
          <div className="flex gap-6 text-2xl text-white">
            <a
              href="https://www.behance.net/mlkdrj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors transform hover:scale-110"
            >
              <FaBehance />
            </a>
            <a
              href="https://github.com/melekdereje"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors transform hover:scale-110"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 mt-12 md:mt-0 flex justify-center md:justify-end">
        <div className="relative w-72 h-72 md:w-[400px] md:h-[500px] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Home;
