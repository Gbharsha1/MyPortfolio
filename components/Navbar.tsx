
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../types';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [active, setActive] = useState<Section>(Section.Home);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = Object.values(Section);
      // Determine which section is currently in view
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold for detection
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenu(false); // Close menu first

    setTimeout(() => { // Small delay to allow menu to close
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const navLinks = [
    { name: 'Home', id: Section.Home },
    { name: 'About', id: Section.About },
    { name: 'Projects', id: Section.Projects },
    { name: 'Experience', id: Section.Experience },
    { name: 'Certificates', id: Section.Certificates },
    { name: 'Contact', id: Section.Contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[50] flex flex-col">
      <div
        className={`w-full transition-all duration-300 ${scrolled ? 'py-4 glass border-b border-white/10' : 'py-4 md:py-8'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-black tracking-tighter cursor-pointer"
            onClick={(e) => scrollToSection(e as any, Section.Home)}
          >
            GB<span className="text-violet-500">HV</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className={`text-sm font-medium tracking-widest uppercase transition-colors relative px-2 py-1 ${active === link.id ? 'text-white' : 'text-white/50 hover:text-white/80'
                  }`}
              >
                {link.name}
                {active === link.id && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-violet-500"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-b border-white/10 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`text-lg font-bold tracking-widest uppercase py-2 ${active === link.id ? 'text-violet-500' : 'text-white/50'
                      }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Announcement Bar */}
      <div className="w-full bg-black py-2 overflow-hidden whitespace-nowrap border-t border-white/10">
        <motion.div
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            duration: 15, // Slightly faster for better readability flow
            repeat: Infinity,
            ease: "linear"
          }}
          className="inline-block text-white text-xs md:text-sm font-medium tracking-wide whitespace-nowrap px-4"
        >
          Building a Cybersecurity platform for students with topics, playgrounds, and hands-on challenges. Launching soon 🚀        </motion.div>
      </div>
    </nav>
  );
};
