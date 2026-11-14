import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextReveal } from './TextReveal';

gsap.registerPlugin(ScrollTrigger);

// Exact morph geometry constants extracted from Weichie REA bundle
const GO = 502;
const RO = 707;
const YO: [number, number][] = [
  [0, 49.77],
  [0, 32.41],
  [12.65, 17.59],
  [29.8, 15.21],
  [176.5, -5.08],
  [325.4, -5.08],
  [472.2, 15.21],
  [489.4, 17.59],
  [502, 32.41],
  [502, 49.77]
];
const BO: [number, number][] = [
  [502, 657.23],
  [502, 674.59],
  [489.4, 689.41],
  [472.2, 691.79],
  [325.4, 712.08],
  [176.5, 712.08],
  [29.8, 691.79],
  [12.65, 689.41],
  [0, 674.59],
  [0, 657.23]
];

function computeClipPath(topFactor: number, bottomFactor: number = topFactor): string {
  const norm = ([x, y]: [number, number], offset: number, factor: number) => {
    const val = offset + (y - offset) * factor;
    return `${(x / GO).toFixed(4)} ${(val / RO).toFixed(4)}`;
  };
  const r = YO.map(t => norm(t, 0, topFactor));
  const i = BO.map(e => norm(e, RO, bottomFactor));
  return `M${r[0]} C${r[1]} ${r[2]} ${r[3]} C${r[4]} ${r[5]} ${r[6]} C${r[7]} ${r[8]} ${r[9]} L${i[0]} C${i[1]} ${i[2]} ${i[3]} C${i[4]} ${i[5]} ${i[6]} C${i[7]} ${i[8]} ${i[9]} Z`;
}

