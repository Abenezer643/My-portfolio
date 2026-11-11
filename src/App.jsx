import React from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import Services from './sections/Services';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Projects from './sections/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50 dark:bg-[#0f0f0f] min-h-screen text-gray-900 dark:text-white font-sans selection:bg-black/30 selection:text-black dark:selection:bg-white/30 dark:selection:text-white overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <main className="w-full">
        <Home />
        <Services />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
