import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Quote, 
  BarChart3, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Layers, 
  Briefcase, 
  Code2
} from 'lucide-react';
import { TESTIMONIALS, STATS } from '../data/portfolioData';

export default function TestimonialsAndStats() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const currentTestimonial = TESTIMONIALS[currentTestimonialIndex];

  const handlePrev = () => {
    setAutoPlay(false);
    setCurrentTestimonialIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setAutoPlay(false);
    setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const statIcons: Record<string, any> = {
    Layers,
    Briefcase,
    Star,
    Code2
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: What Clients Say */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 rounded-3xl bg-[#091426]/90 border border-cyan-500/25 p-7 sm:p-8 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex flex-col justify-between relative overflow-hidden group hover:border-cyan-400/40 transition-all duration-300"
          >
            {/* Background glowing quote accent */}
            <div className="absolute top-4 right-4 text-cyan-500/10 pointer-events-none">
              <Quote className="w-32 h-32" />
            </div>

            <div className="space-y-6 relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                    <Quote className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    What Clients Say
                  </h2>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
              </div>

              {/* Testimonial Quote Slider */}
              <div className="min-h-[140px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic font-light">
                      "{currentTestimonial.content}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-3.5 pt-2">
                      <img
                        src={currentTestimonial.avatar}
                        alt={currentTestimonial.name}
                        referrerPolicy="no-referrer"
                        className="w-11 h-11 rounded-full object-cover border-2 border-cyan-400/40 shadow-[0_0_10px_rgba(6,182,212,0.3)]"
                      />
                      <div>
                        <div className="text-sm font-bold text-white tracking-tight">
                          — {currentTestimonial.name}
                        </div>
                        <div className="text-xs text-cyan-400 font-medium">
                          {currentTestimonial.role}, {currentTestimonial.company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Slider Navigation & Pagination Dots */}
            <div className="flex items-center justify-between pt-6 border-t border-cyan-500/10 mt-6 relative z-10">
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    id={`testimonial-dot-${idx}`}
                    onClick={() => {
                      setAutoPlay(false);
                      setCurrentTestimonialIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentTestimonialIndex === idx
                        ? 'w-6 bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.6)]'
                        : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  id="testimonial-prev-btn"
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-lg bg-[#071322] border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-950/40 text-slate-300 hover:text-cyan-300 flex items-center justify-center transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  id="testimonial-next-btn"
                  onClick={handleNext}
                  className="w-8 h-8 rounded-lg bg-[#071322] border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-950/40 text-slate-300 hover:text-cyan-300 flex items-center justify-center transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </motion.div>

          {/* Right Column: By The Numbers Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 rounded-3xl bg-[#091426]/90 border border-cyan-500/25 p-7 sm:p-8 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex flex-col justify-between relative overflow-hidden group hover:border-cyan-400/40 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                By The Numbers
              </h2>
            </div>

            {/* 2x2 Stats Grid (or 4 responsive items matching screenshot) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4 flex-1">
              {STATS.map((stat, sIdx) => {
                const Icon = statIcons[stat.iconName] || Star;
                return (
                  <motion.div
                    key={stat.id}
                    id={stat.id}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="rounded-2xl bg-[#071322]/80 border border-cyan-500/20 p-4 sm:p-5 flex flex-col justify-between hover:border-cyan-400/50 hover:bg-[#0c1e38]/60 transition-all duration-300 shadow-inner group/stat"
                  >
                    <div className="flex items-center justify-between">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <Icon className="w-4 h-4 text-cyan-500/60 group-hover/stat:text-cyan-400 transition-colors" />
                    </div>

                    <div className="my-2">
                      <div className="text-3xl sm:text-4xl font-extrabold text-cyan-300 tracking-tight drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]">
                        {stat.value}
                      </div>
                      <div className="text-xs font-semibold text-slate-300 mt-1">
                        {stat.label}
                      </div>
                    </div>

                    <div className="text-[10px] text-slate-500 font-mono">
                      Verified Milestone
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Status bar */}
            <div className="pt-4 flex items-center justify-between text-xs text-slate-400 border-t border-cyan-500/10 mt-5">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                Currently accepting freelance & full-time roles
              </span>
              <span className="font-mono text-cyan-400 text-[11px]">
                Modern web stack
              </span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
