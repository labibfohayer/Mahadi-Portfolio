import React, { useMemo } from 'react';
import { TextReveal } from './TextReveal';
import { usePortfolio } from '../context/PortfolioContext';

const STORY_P1 = "I am Mahadi Hasan, a passionate video editor and graphic designer creating compelling visual content for ambitious creators, high-growth brands, and visionary businesses. My work harnesses a rich blend of rhythmic pacing, cinematic color science, and striking graphic design, ensuring that every project not only stops the scroll but drives meaningful audience engagement.";

const STORY_P2 = "With a deep background in retention editing, motion graphics, and brand identity systems, I help creators and companies stand out in saturated digital feeds. From raw camera footage to final broadcast-ready masters, I obsess over every cut, keyframe, sound effect, and pixel.";

const CORE_VALUES = [
  {
    num: '01',
    title: "I DO WHAT'S RIGHT",
    desc: 'Integrity, transparency, and authentic creative partnerships are the foundation of everything I craft. I stand by my work and deliver what I promise.'
  },
  {
    num: '02',
    title: 'I BACK MY CLIENTS',
    desc: "I don't just deliver video edits and design files and walk away; I act as a dedicated visual storytelling partner invested in your lasting digital growth and retention."
  },
  {
    num: '03',
    title: 'I MAKE IT GREAT',
    desc: 'Good enough is never enough. Every frame, cut, keyframe transition, and sound element is scrutinized until it achieves true cinematic polish.'
  },
  {
    num: '04',
    title: 'I VALUE GENUINE COLLABORATION',
    desc: 'Empathetic listening and open creative communication allow me to discover authentic stories and bring out the absolute best in your brand.'
  },
  {
    num: '05',
    title: 'I STAND FOR QUALITY',
    desc: 'Consistent, dependable execution with rigorous quality assurance. My deliverables are broadcast-ready and engineered for maximum audience retention.'
  },
  {
    num: '06',
    title: 'SEAMLESS SYNERGY & SPEED',
    desc: 'Working directly one-on-one with creators, founders, and marketing directors. Rapid turnarounds and clear communication produce effortless brilliance.'
  },
  {
    num: '07',
    title: 'I PUSH MY LIMITS',
    desc: 'Constantly exploring cutting-edge editing aesthetics, 3D motion techniques, and high-retention storytelling to keep my clients one step ahead.'
  }
];

const DISCIPLINES = [
  {
    title: 'Video Editing & Post-Production',
    tools: 'Adobe Premiere Pro • DaVinci Resolve',
    desc: 'High-retention pacing, narrative structure, multi-cam editing, documentary-style cuts, vertical short-form reels, and seamless transitions engineered to keep viewers hooked from the very first frame.',
    highlights: ['Retention-Driven Pacing', 'Multi-Cam Sync', 'YouTube & Reels Formats', 'Documentary Narrative Flow']
  },
  {
    title: 'Motion Graphics & Animation',
    tools: 'Adobe After Effects • Blender',
    desc: 'Dynamic kinetic typography, custom animated lower thirds, 3D spatial camera moves, logo reveals, and HUD elements that bring concepts to life with broadcast-level visual polish.',
    highlights: ['Kinetic Typography', '3D Camera Orbit Renders', 'Logo Stingers & Intros', 'Custom Lower Thirds']
  },
  {
    title: 'Graphic Design & Brand Identity',
    tools: 'Adobe Photoshop • Illustrator',
    desc: 'Swiss-inspired minimalist typography, comprehensive brand style guides, social media design systems, marketing collateral, and packaging that command immediate authority.',
    highlights: ['Visual Identity Systems', 'Swiss Grid Typography', 'Social Media Branding', 'Packaging & Print Art']
  },
  {
    title: 'High-CTR Thumbnails & Sound Design',
    tools: 'Figma • Adobe Audition',
    desc: 'Curiosity-driven YouTube packaging, high-contrast psychological composition, tactile foley sound effects, dialogue denoising, and audio mastering to -14 LUFS broadcast standards.',
    highlights: ['Psychological Click Triggers', 'Multi-Track Foley Audio', 'Dialogue Denoising & EQ', '-14 LUFS Loudness Standards']
  }
];

