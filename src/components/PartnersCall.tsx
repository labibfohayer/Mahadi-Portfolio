import React from 'react';
import { TextReveal } from './TextReveal';

interface PartnersCallProps {
  onNavigateContact?: () => void;
}

export function PartnersCall({ onNavigateContact }: PartnersCallProps = {}) {
  return (
    <div 
      className="block-wrapper block-simple-text w-full bg-[var(--clr-bg,#fdf9f9)] text-[var(--clr-text,#12110b)] transition-colors duration-300"
      data-background="off-white"
    >
      <section 
        data-reveal="" 
        className="simple-text w-full pb-[clamp(5rem,3.125vw+4.375rem,7.5rem)] pt-0" 
        data-width="md"
      >
        <div 
          data-reveal-sequence="" 
          className="simple-text__body max-w-[901px] mx-auto flex flex-col items-center text-center px-[clamp(1.25rem,4.6875vw+.3125rem,5rem)] gap-[42px]"
        >
          <div className="simple-text__content max-w-[756px] mx-auto flex flex-col items-center text-center">
            {/* Massive Centered Title matching exact Weichie Season Mix with word reveal */}
            <TextReveal
              text="The creative partner you call"
              className="wp-block-heading font-normal tracking-[-0.02em] text-[var(--clr-text,#12110b)] text-center mb-6"
              style={{
                fontFamily: "'Season Mix', Georgia, serif",
                fontSize: 'clamp(2.75rem, 4.5vw + 1.5rem, 4.6rem)', // ~73.75px at 1440px
                lineHeight: 1.0,
                color: 'var(--clr-text, #12110b)'
              }}
            />

            {/* Paragraph matching exact Weichie Fustat font & 1.6 line-height */}
            <p 
              className="wp-paragraph has-body-lg-font-size wp-block-paragraph font-normal tracking-[-0.02em] text-[var(--clr-text,#12110b)] text-center m-0 max-w-[756px]"
              style={{
                fontFamily: "'Fustat', system-ui, -apple-system, sans-serif",
                fontSize: 'clamp(1.125rem, 0.46875vw + 1.03125rem, 1.45rem)', // ~23.25px at 1440px
                lineHeight: 1.6
              }}
            >
              I work with ambitious creators, fast-scaling brands, and visionary businesses whose growth depends on unforgettable visual storytelling. From high-retention YouTube productions and viral short-form campaigns to premium brand identities, I craft for long-term impact.
            </p>
          </div>

          {/* Light Pill Button with Red-Coral Hand Icon matching exact Weichie pill-contact */}
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
            className="pill-contact simple-text__pill inline-flex items-center justify-between rounded-full bg-[var(--clr-beige,#f4efea)] hover:bg-[#eae3dc] dark:hover:bg-[#1f1d16] text-[var(--clr-text,#12110b)] transition-all duration-300 shadow-sm group cursor-pointer"
            data-tone="light"
            style={{
              padding: '7.5px 7.5px 7.5px 22.5px',
              gap: '16px',
              fontFamily: "'Fustat', system-ui, -apple-system, sans-serif",
              fontSize: 'clamp(1rem, 0.39vw + 0.92rem, 1.275rem)', // ~20.375px
              fontWeight: 500,
              letterSpacing: '-0.02em'
            }}
          >
            <span className="pill-contact__label">Let's talk</span>
            <span 
              className="pill-contact__icon w-9 h-9 rounded-full bg-[#ff4f31] text-[#f4efea] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:rotate-6 transition-transform duration-300"
              aria-hidden="true"
            >
              <svg width="17" height="24" viewBox="0 0 16.3384 23.6096" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.98877 11.1797L4.01535 10.3889C4.01535 9.031 3.94424 7.67379 3.80203 6.32313L3.72402 5.58309C3.63152 4.70463 4.2404 3.90624 5.11196 3.763L5.27764 3.73573C6.22721 3.57971 7.11119 4.25763 7.20715 5.21513L7.29171 6.05873C7.42046 7.34484 7.48501 8.63682 7.48501 9.92948L7.54058 10.499C7.53955 10.5253 7.57821 10.5277 7.58062 10.5018L7.61169 10.4697C7.79808 8.22365 7.82017 5.96692 7.67762 3.71744L7.60375 2.55283C7.53748 1.5073 8.31687 0.599849 9.36033 0.507688C10.448 0.411386 11.3989 1.23531 11.4583 2.32571L11.4849 2.81378C11.6336 5.53649 11.5418 8.26748 11.2101 10.974L11.5415 9.69891C11.8276 8.29682 11.9719 6.8692 11.9719 5.43812C11.9719 4.53998 12.6833 3.80304 13.5811 3.77163C14.4927 3.73953 15.261 4.44644 15.3049 5.35769L15.348 6.24996C15.4288 7.923 14.8551 10.8504 14.5431 12.4962L14.3798 13.3204" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0.99855 15.9141C0.377242 16.4319 0.335821 17.4118 0.876704 18.0839L3.393 21.2121C3.9791 21.9411 5.06122 22.0185 5.74535 21.3806L5.79643 21.333C6.42119 20.7503 6.48194 19.7814 5.93519 19.1252L3.13896 16.1216C3.13896 16.1216 2.08653 15.008 0.998895 15.9145L0.99855 15.9141Z" stroke="currentColor" strokeMiterlimit="10" />
                <path d="M12.1808 15.4665L8.94001 16.1803C8.04084 16.3785 7.16514 15.7648 7.04399 14.8521C6.93905 14.0603 7.44473 13.3158 8.21964 13.1214L10.5699 12.5319C14.0731 11.6531 17.0198 15.3133 15.3612 18.5216C15.2901 18.6594 15.2121 18.7954 15.1279 18.9289L14.3499 20.1609C13.4134 21.6434 11.9068 22.6744 10.1857 23.0099C8.92586 23.2557 7.61973 23.0437 6.50241 22.4124L5.25669 21.7089" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" />
                <path d="M11.0161 15.7229C11.0161 15.7229 8.92544 15.9583 7.40151 19.6596" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" />
                <path d="M7.07933 14.7494L4.18714 11.4403C3.49404 10.6471 2.26454 10.6343 1.55487 11.4126L1.46512 11.511C0.850374 12.1851 0.851064 13.2169 1.46685 13.8903L5.44219 18.2377C6.15117 19.0133 7.37687 19.0009 8.06998 18.2111C8.51318 17.7065 8.62052 17.012 8.39202 16.4156L8.25292 16.1015" stroke="currentColor" strokeMiterlimit="10" />
              </svg>
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default PartnersCall;
