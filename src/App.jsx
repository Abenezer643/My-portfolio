import React from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import Services from './sections/Services';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
// import Projects from './sections/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white font-sans selection:bg-white/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <Home />
        <Services />
        <About />
        <Skills />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
