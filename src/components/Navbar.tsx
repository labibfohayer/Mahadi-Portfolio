import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';

interface NavJumpLinkProps {
  href: string;
  label: string;
  className?: string;
  isActive?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

// Split into graphemes so combining marks/matras in Bengali or accents are preserved without dotted circles
function splitGraphemes(text: string): string[] {
  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    const segmenter = new Intl.Segmenter(undefined, { granularity: 'grapheme' });
    return Array.from(segmenter.segment(text), (s) => s.segment);
  }
  return text.split('');
}

const NavJumpLink: React.FC<NavJumpLinkProps> = ({ 
  href, 
  label, 
  className = "nav-main__link text-[15px] sm:text-[16px] font-semibold tracking-[-0.02em] text-[var(--clr-text,#12110b)] hover:opacity-70 transition-opacity inline-flex items-center",
  isActive = false,
  onClick
}) => {
  const charsRef = useRef<(HTMLSpanElement | null)[]>([]);

  const handleMouseEnter = () => {
    const validChars = charsRef.current.filter((c): c is HTMLSpanElement => c !== null);
    if (validChars.length === 0) return;
    
    // Pick 1-2 random characters to playfully jump, matching Weichie main.js letterJump
    const shuffled = [...validChars].sort(() => 0.5 - Math.random());
    const count = Math.min(2, Math.max(1, Math.floor(validChars.length / 3)));
    const targets = shuffled.slice(0, count);

    targets.forEach((charEl) => {
      const rot = (Math.random() - 0.5) * 28; // between -14 and +14 degrees
      gsap.fromTo(
        charEl,
        { yPercent: 0, rotate: 0 },
        {
          yPercent: -42,
          rotate: rot,
          duration: 0.25,
          ease: 'power2.out',
          yoyo: true,
          repeat: 1,
          overwrite: true
        }
      );
    });
  };

  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      className={`${className} ${isActive ? '!text-[#ff4f31]' : ''}`}
      aria-label={label}
    >
      {splitGraphemes(label).map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            charsRef.current[i] = el;
          }}
          className="nav-main__char inline-block will-change-transform"
          style={{ position: 'relative', display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </a>
  );
};

