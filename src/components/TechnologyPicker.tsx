import React, { useState } from 'react';

const technologies = [
  'Website',
  'Artificial Intelligence',
  'Branding',
  'Applications (web & mobile)',
  'SEO/GEO',
  'Shopify',
  'API Integration',
  'Website Migration',
  'Blockchain',
  'Maintenance',
  'Second Opinion'
];

export function TechnologyPicker() {
  const [selectedTechs, setSelectedTechs] = useState<string[]>(['Website']);

  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  return (
    <section className="technology py-24 md:py-36 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-[#eee]">
      <div className="technology__inner">
        <h2 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-serif font-normal leading-[1.1] tracking-tight mb-12 text-[#111111]">
          Tell us what you need.
        </h2>

        {/* Dynamic Interactive Selection Bar */}
        <div className="flex flex-wrap items-center gap-3 p-4 md:p-6 rounded-2xl bg-[#f5f0f0] border border-[#ece4e4] mb-12">
          <span className="text-xl md:text-2xl font-serif text-[#111111]">
            I need a
          </span>

          {selectedTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => toggleTech(tech)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] text-white text-sm font-medium hover:bg-[#ff4f31] transition-colors"
            >
              <span>{tech}</span>
              <span className="text-xs opacity-75">✕</span>
            </button>
          ))}

          {selectedTechs.length === 0 && (
            <span className="text-sm font-mono text-[#888888] italic">
              (select one or more below)
            </span>
          )}

          <a
            href="https://weichie.com/contact/"
            className="ml-auto inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#ff4f31] text-white text-sm font-medium hover:bg-[#e03d20] transition-colors"
          >
            <span>Next</span>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Technology Rows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {technologies.map((tech) => {
            const isSelected = selectedTechs.includes(tech);
            return (
              <button
                key={tech}
                type="button"
                onClick={() => toggleTech(tech)}
                className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'border-[#ff4f31] bg-white shadow-sm'
                    : 'border-[#e5dfdf] bg-transparent hover:border-[#111111]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#ff4f31]">
                    <svg width="11" height="20" viewBox="0 0 11 20" fill="currentColor">
                      <path d="M-3.90187e-05 15.7711V5.82933e-05H1.49096V14.2801H6.53096C5.87996 13.5451 5.18696 12.4111 4.51496 10.9411H5.71196C7.18196 12.6421 8.73596 13.9231 10.332 14.7211V15.3301C8.73596 16.1281 7.18196 17.3881 5.71196 19.1101H4.51496C5.18696 17.6401 5.87996 16.5061 6.53096 15.7711H-3.90187e-05Z" />
                    </svg>
                  </span>
                  <span className="font-medium text-base text-[#111111]">{tech}</span>
                </div>

                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'bg-[#ff4f31] text-white'
                      : 'bg-[#ece4e4] text-[#111111]'
                  }`}
                >
                  {isSelected ? '✓' : '+'}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TechnologyPicker;
