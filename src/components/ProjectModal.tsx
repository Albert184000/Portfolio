import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  Github, 
  Sparkles, 
  CheckCircle2, 
  Laptop, 
  Smartphone, 
  Code2, 
  Layers, 
  Activity,
  Zap
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'preview'>('overview');
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#040810]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#081324] border border-cyan-500/35 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] z-10 flex flex-col max-h-[90vh]"
        >
          {/* Modal Header */}
          <div className="p-5 sm:p-6 border-b border-cyan-500/20 flex items-center justify-between bg-[#060e1c]/90">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold">
                {project.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
            </div>

            <button
              id="close-project-modal-btn"
              onClick={onClose}
              className="p-2 rounded-xl bg-[#091527] border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-950/40 text-slate-300 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body: Scrollable */}
          <div className="p-5 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Tabs Navigation */}
            <div className="flex items-center gap-2 border-b border-cyan-500/15 pb-4">
              {[
                { id: 'overview', label: 'Overview & Metrics' },
                { id: 'features', label: 'Architecture & Features' },
                { id: 'preview', label: 'Interactive Preview' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  id={`project-modal-tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab 1: Overview */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Hero Image Showcase */}
                <div className="relative rounded-2xl overflow-hidden border border-cyan-500/25 aspect-[16/9] bg-[#060D17]">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081324] via-transparent to-transparent opacity-40" />
                </div>

                {/* Long Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Key Metrics Grid */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
                    {project.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-[#060e1c] border border-cyan-500/20 text-center"
                      >
                        <div className="text-lg sm:text-xl font-extrabold text-cyan-300 font-mono">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* Tab 2: Architecture & Features */}
            {activeTab === 'features' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-mono">
                    Key Capabilities & Core Modules
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-[#060e1c] border border-cyan-500/15"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300 leading-snug">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Breakdown */}
                <div className="space-y-2.5 pt-4">
                  <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-mono">
                    Technologies & Libraries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-xl bg-[#060e1c] border border-cyan-500/30 text-xs font-mono font-semibold text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 3: Interactive Preview Simulator */}
            {activeTab === 'preview' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                {/* Device Selector */}
                <div className="flex items-center justify-between bg-[#060e1c] p-2 rounded-xl border border-cyan-500/20 text-xs">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setPreviewDevice('desktop')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                        previewDevice === 'desktop'
                          ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/40'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Laptop className="w-3.5 h-3.5" />
                      <span>Desktop View</span>
                    </button>
                    <button
                      onClick={() => setPreviewDevice('mobile')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                        previewDevice === 'mobile'
                          ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/40'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>Mobile View</span>
                    </button>
                  </div>

                  <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Live Simulator Ready
                  </span>
                </div>

                {/* Viewport Box */}
                <div className="flex justify-center p-4 bg-[#050b14] rounded-2xl border border-cyan-500/20 min-h-[340px] items-center">
                  <div
                    className={`transition-all duration-300 rounded-xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-[#091527] ${
                      previewDevice === 'desktop' ? 'w-full aspect-[16/10]' : 'w-[280px] aspect-[9/16]'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            )}

          </div>

          {/* Modal Actions Footer */}
          <div className="p-5 sm:p-6 border-t border-cyan-500/20 bg-[#060e1c]/90 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <a
                id="modal-github-link"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#091527] border border-cyan-500/30 hover:border-cyan-400 text-slate-200 hover:text-cyan-300 text-xs font-semibold transition-all shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              <button
                id="modal-close-bottom-btn"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                Close
              </button>

              <a
                id="modal-live-demo-link"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 text-xs font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                <span>Launch Live App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
