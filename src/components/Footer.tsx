import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePortfolio } from '../context/PortfolioContext';
import {
  PhoneIcon,
  ContactHandIcon,
  BottomPeaceHandIcon,
  WebDevIcon,
  EcommerceIcon,
  AppDevIcon,
  AiIcon,
  BlockchainIcon,
} from './FooterSvgs';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const { siteSettings } = usePortfolio();
  const footerRef = useRef<HTMLElement>(null);
  const handRef = useRef<HTMLSpanElement>(null);
  const logoSvgRef = useRef<HTMLDivElement>(null);
  const copyrightRef = useRef<HTMLParagraphElement>(null);

  const instagramUrl = siteSettings?.contact?.socials?.instagram || 'https://www.instagram.com/mahadihasan9451/';
  const facebookUrl = siteSettings?.contact?.socials?.facebook || 'https://www.facebook.com/mahadi.hasan.385339';

  useEffect(() => {
    const footer = footerRef.current;
    const hand = handRef.current;
    const logoSvg = logoSvgRef.current;
    const copyright = copyrightRef.current;

    if (!footer || !logoSvg) return;

    // Hand entrance spring tween matching Weichie back.out(2)
    let handTween: gsap.core.Tween | null = null;
    let handShown = false;
    if (hand) {
      gsap.set(hand, { scale: 0, autoAlpha: 0 });
      handTween = gsap.fromTo(
        hand,
        { scale: 0, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 0.4, ease: 'back.out(2)', paused: true }
      );
    }

    const mm = gsap.matchMedia();

    // Responsive ScrollTrigger scrub timeline matching exact Weichie Ot class
    mm.add('(min-width: 768px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hand ?? footer,
          start: 'bottom 95%',
          endTrigger: footer,
          end: 'bottom bottom',
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (!handTween) return;
            const isShown = self.progress >= 0.5;
            if (isShown !== handShown) {
              handShown = isShown;
              isShown ? handTween.play() : handTween.reverse();
            }
          },
          onRefresh: (self) => {
            if (!handTween) return;
            const isShown = self.progress >= 0.5;
            handShown = isShown;
            handTween.progress(+!!isShown).pause();
          },
        },
      });

      tl.fromTo(
        logoSvg,
        { scale: 1, x: '20%' },
        { scale: 0.8, x: '0%', ease: 'none', duration: 1 },
        0
      );

      if (copyright) {
        tl.fromTo(
          copyright,
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: 'none', duration: 0.5 },
          0.5
        );
      }
    });

    mm.add('(max-width: 767px)', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hand ?? footer,
          start: 'bottom 95%',
          endTrigger: footer,
          end: 'bottom bottom',
          scrub: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (!handTween) return;
            const isShown = self.progress >= 0.5;
            if (isShown !== handShown) {
              handShown = isShown;
              isShown ? handTween.play() : handTween.reverse();
            }
          },
        },
      });

      tl.fromTo(
        logoSvg,
        { scale: 1, x: '0%' },
        { scale: 0.85, x: '0%', ease: 'none', duration: 1 },
        0
      );

      if (copyright) {
        tl.fromTo(
          copyright,
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: 'none', duration: 0.25 },
          0.75
        );
      }
    });

    return () => {
      mm.revert();
      handTween?.kill();
    };
  }, []);

  return (
    <footer 
      ref={footerRef} 
      className="footer bg-[var(--clr-beige,#f4efea)] text-[var(--clr-text,#12110b)] transition-colors duration-300 overflow-hidden"
      style={{
        paddingTop: 'clamp(3.75rem, 2.8125rem + 4.6875vw, 7.5rem)',
        paddingBottom: 'clamp(3.75rem, 2.8125rem + 4.6875vw, 7.5rem)',
      }}
    >
      <div 
        className="footer__container mx-auto flex flex-col"
        style={{
          gap: '0px',
          maxWidth: 'calc(98rem + clamp(1.25rem, 8.8vw, 5.625rem) * 2)',
          paddingInline: 'clamp(1.25rem, 8.8vw, 5.625rem)',
        }}
        data-container="xl"
      >
        
        {/* Office Cards Section */}
        <div className="footer__offices grid grid-cols-1 lg:grid-cols-2 gap-8 mb-[62px]">
          
          {/* Dhaka Studio Card */}
          <article 
            className="card-office relative flex flex-col sm:flex-row gap-[1.0625rem] p-6 rounded-[1.5rem] bg-[var(--clr-bg,#fdf9f9)] text-[var(--clr-text,#12110b)] shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-black/[0.06] dark:border-white/[0.08] transition-colors duration-300"
          >
            <div className="card-office__media w-full sm:w-[11.375rem] aspect-[4/5] rounded-[0.5rem] overflow-hidden shrink-0">
              <img
                src="/textures/weichie-office-new-york-200x300.webp"
                alt="Dhaka, Bangladesh"
                loading="lazy"
                className="card-office__image w-full h-full object-cover"
              />
            </div>
            <div className="card-office__body flex-1 flex flex-col justify-between gap-6 py-1 min-w-0">
              <div className="card-office__header flex flex-col gap-4">
                <span className="card-office__status inline-flex items-center gap-2 px-3 py-2 rounded-[0.5rem] bg-[var(--clr-beige,#f4efea)] w-fit">
                  <span className="pill-location__dot w-2 h-2 rounded-full bg-[#2ecc40] shrink-0" aria-hidden="true" />
                  <span className="text-xs font-medium text-[#777777] dark:text-[#8e8e8e]">Open for projects</span>
                </span>
                <div>
                  <h3 className="card-office__city font-serif text-[clamp(1.5rem,1.875vw+1.125rem,3rem)] sm:text-[28px] font-medium tracking-tight text-[var(--clr-text,#12110b)] leading-tight">
                    Dhaka, Bangladesh
                  </h3>
                  <p className="text-sm text-[#555555] dark:text-[#a09e99] mt-1">
                    Jigarthala, Dhanmondi, Dhaka
                  </p>
                </div>
              </div>
              <div className="card-office__footer flex flex-col gap-3">
                <p className="card-office__hours text-base text-[#555555] dark:text-[#a09e99]">
                  Saturday to Thursday 10h to 20h
                </p>
                <a
                  href="tel:+8801314632404"
                  className="card-office__phone inline-flex items-center gap-2 text-base text-[var(--clr-text,#12110b)] hover:text-[#ff4f31] transition-colors w-fit font-medium"
                >
                  <span className="card-office__phone-icon w-4 h-4 text-[#ff4f31] shrink-0 flex items-center justify-center">
                    <PhoneIcon className="w-full h-full" />
                  </span>
                  <span className="card-office__phone-text">+880 1314-632404</span>
                </a>
              </div>
            </div>

            {/* Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                window.location.hash = '#contact';
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              className="pill-contact card-office__cta group absolute top-6 right-6 inline-flex items-center gap-4 pl-6 pr-2 py-2 rounded-full bg-[var(--clr-beige,#f4efea)] hover:bg-[#12110b] dark:hover:bg-[#f4efea] text-[var(--clr-text,#12110b)] hover:text-[#fdf9f9] dark:hover:text-[#12110b] transition-all duration-300 shadow-sm cursor-pointer"
            >
              <span className="pill-contact__label text-base font-semibold tracking-tight">Contact</span>
              <span className="pill-contact__icon w-9 h-9 rounded-full bg-[#ff4f31] text-[#fdf9f9] flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-115">
                <ContactHandIcon className="w-4 h-5 transition-transform duration-300 ease-out group-hover:scale-95 group-hover:-rotate-12" />
              </span>
            </a>
          </article>

          {/* Worldwide & Remote Card */}
          <article 
            className="card-office relative flex flex-col sm:flex-row gap-[1.0625rem] p-6 rounded-[1.5rem] bg-[var(--clr-bg,#fdf9f9)] text-[var(--clr-text,#12110b)] shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-black/[0.06] dark:border-white/[0.08] transition-colors duration-300"
          >
            <div className="card-office__media w-full sm:w-[11.375rem] aspect-[4/5] rounded-[0.5rem] overflow-hidden shrink-0">
              <img
                src="/textures/brussels-dev-studio-225x300.jpg"
                alt="Worldwide & Remote"
                loading="lazy"
                className="card-office__image w-full h-full object-cover"
              />
            </div>
            <div className="card-office__body flex-1 flex flex-col justify-between gap-6 py-1 min-w-0">
              <div className="card-office__header flex flex-col gap-4">
                <span className="card-office__status inline-flex items-center gap-2 px-3 py-2 rounded-[0.5rem] bg-[var(--clr-beige,#f4efea)] w-fit">
                  <span className="pill-location__dot w-2 h-2 rounded-full bg-[#2ecc40] shrink-0" aria-hidden="true" />
                  <span className="text-xs font-medium text-[#777777] dark:text-[#8e8e8e]">Global Clients</span>
                </span>
                <div>
                  <h3 className="card-office__city font-serif text-[clamp(1.5rem,1.875vw+1.125rem,3rem)] sm:text-[28px] font-medium tracking-tight text-[var(--clr-text,#12110b)] leading-tight">
                    Worldwide & Remote
                  </h3>
                  <p className="text-sm text-[#555555] dark:text-[#a09e99] mt-1">
                    Serving creators & brands globally
                  </p>
                </div>
              </div>
              <div className="card-office__footer flex flex-col gap-3">
                <p className="card-office__hours text-base text-[#555555] dark:text-[#a09e99]">
                  Fast remote delivery & flexible sync
                </p>
                <a
                  href="mailto:mahadihasan20125@gmail.com"
                  className="card-office__phone inline-flex items-center gap-2 text-base text-[var(--clr-text,#12110b)] hover:text-[#ff4f31] transition-colors w-fit font-medium"
                >
                  <span className="card-office__phone-icon w-4 h-4 text-[#ff4f31] shrink-0 flex items-center justify-center">
                    <PhoneIcon className="w-full h-full" />
                  </span>
                  <span className="card-office__phone-text">mahadihasan20125@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                window.location.hash = '#contact';
                window.scrollTo({ top: 0, behavior: 'instant' });
              }}
              className="pill-contact card-office__cta group absolute top-6 right-6 inline-flex items-center gap-4 pl-6 pr-2 py-2 rounded-full bg-[var(--clr-beige,#f4efea)] hover:bg-[#12110b] dark:hover:bg-[#f4efea] text-[var(--clr-text,#12110b)] hover:text-[#fdf9f9] dark:hover:text-[#12110b] transition-all duration-300 shadow-sm cursor-pointer"
            >
              <span className="pill-contact__label text-base font-semibold tracking-tight">Contact</span>
              <span className="pill-contact__icon w-9 h-9 rounded-full bg-[#ff4f31] text-[#fdf9f9] flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-115">
                <ContactHandIcon className="w-4 h-5 transition-transform duration-300 ease-out group-hover:scale-95 group-hover:-rotate-12" />
              </span>
            </a>
          </article>

        </div>

        {/* 5-Column Navigation Section */}
        <div 
          className="footer__columns grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[minmax(0,1.5fr)_repeat(4,minmax(0,1fr))] gap-8 lg:gap-[29px] h-auto lg:h-[106px] mb-12 lg:mb-[49px]"
        >
          
          {/* Col 1: About */}
          <div className="footer__col col-span-2 sm:col-span-1 !gap-0 flex flex-col">
            <p className="footer__description text-[11px] font-medium leading-[14px] text-[#555555] dark:text-[#a09e99] max-w-full sm:max-w-[155px] tracking-[-0.02em]">
              Mahadi Hasan is a creative video editor and graphic designer. I craft cinematic visual stories, high-retention edits, and bold branding that make your content stand out.
            </p>
          </div>

          {/* Col 2: Portfolio / Studio */}
          <div className="footer__col !gap-0 flex flex-col">
            <h2 className="footer__col-title text-[11px] font-medium text-[#777777] dark:text-[#8e8e8e] tracking-[-0.02em] leading-none mb-[9px]">Portfolio</h2>
            <nav className="nav-footer">
              <ul className="flex flex-col gap-0 text-[11px] font-medium leading-[18px] tracking-[-0.02em] text-[var(--clr-text,#12110b)]">
                <li><a href="#work" className="hover:opacity-50 transition-opacity whitespace-nowrap">Selected Work</a></li>
                <li><a href="#about" className="hover:opacity-50 transition-opacity whitespace-nowrap">About Mahadi</a></li>
                <li><a href="#showreel" className="hover:opacity-50 transition-opacity whitespace-nowrap">Showreel</a></li>
                <li><a href="#services" className="hover:opacity-50 transition-opacity whitespace-nowrap">Services</a></li>
                <li><a href="#contact" className="hover:opacity-50 transition-opacity whitespace-nowrap">Get in Touch</a></li>
              </ul>
            </nav>
          </div>

          {/* Col 3: Expertises */}
          <div className="footer__col !gap-0 flex flex-col">
            <h2 className="footer__col-title text-[11px] font-medium text-[#777777] dark:text-[#8e8e8e] tracking-[-0.02em] leading-none mb-[9px]">Expertises</h2>
            <ul className="footer-services flex flex-col gap-0 text-[11px] font-medium leading-[17.5px] tracking-[-0.02em] text-[var(--clr-text,#12110b)]">
              <li className="flex items-center">
                <a href="#video-editing" className="footer-services__link !text-[11px] !leading-[17.5px] inline-flex items-center gap-1.5 hover:opacity-50 transition-opacity whitespace-nowrap">
                  <span className="footer-services__icon w-3 h-3 shrink-0 inline-flex items-center justify-center text-current" aria-hidden="true">
                    <WebDevIcon className="w-full h-auto text-current" />
                  </span>
                  <span className="footer-services__title !text-[11px]">Video editing</span>
                </a>
              </li>
              <li className="flex items-center">
                <a href="#motion-graphics" className="footer-services__link !text-[11px] !leading-[17.5px] inline-flex items-center gap-1.5 hover:opacity-50 transition-opacity whitespace-nowrap">
                  <span className="footer-services__icon w-3 h-3 shrink-0 inline-flex items-center justify-center text-current" aria-hidden="true">
                    <EcommerceIcon className="w-full h-auto text-current" />
                  </span>
                  <span className="footer-services__title !text-[11px]">Motion graphics</span>
                </a>
              </li>
              <li className="flex items-center">
                <a href="#thumbnail-design" className="footer-services__link !text-[11px] !leading-[17.5px] inline-flex items-center gap-1.5 hover:opacity-50 transition-opacity whitespace-nowrap">
                  <span className="footer-services__icon w-3 h-3 shrink-0 inline-flex items-center justify-center text-current" aria-hidden="true">
                    <AppDevIcon className="w-full h-auto text-current" />
                  </span>
                  <span className="footer-services__title !text-[11px]">Thumbnail design</span>
                </a>
              </li>
              <li className="flex items-center">
                <a href="#color-grading" className="footer-services__link !text-[11px] !leading-[17.5px] inline-flex items-center gap-1.5 hover:opacity-50 transition-opacity whitespace-nowrap">
                  <span className="footer-services__icon w-3 h-3 shrink-0 inline-flex items-center justify-center text-current" aria-hidden="true">
                    <AiIcon className="w-full h-auto text-current" />
                  </span>
                  <span className="footer-services__title !text-[11px]">Color grading</span>
                </a>
              </li>
              <li className="flex items-center">
                <a href="#sound-design" className="footer-services__link !text-[11px] !leading-[17.5px] inline-flex items-center gap-1.5 hover:opacity-50 transition-opacity whitespace-nowrap">
                  <span className="footer-services__icon w-3 h-3 shrink-0 inline-flex items-center justify-center text-current" aria-hidden="true">
                    <BlockchainIcon className="w-full h-auto text-current" />
                  </span>
                  <span className="footer-services__title !text-[11px]">Sound design</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div className="footer__col !gap-0 flex flex-col">
            <h2 className="footer__col-title text-[11px] font-medium text-[#777777] dark:text-[#8e8e8e] tracking-[-0.02em] leading-none mb-[9px]">Legal</h2>
            <nav className="nav-footer">
              <ul className="flex flex-col gap-0 text-[11px] font-medium leading-[18px] tracking-[-0.02em] text-[var(--clr-text,#12110b)]">
                <li><a href="#legal-notice" className="hover:opacity-50 transition-opacity whitespace-nowrap">Legal Notice</a></li>
                <li><a href="#terms" className="hover:opacity-50 transition-opacity whitespace-nowrap">Terms of Service</a></li>
                <li><a href="#privacy" className="hover:opacity-50 transition-opacity whitespace-nowrap">Privacy Policy</a></li>
                <li><a href="#copyright" className="hover:opacity-50 transition-opacity whitespace-nowrap">Copyright Notice</a></li>
                <li><a href="#licensing" className="hover:opacity-50 transition-opacity whitespace-nowrap">Licensing</a></li>
              </ul>
            </nav>
          </div>

          {/* Col 5: Business Inquiries */}
          <div className="footer__col col-span-2 sm:col-span-1 !gap-0 flex flex-col">
            <h2 className="footer__col-title text-[11px] font-medium text-[#777777] dark:text-[#8e8e8e] tracking-[-0.02em] leading-none mb-[9px]">Business Inquiries</h2>
            <ul className="flex flex-col gap-0 text-[11px] font-medium leading-[18px] tracking-[-0.02em] text-[var(--clr-text,#12110b)]">
              <li><a href="tel:+8801314632404" className="hover:opacity-50 transition-opacity whitespace-nowrap">+880 1314-632404</a></li>
              <li><a href="https://wa.me/8801314632404" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity whitespace-nowrap">WhatsApp: 01314-632404</a></li>
              <li><a href="mailto:mahadihasan20125@gmail.com" className="hover:opacity-50 transition-opacity break-all sm:break-normal whitespace-normal sm:whitespace-nowrap">mahadihasan20125@gmail.com</a></li>
              <li><a href="#contact" className="hover:opacity-50 transition-opacity underline font-medium whitespace-nowrap">Start a project</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer__bottom relative">
          <div className="footer__bottom-head flex items-start justify-between mb-0" style={{ height: '41px' }}>
            <span
              ref={handRef}
              className="footer__hand text-[var(--clr-text,#12110b)] shrink-0 inline-flex will-change-transform"
              style={{ width: '28px', height: '41px' }}
              aria-hidden="true"
            >
              <BottomPeaceHandIcon className="w-full h-auto text-current block" />
            </span>
            <div className="footer__socials text-right">
              <ul className="socials__list flex flex-col justify-end gap-0 text-[11px] font-medium leading-[13.5px] tracking-[-0.02em] text-[var(--clr-text,#12110b)]" style={{ height: '41px' }}>
                <li>
                  <a href="https://wa.me/8801314632404" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity whitespace-nowrap">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity whitespace-nowrap">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity whitespace-nowrap">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Giant Logo */}
          <div className="footer__logo w-full select-none will-change-transform mt-[23px] overflow-hidden">
            <div
              ref={logoSvgRef}
              className="logo text-[var(--clr-text,#12110b)] font-normal tracking-[-0.03em] leading-none whitespace-nowrap select-none will-change-transform"
              style={{
                fontFamily: "'Season Mix', Georgia, serif",
                fontSize: 'clamp(2.4rem, 13.5vw, 17.8rem)',
                transformOrigin: '0px center',
                color: 'var(--clr-text, #12110b)'
              }}
              aria-label="Mahadi Hasan"
            >
              Mahadi Hasan
            </div>
          </div>

          {/* Copyright & Admin Portal Link */}
          <div
            ref={copyrightRef}
            className="footer__copyright absolute bottom-0 right-0 text-[11px] text-[#777777] dark:text-[#8e8e8e] font-normal m-0 tracking-tight leading-none flex items-center gap-2.5 select-none"
            data-footer-reveal=""
          >
            <span>Mahadi Hasan &copy; 2026</span>
            <span className="opacity-40">•</span>
            <a 
              href="#admin" 
              className="text-[#777777] hover:text-[#ff4f31] transition-colors inline-flex items-center gap-1 cursor-pointer"
              title="Open Admin CMS"
            >
              <span>⚙️</span>
              <span className="hover:underline">Admin CMS</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
