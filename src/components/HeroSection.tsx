import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { HeroThreeCanvas, SERVICES } from './HeroThreeCanvas';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  WebDevIcon, 
  EcommerceIcon, 
  AppDevIcon, 
  AiIcon, 
  BlockchainIcon 
} from './FooterSvgs';

// Authentic full-fidelity SVGs from Weichie
const LABEL_ICONS: Record<string, React.ReactNode> = {
  'video-editing': <WebDevIcon className="w-5 h-5 text-inherit" />,
  'motion-graphics': <EcommerceIcon className="w-5 h-5 text-inherit" />,
  'graphic-design': <AppDevIcon className="w-5 h-5 text-inherit" />,
  'color-sound': <AiIcon className="w-5 h-5 text-inherit" />,
  'brand-identity': <BlockchainIcon className="w-5 h-5 text-inherit" />
};

export const HeroSection: React.FC = () => {
  const { siteSettings } = usePortfolio();
  const [activeSlug, setActiveSlug] = useState('video-editing');
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasMountRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const labelsRef = useRef<HTMLUListElement>(null);

  // Exact Weichie Homepage Intro Entrance Timeline
  // 1. Text reveals into view
  // 2. Text fades out
  // 3. Round 3D wheel rises up from bottom to top
  // 4. Category labels fade in
  useEffect(() => {
    const canvasMount = canvasMountRef.current;
    const labels = labelsRef.current;
    const titleLines = titleRef.current?.querySelectorAll<HTMLElement>('.hero-homepage__title-line');

    if (!canvasMount) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const parkedY = () => canvasMount.offsetHeight || 640;

    const updateClip = () => {
      const rect = canvasMount.getBoundingClientRect();
      const diff = Math.max(0, rect.bottom - window.innerHeight);
      canvasMount.style.clipPath = diff > 0 ? `inset(0 0 ${diff}px 0)` : 'none';
    };

    gsap.set(canvasMount, { y: parkedY(), autoAlpha: 0 });
    updateClip();

    if (labels) gsap.set(labels, { opacity: 0 });
    if (titleLines) {
      titleLines.forEach((line) => {
        gsap.set(line, { 
          opacity: 0, 
          y: 45,
          filter: 'blur(10px)',
          scale: 0.98
        });
      });
    }

    if (prefersReduced) {
      gsap.set(canvasMount, { y: 0, autoAlpha: 1 });
      canvasMount.style.clipPath = '';
      if (titleLines) gsap.set(titleLines, { opacity: 0, y: 0, filter: 'blur(0px)', scale: 1 });
      if (labels) gsap.set(labels, { opacity: 1 });
      return;
    }

    const tl = gsap.timeline();

    if (titleLines && titleLines.length > 0) {
      // 1. SaaS Kinetic Title reveal with optical blur-to-focus dissipation
      tl.to(titleLines, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        scale: 1,
        duration: 1.3,
        stagger: 0.14,
        ease: 'power4.out',
        delay: 0.15
      });

      // 2. SaaS Dissipation with upward lift and soft blur into the 3D stage
      tl.to(titleLines, {
        opacity: 0,
        y: -28,
        filter: 'blur(8px)',
        scale: 1.02,
        duration: 0.45,
        stagger: { each: 0.07, from: 'end' },
        ease: 'power3.inOut'
      }, '+=1.1');
    }

    // 3. 3D cylindrical wheel rises up from bottom
    tl.to(canvasMount, {
      y: 0,
      autoAlpha: 1,
      duration: 1.25,
      ease: 'power3.out',
      onUpdate: updateClip,
      onComplete: () => {
        canvasMount.style.clipPath = '';
      }
    }, titleLines && titleLines.length > 0 ? '<0.15' : 0);

    // 4. Service category labels fade in
    if (labels) {
      tl.to(labels, {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out'
      });
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="block-wrapper block-hero-homepage relative z-[2] w-full min-h-[100dvh] bg-[var(--clr-bg,#fdf9f9)] transition-colors duration-300">
      <section className="hero-homepage relative min-h-[100dvh] flex flex-col justify-between pt-16 sm:pt-20 pb-8 sm:pb-12 overflow-hidden">
        {/* Intro Heading revealed at the center of the hero stage */}
        <h1 
          ref={titleRef}
          className="hero-homepage__title absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 text-center pointer-events-none flex flex-col items-center select-none w-full px-4"
          style={{
            fontFamily: "'Season Mix', Georgia, serif",
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            gap: 'clamp(0.5rem, 1.25vw, 1.5rem)',
            color: 'var(--clr-text, #12110b)'
          }}
        >
          <span className="hero-homepage__title-line block will-change-transform text-[clamp(1.4rem,6vw,2.5rem)] md:text-[clamp(2.5rem,6.25vw+1rem,7.25rem)] whitespace-normal sm:whitespace-nowrap">
            {siteSettings.hero.preTitle || 'The official portfolio'}
          </span>
          <span className="hero-homepage__title-line block will-change-transform text-[clamp(1.4rem,6vw,2.5rem)] md:text-[clamp(2.5rem,6.25vw+1rem,7.25rem)] whitespace-normal sm:whitespace-nowrap">
            of <span className="hero-mahadi-bevel-orange">{siteSettings.hero.name || 'Mahadi Hasan'}</span>,
          </span>
          <span className="hero-homepage__title-line block will-change-transform text-[clamp(1.4rem,6vw,2.5rem)] md:text-[clamp(2.5rem,6.25vw+1rem,7.25rem)] whitespace-normal sm:whitespace-nowrap">
            {siteSettings.hero.subtitle || 'crafting visual excellence'}
          </span>
        </h1>

        {/* 3D WebGL Cylindrical Hero Carousel Stage */}
        <div 
          ref={stageRef} 
          className="hero-homepage__stage w-full relative select-none flex-1 flex items-center justify-center my-auto"
          style={{
            height: 'min(clamp(26.25rem, 23.4375vw + 21.5625rem, 45rem), calc(100dvh - 9rem))'
          }}
        >
          <div 
            ref={canvasMountRef}
            className="hero-homepage__canvas absolute inset-0 z-[1] will-change-transform"
          >
            <HeroThreeCanvas
              activeSlug={activeSlug}
              onActiveChange={(slug) => setActiveSlug(slug)}
            />
          </div>
        </div>

        {/* Row of Service Labels Matching Weichie */}
        <div className="max-w-6xl mx-auto px-4 mt-6">
          <ul 
            ref={labelsRef}
            className="hero-homepage__labels flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 md:gap-x-12 gap-y-3 sm:gap-y-4 opacity-0 transition-opacity"
          >
            {SERVICES.map((s) => {
              const isActive = s.slug === activeSlug;
              return (
                <li key={s.slug} className="hero-homepage__label inline-flex">
                  <button
                    type="button"
                    onClick={() => setActiveSlug(s.slug)}
                    className={`hero-homepage__label-link inline-flex items-center gap-2 sm:gap-2.5 md:gap-3 text-[14px] sm:text-[17px] md:text-[19px] font-semibold tracking-[-0.01em] transition-colors ${
                      isActive
                        ? 'text-[#ff4f31]'
                        : 'text-[#666666] dark:text-[#999994] hover:text-[var(--clr-text,#111111)]'
                    }`}
                  >
                    <span className={`hero-homepage__label-icon inline-flex items-center justify-center transition-transform duration-300 ${
                      isActive ? 'scale-110' : ''
                    }`}>
                      {LABEL_ICONS[s.slug]}
                    </span>
                    <span className="hero-homepage__label-text whitespace-nowrap">{s.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
