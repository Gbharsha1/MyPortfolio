
import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { Background3D } from './components/Background3D';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { CollegeExperience } from './components/CollegeExperience';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const [isAlmostFull, setIsAlmostFull] = useState(false);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Trigger pulse when scroll is past 95%
    setIsAlmostFull(latest > 0.95);
  });

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative selection:bg-violet-500 selection:text-white">
      <CustomCursor />
      <Background3D />
      <Navbar />

      {/* Progress Bar with Pulse Animation */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-violet-500 origin-left z-[100]"
        style={{ scaleX }}
        animate={isAlmostFull ? {
          opacity: [0.7, 1, 0.7],
          filter: [
            "drop-shadow(0 0 0px rgba(139, 92, 246, 0))",
            "drop-shadow(0 0 8px rgba(139, 92, 246, 0.8))",
            "drop-shadow(0 0 0px rgba(139, 92, 246, 0))"
          ]
        } : {
          opacity: 1,
          filter: "drop-shadow(0 0 0px rgba(139, 92, 246, 0))"
        }}
        transition={isAlmostFull ? {
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        } : { duration: 0.3 }}
      />

      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <CollegeExperience />
        <Certificates />
        <Contact />
      </main>

      <footer className="py-12 glass border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-black tracking-tighter">
            GB<span className="text-violet-500">HV</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Official Portfolio of
            </span>
            <span className="text-sm font-bold text-white/60 flex items-center gap-2">
              Bhavani Harsha Vardhan Gowrisetti<Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
            </span>
          </div>
          <div className="flex gap-8">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="text-xs uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors inline-block"
            >
              Privacy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="text-xs uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors inline-block"
            >
              Terms
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
