import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SimpleText } from './components/SimpleText';
import { LatestWork } from './components/LatestWork';
import { TextSticky } from './components/TextSticky';
import { PartnersCall } from './components/PartnersCall';
import { MeetTheTeam } from './components/MeetTheTeam';
import { TechnologyPicker } from './components/TechnologyPicker';
import { Footer } from './components/Footer';
import { WorkPage } from './components/WorkPage';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { AdminPanel } from './components/AdminPanel';
import { AppRoute } from './components/Navbar';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const getProjectFromHash = (): number | null => {
    const match = window.location.hash.match(/project=(\d+)/);
    return match ? parseInt(match[1], 10) : null;
  };

  const getNeedsFromHash = (): string[] => {
    const match = window.location.hash.match(/needs=([^&]+)/);
    if (match) {
      try {
        return decodeURIComponent(match[1]).split(',').filter(Boolean);
      } catch {
        return [];
      }
    }
    return [];
  };

  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(getProjectFromHash);
  const [contactNeeds, setContactNeeds] = useState<string[]>(getNeedsFromHash);

  const [route, setRoute] = useState<AppRoute>(() => {
    const hash = window.location.hash.toLowerCase();
    if (hash.startsWith('#admin')) return 'admin';
    if (hash.startsWith('#work')) return 'work';
    if (hash.startsWith('#services')) return 'services';
    if (hash.startsWith('#about')) return 'about';
    if (hash.startsWith('#contact')) return 'contact';
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      const projId = getProjectFromHash();
      setSelectedProjectId(projId);
      const urlNeeds = getNeedsFromHash();
      if (urlNeeds.length > 0) {
        setContactNeeds(urlNeeds);
      }

      if (hash.startsWith('#admin')) {
        setRoute('admin');
      } else if (hash.startsWith('#work')) {
        setRoute('work');
      } else if (hash.startsWith('#services')) {
        setRoute('services');
      } else if (hash.startsWith('#about')) {
        setRoute('about');
      } else if (hash.startsWith('#contact')) {
        setRoute('contact');
      } else if (!hash || hash === '#home') {
        setRoute('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // When route changes, refresh ScrollTrigger and scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'instant' });
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [route]);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll with exact parameters from extracted bundles
    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.8
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  const handleNavigate = (newRoute: AppRoute, projectId?: number, needs?: string[]) => {
    setRoute(newRoute);
    if (projectId !== undefined) {
      setSelectedProjectId(projectId);
    } else {
      setSelectedProjectId(null);
    }

    if (needs !== undefined) {
      setContactNeeds(needs);
    }

    if (newRoute === 'admin') {
      window.location.hash = '#admin';
    } else if (newRoute === 'work') {
      window.location.hash = projectId ? `#work?project=${projectId}` : '#work';
    } else if (newRoute === 'services') {
      window.location.hash = '#services';
    } else if (newRoute === 'about') {
      window.location.hash = '#about';
    } else if (newRoute === 'contact') {
      if (needs && needs.length > 0) {
        const encoded = encodeURIComponent(needs.join(','));
        window.location.hash = `#contact?needs=${encoded}`;
      } else {
        window.location.hash = '#contact';
      }
    } else {
      window.location.hash = '#home';
    }
  };

  return (
    <div className="min-h-screen bg-[var(--clr-bg,#fdf9f9)] text-[var(--clr-text,#111111)] transition-colors duration-300 selection:bg-[#ff4f31] selection:text-white font-sans antialiased">
      {route !== 'admin' && <Navbar currentRoute={route} onNavigate={handleNavigate} />}
      <main>
        {route === 'admin' ? (
          <AdminPanel onNavigateHome={() => handleNavigate('home')} />
        ) : route === 'work' ? (
          <WorkPage 
            onNavigateHome={() => handleNavigate('home')} 
            initialProjectId={selectedProjectId}
          />
        ) : route === 'services' ? (
          <ServicesPage onNavigateContact={() => handleNavigate('contact')} />
        ) : route === 'about' ? (
          <AboutPage onNavigateContact={() => handleNavigate('contact')} />
        ) : route === 'contact' ? (
          <ContactPage 
            onNavigateHome={() => handleNavigate('home')} 
            initialSelectedServices={contactNeeds}
          />
        ) : (
          <>
            {/* [1] 3D Amphitheater Hero Section */}
            <HeroSection />

            {/* [2] Development partner statement */}
            <SimpleText />

            {/* [3] Latest Work showcase */}
            <LatestWork 
              onViewAllWork={() => handleNavigate('work')} 
              onSelectVideo={(projectId) => handleNavigate('work', projectId)}
            />

            {/* [4] Sticky 3-pillar development capabilities */}
            <TextSticky />

            {/* [5] The partner you call */}
            <PartnersCall onNavigateContact={() => handleNavigate('contact')} />

            {/* [6] Meet the team with centerpiece & member profiles */}
            <MeetTheTeam onNavigateAbout={() => handleNavigate('about')} />

            {/* [7] Interactive Technology Picker */}
            <TechnologyPicker 
              onNavigateContact={(needs) => handleNavigate('contact', undefined, needs)}
            />
          </>
        )}
      </main>
      {/* [8] Brussels & New York Studios Footer */}
      {route !== 'admin' && <Footer />}
    </div>
  );
}

export default App;
