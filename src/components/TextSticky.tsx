import React, { useEffect, useRef, useState } from 'react';
import { TextReveal } from './TextReveal';

export function TextSticky() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      className="block-wrapper block-text-sticky w-full bg-[var(--clr-bg,#fdf9f9)] text-[var(--clr-text,#12110b)] transition-colors duration-300"
      data-background="off-white"
    >
      <section 
        className="text-sticky w-full mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start"
        data-container="xl"
        style={{
          maxWidth: 'calc(98rem + clamp(1.25rem, 4.6875vw + .3125rem, 5rem) * 2)',
          paddingLeft: 'clamp(1.25rem, 4.6875vw + .3125rem, 5rem)',
          paddingRight: 'clamp(1.25rem, 4.6875vw + .3125rem, 5rem)',
          paddingTop: 'clamp(5rem, 3.125vw + 4.375rem, 7.5rem)',
          paddingBottom: 'clamp(5rem, 3.125vw + 4.375rem, 7.5rem)',
          columnGap: 'clamp(2.5rem, 6.25vw + 1.25rem, 7.5rem)',
          rowGap: 'clamp(2rem, 1.25vw + 1.75rem, 3rem)'
        }}
      >
        {/* Left Sticky Column */}
        <div 
          className="text-sticky__head flex flex-col lg:sticky"
          style={{
            top: 'clamp(5rem, 3.125vw + 4.375rem, 7.5rem)',
            gap: 'clamp(0.25rem, 0.3125vw + 0.1875rem, 0.5rem)'
          }}
        >
          <p 
            className="text-sticky__eyebrow uppercase font-normal text-[#666666] dark:text-[#a09e99] tracking-[-0.02em] leading-[1.35] m-0"
            style={{
              fontFamily: "'Fustat', system-ui, -apple-system, sans-serif",
              fontSize: 'clamp(0.875rem, 0.15625vw + 0.84375rem, 1rem)' // 15.75px at 1440px
            }}
          >
            CREATIVE VIDEO EDITOR &amp; MOTION GRAPHIC DESIGNER.
          </p>

          <TextReveal
            lines={["I craft visual stories", "that hold attention."]}
            className="text-sticky__title font-normal tracking-[-0.02em] text-[var(--clr-text,#12110b)] m-0"
            style={{
              fontFamily: "'Season Mix', Georgia, serif",
              fontSize: 'clamp(1.75rem, 2.2vw + 0.8rem, 3rem)', // 45px at 1440px
              lineHeight: 1.05,
              textWrap: 'pretty',
              color: 'var(--clr-text, #12110b)'
            }}
          />
        </div>

        {/* Right Content Column */}
        <div className="text-sticky__content content--formatted w-full">
          {/* Pillar 1: Cut for emotion, paced for retention */}
          <div className="pillar-block">
            <h3 
              className="wp-block-heading font-normal tracking-[-0.02em] text-[var(--clr-text,#12110b)] m-0"
              style={{
                fontFamily: "'Season Mix', Georgia, serif",
                fontSize: 'clamp(1.25rem, 0.55vw + 1rem, 1.55rem)', // ~23.25px at 1440px
                lineHeight: 1.1
              }}
            >
              Cut for emotion, paced for retention
            </h3>

            <p 
              className="wp-block-paragraph font-normal tracking-[-0.02em] text-[var(--clr-text,#12110b)] m-0"
              style={{
                fontFamily: "'Fustat', system-ui, -apple-system, sans-serif",
                fontSize: 'clamp(1rem, 0.39vw + 0.92rem, 1.3125rem)', // ~20.375px at 1440px
                lineHeight: 1.35,
                marginTop: 'clamp(1.5rem, 1.875vw + 1rem, 2rem)'
              }}
            >
              A great video is not just stitched footage—it is an emotional journey engineered to hold attention. From fast-paced social edits to cinematic brand films, I edit with purpose, rhythm, and narrative clarity.
            </p>

            <ul 
              className="wp-block-list basic-list list-disc marker:text-[#ff4f31] m-0"
              style={{
                paddingLeft: '1.25rem',
                marginTop: 'clamp(1.25rem, 1.5vw + 0.8rem, 1.75rem)'
              }}
            >
              <li 
                className="font-normal tracking-[-0.02em] text-[var(--clr-text,#12110b)]"
                style={{
                  fontFamily: "'Fustat', system-ui, -apple-system, sans-serif",
                  fontSize: 'clamp(1rem, 0.39vw + 0.92rem, 1.3125rem)',
                  lineHeight: 1.35,
                  marginTop: '0.625rem'
                }}
              >
                <strong className="font-semibold text-[var(--clr-text,#12110b)]">Cinematic editing</strong>: Seamless transitions, pacing, and storytelling that hold every second
              </li>
              <li 
                className="font-normal tracking-[-0.02em] text-[var(--clr-text,#12110b)]"
                style={{
                  fontFamily: "'Fustat', system-ui, -apple-system, sans-serif",
                  fontSize: 'clamp(1rem, 0.39vw + 0.92rem, 1.3125rem)',
                  lineHeight: 1.35,
                  marginTop: '0.625rem'
                }}
              >
                <strong className="font-semibold text-[var(--clr-text,#12110b)]">Sound design &amp; mixing</strong>: Dynamic Foley, immersive SFX, and beat-synced musical scoring
              </li>
              <li 
                className="font-normal tracking-[-0.02em] text-[var(--clr-text,#12110b)]"
                style={{
                  fontFamily: "'Fustat', system-ui, -apple-system, sans-serif",
                  fontSize: 'clamp(1rem, 0.39vw + 0.92rem, 1.3125rem)',
                  lineHeight: 1.35,
                  marginTop: '0.625rem'
                }}
              >
                <strong className="font-semibold text-[var(--clr-text,#12110b)]">Color grading</strong>: Hollywood-grade palette styling, film emulation, and tone correction
              </li>
            </ul>
          </div>

          {/* Pillar 2: Visuals that demand attention */}
          <div 
            className="pillar-block"
            style={{
              marginTop: 'clamp(2.5rem, 3.125vw + 1.875rem, 4.5rem)'
            }}
          >
            <h3 
              className="wp-block-heading font-normal tracking-[-0.02em] text-[var(--clr-text,#12110b)] m-0"
              style={{
                fontFamily: "'Season Mix', Georgia, serif",
                fontSize: 'clamp(1.25rem, 0.55vw + 1rem, 1.55rem)',
                lineHeight: 1.1
              }}
            >
              Visuals that demand attention
            </h3>

            <p 
              className="wp-block-paragraph font-normal tracking-[-0.02em] text-[var(--clr-text,#12110b)] m-0"
              style={{
                fontFamily: "'Fustat', system-ui, -apple-system, sans-serif",
                fontSize: 'clamp(1rem, 0.39vw + 0.92rem, 1.3125rem)',
                lineHeight: 1.35,
                marginTop: 'clamp(1.5rem, 1.875vw + 1rem, 2rem)'
              }}
            >
              In a crowded feed, you have three seconds to make an impression. I design striking graphic assets, high-CTR thumbnails, and fluid motion graphics that stop the scroll and establish undeniable authority.
            </p>

            <ul 
              className="wp-block-list basic-list list-disc marker:text-[#ff4f31] m-0"
              style={{
                paddingLeft: '1.25rem',
                marginTop: 'clamp(1.25rem, 1.5vw + 0.8rem, 1.75rem)'
              }}
            >
              <li 
                className="font-normal tracking-[-0.02em] text-[var(--clr-text,#12110b)]"
                style={{
                  fontFamily: "'Fustat', system-ui, -apple-system, sans-serif",
                  fontSize: 'clamp(1rem, 0.39vw + 0.92rem, 1.3125rem)',
                  lineHeight: 1.35,
                  marginTop: '0.625rem'
                }}
              >
                <strong className="font-semibold text-[var(--clr-text,#12110b)]">High-CTR thumbnails</strong>: Psychology-driven composition, lighting, and bold focal points
              </li>
              <li 
                className="font-normal tracking-[-0.02em] text-[var(--clr-text,#12110b)]"
                style={{
                  fontFamily: "'Fustat', system-ui, -apple-system, sans-serif",
                  fontSize: 'clamp(1rem, 0.39vw + 0.92rem, 1.3125rem)',
                  lineHeight: 1.35,
                  marginTop: '0.625rem'
                }}
              >
                <strong className="font-semibold text-[var(--clr-text,#12110b)]">Motion graphics</strong>: Kinetic typography, animated lower thirds, and sleek title cards
              </li>
              <li 
                className="font-normal tracking-[-0.02em] text-[var(--clr-text,#12110b)]"
                style={{
                  fontFamily: "'Fustat', system-ui, -apple-system, sans-serif",
                  fontSize: 'clamp(1rem, 0.39vw + 0.92rem, 1.3125rem)',
                  lineHeight: 1.35,
                  marginTop: '0.625rem'
                }}
              >
                <strong className="font-semibold text-[var(--clr-text,#12110b)]">Brand visual kits</strong>: Consistent color systems, graphic templates, and visual assets
              </li>
            </ul>
          </div>

          {/* Pillar 3: Built for scale across every feed */}
          <div 
            className="pillar-block"
            style={{
              marginTop: 'clamp(2.5rem, 3.125vw + 1.875rem, 4.5rem)'
            }}
          >
            <h3 
              className="wp-block-heading font-normal tracking-[-0.02em] text-[var(--clr-text,#12110b)] m-0"
              style={{
                fontFamily: "'Season Mix', Georgia, serif",
                fontSize: 'clamp(1.25rem, 0.55vw + 1rem, 1.55rem)',
                lineHeight: 1.1
              }}
            >
              Built for scale across every feed
            </h3>

            <p 
              className="wp-block-paragraph font-normal tracking-[-0.02em] text-[var(--clr-text,#12110b)] m-0"
              style={{
                fontFamily: "'Fustat', system-ui, -apple-system, sans-serif",
                fontSize: 'clamp(1rem, 0.39vw + 0.92rem, 1.3125rem)',
                lineHeight: 1.35,
                marginTop: 'clamp(1.5rem, 1.875vw + 1rem, 2rem)'
              }}
            >
              Every platform speaks a different visual language. I tailor your creative assets across widescreen YouTube productions, vertical reels, and high-converting paid ads—delivering broadcast-ready quality on tight deadlines.
            </p>

            <ul 
              className="wp-block-list basic-list list-disc marker:text-[#ff4f31] m-0"
              style={{
                paddingLeft: '1.25rem',
                marginTop: 'clamp(1.25rem, 1.5vw + 0.8rem, 1.75rem)'
              }}
            >
              <li 
                className="font-normal tracking-[-0.02em] text-[var(--clr-text,#12110b)]"
                style={{
                  fontFamily: "'Fustat', system-ui, -apple-system, sans-serif",
                  fontSize: 'clamp(1rem, 0.39vw + 0.92rem, 1.3125rem)',
                  lineHeight: 1.35,
                  marginTop: '0.625rem'
                }}
              >
                <strong className="font-semibold text-[var(--clr-text,#12110b)]">Short-form viral content</strong>: Snappy pacing, dynamic captions, and hook architecture for Reels &amp; TikTok
              </li>
              <li 
                className="font-normal tracking-[-0.02em] text-[var(--clr-text,#12110b)]"
                style={{
                  fontFamily: "'Fustat', system-ui, -apple-system, sans-serif",
                  fontSize: 'clamp(1rem, 0.39vw + 0.92rem, 1.3125rem)',
                  lineHeight: 1.35,
                  marginTop: '0.625rem'
                }}
              >
                <strong className="font-semibold text-[var(--clr-text,#12110b)]">Long-form YouTube mastery</strong>: Documentaries, video essays, podcasts, and episodic series
              </li>
              <li 
                className="font-normal tracking-[-0.02em] text-[var(--clr-text,#12110b)]"
                style={{
                  fontFamily: "'Fustat', system-ui, -apple-system, sans-serif",
                  fontSize: 'clamp(1rem, 0.39vw + 0.92rem, 1.3125rem)',
                  lineHeight: 1.35,
                  marginTop: '0.625rem'
                }}
              >
                <strong className="font-semibold text-[var(--clr-text,#12110b)]">Broadcast-ready delivery</strong>: Accurate aspect ratios, lossless codecs, and platform-optimized rendering
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TextSticky;
