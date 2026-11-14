import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { TextReveal } from './TextReveal';

interface TechItem {
  slug: string;
  label: string;
}

const TECHNOLOGIES: TechItem[] = [
  { slug: 'youtube-editing', label: 'YouTube Editing' },
  { slug: 'short-form-reels', label: 'Short-Form & Reels' },
  { slug: 'motion-graphics', label: 'Motion Graphics' },
  { slug: 'thumbnail-design', label: 'Thumbnail Design' },
  { slug: 'color-grading', label: 'Color Grading' },
  { slug: 'sound-design', label: 'Sound Design & Mixing' },
  { slug: 'video-ads', label: 'Video Ads & Commercials' },
  { slug: 'brand-identity', label: 'Brand Visual Identity' },
  { slug: 'podcast-editing', label: 'Podcast & Talking Head' },
  { slug: 'social-media-graphics', label: 'Social Media Graphics' },
  { slug: 'documentary-style', label: 'Documentary Style' },
  { slug: 'creative-consultation', label: 'Creative Consultation' }
];

interface TechnologyPickerProps {
  onNavigateContact?: (selectedNeeds: string[]) => void;
}

export function TechnologyPicker({ onNavigateContact }: TechnologyPickerProps = {}) {
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);
  const gridRef = useRef<HTMLUListElement>(null);

  const toggleTech = (slug: string) => {
    setSelectedSlugs(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  const removeTech = (slug: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedSlugs(prev => prev.filter(s => s !== slug));
  };

  const handleNextClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (selectedSlugs.length === 0) return;
    if (onNavigateContact) {
      const selectedLabels = selectedSlugs
        .map(slug => TECHNOLOGIES.find(t => t.slug === slug)?.label)
        .filter((label): label is string => Boolean(label));
      onNavigateContact(selectedLabels);
    }
  };

  const handleAddClick = () => {
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Pulse animation across unselected items matching Weichie's main.js
      const rows = gridRef.current.querySelectorAll('.technology__row');
      rows.forEach((row, idx) => {
        const isSel = (row as HTMLElement).dataset.selected !== undefined;
        if (!isSel) {
          gsap.fromTo(
            row,
            { scale: 1 },
            {
              scale: 1.05,
              duration: 0.2,
              repeat: 1,
              yoyo: true,
              ease: 'power2.inOut',
              delay: idx * 0.04
            }
          );
        }
      });
    }
  };

  const hasSelection = selectedSlugs.length > 0;

  return (
    <section className="technology py-24 md:py-36 px-6 md:px-12 w-full bg-[var(--clr-bg,#fdf9f9)] text-[var(--clr-text,#12110b)] transition-colors duration-300">
      <div className="technology__inner max-w-[98rem] mx-auto flex flex-col items-center gap-12 md:gap-20">
        
        {/* Section Heading matching Weichie's Season Mix Serif 145px display with word reveal */}
        <TextReveal
          text="Tell me what you need."
          as="h2"
          className="technology__heading font-serif text-[clamp(2.75rem,9.375vw+0.625rem,9.5rem)] font-normal leading-none tracking-[-0.02em] text-[var(--clr-text,#12110b)] text-center m-0"
        />

        {/* Interactive Selection Bar (width: 756px max) */}
        <form
          className="technology__form w-full max-w-[47.25rem] bg-[var(--clr-beige,#f4efea)] rounded-[24px] p-3 md:p-4 flex flex-wrap items-center gap-3 transition-colors duration-300 relative"
          data-technology-form=""
          data-has-selection={hasSelection ? '' : undefined}
          onSubmit={e => e.preventDefault()}
        >
          {/* Prefix */}
          <span className="technology__form-prefix text-base md:text-lg font-medium text-[var(--clr-text,#12110b)] pl-2 min-h-[48px] md:min-h-[54px] flex items-center select-none">
            I need
          </span>

          {/* Selected Pills */}
          <span className="technology__pills flex flex-wrap items-center gap-2" data-technology-pills="">
            {selectedSlugs.map(slug => {
              const item = TECHNOLOGIES.find(t => t.slug === slug);
              if (!item) return null;
              return (
                <button
                  key={slug}
                  type="button"
                  onClick={() => removeTech(slug)}
                  className="pill-tech technology__pill inline-flex items-center gap-2 h-[48px] md:h-[54px] px-4 md:px-5 rounded-xl bg-white dark:bg-[#1a1813] text-[var(--clr-text,#12110b)] text-sm md:text-base font-medium shadow-sm transition-transform duration-200 hover:scale-[1.03] cursor-pointer"
                  data-removable=""
                  data-technology-pill=""
                  data-slug={slug}
                  aria-label={`Remove ${item.label}`}
                >
                  <span className="pill-tech__label">{item.label}</span>
                  <span className="pill-tech__remove w-3.5 h-3.5 flex items-center justify-center rotate-45 text-[var(--clr-text,#12110b)]" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 15 15" fill="none">
                      <path d="M7.49609 0V15" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M15 7.495L0 7.49499" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                </button>
              );
            })}
          </span>

          {/* Add '+' Button in Pill Bar */}
          <button
            type="button"
            onClick={handleAddClick}
            className="pill-tech technology__add w-[48px] md:w-[54px] h-[48px] md:h-[54px] rounded-xl bg-white dark:bg-[#1a1813] text-[var(--clr-text,#12110b)] inline-flex items-center justify-center shadow-sm transition-transform duration-200 hover:scale-[1.06] cursor-pointer"
            aria-label="Add a service"
            data-technology-add=""
          >
            <span className="technology__add-icon w-4 h-4 flex items-center justify-center" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 15 15" fill="none">
                <path d="M7.49609 0V15" stroke="currentColor" strokeWidth="1.5" />
                <path d="M15 7.495L0 7.49499" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNextClick}
            disabled={!hasSelection}
            className={`btn technology__next ml-auto inline-flex items-center justify-between gap-4 h-[48px] md:h-[54px] px-6 rounded-xl font-medium text-sm md:text-base transition-all duration-300 ${
              hasSelection
                ? 'bg-white dark:bg-[#1a1813] text-[var(--clr-text,#12110b)] hover:bg-[#ff4f31] dark:hover:bg-[#ff4f31] hover:text-white dark:hover:text-white shadow-sm cursor-pointer opacity-100 pointer-events-auto'
                : 'bg-white dark:bg-[#1a1813] text-[var(--clr-text,#12110b)] opacity-40 pointer-events-none cursor-not-allowed'
            }`}
            data-style="primary"
            data-size="default"
            data-icon="arrow-right"
            aria-label="Next step: Contact Mahadi Hasan"
          >
            <span className="btn__text">Next</span>
            <span className="btn__icon w-4 h-4 flex items-center justify-center" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </form>

        {/* Technology 4-Column Grid matching Weichie's exact grid layout */}
        <ul
          ref={gridRef}
          className="technology__grid w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-0 list-none p-0 m-0"
          data-technology-list="full"
        >
          {TECHNOLOGIES.map(tech => {
            const isSelected = selectedSlugs.includes(tech.slug);
            return (
              <li key={tech.slug} className="technology__item m-0">
                <button
                  type="button"
                  onClick={() => toggleTech(tech.slug)}
                  className={`technology__row w-full grid grid-cols-[auto_1fr_auto] items-center gap-3.5 py-7 md:py-8 border-b border-black/15 dark:border-white/10 text-left bg-transparent cursor-pointer transition-opacity duration-200 hover:opacity-65 ${
                    isSelected ? 'opacity-50' : 'opacity-100'
                  }`}
                  data-technology-row=""
                  data-technology-slug={tech.slug}
                  data-technology-label={tech.label}
                  data-selected={isSelected ? '' : undefined}
                  aria-pressed={isSelected}
                >
                  {/* Left Orange Corner Arrow (↳) */}
                  <span className="technology__row-icon w-3.5 h-5 flex items-center justify-center text-[#ff4f31]" aria-hidden="true">
                    <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M-3.90187e-05 15.7711V5.82933e-05H1.49096V14.2801H6.53096C5.87996 13.5451 5.18696 12.4111 4.51496 10.9411H5.71196C7.18196 12.6421 8.73596 13.9231 10.332 14.7211V15.3301C8.73596 16.1281 7.18196 17.3881 5.71196 19.1101H4.51496C5.18696 17.6401 5.87996 16.5061 6.53096 15.7711H-3.90187e-05Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>

                  {/* Middle Tech Label */}
                  <span className="technology__row-label text-base md:text-[1.0625rem] font-medium text-[var(--clr-text,#12110b)] tracking-tight">
                    {tech.label}
                  </span>

                  {/* Right Plus / Cross Icon (+ / ×) */}
                  <span
                    className={`technology__row-add w-3.5 h-3.5 flex items-center justify-center text-[var(--clr-text,#12110b)] transition-transform duration-200 ${
                      isSelected ? 'rotate-45' : 'rotate-0'
                    }`}
                    aria-hidden="true"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 15 15" fill="none">
                      <path d="M7.49609 0V15" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M15 7.495L0 7.49499" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

      </div>
    </section>
  );
}

export default TechnologyPicker;
