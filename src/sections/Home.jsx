import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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
          Front-End <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            Developer
          </span>{' '}
          & <br />
          Designer
        </h1>
        <p className="text-gray-400 max-w-xl text-lg mx-auto md:mx-0">
          Blending thoughtful UI design with clean, responsive development to
          create websites that look great and perform flawlessly.
        </p>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-center md:justify-start">
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-white/10">
            Download CV
          </button>
          <div className="flex gap-6 text-2xl text-white">
            <a
              href="#"
              className="hover:text-gray-400 transition-colors transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
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
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop"
            alt="Profile"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Home;
