import React, { useState } from 'react';
import { Layers, Palette, Terminal, Box, Sparkles, CheckCircle2 } from 'lucide-react';

interface NodeCapability {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  deliverables: string[];
}

const CAPABILITIES: NodeCapability[] = [
  {
    id: 'strategy',
    title: 'Product Strategy',
    subtitle: 'Discovery & System Blueprinting',
    description: 'We align user needs with business KPIs to design scalable technical roadmaps before a single line of code is written.',
    icon: <Layers className="w-5 h-5" />,
    image: '/textures/application-service-cover-1024x1024.jpg',
    deliverables: ['Domain Modeling', 'Architecture Specs', 'KPI Definition', 'Stack Feasibility']
  },
  {
    id: 'design',
    title: 'UI/UX Design Systems',
    subtitle: 'Human-Centered Digital Craft',
    description: 'Bespoke design systems that balance aesthetic restraint with intuitive usability, responsive across every screen dimension.',
    icon: <Palette className="w-5 h-5" />,
    image: '/textures/website-service-cover.jpg',
    deliverables: ['Figma Tokens', 'Micro-Interactions', 'Interactive Prototypes', 'Accessibility AAA']
  },
  {
    id: 'engineering',
    title: 'Full-Stack Engineering',
    subtitle: 'Production-Grade Software',
    description: 'Modern decoupled architectures utilizing Next.js, TypeScript, Tailwind, and resilient cloud infrastructures.',
    icon: <Terminal className="w-5 h-5" />,
    image: '/textures/ecommerce-service-cover.jpg',
    deliverables: ['Next.js / App Router', 'Headless Commerce', 'Custom APIs & Webhooks', 'Automated CI/CD']
  },
  {
    id: 'webgl',
    title: '3D WebGL & Creative Tech',
    subtitle: 'Cinematic In-Browser Realism',
    description: 'Pushing the boundaries of the open web with Three.js shaders, custom fragment filters, and interactive 60fps/120fps motion.',
    icon: <Box className="w-5 h-5" />,
    image: '/textures/spantech-cover-2-768x678.webp',
    deliverables: ['Three.js Shaders', 'SDF Rounded Raymarching', 'Lenis Physics Scroll', 'Low-Drawcall Optimization']
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    subtitle: 'Intelligent Automation Systems',
    description: 'Integrating conversational AI, semantic search vectors, and real-time inference models into everyday business operations.',
    icon: <Sparkles className="w-5 h-5" />,
    image: '/textures/ai-service-cover-1024x1024.jpg',
    deliverables: ['LLM Orchestration', 'RAG Pipelines', 'Voice Synthesis', 'Workflow Autonomous Agents']
  }
];

export const InteractiveDiagram: React.FC = () => {
  const [activeId, setActiveId] = useState('engineering');
  const activeNode = CAPABILITIES.find((c) => c.id === activeId) || CAPABILITIES[0];

  return (
    <section id="capabilities" className="py-24 md:py-36 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-primary text-xs uppercase tracking-widest font-bold mb-3">
            Our Core Disciplines
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight mb-6">
            Engineered from concept to scale.
          </h2>
          <p className="text-muted text-base leading-relaxed">
            Every project is executed through our battle-tested multi-disciplinary pipeline, combining rigorous engineering with creative innovation.
          </p>
        </div>

        {/* Interactive Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Capability Node Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {CAPABILITIES.map((node) => {
              const isActive = node.id === activeId;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveId(node.id)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                    isActive
                      ? 'bg-white/10 border-primary shadow-xl shadow-primary/10 translate-x-2'
                      : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl border ${
                    isActive ? 'bg-primary text-white border-primary' : 'bg-white/5 text-gray-400 border-white/10'
                  }`}>
                    {node.icon}
                  </div>
                  <div>
                    <h3 className={`font-semibold text-base transition-colors ${
                      isActive ? 'text-white' : 'text-gray-300'
                    }`}>
                      {node.title}
                    </h3>
                    <p className="text-xs text-muted mt-0.5">{node.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Interactive Showcase Card */}
          <div className="lg:col-span-7 bg-[#141414] border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
            {/* Top Preview Image */}
            <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-8 relative border border-white/10">
              <img
                src={activeNode.image}
                alt={activeNode.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-primary/90 text-white backdrop-blur-md">
                  {activeNode.title}
                </span>
                <span className="text-xs text-gray-300 font-mono">
                  weichie.discipline/{activeNode.id}
                </span>
              </div>
            </div>

            {/* Description and Deliverables */}
            <h4 className="text-2xl font-display font-medium text-white mb-3">
              {activeNode.subtitle}
            </h4>
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
              {activeNode.description}
            </p>

            <div className="border-t border-white/10 pt-6">
              <span className="text-xs uppercase tracking-wider text-muted font-bold block mb-4">
                Key Deliverables & Standards
              </span>
              <div className="grid grid-cols-2 gap-3">
                {activeNode.deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
