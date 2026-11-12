import React, { useState } from 'react';
import { HeroThreeCanvas, SERVICES } from './HeroThreeCanvas';

// Exact SVGs from Weichie's production DOM for the 5 labels
const LABEL_ICONS: Record<string, React.ReactNode> = {
  'web-development': (
    <svg className="w-4 h-4" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M49.44 19.57V17.95H46.47V14.97H43.49V12H17.77V14.97H14.8V17.95H11.82V20.92H7.5V37.83H10.49V42.03H13.47V45.02H16.46V48H42.32V45.02H45.31V42.03H48.3V37.83H52.5V22.26H49.52V19.57H49.44ZM37.26 34.59H31.58V31.62H37.26V34.59ZM22.65 34.58H28.34V31.61H22.65V34.58ZM28.32 25.53V28.37H22.65V25.53H28.32ZM37.26 28.37H31.58V25.53H37.26V28.37Z" fill="currentColor"/>
    </svg>
  ),
  'ecommerce': (
    <svg className="w-4 h-4" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M49.5 22.5V19.5H46.5V16.5H43.5V13.5H16.5V16.5H13.5V19.5H10.5V22.5H7.5V46.5H52.5V22.5H49.5ZM24 21H36V24H24V21ZM45 42H15V27H45V42Z" fill="currentColor"/>
    </svg>
  ),
  'applications': (
    <svg className="w-4 h-4" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M48 12H12V48H48V12ZM43.5 43.5H16.5V19.5H43.5V43.5Z" fill="currentColor"/>
    </svg>
  ),
  'artificial-intelligence': (
    <svg className="w-4 h-4" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 6L33 21L48 24L33 27L30 42L27 27L12 24L27 21L30 6Z" fill="currentColor"/>
    </svg>
  ),
  'blockchain': (
    <svg className="w-4 h-4" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 10L42 17V31L30 38L18 31V17L30 10ZM30 20L24 23.5V30.5L30 34L36 30.5V23.5L30 20Z" fill="currentColor"/>
    </svg>
  )
};

export const HeroSection: React.FC = () => {
  const [activeSlug, setActiveSlug] = useState('blockchain');

  return (
    <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-[#fdf9f9]">
      {/* 3D WebGL Cylindrical Hero Carousel */}
      <div className="w-full relative">
        <HeroThreeCanvas
          activeSlug={activeSlug}
          onActiveChange={(slug) => setActiveSlug(slug)}
        />
      </div>

      {/* Row of Service Labels Matching Image 1 */}
      <div className="max-w-6xl mx-auto px-4 mt-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-7 sm:gap-x-10 gap-y-3">
          {SERVICES.map((s) => {
            const isActive = s.slug === activeSlug;
            return (
              <li key={s.slug}>
                <button
                  type="button"
                  onClick={() => setActiveSlug(s.slug)}
                  className={`inline-flex items-center gap-2 text-xs sm:text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#ff4f31]'
                      : 'text-[#555555] hover:text-[#111111]'
                  }`}
                >
                  <span className={`inline-block transition-transform duration-300 ${
                    isActive ? 'scale-110' : ''
                  }`}>
                    {LABEL_ICONS[s.slug]}
                  </span>
                  <span>{s.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
