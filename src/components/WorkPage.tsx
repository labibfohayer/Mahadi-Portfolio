import React, { useState, useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { TextReveal } from './TextReveal';
import { usePortfolio, ProjectItem } from '../context/PortfolioContext';

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { 
    id: 'video-editing', 
    label: 'Video Editing',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    )
  },
  { 
    id: 'motion-graphics', 
    label: 'Motion Graphics',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    )
  },
  { 
    id: 'graphic-design', 
    label: 'Graphic Design',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    )
  },
  { 
    id: 'commercials-3d', 
    label: 'Commercials & 3D',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  },
  { 
    id: 'brand-identity', 
    label: 'Brand Identity',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  }
];

/* Weichie Arrow Icon */
const IntroArrowIcon: React.FC = () => (
  <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-[#ff4f31] mt-1">
    <path d="M-3.90187e-05 15.7711V5.82933e-05H1.49096V14.2801H6.53096C5.87996 13.5451 5.18696 12.4111 4.51496 10.9411H5.71196C7.18196 12.6421 8.73596 13.9231 10.332 14.7211V15.3301C8.73596 16.1281 7.18196 17.3881 5.71196 19.1101H4.51496C5.18696 17.6401 5.87996 16.5061 6.53096 15.7711H-3.90187e-05Z" fill="currentColor" />
  </svg>
);

/* Grid View Icon */
const GridViewIcon: React.FC = () => (
  <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="6" height="5" fill="currentColor" />
    <rect y="7" width="6" height="5" fill="currentColor" />
    <rect x="8" width="6" height="5" fill="currentColor" />
    <rect x="8" y="7" width="6" height="5" fill="currentColor" />
    <rect x="16" width="6" height="5" fill="currentColor" />
    <rect x="16" y="7" width="6" height="5" fill="currentColor" />
  </svg>
);

/* List View Icon */
const ListViewIcon: React.FC = () => (
  <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="19" height="2" fill="currentColor" />
    <rect y="5" width="19" height="2" fill="currentColor" />
    <rect y="10" width="19" height="2" fill="currentColor" />
  </svg>
);

/* Pixel-art Pointer Hand Icon for .cursor-card */
const CursorHandIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 52" fill="none" aria-hidden="true" className="w-[18px] h-[24px] text-[#ff4f31]">
    <path d="M34.8721 21.1178V20.5286C34.8721 20.0163 34.4567 19.598 33.9418 19.598H33.3529C32.8407 19.598 32.4225 19.1824 32.4225 18.6673V18.0782C32.4225 17.5659 32.0071 17.1475 31.4922 17.1475H30.9032C30.3911 17.1475 29.9729 16.732 29.9729 16.2168V15.6277C29.9729 15.1154 29.5575 14.6971 29.0426 14.6971H28.4536C27.9415 14.6971 27.5233 14.2815 27.5233 13.7664V13.1773C27.5233 12.665 27.1079 12.2466 26.5929 12.2466H26.004C25.4919 12.2466 25.0737 11.8311 25.0737 11.3159V10.7268C25.0737 10.2145 24.6583 9.79614 24.1433 9.79614H23.5544C23.0423 9.79614 22.624 9.38061 22.624 8.86548V3.38112C22.624 2.86883 22.2087 2.45046 21.6937 2.45046H21.1048C20.5927 2.45046 20.1744 2.03493 20.1744 1.5198V0.930661C20.1744 0.418371 19.7591 0 19.2441 0H15.6223C15.1102 0 14.692 0.415525 14.692 0.930661V1.5198C14.692 2.03209 14.2766 2.45046 13.7616 2.45046H13.1727C12.6606 2.45046 12.2423 2.86598 12.2423 3.38112V23.5483C12.2423 24.0606 11.827 24.479 11.312 24.479C10.7999 24.479 10.3817 24.0634 10.3817 23.5483V22.9592C10.3817 22.4469 9.9663 22.0285 9.45134 22.0285H8.86239C8.35028 22.0285 7.93208 21.613 7.93208 21.0978V20.5087C7.93208 19.9964 7.51669 19.578 7.00173 19.578H3.37995C2.86784 19.578 2.44961 19.9936 2.44961 20.5087V21.0978C2.44961 21.6101 2.03422 22.0285 1.51926 22.0285H0.930312C0.418197 22.0285 0 22.444 0 22.9592V24.1374C0 24.6497 0.415352 25.0681 0.930312 25.0681H1.51926C2.03138 25.0681 2.44961 25.4836 2.44961 25.9988V26.5879C2.44961 27.1002 2.865 27.5186 3.37995 27.5186H3.96887C4.48099 27.5186 4.89922 27.9341 4.89922 28.4492V31.486C4.89922 31.9982 5.3146 32.4166 5.82956 32.4166H6.41848C6.93059 32.4166 7.34883 32.8321 7.34883 33.3473V36.384C7.34883 36.8963 7.76421 37.3147 8.27917 37.3147H8.86809C9.3802 37.3147 9.79843 37.7302 9.79843 38.2453V51.0697C9.79843 51.582 10.2138 52.0004 10.7288 52.0004H31.478C31.9901 52.0004 32.4083 51.5848 32.4083 51.0697V40.693C32.4083 40.1807 32.8237 39.7623 33.3386 39.7623H33.9276C34.4397 39.7623 34.8579 39.3468 34.8579 38.8316V33.3473C34.8579 32.835 35.2733 32.4166 35.7882 32.4166H36.3772C36.8893 32.4166 37.3075 32.0011 37.3075 31.486V22.9677C37.3075 22.4554 36.8921 22.037 36.3772 22.037H35.7882C35.2761 22.037 34.8579 21.6215 34.8579 21.1064L34.8721 21.1178ZM34.2832 25.0823V30.9054C34.2832 31.4177 33.8678 31.836 33.3529 31.836H32.7639C32.2518 31.836 31.8336 32.2515 31.8336 32.7667V38.251C31.8336 38.7633 31.4182 39.1817 30.9032 39.1817H30.3143C29.8022 39.1817 29.3839 39.5972 29.3839 40.1124V48.0415C29.3839 48.5538 28.9686 48.9721 28.4536 48.9721H13.7758C13.2637 48.9721 12.8455 48.5566 12.8455 48.0415V37.6647C12.8455 37.1525 12.4302 36.7341 11.9152 36.7341H11.3262C10.8141 36.7341 10.3959 36.3186 10.3959 35.8034V32.7667C10.3959 32.2544 9.98051 31.836 9.46555 31.836H8.87663C8.36452 31.836 7.94629 31.4205 7.94629 30.9054V27.8686C7.94629 27.3563 7.5309 26.938 7.01594 26.938H6.42702C5.91491 26.938 5.49668 26.5224 5.49668 26.0073V25.4182C5.49668 24.9059 5.08129 24.4875 4.56633 24.4875H3.97741C3.4653 24.4875 3.04707 24.072 3.04707 23.5568C3.04707 23.0445 3.46246 22.6262 3.97741 22.6262H6.42418C6.93629 22.6262 7.35452 23.0417 7.35452 23.5568V24.146C7.35452 24.6583 7.76991 25.0766 8.28487 25.0766H8.87378C9.3859 25.0766 9.80413 25.4922 9.80413 26.0073V26.5964C9.80413 27.1087 10.2195 27.5271 10.7345 27.5271H11.3234C11.8355 27.5271 12.2537 27.9426 12.2537 28.4577V29.0469C12.2537 29.5592 12.6691 29.9775 13.1841 29.9775H14.362C14.8741 29.9775 15.2923 29.562 15.2923 29.0469V3.98733C15.2923 3.47504 15.7077 3.05667 16.2226 3.05667H18.6694C19.1815 3.05667 19.5998 3.47219 19.5998 3.98733V24.1545C19.5998 24.6668 20.0151 25.0852 20.5301 25.0852H21.7079C22.22 25.0852 22.6383 24.6696 22.6383 24.1545V13.7778C22.6383 13.2655 23.0537 12.8471 23.5686 12.8471C24.0807 12.8471 24.499 13.2626 24.499 13.7778V24.1545C24.499 24.6668 24.9144 25.0852 25.4293 25.0852H26.6071C27.1193 25.0852 27.5375 24.6696 27.5375 24.1545V18.6702C27.5375 18.1579 27.9529 17.7395 28.4678 17.7395C28.98 17.7395 29.3982 18.155 29.3982 18.6702V24.1545C29.3982 24.6668 29.8136 25.0852 30.3285 25.0852H31.5064C32.0185 25.0852 32.4367 24.6696 32.4367 24.1545V23.5654C32.4367 23.0531 32.8521 22.6347 33.3671 22.6347C33.8792 22.6347 34.2974 23.0502 34.2974 23.5654V25.0823H34.2832Z" fill="currentColor" />
  </svg>
);

const VolumeMuteIcon: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
    <line x1="23" y1="9" x2="17" y2="15" />
    <line x1="17" y1="9" x2="23" y2="15" />
  </svg>
);

