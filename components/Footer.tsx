
import React from 'react';
import { Zap, Twitter, Linkedin, Github, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center">
                <Zap className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-heading tracking-tight text-white">
                STAR <span className="text-cyan-400">LABS</span>
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed">
              Advancing human potential through the radical application of Science, Technology, and Autonomous Robotics.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 transition-all"><Twitter size={20} /></a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 transition-all"><Linkedin size={20} /></a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 transition-all"><Github size={20} /></a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-400 transition-all"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-slate-500 hover:text-cyan-400 transition-colors">Our Vision</a></li>
              <li><a href="#services" className="text-slate-500 hover:text-cyan-400 transition-colors">Technologies</a></li>
              <li><a href="#projects" className="text-slate-500 hover:text-cyan-400 transition-colors">Experiments</a></li>
              <li><a href="#contact" className="text-slate-500 hover:text-cyan-400 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Intelligence Centers</h4>
            <ul className="space-y-4 text-slate-500">
              <li>Palo Alto, California</li>
              <li>Zurich, Switzerland</li>
              <li>Singapore, SG</li>
              <li>Tokyo, Japan</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Newsletter Protocol</h4>
            <p className="text-slate-500 text-sm mb-4">Receive monthly updates from our research frontiers.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50"
              />
              <button className="absolute right-1 top-1 bottom-1 px-4 bg-cyan-500 rounded-lg text-white font-bold text-xs hover:bg-cyan-600 transition-all">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-bold tracking-widest uppercase">
          <div>© 2024 STAR LABS TECHNOLOGIES. ALL SYSTEMS OPERATIONAL.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Encryption</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Ethics Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
