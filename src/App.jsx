import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Box,
  Code2,
  Zap,
  Monitor,
  Brain,
  Radio,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Send,
  FolderGit2,
  X,
  Menu,
} from 'lucide-react';
import { portfolioData } from './data/portfolioData';

function TechBadgeIcon({ type }) {
  switch (type) {
    case 'python':
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <path
            d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.766s3.24.052 3.24-3.148V3.202S18.28 0 11.914 0zm-3.208 1.85c.578 0 1.046.47 1.046 1.048 0 .578-.468 1.046-1.046 1.046a1.047 1.047 0 0 1-1.047-1.046c0-.579.469-1.048 1.047-1.048z"
            fill="#3776AB"
          />
          <path
            d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752H11.98v-.826h8.12S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.451s-3.24-.052-3.24 3.148v5.292S5.72 24 12.086 24zm3.208-1.85a1.047 1.047 0 0 1-1.046-1.048c0-.578.468-1.046 1.046-1.046.578 0 1.047.468 1.047 1.046 0 .579-.469 1.048-1.047 1.048z"
            fill="#FFD43B"
          />
        </svg>
      );
    case 'react':
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="-11.5 -10.232 23 20.463" fill="none">
          <circle r="2.05" fill="#087EA4" />
          <g stroke="#087EA4" strokeWidth="1.2">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case 'node':
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l7.44 4.3c.46.26 1.04.26 1.5 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2z"
            fill="#339933"
          />
          <path
            d="M14.5 14.5c0 1.1-.9 1.75-2.25 1.75-1.15 0-1.95-.45-2.25-1.3l1.15-.65c.2.5.6.75 1.15.75.6 0 .95-.25.95-.65 0-.4-.3-.55-1.05-.75-1-.25-1.95-.6-1.95-1.8 0-1.05.85-1.7 2.1-1.7 1.05 0 1.8.4 2.15 1.2l-1.1.65c-.2-.4-.55-.65-1.05-.65-.5 0-.85.25-.85.55 0 .35.3.5 1.05.7 1 .25 2 .6 2 1.8z"
            fill="#FFFFFF"
          />
        </svg>
      );
    case 'sql':
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="5" rx="8" ry="3" fill="#2563EB" />
          <path
            d="M4 5v7c0 1.66 3.58 3 8 3s8-1.34 8-3V5"
            stroke="#2563EB"
            strokeWidth="1.8"
            fill="#3B82F6"
            fillOpacity="0.2"
          />
          <path
            d="M4 12v7c0 1.66 3.58 3 8 3s8-1.34 8-3v-7"
            stroke="#2563EB"
            strokeWidth="1.8"
            fill="#3B82F6"
            fillOpacity="0.35"
          />
        </svg>
      );
    case 'flask':
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 3h6m-5 0v5.172a2 2 0 0 1-.586 1.414l-4.828 4.828A2 2 0 0 0 4 15.828V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3.172a2 2 0 0 0-.586-1.414l-4.828-4.828A2 2 0 0 1 14 8.172V3"
            stroke="#1C1917"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M6.5 15h11" stroke="#047857" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'mongo':
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C8.5 6.2 7 9.8 7 13.2c0 3.6 2.2 6.2 4.6 7.3l.4 1.5.4-1.5c2.4-1.1 4.6-3.7 4.6-7.3C17 9.8 15.5 6.2 12 2z"
            fill="#10AA50"
          />
          <path d="M12 4.5v16" stroke="#A7F3D0" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case 'aws':
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <path
            d="M6.5 16.5c3.3 2.1 7.7 2.1 11 0"
            stroke="#EA580C"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16.5 14.8l1.7 1.7-2.2.7"
            stroke="#EA580C"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 12.5a3.5 3.5 0 0 1 .4-6.96A5 5 0 0 1 17 7a3 3 0 0 1 .5 5.96H7z"
            fill="#F97316"
            fillOpacity="0.2"
            stroke="#EA580C"
            strokeWidth="1.6"
          />
        </svg>
      );
    case 'docker':
      return (
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="10" width="2.5" height="2.2" rx="0.3" fill="#0284C7" />
          <rect x="7.2" y="10" width="2.5" height="2.2" rx="0.3" fill="#0284C7" />
          <rect x="10.4" y="10" width="2.5" height="2.2" rx="0.3" fill="#0284C7" />
          <rect x="7.2" y="7.2" width="2.5" height="2.2" rx="0.3" fill="#0284C7" />
          <rect x="10.4" y="7.2" width="2.5" height="2.2" rx="0.3" fill="#0284C7" />
          <rect x="10.4" y="4.4" width="2.5" height="2.2" rx="0.3" fill="#0284C7" />
          <path
            d="M2.5 13.2h13.8c.9 0 1.7-.4 2.3-1.1.7.3 1.6.3 2.4-.2-.3 1.1-1 1.9-2 2.2-.6 3.3-3.6 5.4-7.9 5.4-4.7 0-7.9-2.2-8.6-6.3z"
            fill="#0EA5E9"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function App() {
  const { profile, techBadges, metrics, whatIBuild, projects, journey } = portfolioData;

  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 4);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(`[Portfolio] ${contactForm.subject} — ${contactForm.name}`);
    const mailBody = encodeURIComponent(
      `Hi Osama,\n\n${contactForm.message}\n\nBest,\n${contactForm.name}\n${contactForm.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${mailSubject}&body=${mailBody}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#1C1917] relative selection:bg-emerald-600/20 selection:text-emerald-950">
      {/* Warm Cream Ambient Glows */}
      <div className="fixed top-[-10%] right-[5%] w-[540px] h-[540px] rounded-full bg-amber-300/20 blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-[25%] left-[-10%] w-[460px] h-[460px] rounded-full bg-emerald-400/10 blur-[140px] pointer-events-none z-0" />

      {/* Top Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#FAF6EE]/95 border-b border-[#E5DEC9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2">
          {/* Brand Logo */}
          <a href="#about" className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-700 text-[#FAF6EE] flex items-center justify-center font-display font-bold text-xs sm:text-sm shadow-sm shrink-0">
              OK
            </div>
            <div className="min-w-0">
              <div className="font-display font-bold text-[#1C1917] text-sm sm:text-base leading-tight truncate">
                {profile.name}
              </div>
              <div className="text-[10px] sm:text-[11px] text-[#6B635B] mt-0.5 truncate">
                {profile.subtitle}
              </div>
            </div>
          </a>

          {/* Center Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-[#57534E]">
            <a href="#about" className="hover:text-emerald-700 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-emerald-700 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-emerald-700 transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-emerald-700 transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-emerald-700 transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA + Mobile Menu Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-[#FAF6EE] font-semibold text-xs sm:text-sm transition-all shadow-sm"
            >
              <span>Let’s Talk</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-xl bg-[#FFFDF9] border border-[#E5DEC9] text-[#1C1917]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-[#E5DEC9] bg-[#FAF6EE] px-4 py-3 flex flex-col gap-2.5 text-sm font-medium text-[#44403C]">
            {[
              { label: 'About', href: '#about' },
              { label: 'Skills', href: '#skills' },
              { label: 'Projects', href: '#projects' },
              { label: 'Experience', href: '#experience' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 px-2 rounded-lg hover:bg-[#F3EDE2] hover:text-emerald-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-20 sm:pb-24 space-y-16 sm:space-y-24">
        {/* HERO SECTION */}
        <section id="about" className="space-y-8 sm:space-y-12 scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left 7 Cols: Headline, Bio, CTAs */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2.5 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-emerald-700 font-semibold">
                <span className="w-5 sm:w-6 h-[2px] bg-emerald-700" />
                <span>{profile.heroLabel}</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] leading-[1.22] sm:leading-[1.2] lg:leading-[1.18]">
                I build useful digital products, from{' '}
                <span className="text-teal-700">AI prototypes</span> to{' '}
                <span className="text-emerald-700">production-ready</span> web apps.
              </h1>

              <p className="text-[#57534E] text-sm sm:text-base leading-relaxed">
                {profile.bio}
              </p>

              {/* CTA Buttons */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 pt-1">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-[#FAF6EE] font-semibold text-xs sm:text-sm shadow-md shadow-emerald-900/10 transition-all"
                >
                  <FolderGit2 className="w-4 h-4 shrink-0" />
                  <span>View Projects</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-xl bg-[#FFFDF9] hover:bg-[#F3EDE2] border border-[#DED6C6] text-[#1C1917] font-medium text-xs sm:text-sm transition-all shadow-sm"
                >
                  <Mail className="w-4 h-4 text-[#6B635B] shrink-0" />
                  <span>Contact Me</span>
                </a>
              </div>
            </div>

            {/* Right 5 Cols: Availability Card + Tech Stack Card */}
            <div className="lg:col-span-5 space-y-4">
              {/* Availability Status Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFDF9] border border-[#E5DEC9] shadow-sm space-y-3.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1C1917]">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse shrink-0" />
                    <span>{profile.availabilityTitle}</span>
                  </div>
                  <div className="px-2.5 py-1 rounded-lg bg-[#F5EFE4] border border-[#E5DEC9] flex items-center gap-1.5 text-[11px] sm:text-xs text-[#44403C] shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{profile.location}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {profile.availabilityText}
                </p>
              </div>

              {/* Tech Stack Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#FFFDF9] border border-[#E5DEC9] shadow-sm space-y-3.5">
                <div className="text-xs font-mono uppercase tracking-wider text-[#78716C]">
                  Core Technologies
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2.5">
                  {techBadges.map((badge) => (
                    <div
                      key={badge.name}
                      className="px-3 py-2.5 rounded-xl bg-[#FAF6EE] border border-[#E5DEC9] flex items-center gap-2 text-xs font-medium text-[#292524] hover:border-emerald-600/40 transition-colors"
                    >
                      <TechBadgeIcon type={badge.icon} />
                      <span className="truncate">{badge.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4-Column Unified Metrics Bar */}
          <div className="rounded-2xl bg-[#FFFDF9] border border-[#E5DEC9] shadow-sm grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-x divide-[#E5DEC9]">
            {metrics.map((m) => {
              const Icon =
                m.icon === 'briefcase'
                  ? Briefcase
                  : m.icon === 'cube'
                  ? Box
                  : m.icon === 'code'
                  ? Code2
                  : Zap;
              return (
                <div key={m.label} className="p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-700/10 border border-emerald-700/20 flex items-center justify-center text-emerald-700 shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display text-sm sm:text-lg font-bold text-[#1C1917] truncate">
                      {m.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#6B635B] truncate">{m.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* WHAT I BUILD SECTION */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[2px] bg-emerald-700" />
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1C1917]">
                What I Build
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#57534E] max-w-md">
              I work at the intersection of web development and artificial intelligence to build practical solutions for real-world problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatIBuild.map((item) => {
              const Icon =
                item.icon === 'monitor' ? Monitor : item.icon === 'brain' ? Brain : Radio;
              return (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#E5DEC9] hover:border-emerald-700/40 shadow-sm transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-emerald-700/10 border border-emerald-700/20 flex items-center justify-center text-emerald-700 mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#1C1917]">{item.title}</h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-[#57534E] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <span className="text-emerald-700 group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SELECTED PROJECTS SECTION */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[2px] bg-emerald-700" />
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1C1917]">
                Selected Projects
              </h2>
            </div>
            <button
              onClick={() => setShowAllProjects((prev) => !prev)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 cursor-pointer"
            >
              <span>
                {showAllProjects ? 'Show less projects' : `View more projects (${projects.length})`}
              </span>
              <ArrowRight
                className={`w-3.5 h-3.5 transition-transform ${showAllProjects ? '-rotate-90' : ''}`}
              />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl bg-[#FFFDF9] border border-[#E5DEC9] hover:border-emerald-700/40 shadow-sm transition-all overflow-hidden flex flex-col justify-between"
              >
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#0f1319] border-b border-[#E5DEC9] overflow-hidden relative block"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </a>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-display text-xl font-bold text-[#1C1917] hover:text-emerald-700 transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-4 h-4 shrink-0 text-emerald-700" />
                      </a>
                    </div>
                    <div className="text-[11px] font-mono text-[#78716C] mt-0.5">
                      github.com/{project.repoName}
                    </div>
                    <p className="mt-2.5 text-xs sm:text-sm text-[#57534E] leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-emerald-700/[0.08] border border-emerald-700/20 text-[11px] font-mono text-emerald-800 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.secondaryRepos && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.secondaryRepos.map((sub) => (
                          <a
                            key={sub.url}
                            href={sub.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 hover:text-emerald-900 underline underline-offset-2"
                          >
                            <span>+ {sub.label}</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-3.5 flex items-center justify-between border-t border-[#EFE9DC]">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-900 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View on GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-medium text-[#6B635B] hover:text-[#1C1917] transition-colors cursor-pointer"
                    >
                      Architecture Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-2">
            <button
              onClick={() => setShowAllProjects((prev) => !prev)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FFFDF9] hover:bg-[#F3EDE2] border border-[#DED6C6] text-xs font-semibold text-[#1C1917] shadow-sm transition-all cursor-pointer"
            >
              <span>
                {showAllProjects
                  ? 'Show Less Projects'
                  : `View More Projects (+${projects.length - 4} more)`}
              </span>
              <ArrowRight
                className={`w-3.5 h-3.5 text-emerald-700 transition-transform ${
                  showAllProjects ? '-rotate-90' : 'rotate-90'
                }`}
              />
            </button>
          </div>
        </section>

        {/* EXPERIENCE & JOURNEY SECTION */}
        <section id="experience" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[2px] bg-emerald-700" />
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1C1917]">
                Experience & Journey
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#57534E]">
              My journey so far, and what I’m currently working on.
            </p>
          </div>

          <div className="space-y-6 relative before:hidden md:before:block before:absolute before:top-3 before:bottom-3 before:left-[7px] before:w-[2px] before:bg-emerald-700/25">
            {journey.map((item) => (
              <div
                key={item.role}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start relative md:pl-8"
              >
                <span className="hidden md:block absolute left-0 top-2 w-4 h-4 rounded-full bg-emerald-700 border-4 border-[#FAF6EE]" />

                <div className="md:col-span-4 flex items-start justify-between gap-4 pr-2">
                  <div>
                    <h3 className="font-display text-base font-bold text-[#1C1917]">{item.role}</h3>
                    <div className="text-xs text-[#57534E] mt-0.5">{item.organization}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-[11px] font-mono text-[#44403C] font-medium">
                      {item.period}
                    </div>
                    <div className="text-[11px] text-[#78716C] flex items-center justify-end gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-emerald-700" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-8 p-5 rounded-2xl bg-[#FFFDF9] border border-[#E5DEC9] shadow-sm">
                  <ul className="space-y-2">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-xs sm:text-sm text-[#44403C] flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {item.paperUrl && (
                    <div className="mt-3.5 pt-3 border-t border-[#EFE9DC]">
                      <a
                        href={item.paperUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-900 transition-colors"
                      >
                        <span>{item.paperLabel}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GET IN TOUCH SECTION */}
        <section id="contact" className="scroll-mt-24 pt-4 border-t border-[#E5DEC9]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-8">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-3 text-xs font-mono text-emerald-700 font-semibold">
                <span className="w-5 h-[2px] bg-emerald-700" />
                <span>Get In Touch</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#1C1917] leading-tight">
                Have a <span className="text-emerald-700">project</span>
                <br />
                in mind?
              </h2>

              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                I’m always open to discussing new opportunities, interesting projects or just having a chat about technology. Feel free to reach out — I’ll get back to you as soon as possible.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2.5 text-[#44403C] hover:text-emerald-700 transition-colors"
                >
                  <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span className="truncate">{profile.email}</span>
                </a>

                <div className="flex items-center gap-2.5 text-[#44403C]">
                  <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{profile.location}</span>
                </div>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-[#44403C] hover:text-emerald-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span className="truncate">{profile.linkedinDisplay}</span>
                </a>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-[#44403C] hover:text-emerald-700 transition-colors"
                >
                  <Github className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span className="truncate">{profile.githubDisplay}</span>
                </a>
              </div>
            </div>

            <form
              onSubmit={handleContactSubmit}
              className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#FFFDF9] border border-[#E5DEC9] shadow-sm space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#57534E] mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6EE] border border-[#DED6C6] text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-emerald-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#57534E] mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6EE] border border-[#DED6C6] text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-emerald-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#57534E] mb-1.5">Subject</label>
                <select
                  value={contactForm.subject}
                  onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6EE] border border-[#DED6C6] text-sm text-[#1C1917] focus:outline-none focus:border-emerald-700"
                >
                  <option>Project Inquiry</option>
                  <option>Full-Stack / AI Job Opportunity</option>
                  <option>Freelance Collaboration</option>
                  <option>General Hello</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#57534E] mb-1.5">Message</label>
                <textarea
                  rows={4}
                  required
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6EE] border border-[#DED6C6] text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-emerald-700"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-[#FAF6EE] font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-900/10 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>{submitted ? 'Opening Mail Client...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* PROJECT DETAILS MODAL — Mobile-First Scrollable Sheet */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="max-w-2xl w-full max-h-[90vh] sm:max-h-[85vh] rounded-t-2xl sm:rounded-2xl bg-[#FFFDF9] border border-[#DED6C6] shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Modal Header */}
            <div className="px-5 py-4 sm:px-7 sm:py-5 border-b border-[#E5DEC9] bg-[#FFFDF9] flex items-start justify-between gap-3 shrink-0">
              <div className="min-w-0">
                <span className="text-[11px] font-mono text-emerald-700 font-semibold uppercase block">
                  Project Breakdown
                </span>
                <h3 className="font-display text-lg sm:text-2xl font-bold text-[#1C1917] mt-0.5 leading-snug">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg bg-[#F3EDE2] hover:bg-[#E5DEC9] text-[#44403C] shrink-0"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Modal Body */}
            <div className="p-5 sm:p-7 space-y-4 overflow-y-auto flex-1">
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#FAF6EE] border border-[#E5DEC9]">
                  <div className="text-[11px] font-mono text-emerald-700 font-semibold mb-1">
                    FRONTEND & UX
                  </div>
                  <p className="text-xs text-[#292524] leading-relaxed">
                    {selectedProject.architecture.frontend}
                  </p>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#FAF6EE] border border-[#E5DEC9]">
                  <div className="text-[11px] font-mono text-teal-700 font-semibold mb-1">
                    BACKEND & AI PIPELINE
                  </div>
                  <p className="text-xs text-[#292524] leading-relaxed">
                    {selectedProject.architecture.backend}
                  </p>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#FAF6EE] border border-[#E5DEC9]">
                  <div className="text-[11px] font-mono text-amber-800 font-semibold mb-1">
                    STORAGE & INDEXING
                  </div>
                  <p className="text-xs text-[#292524] leading-relaxed">
                    {selectedProject.architecture.database}
                  </p>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl bg-emerald-700/10 border border-emerald-700/25">
                  <div className="text-[11px] font-mono text-emerald-800 font-semibold mb-1">
                    KEY HIGHLIGHT
                  </div>
                  <p className="text-xs text-[#1C1917] leading-relaxed">
                    {selectedProject.architecture.challenge}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedProject.stack.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded bg-emerald-700/10 text-[11px] font-mono text-emerald-800 font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Sticky Modal Footer */}
            <div className="px-5 py-3.5 sm:px-7 sm:py-4 border-t border-[#E5DEC9] bg-[#FAF6EE] flex items-center justify-between gap-3 shrink-0">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl bg-[#FFFDF9] border border-[#DED6C6] text-xs font-semibold text-[#44403C]"
              >
                Close
              </button>
              <a
                href={selectedProject.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 text-[#FAF6EE] font-semibold text-xs truncate"
              >
                <span className="truncate">Open {selectedProject.repoName}</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