const VolumeUpIcon: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>
);

/* Card Media Component handling both Video previews and Graphic images */
interface ProjectMediaCardProps {
  project: ProjectItem;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

const ProjectMediaCard: React.FC<ProjectMediaCardProps> = ({ project, onHoverStart, onHoverEnd }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [sweepActive, setSweepActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sweepTimerRef = useRef<number | null>(null);

  // On mobile devices, automatically play preview videos when scrolled into view
  useEffect(() => {
    if (project.type !== 'video' || !videoRef.current) return;
    const video = videoRef.current;

    const isMobileDevice = window.innerWidth < 768 || window.matchMedia('(max-width: 767px)').matches;
    if (!isMobileDevice) return;

    video.muted = true;
    video.playsInline = true;
    video.loop = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.then(() => setIsPlaying(true)).catch(() => {});
            }
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(video);

    // Initial attempt to start playing immediately on mount if in viewport
    video.play().then(() => setIsPlaying(true)).catch(() => {});

    return () => {
      observer.disconnect();
    };
  }, [project.type, project.media]);

  const handleMouseEnter = () => {
    setSweepActive(true);
    onHoverStart();

    if (project.type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => setIsPlaying(true)).catch(() => {});
      }
    }

    if (sweepTimerRef.current) clearTimeout(sweepTimerRef.current);
    sweepTimerRef.current = window.setTimeout(() => setSweepActive(false), 850);
  };

  const handleMouseLeave = () => {
    setSweepActive(false);
    onHoverEnd();

    if (project.type === 'video' && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    if (sweepTimerRef.current) clearTimeout(sweepTimerRef.current);
  };

  const handleSoundToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const nextMuted = !isMuted;
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
    setIsMuted(nextMuted);
  };

  return (
    <div 
      className="relative w-full aspect-[4/5] rounded-[18px] overflow-hidden bg-[#181714] cursor-none select-none group/media shadow-md mb-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {project.type === 'video' ? (
        <>
          <video
            ref={videoRef}
            src={project.media}
            poster={project.poster}
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/media:scale-105 pointer-events-none"
          />

          {/* Top Badges */}
          <div className="absolute top-3 inset-x-3 z-20 flex items-center justify-between gap-2 pointer-events-none">
            <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-sans font-semibold text-[#ff4f31] tracking-wide uppercase border border-white/10 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff4f31] animate-pulse" />
              Video
            </span>
            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-sans font-medium text-white/90 tracking-[-0.01em] border border-white/10">
              {project.tag}
            </span>
          </div>

          {/* Bottom Volume Button & Indicator */}
          <div className="absolute bottom-3 inset-x-3 z-30 flex items-center justify-between gap-2 pointer-events-auto">
            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-sans font-medium text-white/90 tracking-[-0.01em] truncate max-w-[70%] border border-white/10 flex items-center gap-1.5">
              {isPlaying && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
              )}
              {isPlaying ? 'Playing Preview' : (typeof window !== 'undefined' && window.innerWidth < 768 ? 'Tap to View' : 'Hover to Play')}
            </span>

            <button
              type="button"
              onClick={handleSoundToggle}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              className="w-7 h-7 rounded-full bg-black/70 hover:bg-[#ff4f31] backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 shadow-sm shrink-0 hover:scale-110 active:scale-95 border border-white/15"
            >
              {isMuted ? <VolumeMuteIcon /> : <VolumeUpIcon />}
            </button>
          </div>
        </>
      ) : (
        <>
          <img
            src={project.media}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/media:scale-105"
          />

          {/* Top Badges for Graphic Design */}
          <div className="absolute top-3 inset-x-3 z-20 flex items-center justify-between gap-2 pointer-events-none">
            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-sans font-semibold text-white/90 tracking-wide uppercase border border-white/10">
              Graphic
            </span>
            <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-sans font-medium text-white/90 tracking-[-0.01em] border border-white/10">
              {project.tag}
            </span>
          </div>
        </>
      )}

      {/* Shimmer / Specular Light Sweep Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 w-[200%] h-full"
        style={{
          background: 'linear-gradient(105deg, transparent 20%, rgba(255, 255, 255, 0.22) 50%, transparent 80%)',
          transform: sweepActive ? 'translateX(100%)' : 'translateX(-100%)',
          transition: 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      />
    </div>
  );
};

/* Full Project Lightbox Modal */
interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-[var(--clr-bg,#fdf9f9)] dark:bg-[#1a1914] text-[var(--clr-text,#12110b)] rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 flex flex-col md:flex-row max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Media Preview Column */}
        <div className="w-full md:w-[60%] aspect-video sm:aspect-square md:aspect-auto bg-black flex items-center justify-center overflow-hidden min-h-[220px] max-h-[50vh] md:max-h-[75vh]">
          {project.type === 'video' ? (
            <video
              src={project.media}
              poster={project.poster}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain max-h-[50vh] md:max-h-[75vh]"
            />
          ) : (
            <img
              src={project.media}
              alt={project.title}
              className="w-full h-full object-contain max-h-[50vh] md:max-h-[75vh]"
            />
          )}
        </div>

        {/* Project Meta Column */}
        <div className="w-full md:w-[40%] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#ff4f31] text-white">
                {project.category}
              </span>
              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-black/5 dark:bg-white/10 hover:bg-[#ff4f31] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <h2 
              className="text-[28px] sm:text-[32px] font-normal leading-[1.2] tracking-[-0.02em] mb-3"
              style={{ fontFamily: "'Season Mix', Georgia, serif" }}
            >
              {project.title}
            </h2>

            <div className="inline-block px-2.5 py-1 rounded-md bg-[var(--clr-beige,#f4efea)] text-xs font-sans font-medium text-[#666666] dark:text-[#a09e99] mb-4">
              Tag: {project.tag}
            </div>

            <p className="text-[16px] leading-[1.5] text-[#555555] dark:text-[#a09e99] font-sans">
              {project.description}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-[#888888]">
              Portfolio #{project.id}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-[#12110b] text-white dark:bg-white dark:text-[#12110b] text-sm font-medium hover:bg-[#ff4f31] dark:hover:bg-[#ff4f31] dark:hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface WorkPageProps {
  onNavigateHome: () => void;
  initialProjectId?: number | null;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigateHome, initialProjectId }) => {
  const { projects } = usePortfolio();
  const allProjects = projects;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(() => {
    if (initialProjectId) {
      return allProjects.find(p => p.id === initialProjectId) || null;
    }
    return null;
  });
  const gridTopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialProjectId) {
      const found = allProjects.find(p => p.id === initialProjectId);
      if (found) {
        setActiveModalProject(found);
      }
    }
  }, [initialProjectId]);

  // Floating Cursor Card DOM refs
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorIconRef = useRef<HTMLSpanElement>(null);
  const lastXRef = useRef<number | null>(null);
  const idleTimerRef = useRef<number | null>(null);

  const ITEMS_PER_PAGE = 8;

  // Filter projects based on category
  const filteredProjects: ProjectItem[] = allProjects.filter((item) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'video-editing') return item.category === 'Video Editing';
    if (selectedCategory === 'motion-graphics') return item.category === 'Motion Graphics';
    if (selectedCategory === 'graphic-design') return item.category === 'Graphic Design';
    if (selectedCategory === 'commercials-3d') return item.category === 'Commercials & 3D';
    if (selectedCategory === 'brand-identity') return item.category === 'Brand Identity';
    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE));
  const displayedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (gridTopRef.current) {
      gridTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Cursor tracking
  useEffect(() => {
    const cursor = cursorRef.current;
    const icon = cursorIconRef.current;
    if (!cursor || !icon) return;

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.18, ease: 'power3' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.18, ease: 'power3' });
    const rTo = gsap.quickTo(icon, 'rotation', { duration: 0.25, ease: 'power3' });

    const handlePointerMove = (e: PointerEvent) => {
      xTo(e.clientX - 24);
      yTo(e.clientY - 24);

      if (lastXRef.current !== null) {
        const deltaX = e.clientX - lastXRef.current;
        const tilt = Math.min(Math.max(deltaX * 0.4, -25), 25);
        rTo(tilt);
      }
      lastXRef.current = e.clientX;

      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = window.setTimeout(() => {
        rTo(0);
      }, 120);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, []);

  const handleCardHoverStart = useCallback(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.2, ease: 'power2.out', overwrite: 'auto' });
    }
  }, []);

  const handleCardHoverEnd = useCallback(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.2, ease: 'power2.out', overwrite: 'auto' });
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-[var(--clr-bg,#fdf9f9)] text-[var(--clr-text,#12110b)] transition-colors duration-300 pt-28 sm:pt-36 pb-24 sm:pb-32">
      {/* Lightbox / Video Player Modal */}
      <ProjectModal 
        project={activeModalProject} 
        onClose={() => setActiveModalProject(null)} 
      />

      {/* Interactive Floating Circular Cursor with Pointing Hand */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-12 h-12 rounded-full bg-[#12110b] dark:bg-[#fdf9f9] shadow-2xl flex items-center justify-center pointer-events-none z-[999] opacity-0 scale-0 select-none will-change-transform"
        aria-hidden="true"
      >
        <span ref={cursorIconRef} className="block will-change-transform">
          <CursorHandIcon />
        </span>
      </div>

      <div className="max-w-[98rem] mx-auto px-4 sm:px-8 md:px-12">
        {/* Header Section */}
        <header className="mb-12 sm:mb-16">
          <TextReveal
            lines={["Selected Work"]}
            as="h1"
            className="text-[clamp(2.5rem,7vw+0.5rem,7.5rem)] md:text-[clamp(3.5rem,8.5vw,7.5rem)] font-normal leading-[1.0] tracking-[-0.02em] text-[var(--clr-text,#12110b)] mb-8"
            style={{ fontFamily: "'Season Mix', Georgia, serif" }}
          />

          {/* Mission intro paragraph with orange arrow */}
          <div className="flex items-start gap-4 max-w-2xl">
            <IntroArrowIcon />
            <p 
              className="text-[17px] sm:text-[19px] md:text-[20px] font-normal leading-[1.45] tracking-[-0.02em] text-[#555555] dark:text-[#a09e99] m-0"
              style={{ fontFamily: "'Fustat', system-ui, -apple-system, sans-serif" }}
            >
              High-impact video editing, kinetic motion graphics, and bold brand designs I've crafted to captivate audiences and elevate ambitious creators and brands across digital platforms.
            </p>
          </div>
        </header>

        {/* Filter Chips Bar & Layout View Switcher */}
        <nav 
          ref={gridTopRef}
          className="scroll-mt-28 flex flex-wrap items-center justify-between gap-y-6 gap-x-8 pb-8 mb-12 border-b border-black/10 dark:border-white/10"
          aria-label="Filter and view options"
        >
          {/* Category Filter Pills */}
          <ul className="flex flex-wrap items-center gap-2 sm:gap-3" role="list">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <li key={cat.id} className="inline-flex">
                  <button
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[14px] sm:text-[15px] font-medium tracking-[-0.01em] transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#ff4f31] text-white shadow-sm font-semibold'
                        : 'bg-[var(--clr-beige,#f4efea)] hover:bg-[#eae3dc] dark:hover:bg-[#25241e] text-[#666666] dark:text-[#a09e99] hover:text-[var(--clr-text,#12110b)]'
                    }`}
                  >
                    {cat.icon && (
                      <span className={`w-3.5 h-3.5 inline-flex items-center justify-center shrink-0 ${isActive ? 'text-white' : 'text-current'}`}>
                        {cat.icon}
                      </span>
                    )}
                    <span>{cat.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* View Mode Switcher: Grid vs List */}
          <div className="flex items-center gap-3 shrink-0" role="group" aria-label="Layout">
            <button
              type="button"
              onClick={() => setViewMode('list')}
              aria-label="List view"
              className={`p-2.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'list'
                  ? 'text-[#ff4f31] bg-black/5 dark:bg-white/10'
                  : 'text-[#888888] hover:text-[var(--clr-text,#12110b)]'
              }`}
            >
              <ListViewIcon />
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
              className={`p-2.5 rounded-lg transition-colors cursor-pointer ${
                viewMode === 'grid'
                  ? 'text-[#ff4f31] bg-black/5 dark:bg-white/10'
                  : 'text-[#888888] hover:text-[var(--clr-text,#12110b)]'
              }`}
            >
              <GridViewIcon />
            </button>
          </div>
        </nav>

        {/* Results Container */}
        {displayedProjects.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-xl text-[#666666] dark:text-[#a09e99]">No projects found in this category.</p>
            <button
              type="button"
              onClick={() => handleCategoryChange('all')}
              className="mt-4 px-5 py-2.5 rounded-full bg-[#ff4f31] text-white font-medium text-sm hover:opacity-90 transition-opacity cursor-pointer"
            >
              Show all projects
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* GRID VIEW */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-8 gap-y-12 sm:gap-y-16">
            {displayedProjects.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalProject(item)}
                className="group flex flex-col cursor-none select-none text-left"
                data-cursor-card
                onMouseEnter={handleCardHoverStart}
                onMouseLeave={handleCardHoverEnd}
              >
                {/* Image / Video Media Card with Parallax Blur-Sweep */}
                <ProjectMediaCard 
                  project={item} 
                  onHoverStart={handleCardHoverStart} 
                  onHoverEnd={handleCardHoverEnd} 
                />

                {/* Card Meta */}
                <div className="flex flex-col gap-1">
                  <h3 
                    className="text-[22px] sm:text-[24px] font-normal leading-[1.25] tracking-[-0.02em] text-[var(--clr-text,#12110b)] group-hover:text-[#ff4f31] transition-colors duration-200"
                    style={{ fontFamily: "'Season Mix', Georgia, serif" }}
                  >
                    {item.title}
                  </h3>
                  <span className="text-[13.5px] uppercase font-sans font-medium tracking-[-0.01em] text-[#666666] dark:text-[#a09e99]">
                    {item.category}
                  </span>
                  <p className="text-[14.5px] font-sans font-normal text-[#666666] dark:text-[#999994] leading-[1.35] line-clamp-2 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* LIST VIEW */
          <div className="flex flex-col divide-y divide-black/10 dark:divide-white/10">
            {displayedProjects.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalProject(item)}
                className="group py-6 flex items-center justify-between gap-6 cursor-none select-none transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.02] px-4 rounded-xl"
                data-cursor-card
                onMouseEnter={handleCardHoverStart}
                onMouseLeave={handleCardHoverEnd}
              >
                <div className="flex items-center gap-6 min-w-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[14px] overflow-hidden bg-[#181714] shrink-0 shadow-sm relative">
                    {item.type === 'video' ? (
                      <video
                        src={item.media}
                        poster={item.poster}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover pointer-events-none"
                      />
                    ) : (
                      <img
                        src={item.media}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    )}
                    <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase bg-black/70 text-white">
                      {item.type}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1 min-w-0">
                    <h3 
                      className="text-[20px] sm:text-[24px] font-normal tracking-[-0.02em] text-[var(--clr-text,#12110b)] group-hover:text-[#ff4f31] transition-colors truncate"
                      style={{ fontFamily: "'Season Mix', Georgia, serif" }}
                    >
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] uppercase font-sans font-medium tracking-[-0.01em] text-[#666666] dark:text-[#a09e99]">
                        {item.category}
                      </span>
                      <span className="text-[12px] text-[#888888]">• {item.tag}</span>
                    </div>
                    <p className="text-[14px] font-sans text-[#777777] dark:text-[#888884] line-clamp-1 hidden sm:block">
                      {item.description}
                    </p>
                  </div>
                </div>

                <span className="w-10 h-10 rounded-full bg-[var(--clr-beige,#f4efea)] group-hover:bg-[#ff4f31] text-[var(--clr-text,#12110b)] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-200">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Pagination Section */}
        {totalPages > 1 && (
          <nav className="mt-20 flex items-center justify-center gap-2" aria-label="Pagination">
            {/* Prev Button */}
            {currentPage > 1 && (
              <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-4 py-2 rounded-full text-sm font-medium tracking-tight bg-[var(--clr-beige,#f4efea)] hover:bg-[#eae3dc] dark:hover:bg-[#25241e] text-[var(--clr-text,#12110b)] transition-colors mr-2 cursor-pointer"
              >
                Prev
              </button>
            )}

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
              const isCurrent = pageNum === currentPage;
              return (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-10 h-10 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isCurrent
                      ? 'bg-[#12110b] text-white dark:bg-white dark:text-[#12110b] shadow-sm scale-105'
                      : 'bg-[var(--clr-beige,#f4efea)] hover:bg-[#eae3dc] dark:hover:bg-[#25241e] text-[#666666] dark:text-[#a09e99]'
                  }`}
                  aria-current={isCurrent ? 'page' : undefined}
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Next Button */}
            {currentPage < totalPages && (
              <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-4 py-2 rounded-full text-sm font-medium tracking-tight bg-[var(--clr-beige,#f4efea)] hover:bg-[#eae3dc] dark:hover:bg-[#25241e] text-[var(--clr-text,#12110b)] transition-colors ml-2 cursor-pointer"
              >
                Next
              </button>
            )}
          </nav>
        )}
      </div>
    </div>
  );
};

export default WorkPage;
