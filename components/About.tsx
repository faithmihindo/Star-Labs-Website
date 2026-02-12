import React from 'react';
import { Target, Globe, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=500" className="rounded-[2.5rem] border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="Robotics Lab" />
            <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=400&h=500" className="rounded-[2.5rem] border border-white/10 shadow-2xl mt-12 grayscale hover:grayscale-0 transition-all duration-700" alt="Humanoid Interface" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full nebula-accent flex items-center justify-center border-4 border-slate-950 shadow-2xl glow-nebula">
            <span className="text-white font-bold text-xl">EST 2018</span>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-sm font-bold tracking-[0.4em] text-purple-400 mb-4 uppercase">The Visionary Core</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-white mb-8">
            Building Real-World <span className="text-transparent bg-clip-text nebula-accent">STAR Labs</span> for the 21st Century.
          </h3>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            STAR Labs is a radical commitment to Science and Applied Research. We operate where AI intelligence meets physical atoms, creating systems that solve humanity's hardest problems.
          </p>

          <div className="space-y-6">
            {[
              { icon: Target, title: "Precision Mission", desc: "To accelerate innovation through modular lab automation and autonomous intelligence." },
              { icon: Globe, title: "Scaleable Solutions", desc: "Developing hardware that works at the scale of microns up to global environmental grids." },
              { icon: ShieldCheck, title: "Security Protocol", desc: "Our R&D is governed by encrypted ethical frameworks ensuring safe machine intelligence." }
            ].map((item, idx) => {
              // Extract the component to render it with props directly
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-5 p-4 rounded-3xl glass-heavy border border-white/5 hover:border-purple-500/30 transition-all group">
                  <div className="mt-1 p-3 rounded-2xl bg-black/40 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                    {/* Fixed: Use component directly to avoid React.cloneElement typing issues */}
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1 tracking-tight">{item.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;