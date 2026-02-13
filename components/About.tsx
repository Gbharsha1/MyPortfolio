
import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Cpu, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        {/* Text Content Side */}
        <div className="lg:col-span-7 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
              <span className="text-white/40">Securing Systems,</span> <br />
              <span className="text-white">Engineering The Future</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 font-creative text-xl md:text-2xl text-white/70 leading-relaxed"
          >
            <p>
              Hey, I'm <span className="text-violet-400 font-bold">Bhavani Harsha Vardhan</span>, an Information Technology student at R.V.R & J.C College of Engineering.
            </p>
            <p>
              Graduated with a 7.8 GPA and awarded with first class + Distinction, my academic journey is fueled by a deep-seated passion for deciphering complex systems. This curiosity naturally steered me toward the field of <span className="text-blue-400">Cybersecurity</span>, where solving real-world challenges through technical precision has become my primary focus.
            </p>

            <div className="space-y-2 pt-4">
              <p className="font-bold text-white">My Philosophy:</p>
              <p className="italic">"Innovation thrives where continuous learning meets disciplined problem-solving."</p>
              <p className="font-bold text-white underline decoration-violet-500/50">I am eager to contribute to forward-thinking projects and excel in a dynamic, global tech environment.</p>
            </div>

            <p className="text-lg md:text-xl">
              Let's build a more secure digital world, one skill, one leap at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl hover:scale-105 transition-transform shadow-[0_10px_40px_-10px_rgba(249,115,22,0.5)]"
            >
              Start A Conversation
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Image/Visual Side */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl"
          >
            <img
              src="Profile.jpg"
              alt="Profile"
              className="w-full aspect-[4/5] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </motion.div>

          {/* Floating Badges inspired by takeuforward */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute top-6 -right-2 z-20 glass px-6 py-1 rounded-2xl flex items-center gap-3 border border-white/20 shadow-xl"
          >
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-bold whitespace-nowrap">7.8 GPA | IT Student</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="absolute top-44 -left-1 z-20 glass px-3 py-2 rounded-xl flex items-center gap-2 border border-white/20 shadow-xl"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-bold text-white/80">RVR & JC College of Engineering</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="absolute -bottom-6 right-10 z-20 glass px-6 py-3 rounded-2xl flex items-center gap-3 border border-white/20 shadow-xl"
          >
            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-bold whitespace-nowrap">Cybersecurity Enthusiast</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="absolute top-1/2 right-10 z-20 glass p-3 rounded-full border border-white/20 shadow-xl"
          >
            <Cpu className="w-6 h-8 text-violet-500 animate-spin [animation-duration:10s]" />
          </motion.div>

          {/* Background dots decoration */}
          <div className="absolute -top-10 -left-10 w-40 h-40 opacity-30 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
        </div>
      </div>
    </SectionWrapper>
  );
};
