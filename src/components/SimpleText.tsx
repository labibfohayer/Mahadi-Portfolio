import React from 'react';
import { TextReveal } from './TextReveal';

export function SimpleText() {
  return (
    <section className="relative w-full pt-16 sm:pt-24 pb-20 sm:pb-28 px-4 sm:px-6 bg-[var(--clr-bg,#fdf9f9)] transition-colors duration-300 overflow-hidden">
      <div className="max-w-[720px] mx-auto text-center flex flex-col items-center">
        {/* Title matching exact Weichie Season Mix 2-line centered layout with word reveal */}
        <TextReveal
          lines={["Visual", "storyteller"]}
          className="text-[clamp(2.75rem,5.2vw,4.75rem)] font-normal leading-[1.05] tracking-[-0.02em] text-[var(--clr-text,#12110b)] mb-6 sm:mb-8 text-center"
          style={{ fontFamily: "'Season Mix', Georgia, serif" }}
        />

        {/* Paragraph matching exact Weichie Fustat 3-line balanced body */}
        <p 
          className="text-[17px] sm:text-[19px] md:text-[20px] font-medium leading-[1.6] tracking-[-0.02em] text-[var(--clr-text,#12110b)] max-w-[580px] mx-auto text-center m-0"
          style={{ fontFamily: "'Fustat', system-ui, -apple-system, sans-serif" }}
        >
          Crafting compelling visual narratives frame by frame. Specializing in high-impact video editing and distinctive graphic design to captivate audiences and elevate brands.
        </p>
      </div>
    </section>
  );
}

export default SimpleText;
