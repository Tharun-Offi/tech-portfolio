import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../../data/portfolioData';
import { TechSphere } from '../3d/TechSphere';
import { sounds } from '../../utils/sound';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 relative overflow-visible bg-slate-950/40">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>02 // Tech Stack & Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="cyber-gradient-text">Mastery</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Streamlined into high-impact pillars spanning Java enterprise backends, Python AI / ML pipelines, modern frontend UI, and database engineering.
          </p>
        </div>

        {/* Two Column Layout: Sticky 3D Sphere on Left + Fixed Sticky Navigation on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: 3D Interactive Tech Sphere (Sticky Anchored) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col justify-center"
          >
            <TechSphere />
            <p className="text-center text-xs font-mono text-slate-500 mt-3">
              ✦ Interactive 3D Tech Cloud (Drag to rotate 360°)
            </p>
          </motion.div>

          {/* Right Column: Fixed Sticky Category Navigation Bar + Skill Cards */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Fixed Sticky Navigation Bar */}
            <div className="sticky top-20 sm:top-24 z-30 p-2 rounded-2xl bg-slate-950/90 border border-cyan-500/30 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                {skillCategories.map((cat, idx) => (
                  <button
                    key={cat.title}
                    onClick={() => {
                      sounds.playClick();
                      setActiveCategory(idx);
                    }}
                    className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer text-center truncate ${
                      activeCategory === idx
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-[1.02]'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                    }`}
                    title={cat.title}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Description Banner */}
            <div className="px-4 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs font-mono text-cyan-400/90 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{skillCategories[activeCategory].description}</span>
            </div>

            {/* Skills List with Smooth Animated Progress Bars */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-3.5"
              >
                {skillCategories[activeCategory].skills.map((skill, idx) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => sounds.playHover()}
                    className="glass-card p-4 rounded-xl border border-slate-800/90 hover:border-cyan-500/40 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-2.5 h-2.5 rounded-full shadow-sm"
                          style={{ backgroundColor: skill.color }}
                        />
                        <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-xs text-slate-400 hidden sm:inline">
                          — {skill.description}
                        </span>
                      </div>

                      <span className="text-xs font-mono font-bold" style={{ color: skill.color }}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Animated Proficiency Bar */}
                    <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.08 }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, #a855f7)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
};
