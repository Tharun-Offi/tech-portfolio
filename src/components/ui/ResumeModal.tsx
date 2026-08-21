import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Briefcase, GraduationCap, Code2, Award, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo, contactData, experiences, educations, skillCategories } from '../../data/portfolioData';
import { sounds } from '../../utils/sound';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    sounds.playSuccess();

    // Create an isolated hidden iframe for clean, professional PDF printing
    const existingIframe = document.getElementById('resume-print-iframe');
    if (existingIframe) {
      existingIframe.remove();
    }

    const iframe = document.createElement('iframe');
    iframe.id = 'resume-print-iframe';
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow?.document;
    if (!doc) return;

    doc.open();
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${personalInfo.name} - Resume</title>
          <style>
            @page {
              size: A4 portrait;
              margin: 10mm 14mm;
            }
            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              color: #1e293b;
              background: #ffffff;
              line-height: 1.5;
              font-size: 12px;
            }
            .header-container {
              display: flex;
              align-items: center;
              justify-content: space-between;
              border-bottom: 2px solid #0284c7;
              padding-bottom: 12px;
              margin-bottom: 14px;
            }
            .profile-group {
              display: flex;
              align-items: center;
              gap: 16px;
            }
            .avatar-img {
              width: 72px;
              height: 72px;
              border-radius: 14px;
              object-fit: cover;
              border: 2px solid #0284c7;
            }
            .name-title h1 {
              font-size: 24px;
              font-weight: 800;
              color: #0f172a;
              line-height: 1.15;
            }
            .name-title .role {
              font-size: 13.5px;
              font-weight: 700;
              color: #0284c7;
              margin-top: 3px;
            }
            .name-title .degree {
              font-size: 11px;
              font-weight: 600;
              color: #64748b;
              margin-top: 2px;
            }
            .contact-box {
              text-align: right;
              font-size: 11px;
              color: #334155;
              font-family: monospace;
              line-height: 1.55;
            }
            .section-header {
              font-size: 12.5px;
              font-weight: 800;
              text-transform: uppercase;
              letter-spacing: 0.06em;
              color: #0369a1;
              border-bottom: 1.5px solid #e2e8f0;
              padding-bottom: 4px;
              margin-top: 14px;
              margin-bottom: 8px;
            }
            .avoid-break {
              page-break-inside: avoid;
              break-inside: avoid;
              margin-bottom: 8px;
            }
            .exp-card {
              background: #f8fafc;
              border: 1px solid #e2e8f0;
              border-radius: 8px;
              padding: 9px 12px;
              margin-bottom: 8px;
            }
            .exp-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-weight: 700;
              color: #0f172a;
              font-size: 12.5px;
            }
            .exp-company {
              color: #0284c7;
              font-weight: 700;
            }
            .exp-meta {
              font-size: 11px;
              color: #64748b;
              font-family: monospace;
            }
            .exp-desc {
              font-size: 11.5px;
              color: #334155;
              margin-top: 3px;
              margin-bottom: 4px;
            }
            ul {
              padding-left: 18px;
              margin-top: 3px;
            }
            li {
              font-size: 11px;
              color: #475569;
              margin-bottom: 2px;
            }
            .edu-row {
              display: flex;
              justify-content: space-between;
              align-items: center;
              background: #f8fafc;
              border: 1px solid #e2e8f0;
              border-radius: 8px;
              padding: 7px 12px;
              margin-bottom: 6px;
            }
            .edu-title {
              font-weight: 700;
              color: #0f172a;
              font-size: 11.5px;
            }
            .edu-inst {
              font-size: 11px;
              color: #64748b;
            }
            .edu-score {
              font-weight: 700;
              color: #0284c7;
              font-size: 11.5px;
              font-family: monospace;
              text-align: right;
            }
            .skills-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 8px;
            }
            .skill-box {
              background: #f8fafc;
              border: 1px solid #e2e8f0;
              border-radius: 8px;
              padding: 8px 12px;
            }
            .skill-cat-title {
              font-weight: 800;
              font-size: 11.5px;
              color: #0369a1;
              margin-bottom: 3px;
            }
            .skill-items {
              font-size: 11px;
              color: #334155;
              line-height: 1.45;
            }
          </style>
        </head>
        <body>
          <!-- Top Header without emojis -->
          <div class="header-container">
            <div class="profile-group">
              <img src="/avatar.jpg" alt="${personalInfo.name}" class="avatar-img" />
              <div class="name-title">
                <h1>${personalInfo.name}</h1>
                <div class="role">${personalInfo.currentPosition}</div>
                <div class="degree">B.E. Computer Science & Engineering (Specialized in Cyber Security)</div>
              </div>
            </div>
            <div class="contact-box">
              <div>Email: ${contactData.email}</div>
              <div>Phone: ${contactData.phone}</div>
              <div>Location: ${contactData.location}</div>
              <div>GitHub: github.com/Tharun-Offi</div>
            </div>
          </div>

          <!-- Executive Summary -->
          <div class="avoid-break">
            <div class="section-header">Executive Summary</div>
            <p style="font-size: 11.5px; color: #334155; line-height: 1.5; padding: 2px 0;">
              ${personalInfo.aboutSummary}
            </p>
          </div>

          <!-- Professional Experience -->
          <div class="avoid-break">
            <div class="section-header">Professional Experience</div>
            ${experiences.map(exp => `
              <div class="exp-card avoid-break">
                <div class="exp-header">
                  <span>${exp.role} <span class="exp-company">@ ${exp.company}</span></span>
                  <span class="exp-meta">${exp.period} | ${exp.location}</span>
                </div>
                <div class="exp-desc">${exp.description}</div>
                <ul>
                  ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>

          <!-- Education Credentials -->
          <div class="avoid-break">
            <div class="section-header">Education Credentials</div>
            ${educations.map(edu => `
              <div class="edu-row avoid-break">
                <div>
                  <div class="edu-title">${edu.degree}</div>
                  <div class="edu-inst">${edu.institution}, ${edu.location}</div>
                </div>
                <div class="edu-score">
                  ${edu.score}<br/>
                  <span style="color:#64748b; font-size: 10px; font-weight: normal;">${edu.period}</span>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Technical Competencies -->
          <div class="avoid-break">
            <div class="section-header">Technical Competencies (Java Full Stack & Python AI Stack)</div>
            <div class="skills-grid">
              ${skillCategories.map(cat => `
                <div class="skill-box avoid-break">
                  <div class="skill-cat-title">${cat.title}</div>
                  <div class="skill-items">${cat.skills.map(s => s.name).join(' • ')}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </body>
      </html>
    `);
    doc.close();

    // Print iframe after render
    setTimeout(() => {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
    }, 250);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Sheet Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950/80">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs font-mono text-slate-400 ml-2">Tharun_Murugavel_Resume.pdf</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-95 text-xs font-bold text-white transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save as PDF</span>
              </button>
              <button
                onClick={() => {
                  sounds.playClick();
                  onClose();
                }}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Resume Body Content */}
          <div
            id="printable-resume-sheet"
            className="p-6 sm:p-10 overflow-y-auto space-y-6 font-sans"
          >
            {/* Header / Contact */}
            <div className="border-b border-slate-800 pb-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl p-[2px] bg-gradient-to-tr from-cyan-500 to-purple-600 shadow-md flex-shrink-0">
                    <img
                      src="/avatar.jpg"
                      alt="Tharun Murugavel"
                      className="w-full h-full object-cover rounded-[10px]"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {personalInfo.name}
                    </h1>
                    <p className="text-xs sm:text-sm font-semibold text-cyan-400 mt-0.5">
                      {personalInfo.currentPosition}
                    </p>
                    <p className="text-[11px] font-mono text-purple-400">
                      B.E. Computer Science & Engineering (Specialized in Cyber Security)
                    </p>
                  </div>
                </div>

                <div className="space-y-1 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{contactData.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{contactData.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-pink-400" />
                    <span>{contactData.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-1.5 flex items-center gap-2">
                <Award className="w-4 h-4" /> Executive Summary
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {personalInfo.aboutSummary}
              </p>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2.5 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Professional Experience
              </h3>
              <div className="space-y-3.5">
                {experiences.map((exp) => (
                  <div key={exp.id} className="space-y-1 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                      <div className="font-bold text-white">
                        {exp.role} <span className="text-cyan-400 font-normal">@ {exp.company}</span>
                      </div>
                      <div className="text-xs font-mono text-slate-400">
                        {exp.period} | {exp.location}
                      </div>
                    </div>
                    <p className="text-xs text-slate-300">{exp.description}</p>
                    <ul className="list-disc list-inside text-xs text-slate-400 space-y-0.5 pt-1">
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2.5 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Education
              </h3>
              <div className="space-y-2.5">
                {educations.map((edu) => (
                  <div key={edu.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-slate-950/40 border border-slate-800 text-xs sm:text-sm">
                    <div>
                      <div className="font-bold text-white">{edu.degree}</div>
                      <div className="text-xs text-slate-400">{edu.institution}, {edu.location}</div>
                    </div>
                    <div className="text-right font-mono text-xs text-cyan-300 font-semibold mt-1 sm:mt-0">
                      {edu.score} ({edu.period})
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2 flex items-center gap-2">
                <Code2 className="w-4 h-4" /> Technical Competencies (Java Full Stack & Python AI Stack)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {skillCategories.map((cat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                    <h4 className="font-bold text-cyan-300 mb-1">{cat.title}</h4>
                    <p className="text-slate-300 leading-relaxed text-xs">
                      {cat.skills.map((s) => s.name).join(' • ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