/* Weichie Arrow Icon */
const IntroArrowIcon: React.FC = () => (
  <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-[#ff4f31] mt-1">
    <path d="M-3.90187e-05 15.7711V5.82933e-05H1.49096V14.2801H6.53096C5.87996 13.5451 5.18696 12.4111 4.51496 10.9411H5.71196C7.18196 12.6421 8.73596 13.9231 10.332 14.7211V15.3301C8.73596 16.1281 7.18196 17.3881 5.71196 19.1101H4.51496C5.18696 17.6401 5.87996 16.5061 6.53096 15.7711H-3.90187e-05Z" fill="currentColor" />
  </svg>
);

export interface AboutPageProps {
  onNavigateContact?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateContact }) => {
  const { siteSettings } = usePortfolio();
  const p1Text = siteSettings.about.paragraph1 || STORY_P1;
  const p2Text = siteSettings.about.paragraph2 || STORY_P2;
  const p1Words = useMemo(() => p1Text.split(' '), [p1Text]);
  const p2Words = useMemo(() => p2Text.split(' '), [p2Text]);
  const totalStoryWords = p1Words.length + p2Words.length;
  const STORY_CYCLE_DURATION = 24.0; // seconds (fluid 120fps wave cycle)
  const STORY_SWEEP_DURATION = 22.0; // seconds (smooth continuous wave across words)

  return (
    <div className="w-full min-h-screen bg-[var(--clr-bg,#fdf9f9)] text-[var(--clr-text,#12110b)] transition-colors duration-300 pt-28 sm:pt-36 pb-24 sm:pb-32">
      <div className="max-w-[98rem] mx-auto px-4 sm:px-8 md:px-12">
        {/* [1] Hero Section */}
        <header className="mb-20 sm:mb-28">
          <TextReveal
            lines={["About me"]}
            as="h1"
            className="text-[clamp(2.5rem,7vw+0.5rem,7.5rem)] md:text-[clamp(3.5rem,8.5vw,7.5rem)] font-normal leading-[1.0] tracking-[-0.02em] text-[var(--clr-text,#12110b)] mb-8"
            style={{ fontFamily: "'Season Mix', Georgia, serif" }}
          />

          {/* Mission intro paragraph with orange arrow */}
          <div className="flex items-start gap-4 max-w-3xl">
            <IntroArrowIcon />
            <p 
              className="text-[18px] sm:text-[20px] md:text-[22px] font-normal leading-[1.45] tracking-[-0.02em] text-[#555555] dark:text-[#a09e99] m-0"
              style={{ fontFamily: "'Fustat', system-ui, -apple-system, sans-serif" }}
            >
              An ambitious, result-oriented, and dedicated video editor &amp; graphic designer crafting high-retention visual stories and unforgettable brand identities for visionary creators and brands.
            </p>
          </div>
        </header>

        {/* [2] My Story Section */}
        <section className="mb-28 sm:mb-36 pt-12 border-t border-black/10 dark:border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-widest text-[#ff4f31] font-semibold block mb-2">
                {siteSettings.about.kicker || 'My Journey'}
              </span>
              <h2 
                className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1.1] tracking-[-0.02em] mb-6"
                style={{ fontFamily: "'Season Mix', Georgia, serif" }}
              >
                {siteSettings.about.title || 'My Story'}
              </h2>
              {siteSettings.about.photo && (
                <div className="w-full max-w-[280px] aspect-[4/5] rounded-[24px] overflow-hidden bg-black/40 border border-white/10 shadow-xl mb-6">
                  <img 
                    src={siteSettings.about.photo} 
                    alt={siteSettings.hero.name || 'Mahadi Hasan'} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6 text-[17px] sm:text-[19px] leading-[1.6] text-[#555555] dark:text-[#a09e99] font-sans">
              <p>
                {p1Words.map((word, idx) => {
                  const delay = (idx / totalStoryWords) * STORY_SWEEP_DURATION;
                  return (
                    <React.Fragment key={`p1-${idx}`}>
                      <span
                        className="story-light-flow-word"
                        style={{
                          animationDelay: `${delay.toFixed(3)}s`,
                          animationDuration: `${STORY_CYCLE_DURATION}s`
                        }}
                      >
                        {word}
                      </span>
                      {' '}
                    </React.Fragment>
                  );
                })}
              </p>
              <p>
                {p2Words.map((word, idx) => {
                  const globalIdx = p1Words.length + idx;
                  const delay = (globalIdx / totalStoryWords) * STORY_SWEEP_DURATION;
                  return (
                    <React.Fragment key={`p2-${idx}`}>
                      <span
                        className="story-light-flow-word"
                        style={{
                          animationDelay: `${delay.toFixed(3)}s`,
                          animationDuration: `${STORY_CYCLE_DURATION}s`
                        }}
                      >
                        {word}
                      </span>
                      {' '}
                    </React.Fragment>
                  );
                })}
              </p>
            </div>
          </div>
        </section>

        {/* [3] Core Values Grid */}
        <section className="mb-28 sm:mb-36">
          <div className="mb-14">
            <span className="text-xs uppercase tracking-widest text-[#ff4f31] font-semibold block mb-2">
              Principles I Live By
            </span>
            <h2 
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1.1] tracking-[-0.02em]"
              style={{ fontFamily: "'Season Mix', Georgia, serif" }}
            >
              My Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-[24px] bg-[var(--clr-beige,#f4efea)] dark:bg-[#1a1914] border border-black/5 dark:border-white/5 flex flex-col justify-between hover:border-[#ff4f31]/40 transition-colors group"
              >
                <div>
                  <div className="text-sm font-mono text-[#ff4f31] font-bold mb-6">
                    {val.num}
                  </div>
                  <h3 
                    className="text-[22px] sm:text-[24px] font-normal leading-[1.25] tracking-[-0.02em] text-[var(--clr-text,#12110b)] group-hover:text-[#ff4f31] transition-colors mb-4"
                    style={{ fontFamily: "'Season Mix', Georgia, serif" }}
                  >
                    {val.title}
                  </h3>
                  <p className="text-[15px] sm:text-[16px] leading-[1.55] text-[#666666] dark:text-[#a09e99] font-sans">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* [4] My Craft & Disciplines (Personal Toolstack & Capabilities) */}
        <section className="mb-28 sm:mb-36">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#ff4f31] font-semibold block mb-2">
                Creative Arsenal
              </span>
              <h2 
                className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1.1] tracking-[-0.02em]"
                style={{ fontFamily: "'Season Mix', Georgia, serif" }}
              >
                My Craft &amp; Disciplines
              </h2>
            </div>
            <p className="text-sm sm:text-base font-sans italic text-[#777777] max-w-xs">
              Specialized tools and production methods engineered for high retention and brand prestige.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DISCIPLINES.map((item, idx) => (
              <div 
                key={idx}
                className="p-8 sm:p-10 rounded-[28px] bg-[var(--clr-beige,#f4efea)] dark:bg-[#1a1914] border border-black/5 dark:border-white/5 flex flex-col justify-between hover:border-[#ff4f31]/40 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#ff4f31] px-3 py-1 rounded-full bg-[#ff4f31]/10">
                      {item.tools}
                    </span>
                    <span className="text-sm font-mono text-[var(--clr-text,#12110b)]/40 font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 
                    className="text-[24px] sm:text-[28px] font-normal leading-[1.2] tracking-[-0.02em] text-[var(--clr-text,#12110b)] group-hover:text-[#ff4f31] transition-colors mb-4"
                    style={{ fontFamily: "'Season Mix', Georgia, serif" }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-[15px] sm:text-[16px] leading-[1.6] text-[#666666] dark:text-[#a09e99] font-sans mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-black/5 dark:border-white/5 flex flex-wrap gap-2">
                  {item.highlights.map((hl, hIdx) => (
                    <span
                      key={hIdx}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-[var(--clr-text,#12110b)]/80"
                    >
                      {hl}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* [5] Creative Philosophy Statement */}
        <section className="mb-28 sm:mb-36 p-10 sm:p-14 md:p-16 rounded-[28px] bg-[var(--clr-beige,#f4efea)] dark:bg-[#1a1914] border border-black/5 dark:border-white/5">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#ff4f31] font-semibold block mb-3">
              Creative Philosophy
            </span>
            <h2 
              className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-normal leading-[1.15] tracking-[-0.02em] mb-6"
              style={{ fontFamily: "'Season Mix', Georgia, serif" }}
            >
              Authenticity and craft are the foundation of every great story.
            </h2>
            <p className="text-[17px] sm:text-[19px] leading-[1.6] text-[#555555] dark:text-[#a09e99] font-sans">
              I love what I do—taking raw concepts and transforming them into magnetic visual experiences. But more importantly, I value genuine creative collaboration with my clients. Transparent workflows, clear communication, and an uncompromising dedication to visual polish are what turn good projects into extraordinary ones.
            </p>
          </div>
        </section>

        {/* [6] CTA Banner */}
        <section className="p-12 sm:p-16 lg:p-20 rounded-[32px] bg-[#12110b] text-white dark:bg-[#f4efea] dark:text-[#12110b] text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 
              className="text-[clamp(2.8rem,6vw,5.5rem)] font-normal leading-[1.05] tracking-[-0.02em] mb-6"
              style={{ fontFamily: "'Season Mix', Georgia, serif" }}
            >
              Let's make something extraordinary.
            </h2>
            <p className="text-[17px] sm:text-[19px] opacity-80 mb-8 font-sans">
              Ready to elevate your visual identity and video presence? I'd love to learn about your goals.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigateContact) {
                  onNavigateContact();
                } else {
                  window.location.hash = '#contact';
                }
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#ff4f31] text-white font-semibold text-[17px] hover:opacity-90 transition-opacity cursor-pointer"
            >
              <span>Get in touch</span>
              <span>&rarr;</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
