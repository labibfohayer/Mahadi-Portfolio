import React from 'react';

export function SimpleText() {
  return (
    <section className="simple-text py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="simple-text__body max-w-4xl">
        <div className="simple-text__content">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-serif font-normal leading-[1.1] tracking-tight mb-8 text-[#111111]">
            Development partner
          </h2>
          <p className="text-[clamp(1.15rem,2vw,1.4rem)] leading-[1.6] text-[#333333] max-w-2xl font-normal">
            We craft innovative, digital solutions for your business that will help you communicate with your clients through the digital world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SimpleText;
