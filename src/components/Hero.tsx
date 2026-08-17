import { motion } from 'motion/react';
import { 
  ArrowRight, 
  MessageSquare, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Briefcase, 
  Layers, 
  Code2, 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onContactClick: () => void;
  onViewWorkClick: () => void;
}

export default function Hero({ onContactClick, onViewWorkClick }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background cyber radial glow behind hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[500px] bg-gradient-to-b from-cyan-500/10 via-sky-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start space-y-6 text-left"
          >
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0b172a]/90 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-200 tracking-wide">
                {PERSONAL_INFO.role}
              </span>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                I build digital{' '}
                <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-200 drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]">
                  experiences
                </span>{' '}
                that matter.
              </h1>
            </div>

            {/* Subtitle / Bio */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal">
              {PERSONAL_INFO.bio}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <motion.button
                id="hero-view-work-btn"
                whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(6,182,212,0.4)' }}
                whileTap={{ scale: 0.97 }}
                onClick={onViewWorkClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-[#050b14] font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-200 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                id="hero-lets-talk-btn"
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(12, 25, 44, 0.9)' }}
                whileTap={{ scale: 0.97 }}
                onClick={onContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#091526]/80 hover:bg-[#0f213b] border border-cyan-500/30 text-slate-200 hover:text-cyan-300 font-semibold text-sm transition-all duration-200 shadow-md cursor-pointer"
              >
                <span>Let's Talk</span>
                <MessageSquare className="w-4 h-4 text-cyan-400" />
              </motion.button>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-3 pt-3">
              {[
                { id: 'social-github', icon: Github, href: PERSONAL_INFO.socials.github, label: 'GitHub' },
                { id: 'social-linkedin', icon: Linkedin, href: PERSONAL_INFO.socials.linkedin, label: 'LinkedIn' },
                { id: 'social-twitter', icon: Twitter, href: PERSONAL_INFO.socials.twitter, label: 'Twitter' },
                { id: 'social-email', icon: Mail, href: PERSONAL_INFO.socials.email, label: 'Email' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.id}
                    id={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-[#091424] border border-cyan-500/20 hover:border-cyan-400/60 hover:bg-cyan-950/40 text-slate-400 hover:text-cyan-300 flex items-center justify-center transition-all duration-200 shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                    aria-label={item.label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Cyber Developer Portrait & Floating Metric Cards */}
          <div className="lg:col-span-6 flex justify-center items-center relative mt-8 lg:mt-0">
            <div className="relative w-full max-w-[480px] aspect-[4/4.5] sm:aspect-[4/4.2] flex items-center justify-center">
              
              {/* Outer Cyber Rings */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-spin-slow pointer-events-none scale-105" />
              <div className="absolute inset-4 rounded-full border border-dashed border-sky-400/20 pointer-events-none" />

              {/* Glowing Halo Backdrop */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-cyan-500/20 via-sky-600/10 to-indigo-600/20 blur-2xl pointer-events-none" />

              {/* Developer Portrait Image Container */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-4/5 h-4/5 rounded-3xl overflow-hidden border border-cyan-500/40 shadow-[0_0_40px_rgba(6,182,212,0.25)] bg-[#071221]"
              >
                <img
                  id="hero-portrait-img"
                  src={PERSONAL_INFO.avatar}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060D19] via-transparent to-transparent opacity-80" />
              </motion.div>

              {/* Floating Stat Card 1: Years Experience (Top Right) */}
              <motion.div
                id="hero-stat-experience"
                initial={{ opacity: 0, x: 30, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="absolute top-4 sm:top-6 -right-2 sm:right-0 z-20 px-4 py-3 rounded-2xl bg-[#091527]/90 border border-cyan-500/30 backdrop-blur-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] flex items-center gap-3 animate-float"
              >
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    {PERSONAL_INFO.experienceYears}
                  </div>
                  <div className="text-[11px] font-medium text-slate-400 whitespace-nowrap">
                    Years Experience
                  </div>
                </div>
                <div className="w-8 h-8 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Briefcase className="w-4 h-4" />
                </div>
              </motion.div>

              {/* Floating Stat Card 2: Projects Completed (Middle Right) */}
              <motion.div
                id="hero-stat-projects"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-2 z-20 px-4 py-3 rounded-2xl bg-[#091527]/90 border border-cyan-500/30 backdrop-blur-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] flex items-center gap-3"
                style={{ animationDelay: '1s' }}
              >
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    {PERSONAL_INFO.projectsCount}
                  </div>
                  <div className="text-[11px] font-medium text-slate-400 whitespace-nowrap">
                    Projects Completed
                  </div>
                </div>
                <div className="w-8 h-8 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Layers className="w-4 h-4" />
                </div>
              </motion.div>

              {/* Floating Stat Card 3: Technologies Used (Lower Right) */}
              <motion.div
                id="hero-stat-technologies"
                initial={{ opacity: 0, x: 30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="absolute bottom-6 sm:bottom-10 -right-2 sm:right-2 z-20 px-4 py-3 rounded-2xl bg-[#091527]/90 border border-cyan-500/30 backdrop-blur-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] flex items-center gap-3 animate-float"
                style={{ animationDelay: '2s' }}
              >
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-cyan-300 tracking-tight">
                    {PERSONAL_INFO.technologiesUsed}
                  </div>
                  <div className="text-[11px] font-medium text-slate-400 whitespace-nowrap">
                    Technologies Used
                  </div>
                </div>
                <div className="w-8 h-8 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Code2 className="w-4 h-4" />
                </div>
              </motion.div>

              {/* Bottom Left Code Card: Clean Code | Scalable Solutions | Pixel Perfect */}
              <motion.div
                id="hero-code-badge"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                whileHover={{ scale: 1.04 }}
                className="absolute -bottom-4 left-0 sm:-left-4 z-20 px-4 py-3 rounded-2xl bg-[#081324]/95 border border-cyan-500/40 backdrop-blur-2xl shadow-[0_12px_30px_rgba(0,0,0,0.6)] flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-sky-600/30 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm">
                  &lt;/&gt;
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
                    <span>Clean Code</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1.5">
                    <span>Scalable Solutions</span>
                    <span>•</span>
                    <span>Pixel Perfect</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
