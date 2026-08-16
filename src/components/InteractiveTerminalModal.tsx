import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, CORE_SKILLS, PROJECTS } from '../data/portfolioData';

interface InteractiveTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export default function InteractiveTerminalModal({ isOpen, onClose }: InteractiveTerminalModalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: 'Welcome to UN Somnang CLI v1.0. Type "help" to view available developer commands.'
    }
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = '';

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-300">
            <div>Available Commands:</div>
            <div>• <span className="text-cyan-400">about</span> — Learn more about UN Somnang</div>
            <div>• <span className="text-cyan-400">skills</span> — View core skills & proficiencies</div>
            <div>• <span className="text-cyan-400">projects</span> — List featured projects</div>
            <div>• <span className="text-cyan-400">contact</span> — Get contact info</div>
            <div>• <span className="text-cyan-400">hire</span> — Send a job / contract proposal</div>
            <div>• <span className="text-cyan-400">clear</span> — Clear terminal output</div>
            <div>• <span className="text-cyan-400">exit</span> — Close terminal</div>
          </div>
        );
        break;

      case 'about':
        output = `${PERSONAL_INFO.bio} Currently based in ${PERSONAL_INFO.location}. Open for roles worldwide.`;
        break;

      case 'skills':
        output = (
          <div className="space-y-1">
            {CORE_SKILLS.map(s => (
              <div key={s.name} className="flex justify-between max-w-xs">
                <span className="text-slate-200">{s.name}:</span>
                <span className="text-cyan-400 font-bold">{s.percentage}%</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-1">
            {PROJECTS.map(p => (
              <div key={p.id}>
                <span className="text-cyan-300 font-bold">{p.title}</span> ({p.category}) — {p.description}
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = `Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Status: ${PERSONAL_INFO.availability}`;
        break;

      case 'hire':
        output = `Direct mailto link generated: ${PERSONAL_INFO.email}. Reach out anytime!`;
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
        onClose();
        return;

      case 'sudo':
      case 'sudo rm -rf /':
        output = 'Permission denied: Nice try! 😉 Everything is sandboxed.';
        break;

      default:
        output = `Command not recognized: "${cmd}". Type "help" for a list of commands.`;
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput('');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#040810]/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          className="relative w-full max-w-2xl bg-[#060D17] border border-cyan-500/40 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] z-10 flex flex-col font-mono text-xs"
        >
          {/* Terminal Titlebar */}
          <div className="px-4 py-3 bg-[#081322] border-b border-cyan-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-slate-400 font-semibold text-xs ml-2">unsomnang@devbox:~</span>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-5 h-[350px] overflow-y-auto space-y-3 text-slate-300">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span>➜</span>
                  <span className="text-slate-400">~</span>
                  <span className="text-slate-100 font-semibold">{item.command}</span>
                </div>
                <div className="pl-4 text-slate-300">{item.output}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Input */}
          <form onSubmit={handleCommand} className="p-3 bg-[#081322] border-t border-cyan-500/20 flex items-center gap-2">
            <span className="text-cyan-400">➜</span>
            <span className="text-slate-400">~</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type command ('help', 'projects', 'skills')..."
              className="flex-1 bg-transparent text-cyan-300 placeholder:text-slate-600 outline-none text-xs"
            />
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
