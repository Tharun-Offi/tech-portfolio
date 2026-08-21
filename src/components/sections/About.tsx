import React from 'react';
import { motion } from 'framer-motion';
import { User, Server, Layers, ShieldCheck, MapPin, Award } from 'lucide-react';
import { personalInfo, contactData } from '../../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Server,
      title: 'Enterprise Backend & APIs',
      description: 'Building secure microservices, Java Servlets, Spring Boot, and high-performance asynchronous Python FastAPI architectures.',
      color: '#06b6d4',
    },
    {
      icon: ShieldCheck,
      title: 'Cyber Security & Systems',
      description: 'Specialized in secure software engineering, threat mitigation, network protocols, and Software-in-the-Loop (SiL) servers.',
      color: '#10b981',
    },
    {
      icon: Layers,
      title: 'Databases & Modern UI',
      description: 'Engineering optimized MySQL & PL/SQL database systems integrated with dynamic Angular, React, and 3D WebGL interfaces.',
      color: '#8b5cf6',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <User className="w-3.5 h-3.5" />
            <span>01 // Background & Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="cyber-gradient-text">Tharun Murugavel</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Computer Science & Engineering graduate specialized in Cyber Security, building robust enterprise systems and intuitive web solutions.
          </p>
        </div>

        {/* Multi-Column Layout: Portrait Profile Card + Bio + Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Col 1: Photo & Quick Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-card p-6 rounded-2xl border border-slate-800 flex flex-col items-center text-center space-y-5 justify-between relative overflow-hidden"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Generated Profile Image with Cyber Hologram Frame */}
            <div className="relative group">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl p-[3px] bg-gradient-to-tr from-cyan-500 via-sky-400 to-purple-600 shadow-[0_0_30px_rgba(6,182,212,0.35)] group-hover:shadow-[0_0_45px_rgba(168,85,247,0.55)] transition-all duration-500 overflow-hidden">
                <img
                  src="/avatar.jpg"
                  alt="Tharun Murugavel - Software Engineer"
                  className="w-full h-full object-cover rounded-[13px] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-950/90 border border-cyan-500/40 text-[11px] font-mono text-cyan-300 backdrop-blur-md whitespace-nowrap flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Assistant System Engineer @ TCS</span>
              </div>
            </div>

            {/* Name & Subtitles */}
            <div className="space-y-1 pt-2">
              <h3 className="text-2xl font-bold text-white tracking-tight">{personalInfo.name}</h3>
              <p className="text-xs font-mono text-cyan-400 font-semibold">{personalInfo.currentPosition}</p>
              <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-pink-400" />
                <span>{contactData.location}</span>
              </p>
            </div>

            {/* Key Academic & Metric Tags */}
            <div className="grid grid-cols-2 gap-3 w-full pt-2">
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="text-cyan-300 font-mono font-bold text-lg">{personalInfo.cgpa}</div>
                <div className="text-[10px] text-slate-400 font-mono uppercase">B.E. CSE CGPA</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="text-purple-300 font-mono font-bold text-lg">84.34%</div>
                <div className="text-[10px] text-slate-400 font-mono uppercase">Higher Sec (XII)</div>
              </div>
            </div>
          </motion.div>

          {/* Col 2: Detailed Bio Story & 3 Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Bio Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-4"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
                <Award className="w-4 h-4" />
                <span>ENGINEERING EXCELLENCE & CYBER SECURITY</span>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Hi! I am Tharun Murugavel, a dedicated Computer Science and Engineering graduate specialized in <strong>Cyber Security</strong> from <strong>Erode Sengunthar Engineering College</strong>, maintaining consistent academic excellence with a <strong>{personalInfo.cgpa} CGPA</strong>. My academic journey began with a distinguished score of 506.06/600 at S.D. Eaden Matric. Hr. Sec. School.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Proficient in modern full-stack development with <strong>Spring Boot</strong>, <strong>Java Servlets</strong>, <strong>Python FastAPI</strong>, <strong>Angular</strong>, and <strong>MySQL / PL/SQL</strong>. Having developed Software-in-the-Loop (SiL) application servers at <strong>Expleo Solutions</strong> and currently working as an <strong>Assistant System Engineer at Tata Consultancy Services (TCS)</strong>, I love building secure, scalable, and impactful solutions.
              </p>
            </motion.div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="glass-card glass-card-hover p-4 rounded-xl border border-slate-800 flex flex-col justify-between"
                  >
                    <div
                      className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 w-fit mb-3"
                      style={{ color: pillar.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{pillar.title}</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{pillar.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
