import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { TextReveal } from './TextReveal';

interface ServiceItem {
  id: string;
  title: string;
  tag: string;
  icon: React.ReactNode;
  previewImg: string;
  description: string;
  deliverables: string[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'video-editing',
    title: 'Video Editing & Post-Production',
    tag: 'Narrative & Commercial',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    previewImg: '/textures/graphic-hero/hero-7.webp',
    description: 'Rhythm-driven narrative editing engineered to stop the scroll and hook viewers within seconds. I sculpt raw footage into cohesive cinematic stories with meticulous pacing, dynamic sound, and seamless cuts.',
    deliverables: ['High-Retention Social Cuts', 'YouTube & Documentary Editing', 'Multi-Cam Synchronization', 'Pacing & Narrative Structuring']
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics & 2D/3D Animation',
    tag: 'Kinetic & Spatial',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    previewImg: '/textures/graphic-hero/hero-13.webp',
    description: 'Dynamic kinetic typography, animated title sequences, and 3D spatial camera moves that bring abstract concepts and product features to life with visual flair.',
    deliverables: ['Kinetic Typography & Lower Thirds', '3D Product Camera Moves', 'Logo Stingers & Intros', 'Lottie / Vector UI Animation']
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design & Visual Identity',
    tag: 'Print & Digital',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
    previewImg: '/textures/graphic-hero/hero-1.webp',
    description: 'Bold typographical posters, Swiss-inspired grid systems, and cohesive brand collateral designed to communicate authority and capture immediate visual attention.',
    deliverables: ['Brand Guidelines & Style Guides', 'Custom Typography & Posters', 'Packaging & Print Collateral', 'Social Media Asset Kits']
  },
  {
    id: 'commercials-ads',
    title: 'Commercials & Social Video Ads',
    tag: 'High-Conversion',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    previewImg: '/textures/graphic-hero/hero-8.webp',
    description: 'Commercials tailored for Instagram Reels, TikTok, and YouTube Ads. I blend psychological pattern interrupts, kinetic subtitles, and product highlights for maximum viewer retention.',
    deliverables: ['9:16 Vertical Video Ads', 'Commercial Product Promos', 'Direct Response Hooks', 'A/B Creative Hook Variations']
  },
  {
    id: 'color-sound',
    title: 'Color Grading & Sound Foley',
    tag: 'Finishing & Audio',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5v14M7 9v6M22 8v8M2 11v2" />
      </svg>
    ),
    previewImg: '/textures/graphic-hero/hero-10.webp',
    description: 'Hollywood-style 3D LUT grading, skin tone isolation, and rich sound foley design that brings tactile realism, emotional weight, and broadcast-compliant loudness.',
    deliverables: ['Custom Cinematic 3D LUTs', 'Atmospheric Foley & Sound FX', 'Dialogue Denoising & Leveling', '-14 LUFS Broadcast Mastering']
  },
  {
    id: 'packaging-identity',
    title: 'Packaging & Product Staging',
    tag: '3D Mockup & Print',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    previewImg: '/textures/graphic-hero/hero-4.webp',
    description: 'Tactile physical product packaging, premium labels, and realistic 3D isometric mockups that prepare your merchandise for global retail shelves and e-commerce hero shots.',
    deliverables: ['Retail Box & Bottle Packaging', 'Foil & Emboss Print Files', '3D Photorealistic Renders', 'E-Commerce Hero Assets']
  }
];

const CAPABILITIES = [
  {
    title: 'Strategy',
    items: ['Storyboarding & Script Pacing', 'Visual Direction & Concepting', 'Audience Retention Flow', 'Platform-Specific Formats', 'Brand Positioning Analysis']
  },
  {
    title: 'Design',
    items: ['Visual Identity Systems', 'Custom Typography & Posters', 'Color Palette Architecture', 'Thumbnails & Social Creatives', 'Vector Illustrations & Icons']
  },
  {
    title: 'Production',
    items: ['4K UHD Video Editing', 'Kinetic Typography & Titles', 'Atmospheric Sound Foley', 'Hollywood-Grade Color Grading', 'Motion Effects & Compositing']
  },
  {
    title: 'Future Proof',
    items: ['3D Spatial Product Motion', 'AI-Accelerated Workflows', 'Dynamic Word Subtitles', 'Multi-Platform Master Exports', 'Organized Project Archives']
  }
];

