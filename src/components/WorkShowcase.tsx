import React, { useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CaseStudy {
  id: string;
  client: string;
  title: string;
  category: string;
  year: string;
  image: string;
  tags: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'dogchef',
    client: 'DogChef',
    title: 'Transforming pet nutrition with an ultra-personalized subscription engine',
    category: 'eCommerce & Digital Platform',
    year: '2025',
    image: '/textures/dogchef-cover-768x484.webp',
    tags: ['Custom eCommerce', 'Next.js', 'Subscription Architecture']
  },
  {
    id: 'spantech',
    client: 'Spantech',
    title: 'Architectural engineering showcase with interactive modular configurators',
    category: 'Brand Experience & WebGL',
    year: '2025',
    image: '/textures/spantech-cover-2-768x678.webp',
    tags: ['3D WebGL', 'Architecture', 'Global Multi-Site']
  },
  {
    id: 'adaptivegreen',
    client: 'AdaptiveGreen',
    title: 'Pioneering urban biodiversity through sustainable green roofing systems',
    category: 'Corporate Platform',
    year: '2024',
    image: '/textures/adaptivegreen-1-750x1024.webp',
    tags: ['Climate Tech', 'Design System', 'Headless CMS']
  },
  {
    id: 'restaurant-5',
    client: 'Restaurant 5',
    title: 'Atmospheric storytelling and sensory digital identity for Michelin gastronomy',
    category: 'Hospitality & Brand',
    year: '2024',
    image: '/textures/restaurant-5-768x513.webp',
    tags: ['Micro-Interactions', 'Editorial Design', 'Sound FX']
  },
  {
    id: 'druglijn',
    client: 'De Druglijn',
    title: 'Empathetic public health advisory ecosystem reaching millions with accessible advice',
    category: 'Public Health & Government',
    year: '2024',
    image: '/textures/Druglijnbrochures-768x768.webp',
    tags: ['Accessibility WCAG AAA', 'Anonymous Chat', 'Fast Performance']
  }
];

export const WorkShowcase: React.FC = () => {
  const [hoveredStudy, setHoveredStudy] = useState<CaseStudy | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section
      id="work"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-24 md:py-36 border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-primary text-xs uppercase tracking-widest font-bold mb-3">
              Selected Projects
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-white tracking-tight">
              Featured work that speaks for itself.
            </h2>
          </div>
          <p className="text-muted text-sm sm:text-base max-w-md">
            From hyper-growth startups to storied international brands, here is a curated selection of my latest digital products.
          </p>
        </div>

        {/* Case Studies Interactive List */}
        <div className="divide-y divide-white/10 border-y border-white/10">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              onMouseEnter={() => setHoveredStudy(study)}
              onMouseLeave={() => setHoveredStudy(null)}
              className="group py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer transition-colors hover:bg-white/[0.02] px-4 -mx-4 rounded-xl"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 text-xs text-muted mb-2 font-medium">
                  <span className="text-white font-semibold">{study.client}</span>
                  <span>&bull;</span>
                  <span>{study.category}</span>
                  <span>&bull;</span>
                  <span>{study.year}</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-white/90 group-hover:text-primary transition-colors leading-snug">
                  {study.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {study.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action arrow */}
              <div className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-primary group-hover:bg-primary transition-all self-start md:self-center shrink-0">
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Cursor-Following WebGL/Image Preview Card */}
      {hoveredStudy && (
        <div
          className="pointer-events-none hidden lg:block fixed z-30 transition-transform duration-100 ease-out will-change-transform"
          style={{
            left: `${cursorPos.x + 30}px`,
            top: `${cursorPos.y - 120}px`
          }}
        >
          <div className="w-[320px] h-[220px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-dark-900/90 backdrop-blur-md p-1.5 transition-all transform scale-100 animate-in fade-in zoom-in-95 duration-200">
            <img
              src={hoveredStudy.image}
              alt={hoveredStudy.client}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
