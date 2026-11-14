import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, CheckCircle2, Phone, Mail } from 'lucide-react';
import { TextReveal } from './TextReveal';
import { usePortfolio } from '../context/PortfolioContext';

interface ContactPageProps {
  initialSelectedServices?: string[];
  onNavigateHome?: () => void;
}

function isOfficeOpen(timeZone: string, openHour = 9, closeHour = 17): boolean {
  try {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone,
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    });
    const parts = formatter.formatToParts(now);
    const weekday = parts.find((p) => p.type === 'weekday')?.value;
    const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10);
    const isWeekend = weekday === 'Sat' || weekday === 'Sun';
    return !isWeekend && hour >= openHour && hour < closeHour;
  } catch {
    return true;
  }
}

export const ContactPage: React.FC<ContactPageProps> = ({ 
  initialSelectedServices = [],
  onNavigateHome 
}) => {
  const { siteSettings } = usePortfolio();
  const instagramUrl = siteSettings?.contact?.socials?.instagram || 'https://www.instagram.com/mahadihasan9451/';
  const facebookUrl = siteSettings?.contact?.socials?.facebook || 'https://www.facebook.com/mahadi.hasan.385339';

  // Form State
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>(initialSelectedServices);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialSelectedServices && initialSelectedServices.length > 0) {
      setSelectedNeeds(initialSelectedServices);
    }
  }, [initialSelectedServices]);

  // Real-time Studio Open Status
  const [dhakaOpen, setDhakaOpen] = useState(true);

  useEffect(() => {
    setDhakaOpen(isOfficeOpen('Asia/Dhaka', 9, 21));
    const interval = setInterval(() => {
      setDhakaOpen(isOfficeOpen('Asia/Dhaka', 9, 21));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const removeNeed = (item: string) => {
    setSelectedNeeds((prev) => prev.filter((n) => n !== item));
  };

  const addNeed = (item: string) => {
    if (!selectedNeeds.includes(item)) {
      setSelectedNeeds((prev) => [...prev, item]);
    }
  };

  const defaultNeeds = [
    'YouTube Editing',
    'Short-Form & Reels',
    'Motion Graphics',
    'Thumbnail Design',
    'Color Grading',
    'Sound Design & Mixing',
    'Video Ads & Commercials',
    'Brand Visual Identity',
    'Podcast & Talking Head',
    'Social Media Graphics',
    'Documentary Style',
    'Creative Consultation'
  ];

  const availableNeeds = Array.from(new Set([...defaultNeeds, ...selectedNeeds]));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = 'Please enter your name';
    if (!company.trim()) newErrors.company = 'Please enter your company';
    if (!email.trim() || !email.includes('@')) newErrors.email = 'Please enter a valid email address';
    if (!message.trim()) newErrors.message = 'Please enter your message';
    if (!agreedToPrivacy) newErrors.privacy = 'You must agree to the privacy policy';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setMessage('');
    setAgreedToPrivacy(false);
    setSubmitted(false);
    setErrors({});
  };

  return (
    <div className="w-full bg-[var(--clr-bg,#fdf9f9)] text-[var(--clr-text,#12110b)] transition-colors duration-300">
      {/* ============================================================== */}
      {/* 1. HERO & INTERACTIVE FORM DUAL-COLUMN SECTION                 */}
      {/* ============================================================== */}
      <section 
        className="w-full pt-[clamp(6.5rem,8vw+2rem,10.5rem)] pb-[clamp(3.5rem,5vw,6rem)]"
        style={{ paddingInline: 'clamp(1.25rem, 8.8vw, 5.625rem)' }}
      >
        <div 
          className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          style={{ maxWidth: 'calc(98rem + clamp(1.25rem, 8.8vw, 5.625rem) * 2)' }}
        >
          {/* ----------------- LEFT COLUMN: TITLE & COMPACT OFFICES ----------------- */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-32">
            <div>
              <TextReveal
                as="h1"
                text="Contact us."
                className="font-normal tracking-[-0.03em] leading-[0.95] text-[var(--clr-text,#12110b)] mb-6"
                style={{
                  fontFamily: "'Season Mix', Georgia, serif",
                  fontSize: 'clamp(3.2rem, 5.5vw, 5.5rem)'
                }}
              />

              <p 
                className="text-base sm:text-lg leading-relaxed text-[var(--clr-text,#12110b)]/80 max-w-xl"
                style={{ fontFamily: "'Fustat', system-ui, -apple-system, sans-serif" }}
              >
                Interested in working together? Simply fill out the form on this page to start the conversation. 
                Already have a project brief or footage ready? Please send your details directly to{' '}
                <a 
                  href="mailto:mahadihasan20125@gmail.com" 
                  className="font-medium text-[#ff4f31] underline decoration-[#ff4f31]/40 hover:decoration-[#ff4f31] transition-colors"
                >
                  mahadihasan20125@gmail.com
                </a>
              </p>
            </div>

            {/* Compact Office Locations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-black/10 dark:border-white/10">
              {/* Dhaka Studio Card */}
              <article className="flex flex-col gap-3">
                <div className="w-8 h-8 flex items-center justify-center text-[#ff4f31]">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold tracking-tight flex items-center gap-2 text-[var(--clr-text,#12110b)]">
                    Dhaka, Bangladesh
                    <span 
                      className="inline-flex items-center gap-1.5 text-xs font-normal"
                      title={dhakaOpen ? "Dhaka Studio is currently open" : "Dhaka Studio is currently offline"}
                    >
                      <span className={`w-2 h-2 rounded-full ${dhakaOpen ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-400'}`} />
                    </span>
                  </h3>
                  <span className="text-xs font-medium text-[var(--clr-text,#12110b)]/60">Mahadi Hasan Creative Studio</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--clr-text,#12110b)]/75 leading-relaxed">
                  Jigarthala, Dhanmondi,<br />
                  Dhaka, Bangladesh
                </p>
                <div className="flex flex-col gap-1 text-xs sm:text-sm pt-1">
                  <a href="mailto:mahadihasan20125@gmail.com" className="hover:text-[#ff4f31] transition-colors">
                    mahadihasan20125@gmail.com
                  </a>
                  <a href="tel:+8801314632404" className="hover:text-[#ff4f31] transition-colors font-medium">
                    +880 1314-632404
                  </a>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--clr-text,#12110b)]/50 mt-1">
                    Saturday – Thursday (10am – 8pm GMT+6)
                  </span>
                </div>
              </article>

              {/* Worldwide / Remote Collaboration Card */}
              <article className="flex flex-col gap-3">
                <div className="w-8 h-8 flex items-center justify-center text-[#ff4f31]">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold tracking-tight flex items-center gap-2 text-[var(--clr-text,#12110b)]">
                    Worldwide & Remote
                    <span 
                      className="inline-flex items-center gap-1.5 text-xs font-normal"
                      title="Available for global commissions"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </span>
                  </h3>
                  <span className="text-xs font-medium text-[var(--clr-text,#12110b)]/60">Global Client Direct Inquiries</span>
                </div>
                <p className="text-xs sm:text-sm text-[var(--clr-text,#12110b)]/75 leading-relaxed">
                  Available globally for video editing, motion design & branding commissions.
                </p>
                <div className="flex flex-col gap-1 text-xs sm:text-sm pt-1">
                  <a href="mailto:mahadihasan20125@gmail.com" className="hover:text-[#ff4f31] transition-colors">
                    mahadihasan20125@gmail.com
                  </a>
                  <a 
                    href="https://wa.me/8801314632404" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[#ff4f31] transition-colors font-medium text-emerald-600 dark:text-emerald-400"
                  >
                    WhatsApp: 01314-632404
                  </a>
                  <div className="flex items-center gap-3 pt-0.5 text-xs text-[var(--clr-text,#12110b)]/80">
                    <a 
                      href={instagramUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-[#ff4f31] transition-colors font-medium inline-flex items-center gap-1"
                    >
                      Instagram ↗
                    </a>
                    <span className="opacity-30">•</span>
                    <a 
                      href={facebookUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-[#ff4f31] transition-colors font-medium inline-flex items-center gap-1"
                    >
                      Facebook ↗
                    </a>
                  </div>
                  <a 
                    href="mailto:mahadihasan20125@gmail.com?subject=Project%20Inquiry%20-%20Mahadi%20Hasan&body=Hello%20Mahadi,%20I%20would%20like%20to%20discuss%20a%20project."
                    className="text-[11px] uppercase tracking-wider text-[#ff4f31] font-semibold hover:underline mt-1"
                  >
                    Direct Email Inquiry &rarr;
                  </a>
                </div>
              </article>
            </div>
          </div>

          {/* ----------------- RIGHT COLUMN: THE INTERACTIVE CONTACT FORM ----------------- */}
          <div className="lg:col-span-7 bg-[var(--clr-beige,#f4efea)]/60 dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] rounded-3xl p-6 sm:p-10 shadow-sm backdrop-blur-sm">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center gap-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="max-w-md">
                  <h3 
                    className="text-3xl font-medium tracking-tight mb-3"
                    style={{ fontFamily: "'Season Mix', Georgia, serif" }}
                  >
                    Thank you, {name}!
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--clr-text,#12110b)]/70 leading-relaxed mb-6">
                    Your message has been safely received. I review every inquiry personally and will get back to you with insights and next steps within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--clr-text,#12110b)] text-[var(--clr-bg,#fdf9f9)] font-medium text-sm hover:opacity-90 transition-opacity"
                  >
                    Send another message &rarr;
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                <div className="flex items-center justify-between pb-3 border-b border-black/[0.08] dark:border-white/[0.08]">
                  <span className="text-xs text-[var(--clr-text,#12110b)]/60">
                    &ldquo;<span className="text-[#ff4f31] font-bold">*</span>&rdquo; indicates required fields
                  </span>
                  <span className="text-xs font-semibold text-[#ff4f31] uppercase tracking-wider">
                    Direct Inquiry
                  </span>
                </div>

                {/* Pre-selected Need Tags */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[var(--clr-text,#12110b)]/80">
                      Project Services / Needs
                    </label>
                    <span className="text-[11px] text-[var(--clr-text,#12110b)]/50">Click to add/remove</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {availableNeeds.map((need) => {
                      const isSelected = selectedNeeds.includes(need);
                      return (
                        <button
                          key={need}
                          type="button"
                          onClick={() => isSelected ? removeNeed(need) : addNeed(need)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                            isSelected
                              ? 'bg-[#ff4f31] text-white shadow-sm'
                              : 'bg-black/[0.04] dark:bg-white/[0.06] text-[var(--clr-text,#12110b)]/75 hover:bg-black/[0.08] dark:hover:bg-white/[0.1]'
                          }`}
                        >
                          <span>{need}</span>
                          {isSelected ? (
                            <span className="text-xs leading-none">&times;</span>
                          ) : (
                            <span className="text-xs leading-none">+</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Row 1: Name and Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="input_name" className="text-sm font-semibold tracking-tight text-[var(--clr-text,#12110b)]">
                      Name <span className="text-[#ff4f31]">*</span>
                    </label>
                    <input
                      id="input_name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                      }}
                      placeholder="e.g. Alexander Vance"
                      className={`w-full px-4 py-3 rounded-xl bg-transparent border text-sm sm:text-base outline-none transition-all placeholder:text-[var(--clr-text,#12110b)]/35 ${
                        errors.name 
                          ? 'border-red-500 bg-red-500/5' 
                          : 'border-black/15 dark:border-white/15 focus:border-[#ff4f31] focus:ring-1 focus:ring-[#ff4f31]'
                      }`}
                    />
                    {errors.name && <span className="text-xs text-red-500 font-medium">{errors.name}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="input_company" className="text-sm font-semibold tracking-tight text-[var(--clr-text,#12110b)]">
                      Company <span className="text-[#ff4f31]">*</span>
                    </label>
                    <input
                      id="input_company"
                      type="text"
                      value={company}
                      onChange={(e) => {
                        setCompany(e.target.value);
                        if (errors.company) setErrors((prev) => ({ ...prev, company: '' }));
                      }}
                      placeholder="e.g. Acme Studio"
                      className={`w-full px-4 py-3 rounded-xl bg-transparent border text-sm sm:text-base outline-none transition-all placeholder:text-[var(--clr-text,#12110b)]/35 ${
                        errors.company 
                          ? 'border-red-500 bg-red-500/5' 
                          : 'border-black/15 dark:border-white/15 focus:border-[#ff4f31] focus:ring-1 focus:ring-[#ff4f31]'
                      }`}
                    />
                    {errors.company && <span className="text-xs text-red-500 font-medium">{errors.company}</span>}
                  </div>
                </div>

                {/* Row 2: Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="input_email" className="text-sm font-semibold tracking-tight text-[var(--clr-text,#12110b)]">
                      Email <span className="text-[#ff4f31]">*</span>
                    </label>
                    <input
                      id="input_email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                      }}
                      placeholder="alexander@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-transparent border text-sm sm:text-base outline-none transition-all placeholder:text-[var(--clr-text,#12110b)]/35 ${
                        errors.email 
                          ? 'border-red-500 bg-red-500/5' 
                          : 'border-black/15 dark:border-white/15 focus:border-[#ff4f31] focus:ring-1 focus:ring-[#ff4f31]'
                      }`}
                    />
                    {errors.email && <span className="text-xs text-red-500 font-medium">{errors.email}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="input_phone" className="text-sm font-semibold tracking-tight text-[var(--clr-text,#12110b)]">
                      Phone <span className="text-xs font-normal text-[var(--clr-text,#12110b)]/50">(optional)</span>
                    </label>
                    <input
                      id="input_phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-transparent border border-black/15 dark:border-white/15 focus:border-[#ff4f31] focus:ring-1 focus:ring-[#ff4f31] text-sm sm:text-base outline-none transition-all placeholder:text-[var(--clr-text,#12110b)]/35"
                    />
                  </div>
                </div>

                {/* Row 3: Message with Character Counter */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="input_message" className="text-sm font-semibold tracking-tight text-[var(--clr-text,#12110b)]">
                      Message <span className="text-[#ff4f31]">*</span>
                    </label>
                    <span className="text-xs text-[var(--clr-text,#12110b)]/60 font-mono">
                      {message.length} of 600 max characters
                    </span>
                  </div>
                  <textarea
                    id="input_message"
                    rows={5}
                    maxLength={600}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors((prev) => ({ ...prev, message: '' }));
                    }}
                    placeholder="Tell me about your project, timeline, deliverables, or creative ambitions..."
                    className={`w-full px-4 py-3 rounded-xl bg-transparent border text-sm sm:text-base outline-none transition-all resize-y placeholder:text-[var(--clr-text,#12110b)]/35 ${
                      errors.message 
                        ? 'border-red-500 bg-red-500/5' 
                        : 'border-black/15 dark:border-white/15 focus:border-[#ff4f31] focus:ring-1 focus:ring-[#ff4f31]'
                    }`}
                  />
                  {errors.message && <span className="text-xs text-red-500 font-medium">{errors.message}</span>}
                </div>

                {/* Row 4: Privacy Consent */}
                <div className="flex flex-col gap-1">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={agreedToPrivacy}
                      onChange={(e) => {
                        setAgreedToPrivacy(e.target.checked);
                        if (errors.privacy) setErrors((prev) => ({ ...prev, privacy: '' }));
                      }}
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-[#ff4f31] focus:ring-[#ff4f31]"
                    />
                    <span className="text-xs sm:text-sm text-[var(--clr-text,#12110b)]/80 leading-snug">
                      I agree to the{' '}
                      <span className="text-[#ff4f31] underline">privacy policy</span>
                      {' '}and consent to being contacted regarding my inquiry.{' '}
                      <span className="text-[#ff4f31]">*</span>
                    </span>
                  </label>
                  {errors.privacy && <span className="text-xs text-red-500 font-medium pl-7">{errors.privacy}</span>}
                </div>

                {/* Row 5: Submit Button matching Weichie pill */}
                <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-between gap-4 pl-6 pr-2 py-2 rounded-full bg-[var(--clr-text,#12110b)] text-[var(--clr-bg,#fdf9f9)] font-medium text-sm sm:text-base transition-all duration-300 shadow-sm hover:opacity-90 group cursor-pointer"
                  >
                    <span>Send message</span>
                    <span 
                      className="w-8 h-8 rounded-full bg-[#ff4f31] text-white flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform duration-300"
                      aria-hidden="true"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>

                  <span className="text-xs text-[var(--clr-text,#12110b)]/50">
                    ⚡ Guaranteed reply within 24h
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};
