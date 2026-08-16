import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  MapPin, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  Code, 
  Layers, 
  Cpu, 
  Database,
  Sparkles,
  Server,
  Terminal,
  Palette,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO, CORE_SKILLS, ADDITIONAL_SKILLS } from '../data/portfolioData';
import { SkillItem } from '../types';

interface AboutAndSkillsProps {
  onOpenAboutModal: () => void;
}

export default function AboutAndSkills({ onOpenAboutModal }: AboutAndSkillsProps) {
  const [activeTab, setActiveTab] = useState<'core' | 'all'>('core');

  const displayedSkills = activeTab === 'core' 
    ? CORE_SKILLS 
    : [...CORE_SKILLS, ...ADDITIONAL_SKILLS];

  return (
    <section id="about" className="py-16 md:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section Anchor id */}
        <div id="skills" className="relative -top-24" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: About Me Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-3xl bg-[#091426]/90 border border-cyan-500/25 p-7 sm:p-8 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex flex-col justify-between relative overflow-hidden group hover:border-cyan-400/40 transition-all duration-300"
          >
            {/* Background cyber accent glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/15 transition-all" />

            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <User className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  About Me
                </h2>
              </div>

              {/* Bio description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                {PERSONAL_INFO.aboutExtended.slice(0, 195)}...
              </p>

              {/* Quick Info Grid (Name, Location, Email, Availability) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* Name */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0b1b33]/60 border border-cyan-500/15 hover:border-cyan-500/30 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/60 flex items-center justify-center text-cyan-400 shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-slate-400 uppercase font-mono tracking-wider">Name</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-100 truncate">{PERSONAL_INFO.name}</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0b1b33]/60 border border-cyan-500/15 hover:border-cyan-500/30 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/60 flex items-center justify-center text-cyan-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-slate-400 uppercase font-mono tracking-wider">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-100 truncate">{PERSONAL_INFO.location}</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0b1b33]/60 border border-cyan-500/15 hover:border-cyan-500/30 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/60 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-slate-400 uppercase font-mono tracking-wider">Email</div>
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`} 
                      className="text-xs font-semibold text-cyan-300 hover:underline truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0b1b33]/60 border border-cyan-500/15 hover:border-cyan-500/30 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950/60 flex items-center justify-center text-emerald-400 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-slate-400 uppercase font-mono tracking-wider">Availability</div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>{PERSONAL_INFO.availability}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* More About Me Button */}
            <div className="pt-8">
              <motion.button
                id="about-more-btn"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenAboutModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0c1c33] border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-950/50 text-cyan-300 text-xs sm:text-sm font-semibold transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)] cursor-pointer"
              >
                <span>More About Me</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: My Expertise Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 rounded-3xl bg-[#091426]/90 border border-cyan-500/25 p-7 sm:p-8 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex flex-col justify-between relative overflow-hidden group hover:border-cyan-400/40 transition-all duration-300"
          >
            {/* Background glow */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              {/* Header & Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                    <Code className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    My Expertise
                  </h2>
                </div>

                {/* Switcher Tab */}
                <div className="flex items-center gap-1 bg-[#060e1c] p-1 rounded-xl border border-cyan-500/20 text-xs">
                  <button
                    id="skills-tab-core"
                    onClick={() => setActiveTab('core')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                      activeTab === 'core'
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Core Stack
                  </button>
                  <button
                    id="skills-tab-all"
                    onClick={() => setActiveTab('all')}
                    className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                      activeTab === 'all'
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    All Skills ({displayedSkills.length})
                  </button>
                </div>
              </div>

              {/* Progress Bars Grid */}
              <div className="space-y-4 pt-1">
                {displayedSkills.map((skill, index) => {
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group/bar"
                    >
                      <div className="flex justify-between items-center text-xs sm:text-sm mb-1.5 font-medium">
                        <span className="text-slate-200 group-hover/bar:text-cyan-300 transition-colors font-semibold">
                          {skill.name}
                        </span>
                        <span className="text-cyan-400 font-mono font-bold text-xs">
                          {skill.percentage}%
                        </span>
                      </div>

                      {/* Bar Track */}
                      <div className="h-2 sm:h-2.5 w-full bg-[#071221] rounded-full overflow-hidden p-0.5 border border-cyan-500/15">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: index * 0.07 }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-teal-300 shadow-[0_0_12px_rgba(6,182,212,0.6)] relative"
                        >
                          <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/60 rounded-full shadow-[0_0_6px_#fff]" />
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Quick footer note */}
            <div className="pt-6 flex items-center justify-between text-slate-400 text-xs border-t border-cyan-500/10 mt-6">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Continuously experimenting with cutting-edge web & AI standards
              </span>
              <span className="font-mono text-[11px] text-cyan-400/80">
                100% TypeScript
              </span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
