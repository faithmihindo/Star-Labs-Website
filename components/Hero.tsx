
import React from 'react';
import { ArrowRight, Sparkles, Cpu, Activity, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start pt-32 md:pt-48 px-6 text-center overflow-hidden">
      {/* Central Content */}
      <div className="max-w-4xl mx-auto z-10 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-heavy border border-white/10 text-slate-300 text-xs font-bold mb-8 tracking-widest uppercase">
          <Sparkles size={14} className="text-cyan-400" />
          <span>Next Generation R&D Intelligence</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-[1.1] mb-8 tracking-tight text-white">
          Smarter Labs.<br />
          <span className="text-transparent bg-clip-text nebula-accent text-glow-purple">
            Powered by AI.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          AI that learns your research, predicts experimental outcomes, and helps you make breakthrough discoveries in seconds.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
          <button className="px-10 py-4 nebula-accent text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 glow-nebula text-lg">
            Get Started
          </button>
        </div>
      </div>

      {/* Floating Mockup/UI Elements (Matching NebulaPay aesthetic) */}
      <div className="relative w-full max-w-6xl mx-auto mt-auto h-[400px] md:h-[500px]">
        {/* Device Representation (Abstract) */}
        <div className="absolute left-1/2 bottom-[-100px] -translate-x-1/2 w-[320px] h-[600px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-[0_0_100px_rgba(139,92,246,0.15)] overflow-hidden z-20 hidden md:block">
           <div className="absolute top-0 left-0 w-full h-full nebula-bg flex flex-col items-center pt-24 gap-8">
              <div className="w-24 h-24 rounded-3xl nebula-accent flex items-center justify-center glow-nebula">
                 <Cpu className="text-white w-12 h-12" />
              </div>
              <div className="text-2xl font-bold font-heading">STAR LABS</div>
           </div>
        </div>

        {/* Floating Card 1: Processing Status (Left) */}
        <div className="absolute left-[5%] top-[10%] w-[320px] glass-heavy p-6 rounded-[2rem] border border-white/10 animate-float z-30 hidden lg:block">
           <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Activity size={20} />
                 </div>
                 <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Active Neural Link</div>
                    <div className="text-sm font-bold text-white">SYNAPSE-X4</div>
                 </div>
              </div>
              <div className="text-xs font-bold text-green-400">98% OPTIMAL</div>
           </div>
           <div className="space-y-3">
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                 <div className="h-full w-[85%] nebula-accent rounded-full"></div>
              </div>
              <div className="flex justify-between text-[10px] font-bold text-slate-500">
                 <span>DATA PROCESSING</span>
                 <span>4.2 TB/s</span>
              </div>
           </div>
        </div>

        {/* Floating Card 2: Security/Protocol (Right) */}
        <div className="absolute right-[5%] bottom-[20%] w-[340px] glass-heavy p-6 rounded-[2rem] border border-white/10 animate-float z-30 hidden lg:block" style={{ animationDelay: '1s' }}>
           <div className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Lab Environment Status</div>
           <div className="text-4xl font-bold text-white mb-6">$ 1,245,640.00</div>
           <div className="flex items-center gap-2 text-green-400 text-sm font-bold mb-8">
              <ArrowRight size={14} className="-rotate-45" />
              <span>+12.4% EFFICIENCY</span>
           </div>
           <div className="grid grid-cols-3 gap-3">
              <button className="p-3 bg-white/5 hover:bg-white/10 rounded-xl flex flex-col items-center gap-2 text-[10px] font-bold transition-all">
                 <Shield size={16} className="text-purple-400" />
                 SECURE
              </button>
              <button className="p-3 bg-white/5 hover:bg-white/10 rounded-xl flex flex-col items-center gap-2 text-[10px] font-bold transition-all">
                 <Cpu size={16} className="text-pink-400" />
                 PROCESS
              </button>
              <button className="p-3 nebula-accent text-white rounded-xl flex flex-col items-center gap-2 text-[10px] font-bold transition-all">
                 <ArrowRight size={16} />
                 DEPLOY
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
