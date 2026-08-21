import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Sparkles, Eye, ArrowUpRight, Flame, Glasses, TrendingUp, Smartphone, TerminalSquare } from 'lucide-react';
import { projects } from '../../data/portfolioData';
import { Project } from '../../types';
import { ProjectModal } from '../ui/ProjectModal';
import { GithubIcon } from '../ui/Icons';
import { sounds } from '../../utils/sound';

const ProjectIconMap: Record<string, React.FC<{ className?: string }>> = {
  Glasses,
  TrendingUp,
  Flame,
  Smartphone,
  TerminalSquare,
  Sparkles,
};

// 3D Perspective Tilt Card Component
const TiltCard: React.FC<{ project: Project; onSelect: (p: Project) => void }> = ({ project, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -12; // tilt angle
    const rY = ((x - centerX) / centerX) * 12;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  const IconComponent = ProjectIconMap[project.iconName] || Sparkles;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => sounds.playHover()}
        onClick={() => {
          sounds.playClick();
          onSelect(project);
        }}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: 'preserve-3d',
        }}
        className="relative h-full glass-card p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-transform duration-200 ease-out cursor-pointer flex flex-col justify-between group overflow-hidden"
      >
        {/* Dynamic Glare Sheen */}
        <div
          className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.2) 0%, transparent 60%)`,
            opacity: glarePosition.opacity,
          }}
        />

        {/* Top Accent Line */}
        <div
          className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
          style={{ backgroundColor: project.accentColor }}
        />

        {/* Card Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 shadow-md group-hover:scale-110 transition-transform"
              style={{ color: project.accentColor }}
            >
              <IconComponent className="w-6 h-6" />
            </div>

            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                  sounds.playClick();
                }}
                className="p-2 rounded-xl bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
                title="View GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <div className="p-2 rounded-xl bg-slate-900/90 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black border border-slate-800 transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div>
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
              {project.type}
            </span>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Card Footer: Tech tags & Action */}
        <div className="pt-6 space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
              >
                {t}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-1 rounded-md text-[11px] font-mono bg-slate-900/60 text-slate-500">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-cyan-300">
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" /> Click for full details
            </span>
            <span>➔</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'ml' | 'systems'>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web & VR' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'systems', label: 'Systems & IoT' },
  ] as const;

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/50">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>04 // Engineering Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="cyber-gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Interactive 3D showcases, machine learning predictive models, embedded real-time systems, and full-stack solutions.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                sounds.playClick();
                setSelectedCategory(cat.id);
              }}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects 3D Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <TiltCard
                key={project.id}
                project={project}
                onSelect={(p) => setActiveProjectModal(p)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />

      </div>
    </section>
  );
};

