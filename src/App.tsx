import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SimpleText } from './components/SimpleText';
import { LatestWork } from './components/LatestWork';
import { TextSticky } from './components/TextSticky';
import { PartnersCall } from './components/PartnersCall';
import { MeetTheTeam } from './components/MeetTheTeam';
import { TechnologyPicker } from './components/TechnologyPicker';
import { Footer } from './components/Footer';

export function App() {
  useEffect(() => {
    // Initialize Lenis Smooth Scroll with exact parameters from extracted bundles
    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.8
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fdf9f9] text-[#111111] selection:bg-[#ff4f31] selection:text-white font-sans antialiased">
      <Navbar />
      <main>
        {/* [1] 3D Amphitheater Hero Section */}
        <HeroSection />

        {/* [2] Development partner statement */}
        <SimpleText />

        {/* [3] Latest Work showcase */}
        <LatestWork />

        {/* [4] Sticky 3-pillar development capabilities */}
        <TextSticky />

        {/* [5] The partner you call */}
        <PartnersCall />

        {/* [6] Meet the team with centerpiece & member profiles */}
        <MeetTheTeam />

        {/* [7] Interactive Technology Picker */}
        <TechnologyPicker />
      </main>
      {/* [8] Brussels & New York Studios Footer */}
      <Footer />
    </div>
  );
}

export default App;