const FAQS = [
  {
    q: 'What is my typical turnaround time for video editing and motion projects?',
    a: 'Short-form social videos and YouTube edits typically take 2-3 business days. Comprehensive brand commercials, 3D motion pieces, or multi-asset identity packages take 1-2 weeks depending on footage length and complexity.'
  },
  {
    q: 'What formats and resolutions do I deliver?',
    a: 'I deliver in crisp 4K UHD and 1080p, rendered specifically for your distribution channels: vertical 9:16 for Reels/TikTok/Shorts, widescreen 16:9 for YouTube/Web, and 1:1 or 4:5 for Instagram feeds.'
  },
  {
    q: 'Do I handle sound design, music licensing, and color grading?',
    a: 'Yes, full audio mastering (-14 LUFS broadcast standard), licensed soundtrack integration, tactile foley sound effects, and Hollywood-grade color grading are included in every video production tier.'
  },
  {
    q: 'How do we collaborate on revisions?',
    a: 'I collaborate via interactive review links where you can leave timestamped comments directly on exact video frames. I include dedicated revision rounds with every project to ensure 100% satisfaction.'
  }
];

/* Weichie Arrow Icon */
const IntroArrowIcon: React.FC = () => (
  <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-[#ff4f31] mt-1">
    <path d="M-3.90187e-05 15.7711V5.82933e-05H1.49096V14.2801H6.53096C5.87996 13.5451 5.18696 12.4111 4.51496 10.9411H5.71196C7.18196 12.6421 8.73596 13.9231 10.332 14.7211V15.3301C8.73596 16.1281 7.18196 17.3881 5.71196 19.1101H4.51496C5.18696 17.6401 5.87996 16.5061 6.53096 15.7711H-3.90187e-05Z" fill="currentColor" />
  </svg>
);

export interface ServicesPageProps {
  onNavigateContact?: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigateContact }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const previewImgRef = useRef<HTMLImageElement>(null);

  const activeService = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  const handleServiceHover = (serviceId: string) => {
    if (serviceId === activeServiceId) return;
    setActiveServiceId(serviceId);

    if (previewImgRef.current) {
      gsap.fromTo(
        previewImgRef.current,
        { opacity: 0.6, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' }
      );
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-[var(--clr-bg,#fdf9f9)] text-[var(--clr-text,#12110b)] transition-colors duration-300 pt-28 sm:pt-36 pb-24 sm:pb-32">
      <div className="max-w-[98rem] mx-auto px-4 sm:px-8 md:px-12">
        {/* [1] Hero Section */}
        <header className="mb-20 sm:mb-28">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
            <div className="max-w-3xl">
              <TextReveal
                lines={["My services"]}
                as="h1"
                className="text-[clamp(3.5rem,8.5vw,7.5rem)] font-normal leading-[1.0] tracking-[-0.02em] text-[var(--clr-text,#12110b)] mb-8"
                style={{ fontFamily: "'Season Mix', Georgia, serif" }}
              />

              {/* Mission intro paragraph with orange arrow */}
              <div className="flex items-start gap-4">
                <IntroArrowIcon />
                <p 
                  className="text-[18px] sm:text-[20px] md:text-[22px] font-normal leading-[1.45] tracking-[-0.02em] text-[#555555] dark:text-[#a09e99] m-0"
                  style={{ fontFamily: "'Fustat', system-ui, -apple-system, sans-serif" }}
                >
                  I craft innovative, high-impact video and motion solutions that help you communicate powerfully with your audience through dynamic visuals and compelling creative direction.
                </p>
              </div>
            </div>

            {/* Metric Counter Card matching Weichie original */}
            <div className="lg:w-72 shrink-0 p-8 rounded-2xl bg-[var(--clr-beige,#f4efea)] dark:bg-[#1a1914] border border-black/5 dark:border-white/5 flex flex-col items-start justify-center">
              <span className="text-[13px] uppercase font-sans font-semibold tracking-wider text-[#888888] mb-2">
                My Projects
              </span>
              <div 
                className="text-[clamp(3.5rem,5.5vw,5rem)] font-normal leading-none text-[var(--clr-text,#12110b)] my-1"
                style={{ fontFamily: "'Season Mix', Georgia, serif" }}
              >
                128+
              </div>
              <p className="text-sm italic text-[#666666] dark:text-[#999994] mt-2 font-sans">
                Crafted for ambitious creators
              </p>
            </div>
          </div>
        </header>

        {/* [2] Interactive Service List & Live Preview */}
        <section className="mb-28 sm:mb-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Services Table on Left */}
            <div className="lg:col-span-7 flex flex-col divide-y divide-black/10 dark:divide-white/10 border-y border-black/10 dark:border-white/10">
              {SERVICES_DATA.map((service) => {
                const isActive = service.id === activeServiceId;
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => handleServiceHover(service.id)}
                    onClick={() => handleServiceHover(service.id)}
                    className={`py-8 sm:py-10 px-4 sm:px-6 transition-colors duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${
                      isActive 
                        ? 'bg-[var(--clr-beige,#f4efea)] dark:bg-white/5 rounded-2xl border-none my-1' 
                        : 'hover:bg-black/[0.02] dark:hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex items-center gap-5 min-w-0">
                      <span className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isActive 
                          ? 'bg-[#ff4f31] text-white' 
                          : 'bg-black/5 dark:bg-white/10 text-[var(--clr-text,#12110b)]'
                      }`}>
                        {service.icon}
                      </span>
                      <div>
                        <h2 
                          className={`text-[22px] sm:text-[26px] font-normal tracking-[-0.02em] transition-colors ${
                            isActive ? 'text-[#ff4f31]' : 'text-[var(--clr-text,#12110b)]'
                          }`}
                          style={{ fontFamily: "'Season Mix', Georgia, serif" }}
                        >
                          {service.title}
                        </h2>
                        <span className="text-xs uppercase tracking-wider text-[#888888] font-sans">
                          {service.tag}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                      <span className={`text-xs font-mono font-medium tracking-wider transition-colors ${
                        isActive ? 'text-[#ff4f31]' : 'text-[#888888]'
                      }`}>
                        + [ EXPLORE ]
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Interactive Preview Panel on Right */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="p-8 rounded-[24px] bg-[var(--clr-beige,#f4efea)] dark:bg-[#1a1914] border border-black/10 dark:border-white/10 shadow-lg">
                <div className="aspect-[16/10] rounded-[18px] overflow-hidden bg-black/5 mb-6 shadow-sm">
                  <img
                    ref={previewImgRef}
                    src={activeService.previewImg}
                    alt={activeService.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                  />
                </div>

                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#ff4f31] text-white mb-3">
                  {activeService.tag}
                </span>

                <h3 
                  className="text-[26px] font-normal leading-[1.25] tracking-[-0.02em] text-[var(--clr-text,#12110b)] mb-3"
                  style={{ fontFamily: "'Season Mix', Georgia, serif" }}
                >
                  {activeService.title}
                </h3>

                <p className="text-[15px] leading-[1.5] text-[#555555] dark:text-[#a09e99] font-sans mb-6">
                  {activeService.description}
                </p>

                <div className="border-t border-black/10 dark:border-white/10 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#888888] block mb-2.5 font-sans">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1.5">
                    {activeService.deliverables.map((d, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-[var(--clr-text,#12110b)] font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff4f31]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* [3] Capabilities Matrix (4 Columns) */}
        <section className="mb-28 sm:mb-36">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest text-[#ff4f31] font-semibold block mb-2">
              My Capabilities
            </span>
            <h2 
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[1.1] tracking-[-0.02em]"
              style={{ fontFamily: "'Season Mix', Georgia, serif" }}
            >
              Full-Spectrum Creative &amp; Production
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CAPABILITIES.map((cap, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-[var(--clr-beige,#f4efea)] dark:bg-[#1a1914] border border-black/5 dark:border-white/5 flex flex-col justify-between"
              >
                <div>
                  <div className="text-sm font-mono text-[#ff4f31] mb-4">0{idx + 1}</div>
                  <h3 
                    className="text-[24px] font-normal leading-tight tracking-tight mb-6"
                    style={{ fontFamily: "'Season Mix', Georgia, serif" }}
                  >
                    {cap.title}
                  </h3>
                  <ul className="space-y-3 font-sans text-[15px] text-[#555555] dark:text-[#a09e99]">
                    {cap.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#ff4f31] font-bold">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* [4] Accordion Section: That's not all. */}
        <section className="mb-28 sm:mb-36 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal leading-[1.1] tracking-[-0.02em] mb-4"
              style={{ fontFamily: "'Season Mix', Georgia, serif" }}
            >
              That's not all.
            </h2>
            <p className="text-lg text-[#666666] dark:text-[#a09e99] font-sans">
              Frequently asked questions about working together and creative deliverables.
            </p>
          </div>

          <div className="divide-y divide-black/10 dark:divide-white/10 border-y border-black/10 dark:border-white/10">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="py-6">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between gap-4 text-left font-sans font-medium text-[19px] sm:text-[21px] text-[var(--clr-text,#12110b)] hover:text-[#ff4f31] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="w-8 h-8 rounded-full bg-[var(--clr-beige,#f4efea)] dark:bg-white/10 flex items-center justify-center shrink-0 font-mono text-sm">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-4 pr-12 text-[16px] leading-[1.6] text-[#555555] dark:text-[#a09e99] font-sans animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* [5] Call to Action Banner */}
        <section className="p-12 sm:p-16 lg:p-20 rounded-[32px] bg-[#12110b] text-white dark:bg-[#f4efea] dark:text-[#12110b] text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 
              className="text-[clamp(2.8rem,6vw,5.5rem)] font-normal leading-[1.05] tracking-[-0.02em] mb-6"
              style={{ fontFamily: "'Season Mix', Georgia, serif" }}
            >
              Let's work together!
            </h2>
            <p className="text-[17px] sm:text-[19px] opacity-80 mb-8 font-sans">
              Have a video editing, motion graphics, or visual design project in mind? Let's turn your vision into high-impact reality.
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

export default ServicesPage;