const ContactPill: React.FC<{ 
  label: string; 
  isActive?: boolean; 
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void; 
}> = ({ label, isActive = false, onClick }) => {
  const charsRef = useRef<(HTMLSpanElement | null)[]>([]);

  const handleMouseEnter = () => {
    const validChars = charsRef.current.filter((c): c is HTMLSpanElement => c !== null);
    if (validChars.length === 0) return;
    const shuffled = [...validChars].sort(() => 0.5 - Math.random());
    const targets = shuffled.slice(0, 2);

    targets.forEach((charEl) => {
      const rot = (Math.random() - 0.5) * 28;
      gsap.fromTo(
        charEl,
        { yPercent: 0, rotate: 0 },
        {
          yPercent: -38,
          rotate: rot,
          duration: 0.25,
          ease: 'power2.out',
          yoyo: true,
          repeat: 1,
          overwrite: true
        }
      );
    });
  };

  return (
    <a
      href="#contact"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      className={`pill-contact inline-flex items-center gap-3 pl-5 pr-2 py-1.5 rounded-full bg-[var(--clr-beige,#f4efea)] hover:bg-[#eae3dc] dark:hover:bg-[#1f1d16] text-[var(--clr-text,#12110b)] transition-all duration-200 group h-[46px] cursor-pointer ${
        isActive ? 'ring-2 ring-[#ff4f31]' : ''
      }`}
      aria-label={label}
    >
      <span className="pill-contact__label text-[15px] sm:text-[16px] font-semibold tracking-[-0.02em] leading-none inline-flex">
        {splitGraphemes(label).map((char, i) => (
          <span
            key={i}
            ref={(el) => {
              charsRef.current[i] = el;
            }}
            className="inline-block will-change-transform"
            style={{ position: 'relative', display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
      <span className="pill-contact__icon w-8 h-8 rounded-full bg-[#ff4f31] text-[#f4efea] flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.2]">
        <svg 
          width="14" 
          height="20" 
          viewBox="0 0 16.3384 23.6096" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[0.92] group-hover:-rotate-12"
        >
          <path d="M3.98877 11.1797L4.01535 10.3889C4.01535 9.031 3.94424 7.67379 3.80203 6.32313L3.72402 5.58309C3.63152 4.70463 4.2404 3.90624 5.11196 3.763L5.27764 3.73573C6.22721 3.57971 7.11119 4.25763 7.20715 5.21513L7.29171 6.05873C7.42046 7.34484 7.48501 8.63682 7.48501 9.92948L7.54058 10.499C7.53955 10.5253 7.57821 10.5277 7.58062 10.5018L7.61169 10.4697C7.79808 8.22365 7.82017 5.96692 7.67762 3.71744L7.60375 2.55283C7.53748 1.5073 8.31687 0.599849 9.36033 0.507688C10.448 0.411386 11.3989 1.23531 11.4583 2.32571L11.4849 2.81378C11.6336 5.53649 11.5418 8.26748 11.2101 10.974L11.5415 9.69891C11.8276 8.29682 11.9719 6.8692 11.9719 5.43812C11.9719 4.53998 12.6833 3.80304 13.5811 3.77163C14.4927 3.73953 15.261 4.44644 15.3049 5.35769L15.348 6.24996C15.4288 7.923 14.8551 10.8504 14.5431 12.4962L14.3798 13.3204" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M0.99855 15.9141C0.377242 16.4319 0.335821 17.4118 0.876704 18.0839L3.393 21.2121C3.9791 21.9411 5.06122 22.0185 5.74535 21.3806L5.79643 21.333C6.42119 20.7503 6.48194 19.7814 5.93519 19.1252L3.13896 16.1216C3.13896 16.1216 2.08653 15.008 0.998895 15.9145L0.99855 15.9141Z" stroke="currentColor" strokeWidth="1.6" strokeMiterlimit="10"/>
          <path d="M12.1808 15.4665L8.94001 16.1803C8.04084 16.3785 7.16514 15.7648 7.04399 14.8521C6.93905 14.0603 7.44473 13.3158 8.21964 13.1214L10.5699 12.5319C14.0731 11.6531 17.0198 15.3133 15.3612 18.5216C15.2901 18.6594 15.2121 18.7954 15.1279 18.9289L14.3499 20.1609C13.4134 21.6434 11.9068 22.6744 10.1857 23.0099C8.92586 23.2557 7.61973 23.0437 6.50241 22.4124L5.25669 21.7089" stroke="currentColor" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round"/>
          <path d="M11.0161 15.7229C11.0161 15.7229 8.92544 15.9583 7.40151 19.6596" stroke="currentColor" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round"/>
          <path d="M7.07933 14.7494L4.18714 11.4403C3.49404 10.6471 2.26454 10.6343 1.55487 11.4126L1.46512 11.511C0.850374 12.1851 0.851064 13.2169 1.46685 13.8903L5.44219 18.2377C6.15117 19.0133 7.37687 19.0009 8.06998 18.2111C8.51318 17.7065 8.62052 17.012 8.39202 16.4156L8.25292 16.1015" stroke="currentColor" strokeWidth="1.6" strokeMiterlimit="10"/>
        </svg>
      </span>
    </a>
  );
};

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle w-[44px] h-[44px] rounded-full bg-[var(--clr-beige,#f4efea)] hover:bg-[#eae3dc] dark:hover:bg-[#1f1d16] text-[var(--clr-text,#12110b)] flex items-center justify-center transition-colors duration-200 group relative select-none"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <span 
        className="w-5 h-5 grid overflow-hidden relative" 
        style={{ gridTemplateColumns: '1fr', gridTemplateRows: '1fr' }}
        aria-hidden="true"
      >
        {/* Sun Icon */}
        <svg 
          className={`w-5 h-5 col-start-1 row-start-1 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            isDark 
              ? 'translate-y-[100%] group-hover:translate-y-0' 
              : 'translate-y-0 group-hover:-translate-y-[100%]'
          }`} 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="4" fill="currentColor" stroke="none"/>
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>
        </svg>

        {/* Moon Icon */}
        <svg 
          className={`w-5 h-5 col-start-1 row-start-1 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] ${
            isDark 
              ? 'translate-y-0 group-hover:-translate-y-[100%]' 
              : 'translate-y-[100%] group-hover:translate-y-0'
          }`} 
          viewBox="0 0 24 24" 
          fill="none"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" fill="currentColor"/>
        </svg>
      </span>
    </button>
  );
};

export type AppRoute = 'home' | 'work' | 'services' | 'about' | 'contact' | 'admin';

export interface NavbarProps {
  currentRoute?: AppRoute;
  onNavigate?: (route: AppRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute = 'home', onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300"
      style={{
        paddingTop: isScrolled ? '14px' : 'clamp(14px, 1.2vw + 10px, 24px)',
        paddingBottom: isScrolled ? '14px' : 'clamp(14px, 1.2vw + 10px, 24px)',
        paddingInline: 'clamp(1.25rem, 8.8vw, 5.625rem)',
      }}
    >
      {/* Background blur overlay when scrolled */}
      <div 
        className={`absolute inset-0 -z-10 transition-opacity duration-300 pointer-events-none ${
          isScrolled 
            ? 'opacity-100 bg-[var(--clr-bg,#fdf9f9)]/80 backdrop-blur-md border-b border-black/[0.05] dark:border-white/[0.05] shadow-[0_2px_12px_rgba(0,0,0,0.03)]' 
            : 'opacity-0'
        }`} 
      />
      <div 
        className="mx-auto flex items-center justify-between w-full"
        style={{
          maxWidth: 'calc(98rem + clamp(1.25rem, 8.8vw, 5.625rem) * 2)',
        }}
      >
        {/* Brand Logo - Mahadi Hasan in Season Mix Serif */}
        <a 
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) {
              onNavigate('home');
              window.location.hash = '';
            } else {
              window.location.href = '/';
            }
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
          className="pointer-events-auto inline-flex items-center text-[var(--clr-text,#12110b)] hover:opacity-85 transition-opacity cursor-pointer" 
          aria-label="Mahadi Hasan"
        >
          <span 
            className="text-[28px] sm:text-[32px] md:text-[36px] font-normal tracking-[-0.03em] leading-none"
            style={{ fontFamily: "'Season Mix', Georgia, serif" }}
          >
            Mahadi Hasan
          </span>
        </a>

        {/* Desktop Navigation Links with Weichie letterJump hover animation */}
        <div className="hidden lg:flex items-center gap-[28px] pointer-events-auto">
          <nav className="flex items-center gap-[24px]">
            <NavJumpLink 
              href="#home" 
              label="Home" 
              isActive={currentRoute === 'home'}
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) {
                  onNavigate('home');
                  window.location.hash = '#home';
                }
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
            />
            <NavJumpLink 
              href="#work" 
              label="Work" 
              isActive={currentRoute === 'work'}
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) {
                  onNavigate('work');
                  window.location.hash = '#work';
                }
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
            />
            <NavJumpLink 
              href="#services" 
              label="Services" 
              isActive={currentRoute === 'services'}
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) {
                  onNavigate('services');
                  window.location.hash = '#services';
                }
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
            />
            <NavJumpLink 
              href="#about" 
              label="About" 
              isActive={currentRoute === 'about'}
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) {
                  onNavigate('about');
                  window.location.hash = '#about';
                }
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
            />
          </nav>

          {/* Get In Touch Pill with letterJump & badge scale/rotate */}
          <ContactPill 
            label="Get in touch" 
            isActive={currentRoute === 'contact'}
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) {
                onNavigate('contact');
                window.location.hash = '#contact';
              }
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
          />

          {/* Theme Toggle with Weichie Vertical Rolling Sun & Moon Icons */}
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-3 pointer-events-auto">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('contact');
              window.location.hash = '#contact';
              window.scrollTo({ top: 0, behavior: 'instant' });
            }}
            className={`inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-[var(--clr-beige,#f4efea)] dark:hover:bg-[#1f1d16] text-xs font-semibold text-[var(--clr-text,#12110b)] ${
              currentRoute === 'contact' ? 'ring-2 ring-[#ff4f31]' : ''
            }`}
          >
            <span>Contact</span>
            <span className="w-6 h-6 rounded-full bg-[#ff4f31] text-[#f4efea] flex items-center justify-center text-[10px]">
              &rarr;
            </span>
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-[var(--clr-text,#111111)]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[68px] bg-[var(--clr-bg,#fdf9f9)] z-40 p-8 flex flex-col justify-between border-t border-black/10 dark:border-white/10 animate-in fade-in duration-200">
          <div className="flex flex-col gap-6 text-2xl font-display font-medium text-[var(--clr-text,#111111)]">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false);
                if (onNavigate) onNavigate('home');
                window.location.hash = '#home';
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              className={currentRoute === 'home' ? '!text-[#ff4f31]' : ''}
            >
              Home
            </a>
            <a 
              href="#work" 
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false);
                if (onNavigate) onNavigate('work');
                window.location.hash = '#work';
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              className={currentRoute === 'work' ? '!text-[#ff4f31]' : ''}
            >
              Work
            </a>
            <a 
              href="#services" 
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false);
                if (onNavigate) onNavigate('services');
                window.location.hash = '#services';
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              className={currentRoute === 'services' ? '!text-[#ff4f31]' : ''}
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false);
                if (onNavigate) onNavigate('about');
                window.location.hash = '#about';
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              className={currentRoute === 'about' ? '!text-[#ff4f31]' : ''}
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false);
                if (onNavigate) onNavigate('contact');
                window.location.hash = '#contact';
                window.scrollTo({ top: 0, behavior: 'instant' });
              }} 
              className={currentRoute === 'contact' ? '!text-[#ff4f31]' : 'text-primary'}
            >
              Get in touch &rarr;
            </a>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
};
