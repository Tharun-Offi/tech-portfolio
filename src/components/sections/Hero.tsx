import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Mail, Download, ShieldCheck, Activity, Cpu, Radio } from 'lucide-react';
import { contactData, personalInfo } from '../../data/portfolioData';
import { HeroCanvas } from '../3d/HeroCanvas';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { sounds } from '../../utils/sound';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const roles = [
    'Java Full Stack Developer',
    'Python AI / ML Engineer',
    'Cyber Security Engineer',
    'Assistant System Engineer @ TCS'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [fps, setFps] = useState(60);

  useEffect(() => {
    // Dynamic simulated 60 FPS monitor fluctuation for cyberpunk realism
    const interval = setInterval(() => {
      setFps(Math.floor(59 + Math.random() * 3));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentFullRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullRole.slice(0, displayText.length + 1));
        if (displayText.length + 1 === currentFullRole.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayText(currentFullRole.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section id="hero" className="min-h-screen relative pt-28 pb-16 flex items-center justify-center overflow-visible">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center overflow-visible">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-slate-300">Welcome to Tharun's 3D Space</span>
              <span className="text-cyan-400 font-semibold">• Assistant System Engineer @ TCS</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-sm font-mono tracking-wider text-slate-400 uppercase">
                Hello, World! I am
              </h2>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Tharun <span className="cyber-gradient-text">Murugavel</span>
              </h1>

              {/* Animated Role Typewriter */}
              <div className="h-10 flex items-center text-lg sm:text-2xl font-mono text-cyan-400">
                <span>{displayText}</span>
                <span className="w-2.5 h-6 bg-cyan-400 ml-1 animate-pulse" />
              </div>
            </div>

            {/* Brief Pitch */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
              Specialized in <strong>Java Full Stack & Python AI Engineering</strong>. Building secure Spring Boot microservices, FastAPI pipelines, Angular/React frontends, and interactive WebGL experiences. Currently at <strong>Tata Consultancy Services (TCS)</strong>.
            </p>

            {/* Metric Highlights */}
            <div className="grid grid-cols-3 gap-3 max-w-md pt-2">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-300">{personalInfo.cgpa}</div>
                <div className="text-[11px] text-slate-400 uppercase font-mono">B.E. CGPA</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-xl sm:text-2xl font-bold font-mono text-purple-300">7+</div>
                <div className="text-[11px] text-slate-400 uppercase font-mono">Projects</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-300">TCS / Expleo</div>
                <div className="text-[11px] text-slate-400 uppercase font-mono">Experience</div>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                onClick={() => sounds.playClick()}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 text-white font-semibold text-sm shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => {
                  sounds.playSuccess();
                  onOpenResume();
                }}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-semibold text-sm transition-all shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Resume / CV</span>
              </button>

              <a
                href="#terminal"
                onClick={() => sounds.playClick()}
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 font-mono text-xs transition-all"
                title="Launch Interactive Terminal"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Launch CLI</span>
              </a>
            </div>

            {/* Social Links Quick Bar */}
            <div className="flex items-center gap-4 pt-2 text-slate-400">
              <span className="text-xs font-mono text-slate-500">Quick Connect:</span>
              <a
                href={contactData.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={contactData.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${contactData.email}`}
                aria-label="Email"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-purple-400 hover:border-purple-500/40 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Symmetrically Balanced 3D Hologram Frame & Interactive HUD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative overflow-visible"
          >
            <div className="w-full max-w-[460px] relative flex flex-col items-center justify-center overflow-visible space-y-3">
              
              {/* Top Floating Status Badges */}
              <div className="w-full flex items-center justify-between px-2 z-20">
                <div className="px-3 py-1.5 rounded-xl bg-slate-950/90 border border-cyan-500/30 backdrop-blur-md shadow-lg flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <div className="text-[11px] font-mono">
                    <span className="text-slate-400">FRAME RATE: </span>
                    <span className="text-cyan-300 font-bold">{fps} FPS</span>
                  </div>
                </div>

                <div className="px-3 py-1.5 rounded-xl bg-slate-950/90 border border-purple-500/30 backdrop-blur-md shadow-lg flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                  <div className="text-[11px] font-mono">
                    <span className="text-purple-300 font-bold">CYBER SEC PROTOCOL</span>
                  </div>
                </div>
              </div>

              {/* Centered Globe Canvas Stage with Perfect HUD Alignment */}
              <div className="w-full relative flex items-center justify-center my-1">
                {/* Concentric Rotating Cyber HUD Frame */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[360px] sm:w-[420px] h-[360px] sm:h-[420px] rounded-full border border-cyan-500/25 animate-spin-slow shadow-[0_0_25px_rgba(6,182,212,0.12)]" />
                  <div className="absolute w-[300px] sm:w-[360px] h-[300px] sm:h-[360px] rounded-full border border-dashed border-purple-500/30" />
                  <div className="absolute w-[240px] sm:w-[290px] h-[240px] sm:h-[290px] rounded-full border border-cyan-400/10" />
                </div>

                {/* 3D WebGL Canvas */}
                <div className="relative z-10">
                  <HeroCanvas />
                </div>
              </div>

              {/* Bottom Interactive HUD Pod */}
              <div
                onClick={() => sounds.playClick()}
                className="w-full p-3.5 rounded-2xl bg-slate-950/95 border border-cyan-500/40 backdrop-blur-2xl shadow-[0_0_30px_rgba(6,182,212,0.25)] flex items-center justify-between gap-3 hover:border-cyan-400 cursor-pointer transition-all z-20 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Radio className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-cyan-400 flex items-center gap-1.5 font-semibold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>WEBGL 3D ENGINE • ONLINE</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white tracking-wide">
                      Interactive Particle Physics & Damping
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 flex-shrink-0">
                  <Cpu className="w-3.5 h-3.5 text-purple-400" />
                  <span className="font-bold text-cyan-300">1,200+ Nodes</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
