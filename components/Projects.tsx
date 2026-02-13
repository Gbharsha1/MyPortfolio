
import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" title="Works">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="overflow-hidden group h-full flex flex-col relative rounded-2xl glass">
              <div className="relative aspect-[2/1] md:aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />

                <div className="absolute top-4 right-4 flex gap-2">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-violet-600 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="p-4 md:p-8 flex-1 flex flex-col">
                <div className="flex gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold px-2 py-1 border border-white/10 rounded-full text-white/40">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 group-hover:text-violet-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                  {project.description}
                </p>
                <div className="mt-auto">
                  <button className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 group/btn">
                    Case Study
                    <div className="w-8 h-[1px] bg-white/20 group-hover/btn:w-12 group-hover/btn:bg-violet-500 transition-all" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};
