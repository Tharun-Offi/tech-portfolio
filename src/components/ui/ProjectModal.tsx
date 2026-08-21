import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, Layers, CheckCircle2 } from 'lucide-react';
import { Project } from '../../types';
import { GithubIcon } from './Icons';
import { sounds } from '../../utils/sound';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.2)] overflow-hidden z-10 my-8"
        >
          {/* Header Banner with Accent Color */}
          <div
            className="p-6 border-b border-slate-800 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, rgba(13, 17, 30, 0.95) 0%, rgba(18, 24, 43, 0.9) 100%)`,
            }}
          >
            <div
              className="absolute top-0 left-0 w-full h-1"
              style={{ backgroundColor: project.accentColor }}
            />

            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800 text-cyan-400 border border-cyan-500/20 mb-2">
                  <Sparkles className="w-3 h-3" />
                  {project.type}
                </span>
                <h2 className="text-2xl font-bold text-white tracking-tight">{project.title}</h2>
              </div>

              <button
                onClick={() => {
                  sounds.playClick();
                  onClose();
                }}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 space-y-6">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" /> Project Overview
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">{project.longDescription}</p>
            </div>

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-2 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-[11px] font-mono text-slate-400 uppercase">{m.label}</span>
                    <p className="text-base font-bold text-cyan-300 mt-0.5">{m.value}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Tags & Tech */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Technologies Applied
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-slate-200 border border-slate-700/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => sounds.playClick()}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold border border-slate-600 transition-all shadow-md"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Repository</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sounds.playClick()}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 text-white text-sm font-semibold shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

