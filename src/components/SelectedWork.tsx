import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, 
  ArrowRight, 
  ArrowUpRight, 
  ExternalLink, 
  Github, 
  Sparkles,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export default function SelectedWork({ onSelectProject }: SelectedWorkProps) {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Full Stack' | 'Web App'>('All');

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-16 md:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Selected Work
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                Featured production apps, SaaS platforms & full-stack systems
              </p>
            </div>
          </div>

          {/* Filter Pills & View All */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-[#091426] p-1 rounded-xl border border-cyan-500/20 text-xs">
              {(['All', 'Full Stack', 'Web App'] as const).map((filter) => (
                <button
                  key={filter}
                  id={`project-filter-${filter.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                    selectedFilter === filter
                      ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <button
              id="view-all-projects-btn"
              onClick={() => onSelectProject(PROJECTS[0])}
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors ml-3 group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Projects Grid (3 Column responsive layout matching screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => onSelectProject(project)}
                className="rounded-3xl bg-[#091527]/90 border border-cyan-500/25 overflow-hidden backdrop-blur-xl shadow-[0_15px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between group hover:border-cyan-400/50 hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* Project Screenshot Mockup Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#060e1c] border-b border-cyan-500/20">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#091527] via-transparent to-black/20 opacity-60 group-hover:opacity-30 transition-opacity" />

                    {/* Category Pill Tag (top right) */}
                    <div className="absolute top-3.5 right-3.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#071322]/85 border border-cyan-500/40 backdrop-blur-md text-[11px] font-semibold text-cyan-300 shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        {project.category}
                      </span>
                    </div>

                    {/* Hover detail preview overlay badge */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#06101e]/60 backdrop-blur-[2px]">
                      <span className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.6)] transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <span>View Project Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Project Body */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight flex items-center justify-between">
                      <span>{project.title}</span>
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Footer: Tech stack tags and Arrow Action */}
                <div className="px-6 pb-6 pt-2 border-t border-cyan-500/10 flex items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-[#071221] border border-cyan-500/20 text-[10px] sm:text-[11px] font-mono text-cyan-300/90 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 rounded-lg bg-[#071221] text-[10px] font-mono text-slate-400">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Arrow Action Button */}
                  <div className="w-8 h-8 rounded-xl bg-cyan-950/80 border border-cyan-500/30 group-hover:border-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 text-cyan-400 flex items-center justify-center transition-all duration-300 shrink-0 shadow-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
