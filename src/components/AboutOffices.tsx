import React from 'react';
import { MapPin, Users, Award, Shield } from 'lucide-react';

const TEAM = [
  { name: 'Bob Weichler', role: 'Founder & Managing Director', avatar: '/textures/bob-weichler-headshot-150x150.jpg.avif' },
  { name: 'Mathias Greengalgh', role: 'Head of Creative Technology', avatar: '/textures/mathias-greengalgh-scaled-1-150x150.jpg.avif' },
  { name: 'Sam Ghyselinck', role: 'Lead Solutions Architect', avatar: '/textures/sam-ghyselinck-150x150.jpg.avif' },
  { name: 'Sven Vandendael', role: 'Head of Engineering', avatar: '/textures/sven-vandendael-headshot-150x150.jpg.avif' },
  { name: 'Yannick Van Meerbeeck', role: 'Product Design Lead', avatar: '/textures/yannick-van-meerbeeck-headshot-150x150.jpg.avif' },
  { name: 'Edward Park', role: 'Managing Partner - North America', avatar: '/textures/edward-park-headshot-150x150.jpg.avif' }
];

export const AboutOffices: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 border-t border-white/10 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Metric Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-20 border-b border-white/10 text-center">
          <div>
            <div className="text-4xl sm:text-5xl font-display font-medium text-white mb-2">10+</div>
            <div className="text-xs text-muted uppercase tracking-wider font-semibold">Years of Excellence</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-display font-medium text-primary mb-2">45+</div>
            <div className="text-xs text-muted uppercase tracking-wider font-semibold">Global Design Awards</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-display font-medium text-white mb-2">120M+</div>
            <div className="text-xs text-muted uppercase tracking-wider font-semibold">Users Reached</div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-display font-medium text-white mb-2">98%</div>
            <div className="text-xs text-muted uppercase tracking-wider font-semibold">Client Retention</div>
          </div>
        </div>

        {/* Global Hubs */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Brussels */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#141414] border border-white/10 relative overflow-hidden group">
            <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              <MapPin className="w-4 h-4" />
              <span>European Headquarters</span>
            </div>
            <h3 className="text-3xl font-display font-medium text-white mb-4">
              Brussels, Belgium
            </h3>
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
              Our European creative powerhouse, housing our core engineering, Three.js shaders research, and design labs.
            </p>
            <div className="text-xs text-gray-400 font-mono">
              Avenue Louise &bull; 1050 Brussels &bull; +32 2 899 00 24
            </div>
          </div>

          {/* New York */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#141414] border border-white/10 relative overflow-hidden group">
            <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-4">
              <MapPin className="w-4 h-4" />
              <span>North America Studio</span>
            </div>
            <h3 className="text-3xl font-display font-medium text-white mb-4">
              New York, USA
            </h3>
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
              Serving our US enterprise partners, scaling direct-to-consumer platforms, and accelerating product strategy.
            </p>
            <div className="text-xs text-gray-400 font-mono">
              Broadway &bull; Manhattan, NY 10012 &bull; +1 (917) 472-8830
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="pt-12">
          <div className="text-center mb-12">
            <h4 className="text-2xl sm:text-3xl font-display font-medium text-white mb-3">
              Leadership & Craftsmanship
            </h4>
            <p className="text-muted text-sm max-w-lg mx-auto">
              Led by veteran technologists and designers committed to high-craft digital execution.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full overflow-hidden border border-white/15 mb-3 transition-transform duration-300 group-hover:scale-105 group-hover:border-primary">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="font-semibold text-sm text-white">{member.name}</div>
                <div className="text-[11px] text-muted mt-0.5">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
