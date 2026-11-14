import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import initialProjectsData from '../data/userProjects.json';

export interface ProjectItem {
  id: number;
  type: 'video' | 'image';
  title: string;
  category: string;
  media: string;
  poster: string;
  tag: string;
  description: string;
  client?: string;
  year?: string;
  role?: string;
  tools?: string;
  aspectRatio?: string;
  featured?: boolean;
  locked?: boolean;
}

export interface SiteSettings {
  hero: {
    preTitle: string;
    name: string;
    subtitle: string;
    avatar?: string;
  };
  about: {
    kicker: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    photo?: string;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
    socials: {
      linkedin: string;
      instagram: string;
      facebook: string;
      youtube: string;
      twitter: string;
      behance: string;
    };
  };
  typography: {
    headingFont: string;
    accentColor: string;
  };
  admin: {
    passcode: string;
  };
}

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  hero: {
    preTitle: 'The official portfolio',
    name: 'Mahadi Hasan',
    subtitle: 'crafting visual excellence',
    avatar: ''
  },
  about: {
    kicker: 'MY JOURNEY',
    title: 'My Story',
    paragraph1: 'I am Mahadi Hasan, a passionate video editor and graphic designer creating compelling visual content for ambitious creators, high-growth brands, and visionary businesses. My work harnesses a rich blend of rhythmic pacing, cinematic color science, and striking graphic design, ensuring that every project not only stops the scroll but drives meaningful audience engagement.',
    paragraph2: 'With a deep background in retention editing, motion graphics, and brand identity systems, I help creators and companies stand out in saturated digital feeds. From raw camera footage to final broadcast-ready masters, I obsess over every cut, keyframe, sound effect, and pixel.',
    photo: '/textures/team/mahadi-lead.webp'
  },
  contact: {
    email: 'contact@mahadihasan.com',
    phone: '+880 1700 000000',
    location: 'Dhaka, Bangladesh • Available Worldwide',
    socials: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://www.instagram.com/mahadihasan9451/',
      facebook: 'https://www.facebook.com/mahadi.hasan.385339',
      youtube: 'https://youtube.com',
      twitter: 'https://x.com',
      behance: 'https://behance.net'
    }
  },
  typography: {
    headingFont: "'Season Mix', Georgia, serif",
    accentColor: '#ff4f31'
  },
  admin: {
    passcode: 'mahadi2026'
  }
};

const STORAGE_KEY_PROJECTS = 'mahadi_portfolio_projects_v2';
const STORAGE_KEY_SETTINGS = 'mahadi_portfolio_settings_v1';

interface PortfolioContextType {
  projects: ProjectItem[];
  siteSettings: SiteSettings;
  addProject: (newProject: Omit<ProjectItem, 'id'>) => ProjectItem;
  updateProject: (id: number, fields: Partial<ProjectItem>) => void;
  deleteProject: (id: number) => void;
  updateSiteSettings: (settingsUpdate: Partial<SiteSettings> | ((prev: SiteSettings) => SiteSettings)) => void;
  resetToDefaults: () => void;
  exportBackup: () => string;
  importBackup: (jsonString: string) => boolean;
}

