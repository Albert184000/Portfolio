import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Download, 
  Printer, 
  Check, 
  Copy, 
  FileText, 
  Sparkles,
  ExternalLink,
  MapPin,
  Mail,
  Phone,
  Globe
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, CORE_SKILLS, ADDITIONAL_SKILLS, CAREER_MILESTONES } from '../data/portfolioData';

interface DownloadCvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadCvModal({ isOpen, onClose }: DownloadCvModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#22d3ee', '#38bdf8', '#34d399']
      });
    } catch (e) {}
    window.print();
  };

  const handleCopyTextResume = () => {
    const textResume = `
${PERSONAL_INFO.name} — ${PERSONAL_INFO.role}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}

SUMMARY:
${PERSONAL_INFO.aboutExtended}

CORE EXPERTISE:
${[...CORE_SKILLS, ...ADDITIONAL_SKILLS].map(s => `• ${s.name} (${s.percentage}%)`).join('\n')}

EXPERIENCE:
${CAREER_MILESTONES.map(m => `${m.role} @ ${m.company} (${m.year})\n${m.description}`).join('\n\n')}
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:m-0">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#040810]/85 backdrop-blur-md print:hidden"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#081324] border border-cyan-500/35 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] z-10 flex flex-col max-h-[92vh] print:max-h-none print:border-none print:shadow-none print:bg-white print:text-black"
        >
          {/* Header (hidden in print) */}
          <div className="p-5 sm:p-6 border-b border-cyan-500/20 flex items-center justify-between bg-[#060e1c]/90 print:hidden">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  Curriculum Vitae Preview
                </h2>
                <p className="text-xs text-slate-400 font-mono">
                  {PERSONAL_INFO.name} • {PERSONAL_INFO.role}
                </p>
              </div>
            </div>

            <button
              id="close-cv-modal-btn"
              onClick={onClose}
              className="p-2 rounded-xl bg-[#091527] border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-950/40 text-slate-300 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* CV Document Container */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-200 print:text-black print:p-0">
            
            {/* Header / Contact details */}
            <div className="border-b border-cyan-500/20 pb-5 print:border-slate-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black tracking-tight">
                    {PERSONAL_INFO.name}
                  </h1>
                  <p className="text-sm font-semibold text-cyan-400 print:text-blue-700 mt-0.5">
                    {PERSONAL_INFO.role} &bull; Full-Stack Specialist
                  </p>
                </div>
                <div className="text-xs text-slate-300 print:text-slate-700 space-y-1 sm:text-right font-mono">
                  <div className="flex items-center gap-1.5 sm:justify-end">
                    <Mail className="w-3.5 h-3.5 text-cyan-400 print:text-blue-600" />
                    <span>{PERSONAL_INFO.email}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:justify-end">
                    <Phone className="w-3.5 h-3.5 text-cyan-400 print:text-blue-600" />
                    <span>{PERSONAL_INFO.phone}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:justify-end">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 print:text-blue-600" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-blue-700">
                Executive Profile
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
                {PERSONAL_INFO.aboutExtended}
              </p>
            </div>

            {/* Experience Section */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-blue-700">
                Professional Experience
              </h3>
              <div className="space-y-3">
                {CAREER_MILESTONES.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#060e1c] print:bg-slate-50 border border-cyan-500/15 print:border-slate-200">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs sm:text-sm font-bold text-white print:text-black">{m.role}</span>
                      <span className="text-[11px] font-mono text-cyan-400 print:text-blue-700">{m.year}</span>
                    </div>
                    <div className="text-xs text-slate-400 print:text-slate-600 font-medium mb-1">{m.company}</div>
                    <p className="text-xs text-slate-300 print:text-slate-800 leading-relaxed">{m.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Tech Stack */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 print:text-blue-700">
                Core Technical Proficiencies
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {[...CORE_SKILLS, ...ADDITIONAL_SKILLS].map((s) => (
                  <span
                    key={s.name}
                    className="px-2.5 py-1 rounded-lg bg-[#060e1c] print:bg-slate-100 border border-cyan-500/20 print:border-slate-300 text-xs text-slate-200 print:text-slate-800 font-mono"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Actions (hidden in print) */}
          <div className="p-5 sm:p-6 border-t border-cyan-500/20 bg-[#060e1c]/90 flex flex-wrap items-center justify-between gap-3 print:hidden">
            <button
              id="copy-text-cv-btn"
              onClick={handleCopyTextResume}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#091527] border border-cyan-500/30 text-xs font-semibold text-slate-300 hover:text-cyan-300 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Plaintext Resume'}</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                id="print-cv-btn"
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 text-xs font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save as PDF</span>
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