export function MeetTheTeam() {
  const sectionRef = useRef<HTMLElement>(null);
  const clipPathRef = useRef<SVGPathElement>(null);
  const centerpieceRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const calloutIconRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    // Default clip path
    if (clipPathRef.current) {
      clipPathRef.current.setAttribute('d', computeClipPath(prefersReducedMotion ? 1 : 0.25, 1));
    }

    if (!prefersReducedMotion) {
      // 1. Clip path morph on scroll (top factor 0.25 -> 1, bottom factor 1 -> 0.25)
      if (clipPathRef.current && centerpieceRef.current) {
        const morphState = { top: 0.25, bottom: 1 };
        gsap.fromTo(
          morphState,
          { top: 0.25, bottom: 1 },
          {
            top: 1,
            bottom: 0.25,
            ease: 'none',
            scrollTrigger: {
              trigger: centerpieceRef.current,
              start: 'top 85%',
              end: 'top 35%',
              scrub: true,
              onUpdate: () => {
                if (clipPathRef.current) {
                  clipPathRef.current.setAttribute('d', computeClipPath(morphState.top, morphState.bottom));
                }
              }
            }
          }
        );
      }

      // 2. Centerpiece parallax translation
      if (centerpieceRef.current) {
        gsap.to(centerpieceRef.current, {
          yPercent: -18,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      }

      // 3. Inner image subtle zoom & parallax
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { yPercent: -10, scale: 1.15 },
          {
            yPercent: 10,
            scale: 1.05,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          }
        );
      }

      // 4. Pop animation on callout heart icon
      if (calloutIconRef.current) {
        gsap.from(calloutIconRef.current, {
          scale: 0,
          rotation: -25,
          duration: 0.7,
          ease: 'back.out(2.2)',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%'
          }
        });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => {
        if (t.vars.trigger === section || t.vars.trigger === centerpieceRef.current) {
          t.kill();
        }
      });
    };
  }, []);

  return (
    <div className="block-wrapper block-meet-the-team w-full bg-[var(--clr-bg,#fdf9f9)] text-[var(--clr-text,#12110b)] transition-colors duration-300 overflow-hidden relative">
      <section
        ref={sectionRef}
        className="meet-the-team relative overflow-visible"
        data-reveal=""
        style={{ paddingBottom: 'clamp(14rem, 20vw, 24rem)' }}
      >
        {/* SVG clip-path definition for the iconic squircle arch centerpiece */}
        <svg
          className="meet-the-team__clip-defs"
          width="0"
          height="0"
          aria-hidden="true"
          focusable="false"
          style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}
        >
          <defs>
            <clipPath id="meet-the-team-clip" clipPathUnits="objectBoundingBox">
              <path
                ref={clipPathRef}
                className="meet-the-team__clip-path"
                d="M0.0000 0.0176 C0.0000 0.0115 0.0252 0.0062 0.0594 0.0054 C0.3516 -0.0018 0.6482 -0.0018 0.9406 0.0054 C0.9749 0.0062 1.0000 0.0115 1.0000 0.0176 L1.0000 0.9296 C1.0000 0.9542 0.9749 0.9751 0.9406 0.9785 C0.6482 1.0072 0.3516 1.0072 0.0594 0.9785 C0.0252 0.9751 0.0000 0.9542 0.0000 0.9296 Z"
              />
            </clipPath>
          </defs>
        </svg>

        {/* Exact Weichie CSS Grid Container */}
        <div className="meet-the-team__inner" data-container="xl">
          
          {/* 1. Left Callout (grid-area: callout) */}
          <span className="callout meet-the-team__callout" data-tone="primary">
            <span
              ref={calloutIconRef}
              className="callout__icon text-[#ff4f31]"
              data-icon-pop=""
              aria-hidden="true"
            >
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M50.6505 13.2649V12.7815C50.6505 11.9904 50.0138 11.3488 49.2288 11.3488H48.749C47.964 11.3488 47.3272 10.7072 47.3272 9.9161V9.43268C47.3272 8.64163 46.6905 8 45.9055 8H34.9907C34.2056 8 33.5689 8.64163 33.5689 9.43268V9.9161C33.5689 10.7072 32.9321 11.3488 32.1471 11.3488H28.8267C28.0417 11.3488 27.405 10.7072 27.405 9.9161V9.43268C27.405 8.64163 26.7682 8 25.9832 8H15.0684C14.2833 8 13.6466 8.64163 13.6466 9.43268V9.9161C13.6466 10.7072 13.0098 11.3488 12.2248 11.3488H11.7451C10.96 11.3488 10.3233 11.9904 10.3233 12.7815V13.2649C10.3233 14.0559 9.68654 14.6976 8.90151 14.6976H8.42176C7.63673 14.6976 7 15.3392 7 16.1302V30.4746C7 31.2657 7.63673 31.9073 8.42176 31.9073H8.90151C9.68654 31.9073 10.3233 32.5489 10.3233 33.34V33.8234C10.3233 34.6145 10.96 35.2561 11.7451 35.2561H12.2248C13.0098 35.2561 13.6466 35.8977 13.6466 36.6888V37.1722C13.6466 37.9632 14.2833 38.6049 15.0684 38.6049H15.5481C16.3331 38.6049 16.9699 39.2465 16.9699 40.0376V40.521C16.9699 41.312 17.6066 41.9537 18.3916 41.9537H18.8714C19.6564 41.9537 20.2932 42.5953 20.2932 43.3863V43.8698C20.2932 44.6608 20.9299 45.3024 21.7149 45.3024H22.1947C22.9797 45.3024 23.6164 45.9441 23.6164 46.7351V47.2185C23.6164 48.0096 24.2532 48.6512 25.0382 48.6512H25.518C26.303 48.6512 26.9397 49.2928 26.9397 50.0839V50.5673C26.9397 51.3584 27.5765 52 28.3615 52H32.6385C33.4235 52 34.0602 51.3584 34.0602 50.5673V50.0839C34.0602 49.2928 34.697 48.6512 35.482 48.6512H35.9618C36.7468 48.6512 37.3836 48.0096 37.3836 47.2185V46.7351C37.3836 45.9441 38.0203 45.3024 38.8053 45.3024H39.2851C40.0701 45.3024 40.7068 44.6608 40.7068 43.8698V43.3863C40.7068 42.5953 41.3436 41.9537 42.1286 41.9537H42.6084C43.3934 41.9537 44.0301 41.312 44.0301 40.521V40.0376C44.0301 39.2465 44.6669 38.6049 45.4519 38.6049H45.9316C46.7167 38.6049 47.3534 37.9632 47.3534 37.1722V36.6888C47.3534 35.8977 47.9902 35.2561 48.7752 35.2561H49.2549C50.04 35.2561 50.6767 34.6145 50.6767 33.8234V33.34C50.6767 32.5489 51.3135 31.9073 52.0985 31.9073H52.5782C53.3633 31.9073 54 31.2657 54 30.4746V16.1302C54 15.3392 53.3633 14.6976 52.5782 14.6976H52.0985C51.3135 14.6976 50.6767 14.0559 50.6767 13.2649H50.6505Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            Ready to meet the video editor behind the visual craft?
          </span>

          {/* 2. Top Display Heading (grid-area: heading) with exact word reveal animation */}
          <TextReveal
            text="Meet the creator"
            as="h2"
            className="meet-the-team__heading"
          />

          {/* 3. Right CTA Button (grid-area: cta) */}
          <a
            href="#contact"
            className="btn meet-the-team__cta"
            data-style="primary"
            data-size="large"
            data-icon="arrow-right"
          >
            <span className="btn__text">About Mahadi</span>
            <span className="btn__icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 10h12m0 0-4.5-4.5M16 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>

          {/* 4. Centerpiece Squircle Portrait */}
          <div className="meet-the-team__centerpiece-wrapper" aria-hidden="true">
            <div
              ref={centerpieceRef}
              className="meet-the-team__centerpiece"
              style={{
                clipPath: 'url(#meet-the-team-clip)'
              }}
            >
              <picture>
                <img
                  ref={imageRef}
                  decoding="async"
                  className="meet-the-team__centerpiece-image"
                  data-parallax="-20"
                  data-parallax-mode="cover"
                  src="/textures/mahadi-hasan-hero.jpg"
                  alt="Mahadi Hasan - Video Editor & Visual Designer"
                  width="1004"
                  height="1414"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default MeetTheTeam;
