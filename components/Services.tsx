
import React from 'react';
import { Cpu, Eye, Layers, Settings, Radio, Monitor } from 'lucide-react';

const services = [
  {
    icon: <Cpu size={32} />,
    title: "AI Solutions",
    description: "Neural network architectures specialized in real-time edge processing for autonomous environments.",
    color: "text-purple-400"
  },
  {
    icon: <Settings size={32} />,
    title: "Lab Automation",
    description: "End-to-end robotics pipelines that handle complex biological and chemical assays with 99.9% precision.",
    color: "text-cyan-400"
  },
  {
    icon: <Radio size={32} />,
    title: "IoT & Sensors",
    description: "Hyper-sensitive sensor arrays that monitor everything from seismic shifts to molecular concentration.",
    color: "text-pink-400"
  },
  {
    icon: <Eye size={32} />,
    title: "Computer Vision",
    description: "Advanced object detection and spatial awareness systems for industrial robotics and navigation.",
    color: "text-indigo-400"
  },
  {
    icon: <Monitor size={32} />,
    title: "AR/VR Interfaces",
    description: "Intuitive digital twin dashboards allowing remote manipulation of physical lab equipment from anywhere.",
    color: "text-blue-400"
  },
  {
    icon: <Layers size={32} />,
    title: "Cyber-Physical",
    description: "Seamless integration of software intelligence with high-fidelity mechanical hardware systems.",
    color: "text-emerald-400"
  }
];

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold tracking-[0.4em] text-purple-400 mb-4 uppercase">Capabilities</h2>
        <h3 className="text-4xl md:text-5xl font-bold font-heading text-white">The Tech Stack of Tomorrow</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group p-10 rounded-[2.5rem] glass-heavy border border-white/5 hover:border-purple-500/30 transition-all hover:transform hover:-translate-y-2 relative overflow-hidden"
          >
            {/* Subtle Gradient Glow */}
            <div className={`absolute top-0 right-0 w-24 h-24 blur-[60px] opacity-20 transition-opacity group-hover:opacity-40 rounded-full ${service.color.replace('text', 'bg')}`}></div>
            
            <div className={`mb-8 p-5 rounded-2xl bg-black/40 ${service.color} inline-block group-hover:nebula-accent group-hover:text-white transition-all duration-500 shadow-xl`}>
              {service.icon}
            </div>
            <h4 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:nebula-accent transition-all">
              {service.title}
            </h4>
            <p className="text-slate-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
