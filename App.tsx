
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-purple-500/30 nebula-bg">
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        {/* Deep Nebula Spots */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-purple-600/15 blur-[180px] rounded-full"></div>
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-pink-600/10 blur-[140px] rounded-full"></div>
        
        {/* Star Grid Effect */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-[15%] left-[25%] w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-[45%] left-[75%] w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-[85%] left-[15%] w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
      </div>

      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-24">
          <About />
        </section>
        
        <section id="services" className="py-24 bg-black/30">
          <Services />
        </section>
        
        <section id="projects" className="py-24">
          <Projects />
        </section>
        
        <section id="contact" className="py-24 bg-black/30">
          <Contact />
        </section>
      </main>

      <Chatbot />
      <Footer />
    </div>
  );
};

export default App;
