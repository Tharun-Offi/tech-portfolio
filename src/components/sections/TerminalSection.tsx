import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, CornerDownLeft, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, contactData, experiences, educations, projects } from '../../data/portfolioData';
import { sounds } from '../../utils/sound';

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
  time: string;
}

export const TerminalSection: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'init-1',
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">🚀 Tharun OS v2.5 [Kernel x86_64 WebGL Build - Java Full Stack & Python AI Edition]</p>
          <p>Type <span className="text-yellow-400 font-bold">help</span> to view available system commands or <span className="text-pink-400 font-bold">sudo hire</span> for instant hiring mode.</p>
        </div>
      ),
      time: '19:45:00',
    },
  ]);

  const [cmdIndex, setCmdIndex] = useState(-1);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const getTime = () => {
    const d = new Date();
    return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#06b6d4', '#a855f7', '#10b981', '#f59e0b', '#ec4899'],
    });
  };

  const handleCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim().toLowerCase();
    if (!trimmed) return;

    sounds.playClick();
    setCmdHistory((prev) => [...prev, trimmed]);
    setCmdIndex(-1);

    let outputNode: React.ReactNode;

    switch (trimmed) {
      case 'help':
      case '?':
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-300 font-semibold">// AVAILABLE SYSTEM COMMANDS:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pl-2 text-xs">
              <div><span className="text-yellow-400 font-mono">about</span> - Tharun's profile & engineering focus</div>
              <div><span className="text-yellow-400 font-mono">skills</span> - Full Java Stack + Python AI matrix</div>
              <div><span className="text-yellow-400 font-mono">experience</span> - TCS & Expleo industry roadmap</div>
              <div><span className="text-yellow-400 font-mono">projects</span> - View all featured projects</div>
              <div><span className="text-yellow-400 font-mono">education</span> - Academic credentials (CGPA: 7.92)</div>
              <div><span className="text-yellow-400 font-mono">contact</span> - Email, WhatsApp & socials</div>
              <div><span className="text-yellow-400 font-mono">sudo hire</span> - Offer position & trigger celebration</div>
              <div><span className="text-yellow-400 font-mono">clear</span> - Clear terminal history</div>
            </div>
          </div>
        );
        break;

      case 'about':
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400 font-bold">{personalInfo.name} — {personalInfo.currentPosition}</p>
            <p className="text-xs leading-relaxed">{personalInfo.aboutSummary}</p>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2 text-slate-300">
            <p className="text-cyan-400 font-bold">Java Full Stack & Python AI Stack Competencies:</p>
            <p className="text-xs"><strong className="text-red-400">Languages:</strong> Python, Java, TypeScript, JavaScript, SQL, PL/SQL, C, HTML5, CSS3</p>
            <p className="text-xs"><strong className="text-emerald-400">Backend:</strong> Spring Boot, Java Servlets, FastAPI, Flask, REST APIs, Redis, Celery, SocketIO</p>
            <p className="text-xs"><strong className="text-cyan-400">Frontend:</strong> Angular, React.js, Vite, Bootstrap, Tailwind CSS, A-Frame (WebVR), Three.js</p>
            <p className="text-xs"><strong className="text-purple-400">Databases:</strong> PostgreSQL, MySQL, Supabase, H2 Database, SQLite, SQLAlchemy ORM</p>
            <p className="text-xs"><strong className="text-yellow-400">AI & NLP:</strong> Transformers (DistilBERT), Scikit-learn, XGBoost, LSTM, CNN, spaCy, RapidFuzz</p>
            <p className="text-xs"><strong className="text-pink-400">IoT & Tools:</strong> Arduino, Sensor Integration, Git/GitHub, Postman, VS Code, OOP, Agile</p>
          </div>
        );
        break;

      case 'experience':
        outputNode = (
          <div className="space-y-3 text-slate-300 text-xs">
            {experiences.map((exp) => (
              <div key={exp.id} className="p-2 rounded bg-slate-900/60 border border-slate-800">
                <p className="font-bold text-cyan-300">{exp.role} @ {exp.company}</p>
                <p className="text-slate-400 font-mono text-[11px]">{exp.period} | {exp.location}</p>
                <p className="mt-1 text-slate-300">{exp.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        outputNode = (
          <div className="space-y-2 text-slate-300 text-xs">
            {educations.map((edu) => (
              <div key={edu.id}>
                <p className="font-bold text-purple-300">{edu.degree} — <span className="text-white">{edu.score}</span></p>
                <p className="text-slate-400">{edu.institution} ({edu.period})</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 text-slate-300 text-xs">
            <p className="text-cyan-400 font-bold">Featured Projects:</p>
            {projects.map((p) => (
              <div key={p.id} className="flex items-center justify-between py-1 border-b border-slate-800">
                <span>{p.title} ({p.type})</span>
                <a href={p.githubUrl} target="_blank" rel="noreferrer" className="text-cyan-400 underline font-mono">
                  GitHub
                </a>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 text-slate-300 text-xs font-mono">
            <p><strong className="text-cyan-300">Email:</strong> {contactData.email}</p>
            <p><strong className="text-emerald-300">Phone:</strong> {contactData.phone}</p>
            <p><strong className="text-pink-300">Location:</strong> {contactData.location}</p>
            <p><strong className="text-purple-300">GitHub:</strong> {contactData.socials.github}</p>
            <p><strong className="text-blue-300">LinkedIn:</strong> {contactData.socials.linkedin}</p>
          </div>
        );
        break;

      case 'sudo hire':
      case 'hire':
        sounds.playSuccess();
        triggerConfetti();
        outputNode = (
          <div className="space-y-2 text-emerald-400 font-mono text-xs p-3 bg-emerald-950/40 border border-emerald-500/40 rounded-xl">
            <p className="font-bold text-sm">🎉 Sudo Access Granted! Thank you for the opportunity!</p>
            <p className="text-slate-200">You can connect with Tharun directly at <a href={`mailto:${contactData.email}`} className="text-cyan-400 underline">{contactData.email}</a> or WhatsApp at <a href={contactData.whatsapp} target="_blank" rel="noreferrer" className="text-emerald-300 underline">{contactData.phone}</a>.</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        outputNode = (
          <p className="text-rose-400 text-xs">
            Command not found: "{rawCmd}". Type <span className="text-yellow-400 font-bold">help</span> to list available commands.
          </p>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: rawCmd,
        output: outputNode,
        time: getTime(),
      },
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIndex = cmdIndex + 1 < cmdHistory.length ? cmdIndex + 1 : cmdIndex;
        setCmdIndex(nextIndex);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdIndex > 0) {
        const nextIndex = cmdIndex - 1;
        setCmdIndex(nextIndex);
        setInputVal(cmdHistory[cmdHistory.length - 1 - nextIndex] || '');
      } else if (cmdIndex === 0) {
        setCmdIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <section id="terminal" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>05 // Interactive CLI Shell</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Developer <span className="cyber-gradient-text">Terminal</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            A fully interactive keyboard-driven terminal emulator. Try running commands like <code className="text-cyan-300 font-mono">skills</code>, <code className="text-cyan-300 font-mono">projects</code>, or <code className="text-pink-400 font-mono">sudo hire</code>!
          </p>
        </div>

        {/* Cyber Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-cyan-500/30 bg-slate-950/90 backdrop-blur-2xl shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden flex flex-col h-[460px] font-mono text-xs sm:text-sm"
        >
          {/* Terminal Titlebar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={() => setHistory([])} title="Clear" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs text-slate-400 ml-2 font-mono">tharun@java-python-terminal: ~/portfolio</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setHistory([])}
                className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
                title="Clear Logs"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Scroll Log */}
          <div
            ref={scrollRef}
            onClick={() => inputRef.current?.focus()}
            className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 cursor-text"
          >
            {history.map((item) => (
              <div key={item.id} className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="text-emerald-400">tharun@port:~$</span>
                  <span className="text-white font-bold">{item.command}</span>
                  <span className="text-slate-600 text-[10px] ml-auto">{item.time}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}
          </div>

          {/* Terminal Input Bar */}
          <div className="p-3 sm:p-4 bg-slate-900/80 border-t border-slate-800/80 flex items-center gap-3">
            <span className="text-emerald-400 font-bold font-mono">guest@port:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type 'help', 'skills', 'projects', 'sudo hire'..."
              className="flex-1 bg-transparent text-white font-mono focus:outline-none placeholder:text-slate-600 text-xs sm:text-sm"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              onClick={() => handleCommand(inputVal)}
              className="p-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 border border-cyan-500/40 transition-colors"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Quick Click Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
          <span className="text-xs font-mono text-slate-500">Quick run:</span>
          {['help', 'skills', 'projects', 'experience', 'education', 'sudo hire', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-3 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all cursor-pointer"
            >
              {cmd}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
