import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Briefcase, 
  GraduationCap, 
  Sparkles, 
  Heart, 
  Code, 
  Award,
  CheckCircle2,
  Terminal,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';
import { PERSONAL_INFO, CAREER_MILESTONES, CORE_SKILLS } from '../data/portfolioData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#040810]/85 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#081324] border border-cyan-500/35 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-cyan-500/20 flex items-center justify-between bg-[#060e1c]/90">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  About {PERSONAL_INFO.name}
                </h2>
                <p className="text-xs text-slate-400 font-mono">
                  Full Stack Engineer &amp; UI/UX Craftsperson
                </p>
              </div>
            </div>

            <button
              id="close-about-modal-btn"
              onClick={onClose}
              className="p-2 rounded-xl bg-[#091527] border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-950/40 text-slate-300 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            
            {/* Bio section */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider font-mono">
                The Story &amp; Passion
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {PERSONAL_INFO.aboutExtended}
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                When I'm not architecting full-stack applications or tuning frontend rendering performance, I contribute to open source software, mentor junior developers, and explore generative AI integrations.
              </p>
            </div>

            {/* Career Timeline */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider font-mono flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>Career Milestones</span>
              </h3>

              <div className="space-y-4 relative pl-6 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-cyan-500/30">
                {CAREER_MILESTONES.map((item, idx) => (
                  <div key={idx} className="relative group">
                    <span className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-cyan-400 ring-4 ring-[#081324] shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                    <div className="p-4 rounded-2xl bg-[#060e1c] border border-cyan-500/15 hover:border-cyan-500/30 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                        <span className="text-sm font-bold text-white">{item.role}</span>
                        <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
                          {item.year}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 font-medium mb-1.5">{item.company}</div>
                      <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-2xl bg-[#060e1c] border border-cyan-500/15 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold">
                  <GraduationCap className="w-4 h-4" />
                  <span>Education</span>
                </div>
                <div className="text-sm font-bold text-white">
                  B.S. in Computer Science
                </div>
                <div className="text-xs text-slate-400">
                  FAST-NUCES (2018 - 2022)
                </div>
                <div className="text-[11px] text-slate-400 pt-1">
                  Focus: Distributed Systems, Algorithms, and Software Architecture.
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#060e1c] border border-cyan-500/15 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold">
                  <Award className="w-4 h-4" />
                  <span>Philosophy</span>
                </div>
                <div className="text-sm font-bold text-white">
                  User First &amp; Clean Code
                </div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  "Architecture is about making the right trade-offs early and writing code that humans can understand and computers can optimize."
                </div>
              </div>

            </div>

          </div>

          {/* Footer */}
          <div className="p-5 border-t border-cyan-500/20 bg-[#060e1c]/90 flex justify-end">
            <button
              id="close-about-bottom-btn"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer"
            >
              Close
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
