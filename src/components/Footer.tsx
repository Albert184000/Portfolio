import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-cyan-500/15 bg-[#040810]/95 relative z-10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-sky-600 p-[1px] shadow-[0_0_12px_rgba(6,182,212,0.3)]">
              <div className="w-full h-full bg-[#07111e] rounded-[7px] flex items-center justify-center font-mono font-bold text-cyan-400 text-xs">
                AT
              </div>
            </div>
            <span className="font-semibold text-sm text-slate-200">
              {PERSONAL_INFO.name}
            </span>
          </div>

          {/* Copyright text */}
          <p className="text-xs text-slate-500 font-mono text-center md:text-left">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          {/* Navigation Links & Scroll Top */}
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-4 text-xs text-slate-400">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-cyan-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              id="footer-scroll-top-btn"
              onClick={scrollToTop}
              title="Back to Top"
              className="w-8 h-8 rounded-lg bg-[#071322] border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-950/50 text-cyan-400 flex items-center justify-center transition-all shadow-sm cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
