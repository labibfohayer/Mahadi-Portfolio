import React, { useState, useRef, useEffect } from 'react';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  Search, 
  Save, 
  Download, 
  Upload, 
  RotateCcw, 
  Eye, 
  Lock, 
  Unlock, 
  FolderKanban, 
  FileText, 
  Image as ImageIcon, 
  Settings as SettingsIcon,
  CheckCircle2,
  AlertCircle,
  X,
  ArrowLeft,
  Video,
  Film
} from 'lucide-react';
import { usePortfolio, ProjectItem, SiteSettings } from '../context/PortfolioContext';

interface AdminPanelProps {
  onNavigateHome: () => void;
}

type AdminTab = 'projects' | 'content' | 'media' | 'settings';

export const AdminPanel: React.FC<AdminPanelProps> = ({ onNavigateHome }) => {
  const { 
    projects, 
    siteSettings, 
    addProject, 
    updateProject, 
    deleteProject, 
    updateSiteSettings, 
    resetToDefaults,
    exportBackup,
    importBackup
  } = usePortfolio();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('mahadi_admin_auth') === 'true';
  });
  const [passcodeAttempt, setPasscodeAttempt] = useState('');
  const [authError, setAuthError] = useState(false);

  // Active Tab
  const [activeTab, setActiveTab] = useState<AdminTab>('projects');

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('all');

  // Modal State for Project Create/Edit
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);

  // Project Form State
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState('Video Editing');
  const [formType, setFormType] = useState<'video' | 'image'>('video');
  const [formMedia, setFormMedia] = useState('');
  const [formPoster, setFormPoster] = useState('');
  const [formTag, setFormTag] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formClient, setFormClient] = useState('');
  const [formYear, setFormYear] = useState('');
  const [formRole, setFormRole] = useState('');
  const [formTools, setFormTools] = useState('');

  // Delete Confirmation Modal
  const [projectToDelete, setProjectToDelete] = useState<ProjectItem | null>(null);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Site Content Draft State
  const [contentDraft, setContentDraft] = useState<SiteSettings>(siteSettings);

  // Sync contentDraft whenever siteSettings updates from context/reset
  useEffect(() => {
    setContentDraft(siteSettings);
  }, [siteSettings]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcodeAttempt === siteSettings.admin.passcode) {
      setIsAuthenticated(true);
      sessionStorage.setItem('mahadi_admin_auth', 'true');
      setAuthError(false);
      showToast('Welcome back, Mahadi Hasan!');
    } else {
      setAuthError(true);
      setTimeout(() => setAuthError(false), 2000);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('mahadi_admin_auth');
    setPasscodeAttempt('');
  };

  // Open Create Modal
  const handleOpenCreateModal = () => {
    setEditingProject(null);
    setFormTitle('');
    setFormCategory('Video Editing');
    setFormType('video');
    setFormMedia('/videos/latest-work/slot-1-video-1.mp4');
    setFormPoster('/textures/video-posters/poster-1.webp');
    setFormTag('Cinematic');
    setFormDescription('');
    setFormClient('');
    setFormYear(new Date().getFullYear().toString());
    setFormRole('Video Editor & Colorist');
    setFormTools('Premiere Pro, After Effects, DaVinci Resolve');
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const handleOpenEditModal = (proj: ProjectItem) => {
    setEditingProject(proj);
    setFormTitle(proj.title);
    setFormCategory(proj.category);
    setFormType(proj.type);
    setFormMedia(proj.media);
    setFormPoster(proj.poster);
    setFormTag(proj.tag);
    setFormDescription(proj.description);
    setFormClient(proj.client || '');
    setFormYear(proj.year || '');
    setFormRole(proj.role || '');
    setFormTools(proj.tools || '');
    setIsModalOpen(true);
  };

  // Save Project (Create or Edit)
  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim()) {
      alert('Please enter a project title');
      return;
    }

    if (editingProject) {
      // Update
      updateProject(editingProject.id, {
        title: formTitle,
        category: formCategory,
        type: formType,
        media: formMedia,
        poster: formPoster,
        tag: formTag,
        description: formDescription,
        client: formClient,
        year: formYear,
        role: formRole,
        tools: formTools
      });
      showToast(`Updated "${formTitle}" successfully!`);
    } else {
      // Create
      addProject({
        title: formTitle,
        category: formCategory,
        type: formType,
        media: formMedia,
        poster: formPoster,
        tag: formTag,
        description: formDescription,
        client: formClient,
        year: formYear,
        role: formRole,
        tools: formTools
      });
      showToast(`Created new project "${formTitle}"!`);
    }
    setIsModalOpen(false);
  };

  // Confirm Delete
  const handleConfirmDelete = () => {
    if (projectToDelete) {
      deleteProject(projectToDelete.id);
      showToast(`Deleted "${projectToDelete.title}"`);
      setProjectToDelete(null);
    }
  };

  // Image / Poster File Upload Handler (reads as dataURL)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, setter: (val: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setter(event.target.result as string);
          showToast('Image loaded successfully!');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Save Site Content Draft
  const handleSaveContent = () => {
    updateSiteSettings(contentDraft);
    showToast('Site content and bio updated successfully!');
  };

  // Download Backup
  const handleDownloadBackup = () => {
    const jsonStr = exportBackup();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mahadi-portfolio-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Backup JSON downloaded successfully!');
  };

  // Upload Backup
  const handleUploadBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        if (content) {
          const ok = importBackup(content);
          if (ok) {
            showToast('Backup restored successfully!');
          } else {
            alert('Invalid backup JSON file.');
          }
        }
      };
      reader.readAsText(file);
    }
  };

  // Reset Confirmation
  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all portfolio data to factory defaults? All custom changes will be restored.')) {
      resetToDefaults();
      setContentDraft(siteSettings);
      showToast('Reset to factory defaults completed.');
    }
  };

  // Filtered Projects
  const filteredProjects = projects.filter(p => {
    const matchesCategory = selectedCategoryFilter === 'all' || 
      p.category.toLowerCase().replace(/\s+/g, '-').includes(selectedCategoryFilter.toLowerCase());
    const matchesSearch = searchQuery === '' || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Category filter options
  const categoryOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'video-editing', label: 'Video Editing' },
    { id: 'motion-graphics', label: 'Motion Graphics' },
    { id: 'graphic-design', label: 'Graphic Design' },
    { id: 'commercials-3d', label: 'Commercials & 3D' },
    { id: 'brand-identity', label: 'Brand Identity' },
    { id: 'color-sound', label: 'Color & Sound' }
  ];

  /* ------------------------------------------------------------- */
  /* SCREEN: PASSCODE LOGIN GATE                                   */
  /* ------------------------------------------------------------- */
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen w-full bg-[#12110b] text-[#f4efea] flex items-center justify-center p-4 selection:bg-[#ff4f31] selection:text-white overflow-hidden relative">
        <div className="w-full max-w-md bg-[#1a1916] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#ff4f31]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#ff4f31]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#ff4f31]/10 border border-[#ff4f31]/30 flex items-center justify-center text-[#ff4f31] mb-6 shadow-inner">
              <Lock className="w-8 h-8" />
            </div>

            <h1 
              className="text-3xl font-normal tracking-[-0.02em] text-white mb-2"
              style={{ fontFamily: "'Season Mix', Georgia, serif" }}
            >
              Mahadi Hasan CMS
            </h1>
            <p className="text-sm font-sans text-[#a09e99] mb-8">
              Enter your secret passcode to manage projects, photos, content, and website settings.
            </p>

            <form onSubmit={handleLogin} className="w-full space-y-4">
              <div className="relative">
                <input
                  type="password"
                  value={passcodeAttempt}
                  onChange={(e) => setPasscodeAttempt(e.target.value)}
                  placeholder="Enter Passcode (default: mahadi2026)"
                  autoFocus
                  className={`w-full px-5 py-4 rounded-xl bg-black/40 border text-white placeholder-white/30 text-center tracking-widest text-lg font-mono focus:outline-none transition-all ${
                    authError 
                      ? 'border-red-500 ring-2 ring-red-500/20 animate-shake' 
                      : 'border-white/15 focus:border-[#ff4f31] focus:ring-2 focus:ring-[#ff4f31]/20'
                  }`}
                />
              </div>

              {authError && (
                <p className="text-xs text-red-400 flex items-center justify-center gap-1.5 animate-fadeIn">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Incorrect passcode. Try default: <span className="font-mono text-white">mahadi2026</span>
                </p>
              )}

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#ff4f31] hover:bg-[#e03f23] text-white font-sans font-semibold text-base transition-all duration-200 shadow-lg shadow-[#ff4f31]/25 cursor-pointer active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <Unlock className="w-5 h-5" />
                <span>Unlock Admin Dashboard</span>
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/10 w-full flex items-center justify-between text-xs text-[#888880]">
              <button 
                type="button"
                onClick={onNavigateHome}
                className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Portfolio</span>
              </button>
              <span>Protected Session</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ------------------------------------------------------------- */
  /* SCREEN: AUTHENTICATED ADMIN DASHBOARD                         */
  /* ------------------------------------------------------------- */
  return (
    <div className="min-h-screen bg-[#0e0d0b] text-[#f4efea] selection:bg-[#ff4f31] selection:text-white pb-24 font-sans">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[9999] bg-[#ff4f31] text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 animate-slideUp font-medium text-sm border border-white/20">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Admin Bar */}
      <header className="sticky top-0 z-40 bg-[#161512]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#ff4f31] text-white flex items-center justify-center font-bold text-lg shadow-sm">
              M
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white text-base tracking-tight">Mahadi Hasan Studio</span>
                <span className="px-2 py-0.5 rounded-full bg-[#ff4f31]/20 border border-[#ff4f31]/30 text-[#ff4f31] text-[11px] font-mono uppercase tracking-wider">
                  Admin CMS
                </span>
              </div>
              <p className="text-[12px] text-[#8e8d87]">Full Site Management & Live Sync</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 text-sm font-medium border border-white/10 transition-colors cursor-pointer"
            >
              <Eye className="w-4 h-4 text-[#ff4f31]" />
              <span>Live Website</span>
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 text-sm font-medium border border-red-500/20 transition-colors cursor-pointer"
            >
              <Lock className="w-4 h-4" />
              <span>Lock</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4 mb-8">
          <button
            type="button"
            onClick={() => setActiveTab('projects')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${
              activeTab === 'projects'
                ? 'bg-[#ff4f31] text-white shadow-md shadow-[#ff4f31]/25'
                : 'bg-white/5 text-[#a09e99] hover:bg-white/10 hover:text-white'
            }`}
          >
            <FolderKanban className="w-4 h-4" />
            <span>Projects & Portfolio ({projects.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('content')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${
              activeTab === 'content'
                ? 'bg-[#ff4f31] text-white shadow-md shadow-[#ff4f31]/25'
                : 'bg-white/5 text-[#a09e99] hover:bg-white/10 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Story & Content Copy</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('media')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${
              activeTab === 'media'
                ? 'bg-[#ff4f31] text-white shadow-md shadow-[#ff4f31]/25'
                : 'bg-white/5 text-[#a09e99] hover:bg-white/10 hover:text-white'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Photos & Branding</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('settings')}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all cursor-pointer ${
              activeTab === 'settings'
                ? 'bg-[#ff4f31] text-white shadow-md shadow-[#ff4f31]/25'
                : 'bg-white/5 text-[#a09e99] hover:bg-white/10 hover:text-white'
            }`}
          >
            <SettingsIcon className="w-4 h-4" />
            <span>Backup & Settings</span>
          </button>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* TAB 1: PROJECTS MANAGEMENT (CRUD)                             */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-[#161512] p-4 rounded-2xl border border-white/10">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects by title, tag, or description..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#ff4f31]"
                />
              </div>

              {/* Add New Project Button */}
              <button
                type="button"
                onClick={handleOpenCreateModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#ff4f31] hover:bg-[#e03f23] text-white font-semibold text-sm transition-all shadow-md shadow-[#ff4f31]/20 cursor-pointer shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Project</span>
              </button>
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center gap-2">
              {categoryOptions.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategoryFilter(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer border ${
                    selectedCategoryFilter === cat.id
                      ? 'bg-white text-black border-white'
                      : 'bg-white/5 text-[#a09e99] border-white/10 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Projects Table / Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProjects.map((p) => (
                <div 
                  key={p.id}
                  className="bg-[#161512] border border-white/10 rounded-2xl overflow-hidden flex flex-col group hover:border-[#ff4f31]/50 transition-all duration-300"
                >
                  {/* Media / Poster Preview */}
                  <div className="relative aspect-video bg-black/60 overflow-hidden">
                    {p.type === 'video' ? (
                      <video 
                        src={p.media} 
                        poster={p.poster}
                        muted 
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <img 
                        src={p.media || p.poster} 
                        alt={p.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    
                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[10px] font-mono text-white/90 uppercase border border-white/15">
                        #{p.id}
                      </span>
                      {p.locked && (
                        <span className="px-2 py-0.5 rounded-md bg-amber-500/90 text-[10px] font-semibold text-black uppercase tracking-wider font-mono">
                          Locked #1
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded-md bg-[#ff4f31]/80 backdrop-blur-md text-[10px] font-medium text-white uppercase tracking-wider flex items-center gap-1">
                        {p.type === 'video' ? <Video className="w-2.5 h-2.5" /> : <ImageIcon className="w-2.5 h-2.5" />}
                        {p.type}
                      </span>
                    </div>

                    <div className="absolute top-2.5 right-2.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-medium text-white/90 border border-white/10">
                        {p.tag}
                      </span>
                    </div>
                  </div>

                  {/* Info Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[12px] text-[#ff4f31] font-mono uppercase tracking-wider mb-1">
                        {p.category}
                      </div>
                      <h3 className="text-base font-semibold text-white tracking-tight line-clamp-1 mb-1.5">
                        {p.title}
                      </h3>
                      <p className="text-xs text-[#999990] line-clamp-2 leading-relaxed mb-4">
                        {p.description}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                      <span className="text-[11px] text-[#777770]">
                        {p.year || '2026'}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleOpenEditModal(p)}
                          className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white text-xs font-medium border border-white/10 transition-colors flex items-center gap-1.5 cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5 text-[#ff4f31]" />
                          <span>Edit</span>
                        </button>
                        {p.locked ? (
                          <span
                            className="p-1.5 rounded-lg bg-white/5 text-white/30 border border-white/5 cursor-not-allowed"
                            title="Locked #1 project cannot be deleted"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setProjectToDelete(p)}
                            className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 transition-colors cursor-pointer"
                            title="Delete Project"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-16 bg-[#161512] rounded-2xl border border-white/10">
                <Film className="w-12 h-12 text-white/20 mx-auto mb-3" />
                <p className="text-base font-medium text-white/80">No projects found</p>
                <p className="text-xs text-white/40 mt-1">Try adjusting your search query or category filter</p>
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 2: CONTENT & BIO EDITOR                                   */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'content' && (
          <div className="space-y-8 max-w-4xl">
            {/* Hero Section Copy */}
            <div className="bg-[#161512] p-6 rounded-2xl border border-white/10 space-y-4">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <FileText className="w-5 h-5 text-[#ff4f31]" />
                <span>Hero Section Headline & Titles</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#a09e99] mb-1.5">Pre-Title Line</label>
                  <input
                    type="text"
                    value={contentDraft.hero.preTitle}
                    onChange={(e) => setContentDraft({
                      ...contentDraft,
                      hero: { ...contentDraft.hero, preTitle: e.target.value }
                    })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff4f31]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#a09e99] mb-1.5">Client Full Name</label>
                  <input
                    type="text"
                    value={contentDraft.hero.name}
                    onChange={(e) => setContentDraft({
                      ...contentDraft,
                      hero: { ...contentDraft.hero, name: e.target.value }
                    })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff4f31]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#a09e99] mb-1.5">Hero Subtitle / Tagline</label>
                <input
                  type="text"
                  value={contentDraft.hero.subtitle}
                  onChange={(e) => setContentDraft({
                    ...contentDraft,
                    hero: { ...contentDraft.hero, subtitle: e.target.value }
                  })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff4f31]"
                />
              </div>
            </div>

            {/* About / My Story Copy */}
            <div className="bg-[#161512] p-6 rounded-2xl border border-white/10 space-y-4">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <FileText className="w-5 h-5 text-[#ff4f31]" />
                <span>About Page — "My Story" Narrative & Bio</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#a09e99] mb-1.5">Section Kicker Tag</label>
                  <input
                    type="text"
                    value={contentDraft.about.kicker}
                    onChange={(e) => setContentDraft({
                      ...contentDraft,
                      about: { ...contentDraft.about, kicker: e.target.value }
                    })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff4f31]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#a09e99] mb-1.5">Section Heading</label>
                  <input
                    type="text"
                    value={contentDraft.about.title}
                    onChange={(e) => setContentDraft({
                      ...contentDraft,
                      about: { ...contentDraft.about, title: e.target.value }
                    })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff4f31]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#a09e99] mb-1.5">Story Paragraph 1 (with 120fps Light Flow effect)</label>
                <textarea
                  rows={4}
                  value={contentDraft.about.paragraph1}
                  onChange={(e) => setContentDraft({
                    ...contentDraft,
                    about: { ...contentDraft.about, paragraph1: e.target.value }
                  })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff4f31] leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#a09e99] mb-1.5">Story Paragraph 2</label>
                <textarea
                  rows={4}
                  value={contentDraft.about.paragraph2}
                  onChange={(e) => setContentDraft({
                    ...contentDraft,
                    about: { ...contentDraft.about, paragraph2: e.target.value }
                  })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff4f31] leading-relaxed"
                />
              </div>
            </div>

            {/* Contact & Social Information */}
            <div className="bg-[#161512] p-6 rounded-2xl border border-white/10 space-y-4">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <FileText className="w-5 h-5 text-[#ff4f31]" />
                <span>Contact Details & Social Media Links</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#a09e99] mb-1.5">Contact Email</label>
                  <input
                    type="email"
                    value={contentDraft.contact.email}
                    onChange={(e) => setContentDraft({
                      ...contentDraft,
                      contact: { ...contentDraft.contact, email: e.target.value }
                    })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff4f31]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#a09e99] mb-1.5">Phone / WhatsApp</label>
                  <input
                    type="text"
                    value={contentDraft.contact.phone}
                    onChange={(e) => setContentDraft({
                      ...contentDraft,
                      contact: { ...contentDraft.contact, phone: e.target.value }
                    })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff4f31]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#a09e99] mb-1.5">Location String</label>
                <input
                  type="text"
                  value={contentDraft.contact.location}
                  onChange={(e) => setContentDraft({
                    ...contentDraft,
                    contact: { ...contentDraft.contact, location: e.target.value }
                  })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff4f31]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-medium text-[#a09e99] mb-1.5">LinkedIn Profile URL</label>
                  <input
                    type="text"
                    value={contentDraft.contact.socials.linkedin}
                    onChange={(e) => setContentDraft({
                      ...contentDraft,
                      contact: {
                        ...contentDraft.contact,
                        socials: { ...contentDraft.contact.socials, linkedin: e.target.value }
                      }
                    })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff4f31]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#a09e99] mb-1.5">Instagram Profile URL</label>
                  <input
                    type="text"
                    value={contentDraft.contact.socials.instagram}
                    onChange={(e) => setContentDraft({
                      ...contentDraft,
                      contact: {
                        ...contentDraft.contact,
                        socials: { ...contentDraft.contact.socials, instagram: e.target.value }
                      }
                    })}
                    placeholder="https://www.instagram.com/mahadihasan9451/"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff4f31]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#a09e99] mb-1.5">Facebook Profile URL</label>
                  <input
                    type="text"
                    value={contentDraft.contact.socials.facebook || ''}
                    onChange={(e) => setContentDraft({
                      ...contentDraft,
                      contact: {
                        ...contentDraft.contact,
                        socials: { ...contentDraft.contact.socials, facebook: e.target.value }
                      }
                    })}
                    placeholder="https://www.facebook.com/mahadi.hasan.385339"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff4f31]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#a09e99] mb-1.5">YouTube Channel URL</label>
                  <input
                    type="text"
                    value={contentDraft.contact.socials.youtube}
                    onChange={(e) => setContentDraft({
                      ...contentDraft,
                      contact: {
                        ...contentDraft.contact,
                        socials: { ...contentDraft.contact.socials, youtube: e.target.value }
                      }
                    })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff4f31]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#a09e99] mb-1.5">X / Twitter URL</label>
                  <input
                    type="text"
                    value={contentDraft.contact.socials.twitter}
                    onChange={(e) => setContentDraft({
                      ...contentDraft,
                      contact: {
                        ...contentDraft.contact,
                        socials: { ...contentDraft.contact.socials, twitter: e.target.value }
                      }
                    })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff4f31]"
                  />
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={handleSaveContent}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#ff4f31] hover:bg-[#e03f23] text-white font-semibold text-base transition-all shadow-lg shadow-[#ff4f31]/25 cursor-pointer"
              >
                <Save className="w-5 h-5" />
                <span>Save All Content Changes</span>
              </button>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 3: PHOTOS & MEDIA MANAGER                                 */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'media' && (
          <div className="space-y-8 max-w-4xl">
            <div className="bg-[#161512] p-6 rounded-2xl border border-white/10 space-y-6">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <ImageIcon className="w-5 h-5 text-[#ff4f31]" />
                <span>Profile Photo & Personal Brand Media</span>
              </h2>

              {/* Photo Preview & File Picker */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-32 h-32 rounded-2xl overflow-hidden bg-black/60 border-2 border-[#ff4f31] shrink-0 shadow-xl flex items-center justify-center relative">
                  {contentDraft.about.photo ? (
                    <img 
                      src={contentDraft.about.photo} 
                      alt="Profile preview" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-white/40 text-xs text-center px-2">No photo selected</span>
                  )}
                </div>

                <div className="space-y-3 flex-1 w-full">
                  <div>
                    <label className="block text-xs font-medium text-[#a09e99] mb-1">Image URL / Path</label>
                    <input
                      type="text"
                      value={contentDraft.about.photo || ''}
                      onChange={(e) => setContentDraft({
                        ...contentDraft,
                        about: { ...contentDraft.about, photo: e.target.value }
                      })}
                      placeholder="/textures/team/mahadi-lead.webp or https://..."
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff4f31]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#a09e99] mb-1">Upload New Photo From Computer</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, (dataUrl) => {
                        setContentDraft({
                          ...contentDraft,
                          about: { ...contentDraft.about, photo: dataUrl }
                        });
                      })}
                      className="block w-full text-xs text-white/60 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-white/10 file:text-white hover:file:bg-white/20 file:cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  type="button"
                  onClick={handleSaveContent}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#ff4f31] hover:bg-[#e03f23] text-white font-medium text-sm transition-all shadow-md shadow-[#ff4f31]/20 cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>Update Photo</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 4: BACKUP & SETTINGS                                      */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'settings' && (
          <div className="space-y-8 max-w-4xl">
            {/* Passcode Setting */}
            <div className="bg-[#161512] p-6 rounded-2xl border border-white/10 space-y-4">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <Lock className="w-5 h-5 text-[#ff4f31]" />
                <span>Admin Passcode Security</span>
              </h2>

              <div className="max-w-md">
                <label className="block text-xs font-medium text-[#a09e99] mb-1.5">Change Admin Passcode</label>
                <input
                  type="text"
                  value={contentDraft.admin.passcode}
                  onChange={(e) => setContentDraft({
                    ...contentDraft,
                    admin: { ...contentDraft.admin, passcode: e.target.value }
                  })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white font-mono text-sm focus:outline-none focus:border-[#ff4f31]"
                />
                <p className="text-[11px] text-[#777770] mt-1.5">
                  Keep this passcode safe. You will need it whenever accessing the Admin CMS.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleSaveContent}
                  className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors cursor-pointer"
                >
                  Update Passcode
                </button>
              </div>
            </div>

            {/* Backup & Portability */}
            <div className="bg-[#161512] p-6 rounded-2xl border border-white/10 space-y-4">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2 border-b border-white/10 pb-3">
                <Download className="w-5 h-5 text-[#ff4f31]" />
                <span>Data Backup & Portability</span>
              </h2>

              <p className="text-xs text-[#a09e99] leading-relaxed">
                Download a complete JSON snapshot of all your projects, custom copy, photos, and settings. You can transfer this backup to any computer or restore it anytime.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={handleDownloadBackup}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/15 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#ff4f31]" />
                  <span>Download Backup JSON</span>
                </button>

                <label className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/90 text-sm font-medium border border-white/10 transition-colors cursor-pointer">
                  <Upload className="w-4 h-4 text-[#ff4f31]" />
                  <span>Restore from JSON File</span>
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleUploadBackup}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Factory Reset */}
            <div className="bg-red-950/20 p-6 rounded-2xl border border-red-500/20 space-y-3">
              <h2 className="text-base font-semibold text-red-400 flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                <span>Factory Reset Safeguard</span>
              </h2>
              <p className="text-xs text-red-300/70 leading-relaxed">
                If you ever want to revert everything back to the initial sample projects and default typography, you can perform a factory reset.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All to Factory Defaults</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MODAL: CREATE / EDIT PROJECT                                  */}
      {/* ------------------------------------------------------------- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#181714] border border-white/15 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative animate-scaleUp">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#ff4f31]/20 text-[#ff4f31] flex items-center justify-center">
                  {editingProject ? <Edit3 className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
                <h3 className="text-xl font-semibold text-white tracking-tight">
                  {editingProject ? `Edit Project: ${editingProject.title}` : 'Add New Portfolio Project'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSaveProject} className="space-y-5">
              {/* Title & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#a09e99] mb-1.5">Project Title *</label>
                  <input
                    type="text"
                    required
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    placeholder="e.g. 3D Camera Motion"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff4f31]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#a09e99] mb-1.5">Category *</label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#201f1b] border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff4f31]"
                  >
                    <option value="Video Editing">Video Editing</option>
                    <option value="Motion Graphics">Motion Graphics</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Commercials & 3D">Commercials & 3D</option>
                    <option value="Color & Sound">Color & Sound</option>
                    <option value="Brand Identity">Brand Identity</option>
                  </select>
                </div>
              </div>

              {/* Type & Tag */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#a09e99] mb-1.5">Media Type *</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormType('video')}
                      className={`py-2 rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer border ${
                        formType === 'video'
                          ? 'bg-[#ff4f31] text-white border-[#ff4f31]'
                          : 'bg-black/40 text-white/70 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>Video</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormType('image')}
                      className={`py-2 rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer border ${
                        formType === 'image'
                          ? 'bg-[#ff4f31] text-white border-[#ff4f31]'
                          : 'bg-black/40 text-white/70 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>Static Image</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#a09e99] mb-1.5">Badge Tag *</label>
                  <input
                    type="text"
                    value={formTag}
                    onChange={(e) => setFormTag(e.target.value)}
                    placeholder="e.g. 3D & VFX, Narrative, Commercial"
                    className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff4f31]"
                  />
                </div>
              </div>

              {/* Media URL / Source */}
              <div>
                <label className="block text-xs font-medium text-[#a09e99] mb-1.5">Media Source URL or Path *</label>
                <input
                  type="text"
                  required
                  value={formMedia}
                  onChange={(e) => setFormMedia(e.target.value)}
                  placeholder="/videos/latest-work/slot-1-video-1.mp4 or https://..."
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff4f31]"
                />
              </div>

              {/* Poster / Thumbnail Image with Live Preview */}
              <div>
                <label className="block text-xs font-medium text-[#a09e99] mb-1.5">Poster / Thumbnail Image</label>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-14 rounded-lg bg-black/50 border border-white/10 overflow-hidden shrink-0 flex items-center justify-center">
                    {formPoster ? (
                      <img src={formPoster} alt="Poster preview" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-[10px] text-white/30">No poster</span>
                    )}
                  </div>
                  <input
                    type="text"
                    value={formPoster}
                    onChange={(e) => setFormPoster(e.target.value)}
                    placeholder="/textures/video-posters/poster-1.webp"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff4f31]"
                  />
                </div>
              </div>

              {/* Description / Summary */}
              <div>
                <label className="block text-xs font-medium text-[#a09e99] mb-1.5">Description / Case Study Summary</label>
                <textarea
                  rows={3}
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="Detail the storytelling, editing style, pacing, and client impact..."
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff4f31] leading-relaxed"
                />
              </div>

              {/* Optional Meta: Client, Year, Role, Tools */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div>
                  <label className="block text-[11px] font-medium text-[#a09e99] mb-1">Client</label>
                  <input
                    type="text"
                    value={formClient}
                    onChange={(e) => setFormClient(e.target.value)}
                    placeholder="Brand / Creator"
                    className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-[#ff4f31]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#a09e99] mb-1">Year</label>
                  <input
                    type="text"
                    value={formYear}
                    onChange={(e) => setFormYear(e.target.value)}
                    placeholder="2026"
                    className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-[#ff4f31]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#a09e99] mb-1">Role</label>
                  <input
                    type="text"
                    value={formRole}
                    onChange={(e) => setFormRole(e.target.value)}
                    placeholder="Lead Editor"
                    className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-[#ff4f31]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#a09e99] mb-1">Tools</label>
                  <input
                    type="text"
                    value={formTools}
                    onChange={(e) => setFormTools(e.target.value)}
                    placeholder="Premiere, AE"
                    className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-[#ff4f31]"
                  />
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#ff4f31] hover:bg-[#e03f23] text-white font-semibold text-sm transition-all shadow-md shadow-[#ff4f31]/20 cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingProject ? 'Save Changes' : 'Create Project'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODAL: DELETE CONFIRMATION                                    */}
      {/* ------------------------------------------------------------- */}
      {projectToDelete && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1a1916] border border-white/15 rounded-2xl max-w-md w-full p-6 shadow-2xl text-center animate-scaleUp">
            <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-400 mx-auto flex items-center justify-center mb-4">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Delete Project?</h3>
            <p className="text-xs text-[#a09e99] mb-6 leading-relaxed">
              Are you sure you want to delete <span className="font-semibold text-white">"{projectToDelete.title}"</span>? This will immediately remove it from your live portfolio.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setProjectToDelete(null)}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-semibold transition-all shadow-md shadow-red-600/30 cursor-pointer"
              >
                Yes, Delete Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
