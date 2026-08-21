import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Phone, Heart, Code2 } from 'lucide-react';
import { contactData, personalInfo } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../ui/Icons';
import { sounds } from '../../utils/sound';

export const Footer: React.FC = () => {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setIstTime(new Intl.DateTimeFormat('en-IN', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950/90 backdrop-blur-xl pt-16 pb-12 overflow-hidden">
      {/* Background cyber radial */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-cyan-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/60">
          {/* Col 1: Brand & Status */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 p-[1.5px] shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center font-mono font-bold text-cyan-400">
                  TM
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">{personalInfo.name}</h3>
                <p className="text-xs font-mono text-cyan-400">{personalInfo.currentPosition}</p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Computer Science & Engineering graduate specializing in responsive web applications, interactive 3D WebGL interfaces, systems programming, and machine learning pipelines.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>IST (UTC+5:30): <strong className="text-cyan-300">{istTime || 'Loading...'}</strong></span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400">
                ● Open to Tech Discussions
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold">
              // Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {['About', 'Skills', 'Experience', 'Projects', 'Terminal', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => sounds.playClick()}
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-cyan-500/50">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Connect & Socials */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-300 font-semibold">
              // Connect
            </h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={`mailto:${contactData.email}`}
                className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="truncate">{contactData.email}</span>
              </a>
              <a
                href={contactData.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{contactData.phone}</span>
              </a>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={contactData.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all shadow-md"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={contactData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all shadow-md"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={contactData.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-500/50 transition-all shadow-md"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Tharun Murugavel. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="flex items-center gap-1">
              Built with <Code2 className="w-3.5 h-3.5 text-cyan-400" /> & <Heart className="w-3.5 h-3.5 text-pink-500" />
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all cursor-pointer group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