const PortfolioContext = createContext<PortfolioContextType | null>(null);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize projects from localStorage or default JSON
  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROJECTS) || localStorage.getItem('mahadi_portfolio_projects_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Guarantee that the locked #1 showreel project (Mahadi Hasan Feature) is at index 0
          const lockedIdx = parsed.findIndex(p => 
            p.title === 'Mahadi Hasan Feature' || 
            (p.media && p.media.includes('slot-3-video-1')) ||
            p.tag === 'Showreel'
          );
          if (lockedIdx > 0) {
            const [lockedItem] = parsed.splice(lockedIdx, 1);
            lockedItem.id = 1;
            lockedItem.locked = true;
            lockedItem.featured = true;
            parsed.unshift(lockedItem);
            // Re-index remaining items sequentially
            parsed.forEach((p, idx) => { p.id = idx + 1; });
          } else if (lockedIdx === 0) {
            parsed[0].id = 1;
            parsed[0].locked = true;
            parsed[0].featured = true;
          }
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Failed to parse saved projects from localStorage:', e);
    }
    return initialProjectsData as ProjectItem[];
  });

  // Initialize site settings from localStorage or default
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SETTINGS);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...DEFAULT_SITE_SETTINGS,
          ...parsed,
          hero: { ...DEFAULT_SITE_SETTINGS.hero, ...(parsed.hero || {}) },
          about: { ...DEFAULT_SITE_SETTINGS.about, ...(parsed.about || {}) },
          contact: { 
            ...DEFAULT_SITE_SETTINGS.contact, 
            ...(parsed.contact || {}),
            socials: { 
              ...DEFAULT_SITE_SETTINGS.contact.socials, 
              ...(parsed.contact?.socials || {}),
              instagram: (parsed.contact?.socials?.instagram && parsed.contact.socials.instagram !== 'https://instagram.com')
                ? parsed.contact.socials.instagram
                : 'https://www.instagram.com/mahadihasan9451/',
              facebook: (parsed.contact?.socials?.facebook && parsed.contact.socials.facebook !== 'https://facebook.com')
                ? parsed.contact.socials.facebook
                : 'https://www.facebook.com/mahadi.hasan.385339',
            }
          },
          typography: { ...DEFAULT_SITE_SETTINGS.typography, ...(parsed.typography || {}) },
          admin: { ...DEFAULT_SITE_SETTINGS.admin, ...(parsed.admin || {}) }
        };
      }
    } catch (e) {
      console.warn('Failed to parse saved settings from localStorage:', e);
    }
    return DEFAULT_SITE_SETTINGS;
  });

  // Sync projects to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_PROJECTS, JSON.stringify(projects));
    } catch (e) {
      console.error('Failed to save projects to localStorage:', e);
    }
  }, [projects]);

  // Sync siteSettings to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(siteSettings));
    } catch (e) {
      console.error('Failed to save settings to localStorage:', e);
    }
  }, [siteSettings]);

  // Add Project
  const addProject = useCallback((newProjectData: Omit<ProjectItem, 'id'>): ProjectItem => {
    const nextId = projects.reduce((max, p) => (p.id > max ? p.id : max), 0) + 1;
    const projectWithId: ProjectItem = {
      ...newProjectData,
      id: nextId
    };
    // Ensure locked #1 project remains locked at index 0
    setProjects(prev => {
      if (prev.length > 0 && prev[0].locked) {
        return [prev[0], projectWithId, ...prev.slice(1)];
      }
      return [projectWithId, ...prev];
    });
    return projectWithId;
  }, [projects]);

  // Update Project
  const updateProject = useCallback((id: number, fields: Partial<ProjectItem>) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...fields } : p));
  }, []);

  // Delete Project (preserve locked #1 project)
  const deleteProject = useCallback((id: number) => {
    setProjects(prev => prev.filter(p => !(p.id === id && p.locked)));
  }, []);

  // Update Site Settings
  const updateSiteSettings = useCallback((settingsUpdate: Partial<SiteSettings> | ((prev: SiteSettings) => SiteSettings)) => {
    setSiteSettings(prev => {
      if (typeof settingsUpdate === 'function') {
        return settingsUpdate(prev);
      }
      return {
        ...prev,
        ...settingsUpdate,
        hero: { ...prev.hero, ...(settingsUpdate.hero || {}) },
        about: { ...prev.about, ...(settingsUpdate.about || {}) },
        contact: {
          ...prev.contact,
          ...(settingsUpdate.contact || {}),
          socials: { ...prev.contact.socials, ...(settingsUpdate.contact?.socials || {}) }
        },
        typography: { ...prev.typography, ...(settingsUpdate.typography || {}) },
        admin: { ...prev.admin, ...(settingsUpdate.admin || {}) }
      };
    });
  }, []);

  // Reset to Factory Defaults
  const resetToDefaults = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY_PROJECTS);
    localStorage.removeItem('mahadi_portfolio_projects_v1');
    localStorage.removeItem(STORAGE_KEY_SETTINGS);
    setProjects(initialProjectsData as ProjectItem[]);
    setSiteSettings(DEFAULT_SITE_SETTINGS);
  }, []);

  // Export Backup
  const exportBackup = useCallback((): string => {
    const backupData = {
      version: 1,
      exportedAt: new Date().toISOString(),
      projects,
      siteSettings
    };
    return JSON.stringify(backupData, null, 2);
  }, [projects, siteSettings]);

  // Import Backup
  const importBackup = useCallback((jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.projects && Array.isArray(parsed.projects)) {
        setProjects(parsed.projects);
      }
      if (parsed.siteSettings) {
        setSiteSettings(prev => ({
          ...prev,
          ...parsed.siteSettings
        }));
      }
      return true;
    } catch (e) {
      console.error('Failed to import backup:', e);
      return false;
    }
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        siteSettings,
        addProject,
        updateProject,
        deleteProject,
        updateSiteSettings,
        resetToDefaults,
        exportBackup,
        importBackup
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = (): PortfolioContextType => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
