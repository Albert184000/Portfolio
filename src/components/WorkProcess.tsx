import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Workflow, 
  Search, 
  FileText, 
  PenTool, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { WORK_PROCESS } from '../data/portfolioData';

export default function WorkProcess() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(3); // default Develop (04) or interactive

  const iconMap: Record<string, any> = {
    Search,
    FileText,
    PenTool,
    Code2,
    ShieldCheck,
    Rocket
  };

  const currentStep = WORK_PROCESS[activeStepIndex];
  const CurrentIcon = iconMap[currentStep.iconName] || Code2;

  return (
    <section id="process" className="py-16 md:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Container Card */}
        <div className="rounded-3xl bg-[#091426]/90 border border-cyan-500/25 p-7 sm:p-10 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.4)] relative overflow-hidden">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-cyan-500/15">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Workflow className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  My Work Process
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                  End-to-end engineering methodology from initial concept to scalable deployment
                </p>
              </div>
            </div>

            <div className="text-xs font-mono text-cyan-400/90 bg-cyan-950/40 px-3 py-1.5 rounded-lg border border-cyan-500/20 w-fit">
              Step {currentStep.stepNumber} of 06: {currentStep.title}
            </div>
          </div>

          {/* Connected Steps Grid / Pipeline */}
          <div className="relative mb-10">
            
            {/* Connecting Cyan Glowing Line (Desktop) */}
            <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 bg-[#10243d] z-0">
              <motion.div 
                className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-teal-300 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                animate={{ width: `${((activeStepIndex + 0.5) / WORK_PROCESS.length) * 100}%` }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
            </div>

            {/* Steps Array */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 relative z-10">
              {WORK_PROCESS.map((step, idx) => {
                const Icon = iconMap[step.iconName] || Search;
                const isActive = activeStepIndex === idx;
                const isCompleted = idx <= activeStepIndex;

                return (
                  <motion.button
                    key={step.stepNumber}
                    id={`process-step-${step.stepNumber}`}
                    onClick={() => setActiveStepIndex(idx)}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.96 }}
                    className={`flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-[#0c1e38] border border-cyan-400/70 shadow-[0_0_25px_rgba(6,182,212,0.25)]'
                        : 'bg-[#071322]/60 hover:bg-[#0c1e38]/50 border border-cyan-500/15'
                    }`}
                  >
                    {/* Circle Node with Icon */}
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-br from-cyan-400 to-sky-600 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.7)] ring-4 ring-cyan-500/20'
                          : isCompleted
                          ? 'bg-cyan-950/90 text-cyan-300 border border-cyan-500/50'
                          : 'bg-[#060f1b] text-slate-500 border border-slate-800'
                      }`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Step Number */}
                    <span className="text-[11px] font-mono font-bold text-cyan-400 mb-0.5">
                      {step.stepNumber}
                    </span>

                    {/* Step Title */}
                    <span className={`text-xs sm:text-sm font-bold tracking-tight mb-1.5 ${
                      isActive ? 'text-white' : 'text-slate-300'
                    }`}>
                      {step.title}
                    </span>

                    {/* Short Description */}
                    <p className="text-[11px] text-slate-400 leading-snug line-clamp-2 hidden sm:block">
                      {step.description}
                    </p>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Active Step Detailed Overview Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.stepNumber}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-5 sm:p-6 rounded-2xl bg-[#060F1D]/80 border border-cyan-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-cyan-950 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/30">
                    Phase {currentStep.stepNumber}
                  </span>
                  <span className="text-white font-bold text-base sm:text-lg">
                    {currentStep.title} — {currentStep.subtitle}
                  </span>
                </div>
                
                <p className="text-slate-300 text-xs sm:text-sm">
                  {currentStep.description}
                </p>

                {/* Key Deliverables Bullet points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {currentStep.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick action button to cycle steps */}
              <button
                id="process-next-step-btn"
                onClick={() => setActiveStepIndex((activeStepIndex + 1) % WORK_PROCESS.length)}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 text-xs font-semibold hover:bg-cyan-500/25 transition-all shrink-0 cursor-pointer"
              >
                <span>Next Step: {WORK_PROCESS[(activeStepIndex + 1) % WORK_PROCESS.length].title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
