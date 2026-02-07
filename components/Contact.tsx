
import React from 'react';
import { Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-sm font-bold tracking-[0.4em] text-purple-400 mb-4 uppercase">Connect</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-white mb-8">Initiate <span className="text-transparent bg-clip-text nebula-accent">Protocol</span></h3>
          <p className="text-lg text-slate-400 mb-12">
            Interested in the future of lab technology? Whether you're an investor, a researcher, or a potential partner, our digital gates are open.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="p-5 rounded-3xl bg-white/5 border border-white/5 text-purple-400 group-hover:nebula-accent group-hover:text-white transition-all shadow-xl">
                <Mail size={28} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-1">Encrypted Email Terminal</div>
                <div className="text-2xl text-white font-bold tracking-tight">inquiries@starlabs.tech</div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/5">
              <p className="text-sm text-slate-500 italic">
                Our AI agents monitor this channel 24/7. Average response time: <span className="text-cyan-400 font-bold">14.2 minutes</span>.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-heavy p-8 md:p-12 rounded-[3rem] border border-white/5 relative">
          <div className="absolute -top-4 -right-4 nebula-accent text-white text-[10px] font-bold px-4 py-1.5 rounded-full animate-pulse z-20 shadow-lg">ENCRYPTED CHANNEL</div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Identity</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-purple-500/50 transition-all placeholder:text-slate-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Interface</label>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-purple-500/50 transition-all placeholder:text-slate-600"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Sector of Interest</label>
              <select className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-purple-500/50 transition-all appearance-none cursor-pointer">
                <option className="bg-slate-900">Investment Opportunities</option>
                <option className="bg-slate-900">Partnership/Collaboration</option>
                <option className="bg-slate-900">Research Careers</option>
                <option className="bg-slate-900">Media/Press Inquiry</option>
                <option className="bg-slate-900">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Transmission</label>
              <textarea 
                rows={4}
                placeholder="How can STAR Labs serve your mission?" 
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-purple-500/50 transition-all resize-none placeholder:text-slate-600"
              ></textarea>
            </div>

            <button className="w-full py-5 nebula-accent text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all glow-nebula group text-lg">
              SEND TRANSMISSION
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
