import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { TerminalSection } from './components/sections/TerminalSection';
import { Contact } from './components/sections/Contact';
import { BackgroundParticles } from './components/3d/BackgroundParticles';
import { CustomCursor } from './components/ui/CustomCursor';
import { ResumeModal } from './components/ui/ResumeModal';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-[#080a11] text-slate-100 relative selection:bg-cyan-500 selection:text-black">
      {/* Top Cyber Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-purple-500 origin-left z-50 shadow-[0_0_12px_#06b6d4]"
        style={{ scaleX }}
      />

      {/* Smooth Spring Custom Cursor */}
      <CustomCursor />

      {/* 3D Global Space Particles Field */}
      <BackgroundParticles />

      {/* Header Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Page Content */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <TerminalSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Viewer / Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;

