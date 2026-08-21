import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { experiences, educations } from '../../data/portfolioData';
import { sounds } from '../../utils/sound';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>03 // Career Roadmap & Academics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & <span className="cyber-gradient-text">Education</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            My professional milestones across industry engineering roles and academic computer science achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Work / Corporate Experience Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-2 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Work Experience</h3>
                <p className="text-xs font-mono text-cyan-400/80">Corporate Roles & Engineering</p>
              </div>
            </div>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-cyan-500 before:via-purple-500 before:to-transparent">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  onMouseEnter={() => sounds.playHover()}
                  className="relative glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 space-y-4"
                >
                  {/* Glowing Node Dot */}
                  <span className="absolute -left-[30px] top-6 w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#06b6d4] border-2 border-slate-950" />

                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 mb-1">
                        {exp.status}
                      </span>
                      <h4 className="text-lg font-bold text-white tracking-tight">{exp.role}</h4>
                      <p className="text-sm font-semibold text-cyan-400">{exp.company}</p>
                    </div>

                    <div className="text-right text-xs font-mono text-slate-400 space-y-1">
                      <div className="flex items-center gap-1.5 justify-end">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 justify-end text-slate-500">
                        <MapPin className="w-3.5 h-3.5 text-pink-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{exp.description}</p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ArrowRight className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Academic Education Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-2 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Education</h3>
                <p className="text-xs font-mono text-purple-400/80">Academic Degree & Schooling</p>
              </div>
            </div>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-purple-500 before:via-cyan-500 before:to-transparent">
              {educations.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  onMouseEnter={() => sounds.playHover()}
                  className="relative glass-card glass-card-hover p-6 rounded-2xl border border-slate-800 space-y-3"
                >
                  {/* Glowing Node Dot */}
                  <span className="absolute -left-[30px] top-6 w-3.5 h-3.5 rounded-full bg-purple-400 shadow-[0_0_12px_#a855f7] border-2 border-slate-950" />

                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-950/80 text-purple-300 border border-purple-500/30 mb-1">
                        {edu.score}
                      </span>
                      <h4 className="text-lg font-bold text-white tracking-tight">{edu.degree}</h4>
                      {edu.field && (
                        <p className="text-sm font-semibold text-purple-400">{edu.field}</p>
                      )}
                    </div>

                    <div className="text-right text-xs font-mono text-slate-400 space-y-1">
                      <div className="flex items-center gap-1.5 justify-end">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 justify-end text-slate-500">
                        <MapPin className="w-3.5 h-3.5 text-pink-400" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-cyan-300 font-mono">{edu.institution}</p>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

