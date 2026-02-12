
import React from 'react';
import { Zap } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6">
      <nav className="w-full max-w-5xl glass-heavy border border-white/10 rounded-full px-8 py-3 flex items-center justify-between shadow-2xl">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection('home')}
        >
          <div className="w-8 h-8 rounded-lg nebula-accent flex items-center justify-center glow-nebula transition-transform group-hover:scale-110">
            <Zap className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold font-heading tracking-tight text-white hidden sm:block">
            STAR <span className="text-purple-400">LABS</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-xs font-bold tracking-widest transition-all hover:text-white ${
                activeSection === item.id ? 'text-white' : 'text-slate-500'
              }`}
            >
              {item.label.toUpperCase()}
            </button>
          ))}
        </div>

        <button 
          onClick={() => scrollToSection('contact')}
          className="px-6 py-2 nebula-accent text-white rounded-full text-xs font-bold transition-all hover:scale-105 active:scale-95 glow-nebula shadow-lg shadow-purple-500/20"
        >
          DOWNLOAD APP
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
