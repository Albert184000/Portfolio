import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutAndSkills from './components/AboutAndSkills';
import SelectedWork from './components/SelectedWork';
import WorkProcess from './components/WorkProcess';
import TestimonialsAndStats from './components/TestimonialsAndStats';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';
import ProjectModal from './components/ProjectModal';
import AboutModal from './components/AboutModal';
import DownloadCvModal from './components/DownloadCvModal';
import InteractiveTerminalModal from './components/InteractiveTerminalModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [terminalModalOpen, setTerminalModalOpen] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050B14] text-slate-200 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      {/* Interactive Cyber Ambient Background */}
      <InteractiveBackground />

      {/* Global Navigation Header */}
      <Navbar
        onOpenCvModal={() => setCvModalOpen(true)}
        onOpenTerminalModal={() => setTerminalModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onContactClick={() => handleScrollToSection('contact')}
          onViewWorkClick={() => handleScrollToSection('projects')}
        />

        <AboutAndSkills
          onOpenAboutModal={() => setAboutModalOpen(true)}
        />

        <SelectedWork
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <WorkProcess />

        <TestimonialsAndStats />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
      />

      <DownloadCvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      <InteractiveTerminalModal
        isOpen={terminalModalOpen}
        onClose={() => setTerminalModalOpen(false)}
      />
    </div>
  );
}
