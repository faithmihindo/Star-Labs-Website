
import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Project Prometheus",
    category: "AI Robotics",
    image: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=1200",
    description: "Deep-learning autonomous systems integrated into high-fidelity humanoid hardware for extreme environment navigation."
  },
  {
    title: "Nexus Core",
    category: "IoT / Lab OS",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    description: "A secure, blockchain-verified operating system controlling vast clusters of laboratory automation equipment."
  },
  {
    title: "OmniSight AR",
    category: "AR Interface",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=1200",
    description: "Next-gen spatial computing interfaces that overlay real-time bio-molecular data onto physical laboratory workspace."
  },
  {
    title: "Aegis Sensor Grid",
    category: "Environmental",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    description: "A global web of ultra-sensitive IoT sensors connected via satellite to predict planetary-scale seismic anomalies."
  }
];

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 text-center md:text-left">
        <div>
          <h2 className="text-sm font-bold tracking-[0.4em] text-purple-400 mb-4 uppercase">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading text-white">Active Prototypes</h3>
        </div>
        <button className="px-8 py-4 glass-heavy rounded-full text-xs font-bold hover:bg-white/10 transition-all border border-white/10 tracking-widest">
          VIEW ALL EXPERIMENTS
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div key={index} className="group relative overflow-hidden rounded-[3rem] border border-white/5 bg-slate-900/40 glass-heavy">
            <div className="aspect-[16/10] overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            {/* Dark gradient overlay that reveals on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
            
            <div className="absolute bottom-0 left-0 p-10 w-full transform transition-all duration-500 group-hover:-translate-y-2">
              <div className="text-[10px] font-bold text-purple-400 mb-2 tracking-[0.3em] uppercase">{project.category}</div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-3xl font-bold text-white tracking-tight">{project.title}</h4>
                <div className="p-3 rounded-2xl nebula-accent text-white opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl glow-nebula">
                  <ExternalLink size={20} />
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
