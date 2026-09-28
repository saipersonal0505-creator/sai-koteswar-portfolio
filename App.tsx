import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Sparkles, 
  Download, 
  FileText, 
  Send, 
  Menu, 
  X, 
  ArrowUpRight, 
  CheckCircle2, 
  Laptop, 
  BrainCircuit, 
  Layout, 
  BookOpen, 
  ChevronRight, 
  Copy, 
  Check, 
  MapPin, 
  Calendar,
  Layers,
  Search,
  CloudSun,
  Utensils,
  BarChart3,
  Sun,
  Compass,
  ArrowUp,
  Sliders,
  Eye,
} from 'lucide-react';

const injectCustomStyles = () => {
  if (document.getElementById('portfolio-custom-styles')) return;
  const style = document.createElement('style');
  style.id = 'portfolio-custom-styles';
  style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');

    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: #fcf9f2;
      color: #1e1b18;
    }

    .font-serif-title {
      font-family: 'Playfair Display', Georgia, serif;
    }

    .font-mono-tag {
      font-family: 'Space Mono', monospace;
    }

    /* Grid paper pattern */
    .bg-grid-pattern {
      background-size: 24px 24px;
      background-image: 
        linear-gradient(to right, rgba(30, 27, 24, 0.04) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(30, 27, 24, 0.04) 1px, transparent 1px);
    }

    /* Tactile Shadow Effects */
    .tactile-card {
      background: #ffffff;
      border: 1.5px solid #1e1b18;
      box-shadow: 3.5px 3.5px 0px #1e1b18;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .tactile-card:hover {
      transform: translate(-2px, -2px);
      box-shadow: 6px 6px 0px #1e1b18;
    }

    .tactile-card-warm {
      background: #fbf5eb;
      border: 1.5px solid #1e1b18;
      box-shadow: 3.5px 3.5px 0px #1e1b18;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .tactile-card-warm:hover {
      transform: translate(-2px, -2px);
      box-shadow: 6px 6px 0px #1e1b18;
    }

    .tactile-btn {
      background: #1e1b18;
      color: #fcf9f2;
      border: 1.5px solid #1e1b18;
      box-shadow: 2.5px 2.5px 0px #e05638;
      transition: all 0.15s ease;
    }

    .tactile-btn:hover {
      transform: translate(-1px, -1px);
      box-shadow: 4px 4px 0px #e05638;
    }

    .tactile-btn-orange {
      background: #e05638;
      color: #ffffff;
      border: 1.5px solid #1e1b18;
      box-shadow: 3px 3px 0px #1e1b18;
      transition: all 0.15s ease;
    }

    .tactile-btn-orange:hover {
      transform: translate(-2px, -2px);
      box-shadow: 5px 5px 0px #1e1b18;
      background: #d84b2c;
    }

    .tactile-btn-outline {
      background: #ffffff;
      color: #1e1b18;
      border: 1.5px solid #1e1b18;
      box-shadow: 3px 3px 0px #1e1b18;
      transition: all 0.15s ease;
    }

    .tactile-btn-outline:hover {
      transform: translate(-2px, -2px);
      box-shadow: 5px 5px 0px #e05638;
      background: #fffdf9;
    }

    /* Paper clip ornament */
    .paper-pin {
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #e05638;
      border: 2px solid #1e1b18;
      box-shadow: 0 2px 4px rgba(0,0,0,0.15);
      z-index: 10;
    }

    /* Tilt variations for scrapbook vibe */
    .tilt-left { transform: rotate(-0.75deg); }
    .tilt-right { transform: rotate(0.85deg); }
    .tilt-left-more { transform: rotate(-1.5deg); }

    /* Custom scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #f5eedf;
    }
    ::-webkit-scrollbar-thumb {
      background: #1e1b18;
      border-radius: 4px;
    }
  `;
  document.head.appendChild(style);
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState('All');
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  useEffect(() => {
    injectCustomStyles();
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('bsaikoteswar.dev@gmail.com');
    }
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const skillsData = [
    { name: 'Java', category: 'Languages', level: 'Advanced', icon: '☕' },
    { name: 'Python', category: 'Languages', level: 'Intermediate', icon: '🐍' },
    { name: 'JavaScript', category: 'Languages', level: 'Advanced', icon: '⚡' },
    { name: 'TypeScript', category: 'Languages', level: 'Intermediate', icon: '📘' },
    { name: 'C / C++', category: 'Languages', level: 'Fundamental', icon: '⚙️' },
    { name: 'HTML5', category: 'Frontend', level: 'Expert', icon: '🌐' },
    { name: 'CSS3', category: 'Frontend', level: 'Expert', icon: '🎨' },
    { name: 'React.js', category: 'Frontend', level: 'Advanced', icon: '⚛️' },
    { name: 'Vite', category: 'Frontend', level: 'Advanced', icon: '⚡' },
    { name: 'Responsive Design', category: 'Frontend', level: 'Expert', icon: '📱' },
    { name: 'Tailwind CSS', category: 'Frontend', level: 'Advanced', icon: '💨' },
    { name: 'Node.js', category: 'Backend & DB', level: 'Intermediate', icon: '🟢' },
    { name: 'Express.js', category: 'Backend & DB', level: 'Intermediate', icon: '🚂' },
    { name: 'MySQL', category: 'Backend & DB', level: 'Intermediate', icon: '🐬' },
    { name: 'MongoDB', category: 'Backend & DB', level: 'Intermediate', icon: '🍃' },
    { name: 'Git', category: 'Tools', level: 'Advanced', icon: '🌿' },
    { name: 'GitHub', category: 'Tools', level: 'Advanced', icon: '🐙' },
    { name: 'VS Code', category: 'Tools', level: 'Expert', icon: '💻' },
    { name: 'Figma', category: 'Tools', level: 'Intermediate', icon: '📐' },
    { name: 'Vercel', category: 'Tools', level: 'Advanced', icon: '▲' }
  ];

  const categories = ['All', 'Languages', 'Frontend', 'Backend & DB', 'Tools'];

  const filteredSkills = activeSkillCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeSkillCategory);

  const projects = [
    {
      id: 'pantry',
      title: 'Pantry',
      subtitle: 'Smart Kitchen & Recipe Companion',
      year: '2025',
      description: 'A recipe finder that turns whatever ingredients are available in your fridge into useful meal suggestions, complete with saved favourites and offline support.',
      tech: ['React.js', 'Tailwind CSS', 'Supabase'],
      github: 'https://github.com/saikoteswar/pantry-app',
      demo: 'https://pantry-recipe-app.demo',
      icon: Utensils,
      accentColor: 'from-amber-100 to-orange-100',
      highlights: [
        'Ingredient-based search logic with filter tags',
        'Offline caching for saved favorite recipes',
        'Responsive layout tuned for mobile kitchen usage'
      ],
      previewContent: {
        fridgeItems: ['Tomatoes', 'Eggs', 'Garlic', 'Spinach', 'Cheese'],
        suggestedRecipe: 'Garlic Spinach & Cheese Omelette',
        cookTime: '15 mins',
        matchScore: '95% Match'
      }
    },
    {
      id: 'lumen',
      title: 'Lumen Dashboard',
      subtitle: 'Real-Time Web Analytics Platform',
      year: '2025',
      description: 'A real-time analytics dashboard with keyboard-first navigation, modular reusable widgets, and a custom light/dark chart visualizer.',
      tech: ['React', 'D3.js', 'Node.js'],
      github: 'https://github.com/saikoteswar/lumen-dashboard',
      demo: 'https://lumen-analytics.demo',
      icon: BarChart3,
      accentColor: 'from-blue-100 to-indigo-100',
      highlights: [
        'Keyboard shortcuts (Cmd+K) command palette',
        'D3-powered real-time bandwidth and traffic metrics',
        'Custom widget drag-and-drop rearrangement'
      ],
      previewContent: {
        activeUsers: '1,420',
        pageViews: '48.2k',
        bounceRate: '24.1%',
        chartPeaks: [20, 45, 30, 80, 65, 95, 70]
      }
    },
    {
      id: 'driftcast',
      title: 'Driftcast',
      subtitle: 'Minimalist Weather Experience',
      year: '2024',
      description: 'A minimal weather application with smooth animated conditions, saved location bookmarks, and a seven-day forecast powered by OpenWeather API.',
      tech: ['React', 'Vite', 'OpenWeather API'],
      github: 'https://github.com/saikoteswar/driftcast-weather',
      demo: 'https://driftcast-weather.demo',
      icon: CloudSun,
      accentColor: 'from-sky-100 to-teal-100',
      highlights: [
        'Subtle dynamic background gradient based on weather state',
        'Geolocation lookup with instant local forecasting',
        'Clean 7-day extended forecast carousel'
      ],
      previewContent: {
        location: 'Hyderabad, IN',
        temp: '28°C',
        condition: 'Partly Cloudy',
        humidity: '62%'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-grid-pattern relative text-[#1e1b18] overflow-x-hidden selection:bg-[#e05638] selection:text-white">
      
      {}
      <header className="sticky top-0 z-40 bg-[#fcf9f2]/90 backdrop-blur-md border-b border-[#1e1b18]/15 px-4 lg:px-12 py-3 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="group flex items-center gap-2 font-serif-title font-bold text-xl tracking-tight text-[#1e1b18]"
          >
            <span className="w-3 h-3 rounded-full bg-[#e05638] inline-block border border-[#1e1b18] group-hover:scale-125 transition-transform"></span>
            <span>B. Sai Koteswar</span>
            <span className="font-mono-tag text-xs px-2 py-0.5 rounded bg-[#f5eedf] border border-[#1e1b18]/30 text-[#e05638] hidden sm:inline-block">
              DEV
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 font-mono-tag text-xs font-medium">
            {[
              { id: 'home', label: '01. Home' },
              { id: 'about', label: '02. About' },
              { id: 'skills', label: '03. Skills' },
              { id: 'education', label: '04. Education' },
              { id: 'projects', label: '05. Projects' },
              { id: 'contact', label: '06. Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  activeSection === item.id
                    ? 'bg-[#1e1b18] text-[#fcf9f2] shadow-sm'
                    : 'text-[#38332e] hover:bg-[#f3ebd9] hover:text-[#1e1b18]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setResumeModalOpen(true)}
              className="tactile-btn-outline px-3.5 py-1.5 rounded-md font-mono-tag text-xs font-bold flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-[#e05638]" />
              Resume
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md border border-[#1e1b18] bg-white shadow-[2px_2px_0px_#1e1b18]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-3 pb-4 px-2 border-t border-[#1e1b18]/10 mt-2 flex flex-col gap-2 font-mono-tag text-sm bg-[#fcf9f2]">
            {[
              { id: 'home', label: '01 // Home' },
              { id: 'about', label: '02 // About' },
              { id: 'skills', label: '03 // Skills' },
              { id: 'education', label: '04 // Education' },
              { id: 'experience', label: '05 // Experience' },
              { id: 'projects', label: '06 // Selected Work' },
              { id: 'what-i-do', label: '07 // What I Do' },
              { id: 'achievements', label: '08 // Milestones' },
              { id: 'contact', label: '09 // Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-3 py-2 rounded border border-transparent ${
                  activeSection === item.id
                    ? 'bg-[#1e1b18] text-[#fcf9f2] font-bold'
                    : 'hover:bg-[#f3ebd9]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 flex gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); setResumeModalOpen(true); }}
                className="w-full tactile-btn-orange py-2 rounded text-center text-xs font-bold font-mono-tag flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" /> View Resume
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8 md:py-12 space-y-16 lg:space-y-24">

        {}
        <section id="home" className="pt-4 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Hero Text Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Pinboard Tag */}
              <div className="inline-flex items-center gap-2 bg-[#f3ebd9] border border-[#1e1b18] px-3 py-1 rounded-full text-xs font-mono-tag font-semibold text-[#1e1b18] shadow-[2px_2px_0px_#1e1b18]">
                <span className="w-2 h-2 rounded-full bg-[#e05638] animate-pulse"></span>
                01 // INTRODUCTION
              </div>

              {/* Editorial Title */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-title font-bold tracking-tight text-[#1e1b18] leading-[1.1]">
                  B. Sai Koteswar
                </h1>
                <p className="text-lg sm:text-xl font-mono-tag font-medium text-[#e05638] flex items-center gap-2">
                  <span className="text-[#1e1b18]">//</span> Front-End Developer & CS Student
                </p>
              </div>

              {/* Bio Paragraph */}
              <div className="tactile-card p-5 sm:p-6 rounded-lg relative bg-white tilt-left">
                <div className="paper-pin"></div>
                <p className="text-base sm:text-lg text-[#38332e] leading-relaxed font-normal">
                  "Computer Science student passionate about building clean, responsive and user-friendly digital experiences. I enjoy turning ideas into functional web applications and continuously improving my development skills."
                </p>
                <div className="mt-4 pt-3 border-t border-[#1e1b18]/10 flex flex-wrap gap-4 text-xs font-mono-tag text-[#1e1b18]/70">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#e05638]" /> B.Tech CSE (2023–2027)</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#e05638]" /> Open to Web Dev Roles</span>
                </div>
              </div>

              {/* CTA Buttons & Social Links */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="tactile-btn-orange px-6 py-3 rounded-md font-mono-tag text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                >
                  View My Work
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="tactile-btn-outline px-6 py-3 rounded-md font-mono-tag text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                >
                  Contact Me
                  <Mail className="w-4 h-4 text-[#e05638]" />
                </button>

                <div className="flex items-center gap-2 ml-auto sm:ml-0">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-md border border-[#1e1b18] bg-white shadow-[2.5px_2.5px_0px_#1e1b18] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all hover:bg-[#f5eedf]"
                    title="GitHub Profile"
                  >
                    <Github className="w-5 h-5 text-[#1e1b18]" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-md border border-[#1e1b18] bg-white shadow-[2.5px_2.5px_0px_#1e1b18] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all hover:bg-[#f5eedf]"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5 text-[#1e1b18]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Profile Polaroid Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-sm w-full">
                
                {/* Decorative Tape Element */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#e8decb]/80 border border-[#1e1b18]/20 z-20 rotate-[-2deg] shadow-sm flex items-center justify-center font-mono-tag text-[10px] uppercase text-[#1e1b18]/60">
                  PORTFOLIO '26
                </div>

                {/* Polaroid Frame */}
                <div className="tactile-card-warm p-4 sm:p-5 rounded-xl space-y-4 tilt-right relative">
                  
                  {/* Interactive Image Frame */}
                  <div className="border-2 border-[#1e1b18] rounded-lg overflow-hidden bg-[#e0d6c3] relative group/photo cursor-pointer min-h-[320px] flex items-center justify-center">
                    <img
                      src="/profile.jpg"
                      alt="B. Sai Koteswar"
                      className="w-full h-80 sm:h-96 object-cover object-center"
                    />
                  </div>

                  {/* Caption area */}
                  <div className="pt-1 text-center space-y-1 font-serif-title">
                    <h3 className="text-xl font-bold text-[#1e1b18]">B. Sai Koteswar</h3>
                    <p className="font-mono-tag text-xs text-[#e05638] uppercase tracking-wider">Frontend Developer</p>
                  </div>

                  {/* Stamp Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-[#e05638] text-white p-3 rounded-full border-2 border-[#1e1b18] shadow-[3px_3px_0px_#1e1b18] rotate-12 flex flex-col items-center justify-center w-16 h-16 text-center leading-none">
                    <span className="font-mono-tag text-[9px] font-bold">FRONT</span>
                    <span className="font-serif-title text-xs font-extrabold">END</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {}
        <section id="about" className="scroll-mt-24">
          <div className="space-y-6">
            
            {/* Section Header */}
            <div className="flex items-center gap-3">
              <span className="font-mono-tag text-xs font-bold text-[#e05638] bg-[#f3ebd9] px-2.5 py-1 rounded border border-[#1e1b18]">
                02 // ABOUT ME
              </span>
              <div className="h-[1.5px] bg-[#1e1b18]/20 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Main Narrative Card */}
              <div className="lg:col-span-8 tactile-card p-6 sm:p-8 rounded-xl bg-white space-y-4">
                <h2 className="text-2xl sm:text-3xl font-serif-title font-bold text-[#1e1b18]">
                  Passionate about engineering software with clean aesthetics and high utility.
                </h2>
                
                <div className="space-y-4 text-base text-[#38332e] leading-relaxed">
                  <p>
                    I'm Sai Koteswar, a Computer Science student who enjoys turning ideas into working software. I care about clean structure, readable code, thoughtful interfaces and practical problem solving.
                  </p>
                  <p>
                    My interests include front-end development, modern web technologies, databases and software engineering. I enjoy learning new technologies and applying them by building projects.
                  </p>
                  <p>
                    My goal is to grow into a skilled software developer and contribute to meaningful real-world products.
                  </p>
                </div>

                <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-[#1e1b18]/10 font-mono-tag text-xs">
                  <div className="p-3 bg-[#fbf5eb] rounded-lg border border-[#1e1b18]/20">
                    <span className="text-[#e05638] block font-bold">DEGREE</span>
                    <span className="font-semibold text-[#1e1b18]">B.Tech CSE</span>
                  </div>
                  <div className="p-3 bg-[#fbf5eb] rounded-lg border border-[#1e1b18]/20">
                    <span className="text-[#e05638] block font-bold">TIMELINE</span>
                    <span className="font-semibold text-[#1e1b18]">2023 — 2027</span>
                  </div>
                  <div className="p-3 bg-[#fbf5eb] rounded-lg border border-[#1e1b18]/20 col-span-2 sm:col-span-1">
                    <span className="text-[#e05638] block font-bold">FOCUS</span>
                    <span className="font-semibold text-[#1e1b18]">Web & Software</span>
                  </div>
                </div>
              </div>

              {/* Side Pinboard Highlight Card */}
              <div className="lg:col-span-4 space-y-4">
                <div className="tactile-card-warm p-6 rounded-xl space-y-4 tilt-right">
                  <div className="flex items-center justify-between border-b border-[#1e1b18]/20 pb-3">
                    <h3 className="font-serif-title font-bold text-lg text-[#1e1b18]">Core Focus</h3>
                    <Sparkles className="w-5 h-5 text-[#e05638]" />
                  </div>

                  <ul className="space-y-3 font-mono-tag text-xs text-[#38332e]">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e05638] mt-1.5"></span>
                      <span>Building responsive React web applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e05638] mt-1.5"></span>
                      <span>Writing modular, maintainable JavaScript/TypeScript</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e05638] mt-1.5"></span>
                      <span>Designing clean user interfaces with Tailwind CSS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e05638] mt-1.5"></span>
                      <span>Database design & REST API integration</span>
                    </li>
                  </ul>

                  <div className="p-3 bg-white border border-[#1e1b18] rounded-md text-xs font-mono-tag flex items-center justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300">
                      Open to Internships
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {}
        <section id="skills" className="scroll-mt-24">
          <div className="space-y-6">
            
            {/* Section Header */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono-tag text-xs font-bold text-[#e05638] bg-[#f3ebd9] px-2.5 py-1 rounded border border-[#1e1b18]">
                  03 // TECHNICAL SKILLS
                </span>
                <h2 className="text-2xl font-serif-title font-bold text-[#1e1b18]">Pinned Toolkit</h2>
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 flex-wrap font-mono-tag text-xs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveSkillCategory(cat)}
                    className={`px-3 py-1 rounded-md border transition-all ${
                      activeSkillCategory === cat
                        ? 'bg-[#1e1b18] text-white border-[#1e1b18] shadow-[2px_2px_0px_#e05638]'
                        : 'bg-white text-[#1e1b18] border-[#1e1b18] hover:bg-[#f3ebd9]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
              {filteredSkills.map((skill, idx) => (
                <div
                  key={skill.name}
                  className="tactile-card p-3.5 rounded-lg flex flex-col justify-between hover:border-[#e05638] transition-all group"
                  style={{ transform: `rotate(${idx % 2 === 0 ? -0.5 : 0.5}deg)` }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                    <span className="font-mono-tag text-[10px] px-1.5 py-0.5 rounded bg-[#f5eedf] text-[#38332e] border border-[#1e1b18]/20">
                      {skill.category.split(' ')[0]}
                    </span>
                  </div>

                  <div className="mt-3 space-y-0.5">
                    <h4 className="font-bold text-sm text-[#1e1b18]">{skill.name}</h4>
                    <p className="font-mono-tag text-[10px] text-gray-500">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pinned Board Summary Footnote */}
            <div className="tactile-card-warm p-4 rounded-lg flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tag">
              <div className="flex items-center gap-2 text-[#38332e]">
                <Terminal className="w-4 h-4 text-[#e05638]" />
                <span>Consistently expanding knowledge base across modern frontend stack and software fundamentals.</span>
              </div>
              <div className="flex items-center gap-3 font-semibold">
                <span className="px-2 py-1 bg-white rounded border border-[#1e1b18]">Frontend First</span>
                <span className="px-2 py-1 bg-white rounded border border-[#1e1b18]">CS Core</span>
              </div>
            </div>

          </div>
        </section>

        {}
        <section id="education" className="scroll-mt-24">
          <div className="space-y-6">
            
            <div className="flex items-center gap-3">
              <span className="font-mono-tag text-xs font-bold text-[#e05638] bg-[#f3ebd9] px-2.5 py-1 rounded border border-[#1e1b18]">
                04 // ACADEMIC JOURNEY
              </span>
              <div className="h-[1.5px] bg-[#1e1b18]/20 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Education Timeline */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Degree Entry */}
                <div className="tactile-card p-6 rounded-xl relative bg-white">
                  <div className="paper-pin"></div>
                  <div className="flex flex-wrap items-start justify-between gap-2 border-b border-[#1e1b18]/15 pb-3">
                    <div>
                      <span className="font-mono-tag text-xs font-bold text-[#e05638] bg-[#fbf5eb] px-2 py-0.5 rounded border border-[#1e1b18]">
                        2023 — 2027
                      </span>
                      <h3 className="text-xl font-serif-title font-bold text-[#1e1b18] mt-1">
                        B.Tech, Computer Science & Engineering
                      </h3>
                    </div>
                    <span className="font-mono-tag text-xs px-2.5 py-1 bg-[#1e1b18] text-[#fcf9f2] rounded">
                      UNDERGRADUATE
                    </span>
                  </div>

                  <p className="mt-4 text-sm sm:text-base text-[#38332e] leading-relaxed">
                    "Currently pursuing with a focus on software development, web technologies, programming and databases."
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#1e1b18]/10 flex flex-wrap gap-2 font-mono-tag text-xs">
                    <span className="px-2 py-1 bg-[#f5eedf] rounded border border-[#1e1b18]/30">Data Structures</span>
                    <span className="px-2 py-1 bg-[#f5eedf] rounded border border-[#1e1b18]/30">Algorithms</span>
                    <span className="px-2 py-1 bg-[#f5eedf] rounded border border-[#1e1b18]/30">Web Development</span>
                    <span className="px-2 py-1 bg-[#f5eedf] rounded border border-[#1e1b18]/30">DBMS</span>
                    <span className="px-2 py-1 bg-[#f5eedf] rounded border border-[#1e1b18]/30">OOP in Java</span>
                  </div>
                </div>

                {/* Intermediate Entry */}
                <div className="tactile-card p-6 rounded-xl relative bg-white">
                  <div className="flex flex-wrap items-start justify-between gap-2 border-b border-[#1e1b18]/15 pb-3">
                    <div>
                      <span className="font-mono-tag text-xs font-bold text-[#e05638] bg-[#fbf5eb] px-2 py-0.5 rounded border border-[#1e1b18]">
                        2021 — 2023
                      </span>
                      <h3 className="text-xl font-serif-title font-bold text-[#1e1b18] mt-1">
                        Intermediate (MPC)
                      </h3>
                    </div>
                    <span className="font-mono-tag text-xs px-2.5 py-1 bg-[#f5eedf] text-[#1e1b18] border border-[#1e1b18] rounded">
                      HIGHER SECONDARY
                    </span>
                  </div>

                  <p className="mt-4 text-sm sm:text-base text-[#38332e] leading-relaxed">
                    "Completed with distinction."
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#1e1b18]/10 flex flex-wrap gap-2 font-mono-tag text-xs text-gray-600">
                    <span>Mathematics</span> • <span>Physics</span> • <span>Chemistry</span>
                  </div>
                </div>

                {/* Additional Education Note Slot */}
                <div className="tactile-card-warm p-4 rounded-lg border-dashed border-2 border-[#1e1b18]/40 text-xs font-mono-tag flex items-center justify-between">
                  <span className="text-[#38332e]">Continuous academic growth through self-driven coursework and technical workshops.</span>
                  <BookOpen className="w-4 h-4 text-[#e05638] shrink-0" />
                </div>

              </div>

              {/* Academic Highlights Side Card */}
              <div className="lg:col-span-4">
                <div className="tactile-card p-6 rounded-xl bg-white space-y-4 tilt-left">
                  <h3 className="font-serif-title font-bold text-lg text-[#1e1b18] border-b border-[#1e1b18]/20 pb-2">
                    Academic Focus
                  </h3>

                  <div className="space-y-3 font-mono-tag text-xs">
                    <div className="p-3 bg-[#fcf9f2] border border-[#1e1b18]/20 rounded-md">
                      <h4 className="font-bold text-[#e05638] mb-1">Software Foundations</h4>
                      <p className="text-gray-600">Object Oriented Programming, Logic Building, Algorithm Design</p>
                    </div>

                    <div className="p-3 bg-[#fcf9f2] border border-[#1e1b18]/20 rounded-md">
                      <h4 className="font-bold text-[#e05638] mb-1">Web Systems</h4>
                      <p className="text-gray-600">Client-Server Architecture, DOM Manipulation, Single Page Applications</p>
                    </div>

                    <div className="p-3 bg-[#fcf9f2] border border-[#1e1b18]/20 rounded-md">
                      <h4 className="font-bold text-[#e05638] mb-1">Database Management</h4>
                      <p className="text-gray-600">Relational Schema Design, SQL Queries, NoSQL Basics</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {}
        <section id="experience" className="scroll-mt-24">
          <div className="space-y-6">
            
            <div className="flex items-center gap-3">
              <span className="font-mono-tag text-xs font-bold text-[#e05638] bg-[#f3ebd9] px-2.5 py-1 rounded border border-[#1e1b18]">
                05 // EXPERIENCE & ACTIVITIES
              </span>
              <div className="h-[1.5px] bg-[#1e1b18]/20 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="tactile-card p-6 rounded-xl bg-white space-y-3 relative tilt-left">
                <div className="w-10 h-10 rounded-lg bg-[#fbf5eb] border border-[#1e1b18] flex items-center justify-center text-[#e05638] font-bold">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="font-serif-title font-bold text-xl text-[#1e1b18]">
                  Hackathon Participant
                </h3>
                <p className="text-sm text-[#38332e] leading-relaxed">
                  "Built a working prototype in 24 hours with a student team while working under a fast-paced development environment."
                </p>
                <div className="pt-2 font-mono-tag text-xs text-[#e05638] font-bold">
                  Team Collaboration • Agile Prototyping
                </div>
              </div>

              {/* Card 2 */}
              <div className="tactile-card p-6 rounded-xl bg-white space-y-3 relative tilt-right">
                <div className="w-10 h-10 rounded-lg bg-[#fbf5eb] border border-[#1e1b18] flex items-center justify-center text-[#e05638] font-bold">
                  <Laptop className="w-5 h-5" />
                </div>
                <h3 className="font-serif-title font-bold text-xl text-[#1e1b18]">
                  Web Development Workshop
                </h3>
                <p className="text-sm text-[#38332e] leading-relaxed">
                  "Completed a hands-on workshop focused on modern front-end development and web technologies."
                </p>
                <div className="pt-2 font-mono-tag text-xs text-[#e05638] font-bold">
                  Modern Workflows • Interactive Practice
                </div>
              </div>

              {/* Card 3 */}
              <div className="tactile-card p-6 rounded-xl bg-white space-y-3 relative tilt-left">
                <div className="w-10 h-10 rounded-lg bg-[#fbf5eb] border border-[#1e1b18] flex items-center justify-center text-[#e05638] font-bold">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <h3 className="font-serif-title font-bold text-xl text-[#1e1b18]">
                  Continuous Learning
                </h3>
                <p className="text-sm text-[#38332e] leading-relaxed">
                  "Regularly exploring new programming concepts, development tools and modern web technologies through projects and practice."
                </p>
                <div className="pt-2 font-mono-tag text-xs text-[#e05638] font-bold">
                  Self-Driven • Personal Projects
                </div>
              </div>

            </div>
          </div>
        </section>

        {}
        <section id="projects" className="scroll-mt-24">
          <div className="space-y-6">
            
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono-tag text-xs font-bold text-[#e05638] bg-[#f3ebd9] px-2.5 py-1 rounded border border-[#1e1b18]">
                  06 // FEATURED PROJECTS
                </span>
                <h2 className="text-2xl font-serif-title font-bold text-[#1e1b18]">Selected Work</h2>
              </div>
              <p className="font-mono-tag text-xs text-gray-600">Click Live Demo to view interactive prototype previews</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Project Header Banner */}
                      <div className={`p-5 bg-gradient-to-br ${project.accentColor} border-b border-[#1e1b18] flex items-center justify-between`}>
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 bg-white rounded-lg border border-[#1e1b18] shadow-sm">
                            <project.icon className="w-6 h-6 text-[#e05638]" />
                          </div>
                          <div>
                            <h3 className="font-serif-title font-bold text-xl text-[#1e1b18]">{project.title}</h3>
                            <p className="font-mono-tag text-[11px] text-[#38332e]">{project.subtitle}</p>
                          </div>
                        </div>
                        <span className="font-mono-tag text-xs font-bold px-2 py-0.5 bg-white border border-[#1e1b18] rounded">
                          {project.year}
                        </span>
                      </div>
                        <div>
                          <h3 className="font-serif-title font-bold text-xl text-[#1e1b18]">{project.title}</h3>
                          <p className="font-mono-tag text-[11px] text-[#38332e]">{project.subtitle}</p>
                        </div>
                      </div>
                      <span className="font-mono-tag text-xs font-bold px-2 py-0.5 bg-white border border-[#1e1b18] rounded">
                        {project.year}
                      </span>
                    </div>

                    {/* Project Body */}
                    <div className="p-5 space-y-4">
                      <p className="text-sm text-[#38332e] leading-relaxed">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 font-mono-tag text-xs text-gray-700 bg-[#fcf9f2] p-3 rounded-md border border-[#1e1b18]/15">
                        {project.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <ChevronRight className="w-3.5 h-3.5 text-[#e05638] shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 font-mono-tag text-xs">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 bg-[#f5eedf] border border-[#1e1b18]/30 rounded text-[#1e1b18] font-semibold">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Footer Actions */}
                  <div className="p-5 pt-0 flex items-center gap-2 font-mono-tag text-xs">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 tactile-btn-outline py-2 rounded-md flex items-center justify-center gap-1.5 font-bold"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                    
                    <button
                      onClick={() => setSelectedProjectModal(project)}
                      className="flex-1 tactile-btn-orange py-2 rounded-md flex items-center justify-center gap-1.5 font-bold"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Live Demo
                    </button>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {}
        <section id="what-i-do" className="scroll-mt-24">
          <div className="space-y-6">
            
            <div className="flex items-center gap-3">
              <span className="font-mono-tag text-xs font-bold text-[#e05638] bg-[#f3ebd9] px-2.5 py-1 rounded border border-[#1e1b18]">
                07 // CORE COMPETENCIES
              </span>
              <div className="h-[1.5px] bg-[#1e1b18]/20 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="tactile-card p-5 rounded-xl bg-white space-y-3">
                <div className="w-9 h-9 rounded bg-[#f5eedf] border border-[#1e1b18] flex items-center justify-center text-[#e05638]">
                  <Layout className="w-5 h-5" />
                </div>
                <h3 className="font-serif-title font-bold text-lg text-[#1e1b18]">
                  Frontend Development
                </h3>
                <p className="text-xs text-[#38332e] leading-relaxed">
                  "Building responsive and interactive interfaces using modern web technologies."
                </p>
              </div>

              <div className="tactile-card p-5 rounded-xl bg-white space-y-3">
                <div className="w-9 h-9 rounded bg-[#f5eedf] border border-[#1e1b18] flex items-center justify-center text-[#e05638]">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <h3 className="font-serif-title font-bold text-lg text-[#1e1b18]">
                  Problem Solving
                </h3>
                <p className="text-xs text-[#38332e] leading-relaxed">
                  "Applying programming concepts and logical thinking to solve practical problems."
                </p>
              </div>

              <div className="tactile-card p-5 rounded-xl bg-white space-y-3">
                <div className="w-9 h-9 rounded bg-[#f5eedf] border border-[#1e1b18] flex items-center justify-center text-[#e05638]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif-title font-bold text-lg text-[#1e1b18]">
                  UI Development
                </h3>
                <p className="text-xs text-[#38332e] leading-relaxed">
                  "Creating clean, accessible and user-friendly digital interfaces."
                </p>
              </div>

              <div className="tactile-card p-5 rounded-xl bg-white space-y-3">
                <div className="w-9 h-9 rounded bg-[#f5eedf] border border-[#1e1b18] flex items-center justify-center text-[#e05638]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="font-serif-title font-bold text-lg text-[#1e1b18]">
                  Continuous Learning
                </h3>
                <p className="text-xs text-[#38332e] leading-relaxed">
                  "Exploring new technologies and improving software development skills."
                </p>
              </div>

            </div>
          </div>
        </section>

        {}
        <section id="achievements" className="scroll-mt-24">
          <div className="space-y-6">
            
            <div className="flex items-center gap-3">
              <span className="font-mono-tag text-xs font-bold text-[#e05638] bg-[#f3ebd9] px-2.5 py-1 rounded border border-[#1e1b18]">
                08 // HIGHLIGHTS & MILESTONES
              </span>
              <div className="h-[1.5px] bg-[#1e1b18]/20 flex-1"></div>
            </div>

            <div className="tactile-card p-6 sm:p-8 rounded-xl bg-white space-y-4">
              <h3 className="text-xl font-serif-title font-bold text-[#1e1b18]">
                Key Academic & Technical Highlights
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Hackathon participation',
                  'Web development workshop',
                  'Personal web projects',
                  'Academic projects',
                  'Programming practice',
                  'Continuous technical learning'
                ].map((achievement, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 bg-[#fbf5eb] border border-[#1e1b18] rounded-lg flex items-center gap-3 font-mono-tag text-xs font-semibold text-[#1e1b18]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#e05638] shrink-0" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {}
        <section id="exploring" className="scroll-mt-24">
          <div className="space-y-6">
            
            <div className="flex items-center gap-3">
              <span className="font-mono-tag text-xs font-bold text-[#e05638] bg-[#f3ebd9] px-2.5 py-1 rounded border border-[#1e1b18]">
                09 // LEARNING RADAR
              </span>
              <div className="h-[1.5px] bg-[#1e1b18]/20 flex-1"></div>
            </div>

            <div className="tactile-card-warm p-6 sm:p-8 rounded-xl space-y-6 text-center max-w-4xl mx-auto relative tilt-right">
              <div className="paper-pin"></div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-serif-title font-bold text-[#1e1b18]">
                  Currently Exploring & Building
                </h3>
                <p className="text-sm text-[#38332e] max-w-xl mx-auto">
                  "Currently building projects, strengthening programming fundamentals and exploring technologies used in real-world software development."
                </p>
              </div>

              {/* Tag Cloud */}
              <div className="flex flex-wrap justify-center gap-2 font-mono-tag text-xs">
                {[
                  'React',
                  'TypeScript',
                  'Node.js',
                  'Databases',
                  'Data Structures',
                  'Algorithms',
                  'UI/UX',
                  'Modern CSS',
                  'Git & GitHub'
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 bg-white border border-[#1e1b18] rounded-full shadow-[2px_2px_0px_#1e1b18] hover:scale-105 transition-transform font-bold text-[#1e1b18]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {}
        <section className="scroll-mt-24">
          <div className="tactile-card p-6 sm:p-8 rounded-xl bg-white border-2 border-[#1e1b18] flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="space-y-2 text-center md:text-left">
              <span className="font-mono-tag text-xs font-bold text-[#e05638] bg-[#f3ebd9] px-2 py-0.5 rounded border border-[#1e1b18]">
                10 // RESUME & CV
              </span>
              <h3 className="text-2xl font-serif-title font-bold text-[#1e1b18]">
                Want to know more?
              </h3>
              <p className="text-sm text-[#38332e]">
                "Explore my education, technical skills, projects and experience in detail."
              </p>
            </div>

            <div className="flex items-center gap-3 font-mono-tag text-xs shrink-0 flex-wrap justify-center">
              <button
                onClick={() => setResumeModalOpen(true)}
                className="tactile-btn-orange px-5 py-2.5 rounded-md font-bold flex items-center gap-2 uppercase tracking-wider"
              >
                <Eye className="w-4 h-4" />
                View Resume
              </button>

              <a
                href="#download-resume"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Resume PDF Download initiated! Replace link in code with your real PDF URL.");
                }}
                className="tactile-btn-outline px-5 py-2.5 rounded-md font-bold flex items-center gap-2 uppercase tracking-wider"
              >
                <Download className="w-4 h-4 text-[#e05638]" />
                Download PDF
              </a>
            </div>

          </div>
        </section>

        {}
        <section id="contact" className="scroll-mt-24">
          <div className="space-y-6">
            
            <div className="flex items-center gap-3">
              <span className="font-mono-tag text-xs font-bold text-[#e05638] bg-[#f3ebd9] px-2.5 py-1 rounded border border-[#1e1b18]">
                11 // GET IN TOUCH
              </span>
              <div className="h-[1.5px] bg-[#1e1b18]/20 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Contact Information Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl font-serif-title font-bold text-[#1e1b18]">
                    Say hello
                  </h2>
                  <p className="text-sm text-[#38332e] leading-relaxed">
                    "Have a project idea, collaboration opportunity or simply want to connect? Feel free to reach out."
                  </p>
                </div>

                {/* Direct Channel Cards */}
                <div className="space-y-3 font-mono-tag text-xs">
                  
                  {/* Email Box */}
                  <div className="tactile-card p-4 rounded-lg bg-white flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="p-2 bg-[#f5eedf] border border-[#1e1b18] rounded shrink-0">
                        <Mail className="w-4 h-4 text-[#e05638]" />
                      </div>
                      <div className="truncate">
                        <span className="text-gray-500 block text-[10px]">DIRECT EMAIL</span>
                        <span className="font-bold text-[#1e1b18] truncate block">bsaikoteswar.dev@gmail.com</span>
                      </div>
                    </div>

                    <button
                      onClick={handleCopyEmail}
                      className="p-2 hover:bg-[#f5eedf] rounded border border-[#1e1b18] transition-all shrink-0"
                      title="Copy Email"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#1e1b18]" />}
                    </button>
                  </div>

                  {/* Social Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="tactile-card p-3 rounded-lg bg-white flex items-center gap-2 hover:border-[#e05638]"
                    >
                      <Linkedin className="w-4 h-4 text-[#e05638]" />
                      <span className="font-bold text-[#1e1b18]">LinkedIn</span>
                    </a>

                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      className="tactile-card p-3 rounded-lg bg-white flex items-center gap-2 hover:border-[#e05638]"
                    >
                      <Github className="w-4 h-4 text-[#e05638]" />
                      <span className="font-bold text-[#1e1b18]">GitHub</span>
                    </a>
                  </div>

                </div>

                {/* Toast status */}
                {copiedEmail && (
                  <div className="p-2.5 bg-emerald-100 border border-emerald-800 text-emerald-900 rounded font-mono-tag text-xs flex items-center gap-2">
                    <Check className="w-4 h-4" /> Email address copied to clipboard!
                  </div>
                )}
              </div>

              {/* Interactive Contact Form Column */}
              <div className="lg:col-span-7">
                <form 
                  onSubmit={handleFormSubmit}
                  className="tactile-card p-6 sm:p-8 rounded-xl bg-white space-y-4 relative"
                >
                  <div className="paper-pin"></div>
                  
                  <h3 className="font-serif-title font-bold text-xl text-[#1e1b18]">
                    Send a Message
                  </h3>

                  {formSubmitted ? (
                    <div className="p-6 bg-[#fbf5eb] border-2 border-[#1e1b18] rounded-lg text-center space-y-2">
                      <Sparkles className="w-8 h-8 text-[#e05638] mx-auto" />
                      <h4 className="font-serif-title font-bold text-lg text-[#1e1b18]">Thank you for reaching out!</h4>
                      <p className="font-mono-tag text-xs text-[#38332e]">
                        Your message has been dispatched. I will reply to you as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-1.5">
                        <label className="font-mono-tag text-xs font-bold text-[#1e1b18]">Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-3.5 py-2.5 bg-[#fcf9f2] border-1.5 border-[#1e1b18] rounded-md font-mono-tag text-xs focus:outline-none focus:ring-2 focus:ring-[#e05638]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-mono-tag text-xs font-bold text-[#1e1b18]">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                          className="w-full px-3.5 py-2.5 bg-[#fcf9f2] border-1.5 border-[#1e1b18] rounded-md font-mono-tag text-xs focus:outline-none focus:ring-2 focus:ring-[#e05638]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="font-mono-tag text-xs font-bold text-[#1e1b18]">Message</label>
                        <textarea
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell me about your project or inquiry..."
                          className="w-full px-3.5 py-2.5 bg-[#fcf9f2] border-1.5 border-[#1e1b18] rounded-md font-mono-tag text-xs focus:outline-none focus:ring-2 focus:ring-[#e05638]"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full tactile-btn-orange py-3 rounded-md font-mono-tag text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Send Message
                      </button>
                    </>
                  )}
                </form>
              </div>

            </div>
          </div>
        </section>

      </main>

      {}
      <footer className="border-t-2 border-[#1e1b18] bg-[#f5eedf] mt-20 py-8 px-4 lg:px-8 font-mono-tag text-xs">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          <div className="space-y-1">
            <h4 className="font-serif-title font-bold text-lg text-[#1e1b18]">B. Sai Koteswar</h4>
            <p className="text-gray-600">"Built with curiosity, code and continuous learning."</p>
          </div>

          <div className="flex items-center gap-4 text-[#1e1b18]">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#e05638]">GitHub</a>
            <span>•</span>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#e05638]">LinkedIn</a>
            <span>•</span>
            <button onClick={handleCopyEmail} className="hover:text-[#e05638]">Email</button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-600">© 2026 B. Sai Koteswar</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 bg-white border border-[#1e1b18] rounded hover:bg-[#1e1b18] hover:text-white transition-all shadow-[2px_2px_0px_#1e1b18]"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </footer>

      {/* Modal section */}
      {selectedProjectModal && (
        <div className="fixed inset-0 z-50 bg-[#1e1b18]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="tactile-card rounded-xl bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-4 p-6 relative animate-in fade-in zoom-in-95 duration-200">
            
            <button
              onClick={() => setSelectedProjectModal(null)}
              className="absolute top-4 right-4 p-2 rounded border border-[#1e1b18] hover:bg-[#f5eedf] transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 border-b border-[#1e1b18]/20 pb-3">
              <selectedProjectModal.icon className="w-6 h-6 text-[#e05638]" />
              <div>
                <h3 className="font-serif-title font-bold text-xl text-[#1e1b18]">{selectedProjectModal.title}</h3>
                <p className="font-mono-tag text-xs text-[#e05638]">Simulated Live Preview</p>
              </div>
            </div>

            {/* Simulated Live Interface */}
            <div className="p-4 bg-[#fcf9f2] border-2 border-[#1e1b18] rounded-lg space-y-4">
              
              {/* Browser Bar */}
              <div className="flex items-center gap-2 border-b border-[#1e1b18]/15 pb-2 font-mono-tag text-[10px] text-gray-500">
                <div className="flex gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block border border-[#1e1b18]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block border border-[#1e1b18]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block border border-[#1e1b18]"></span>
                </div>
                <div className="flex-1 bg-white px-2 py-0.5 rounded border border-[#1e1b18]/20 truncate">
                  https://{selectedProjectModal.id}-app.internal
                </div>
              </div>

              {/* Dynamic Mock App View */}
              {selectedProjectModal.id === 'pantry' && (
                <div className="space-y-3 font-mono-tag text-xs">
                  <div className="flex justify-between items-center bg-white p-3 rounded border border-[#1e1b18]">
                    <span>Suggested Recipe:</span>
                    <span className="font-bold text-[#e05638]">{selectedProjectModal.previewContent.suggestedRecipe}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 bg-white border border-[#1e1b18] rounded">
                      <span className="text-gray-500 block text-[10px]">AVAILABLE INGREDIENTS</span>
                      <span className="font-semibold">{selectedProjectModal.previewContent.fridgeItems.join(', ')}</span>
                    </div>
                    <div className="p-2.5 bg-white border border-[#1e1b18] rounded">
                      <span className="text-gray-500 block text-[10px]">PREP TIME & MATCH</span>
                      <span className="font-semibold">{selectedProjectModal.previewContent.cookTime} • {selectedProjectModal.previewContent.matchScore}</span>
                    </div>
                  </div>
                </div>
              )}

              {selectedProjectModal.id === 'lumen' && (
                <div className="space-y-3 font-mono-tag text-xs">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2.5 bg-white border border-[#1e1b18] rounded">
                      <span className="text-gray-500 block text-[10px]">ACTIVE USERS</span>
                      <span className="font-bold text-lg text-[#e05638]">{selectedProjectModal.previewContent.activeUsers}</span>
                    </div>
                    <div className="p-2.5 bg-white border border-[#1e1b18] rounded">
                      <span className="text-gray-500 block text-[10px]">TOTAL VIEWS</span>
                      <span className="font-bold text-lg">{selectedProjectModal.previewContent.pageViews}</span>
                    </div>
                    <div className="p-2.5 bg-white border border-[#1e1b18] rounded">
                      <span className="text-gray-500 block text-[10px]">BOUNCE RATE</span>
                      <span className="font-bold text-lg">{selectedProjectModal.previewContent.bounceRate}</span>
                    </div>
                  </div>
                  <div className="h-20 bg-white border border-[#1e1b18] rounded p-2 flex items-end gap-2 justify-between">
                    {selectedProjectModal.previewContent.chartPeaks.map((val, i) => (
                      <div 
                        key={i} 
                        style={{ height: `${val}%` }} 
                        className="flex-1 bg-[#e05638] border border-[#1e1b18] rounded-t"
                      ></div>
                    ))}
                  </div>
                </div>
              )}

              {selectedProjectModal.id === 'driftcast' && (
                <div className="space-y-3 font-mono-tag text-xs">
                  <div className="p-4 bg-gradient-to-r from-sky-200 to-blue-200 border border-[#1e1b18] rounded-lg text-center space-y-1">
                    <h4 className="text-base font-bold text-[#1e1b18]">{selectedProjectModal.previewContent.location}</h4>
                    <div className="text-3xl font-serif-title font-bold text-[#1e1b18]">
                      {selectedProjectModal.previewContent.temp}
                    </div>
                    <p className="text-xs text-gray-700">{selectedProjectModal.previewContent.condition} • Humidity: {selectedProjectModal.previewContent.humidity}</p>
                  </div>
                </div>
              )}

            </div>

            <div className="flex justify-end gap-2 font-mono-tag text-xs">
              <a
                href={selectedProjectModal.github}
                target="_blank"
                rel="noreferrer"
                className="tactile-btn-outline px-4 py-2 rounded font-bold"
              >
                View Repository
              </a>
              <button
                onClick={() => setSelectedProjectModal(null)}
                className="tactile-btn-orange px-4 py-2 rounded font-bold"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}

      {}
      {resumeModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#1e1b18]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="tactile-card rounded-xl bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-4 p-6 relative">
            
            <button
              onClick={() => setResumeModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded border border-[#1e1b18] hover:bg-[#f5eedf] transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1 border-b border-[#1e1b18]/20 pb-3">
              <span className="font-mono-tag text-xs font-bold text-[#e05638] bg-[#f3ebd9] px-2 py-0.5 rounded border border-[#1e1b18]">
                CURRICULUM VITAE
              </span>
              <h3 className="text-2xl font-serif-title font-bold text-[#1e1b18]">B. Sai Koteswar</h3>
              <p className="font-mono-tag text-xs text-gray-600">Front-End Developer & CS Student (B.Tech 2023–2027)</p>
            </div>

            {/* Resume Summary Box */}
            <div className="space-y-4 font-mono-tag text-xs text-[#38332e]">
              
              <div className="p-3 bg-[#fbf5eb] border border-[#1e1b18] rounded-md space-y-1">
                <h4 className="font-bold text-[#1e1b18] uppercase">Academic Status</h4>
                <p>Pursuing B.Tech in Computer Science & Engineering with strong fundamentals in algorithms, frontend architecture, and modern web development.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#1e1b18] uppercase border-b border-[#1e1b18]/10 pb-1">Key Technical Skills</h4>
                <p>Languages: Java, Python, JavaScript, TypeScript, C/C++</p>
                <p>Frontend: React.js, Tailwind CSS, HTML5, CSS3, Vite</p>
                <p>Backend & Tools: Node.js, Express.js, MySQL, MongoDB, Git, GitHub, VS Code</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#1e1b18] uppercase border-b border-[#1e1b18]/10 pb-1">Featured Projects</h4>
                <p><strong className="text-[#e05638]">Pantry:</strong> Recipe finder web application using React and Supabase.</p>
                <p><strong className="text-[#e05638]">Lumen Dashboard:</strong> Real-time analytics dashboard with D3 charts.</p>
                <p><strong className="text-[#e05638]">Driftcast:</strong> Weather forecast app powered by OpenWeather API.</p>
              </div>

            </div>

            <div className="pt-3 border-t border-[#1e1b18]/20 flex flex-wrap items-center justify-between gap-3 font-mono-tag text-xs">
              <span className="text-gray-500">PDF Version ready for download</span>
              
              <div className="flex items-center gap-2">
                <a
                  href="#download"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Resume Download triggered!");
                  }}
                  className="tactile-btn-orange px-4 py-2 rounded font-bold flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" /> Download PDF
                </a>
                
                <button
                  onClick={() => setResumeModalOpen(false)}
                  className="tactile-btn-outline px-4 py-2 rounded font-bold"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}