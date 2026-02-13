import React, { useRef } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { COLLEGE_EXPERIENCES } from '../constants';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

export const CollegeExperience: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0.15, 1], ["0%", "-85%"]);
    const smoothX = useSpring(x, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="relative h-[500vh]" id="college-experience">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div className="absolute top-0 left-9 md:left-10 z-20">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 mb-4">
                        College Contribution
                    </h2>
                    <div className="h-1 w-20 bg-violet-500 rounded-full" />
                </div>

                <motion.div style={{ x: smoothX }} className="flex gap-8 md:gap-24 px-4 md:px-24 items-center h-full relative">

                    {/* Wavy Path SVG Background - moved inside the moving container so it scrolls with content */}
                    <svg className="absolute top-1/2 -translate-y-1/2 left-0 w-[4000px] h-[500px] pointer-events-none opacity-30" preserveAspectRatio="none">
                        <path
                            d="M0,250 Q300,100 600,250 T1200,250 T1800,250 T2400,250 T3000,250"
                            fill="none"
                            stroke="url(#gradient-college)"
                            strokeWidth="4"
                            vectorEffect="non-scaling-stroke"
                        />
                        <defs>
                            <linearGradient id="gradient-college" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.2)" />
                                <stop offset="50%" stopColor="rgba(139, 92, 246, 0.5)" />
                                <stop offset="100%" stopColor="rgba(139, 92, 246, 0.2)" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Spacer for title */}
                    <div className="w-[10vw] flex-shrink-0" />

                    {COLLEGE_EXPERIENCES.map((exp, idx) => (
                        <div
                            key={exp.id}
                            className={`flex-shrink-0 w-[85vw] md:w-[400px] relative ${idx % 2 === 0 ? 'mb-12 md:mb-48' : 'mt-12 md:mt-48'
                                }`}
                        >
                            <div className="group relative p-6 md:p-8 glass rounded-3xl border border-white/10 hover:border-violet-500/30 transition-all duration-300 hover:transform hover:-translate-y-2 bg-black/40 backdrop-blur-xl">

                                {/* Connector Dot */}
                                <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-violet-500 border-4 border-black z-20 shadow-[0_0_20px_rgba(139,92,246,0.5)] ${idx % 2 === 0 ? 'bottom-[-70px]' : 'top-[-70px]'
                                    }`}></div>

                                {/* Connecting Line to Dot */}
                                <div className={`absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-violet-500/0 via-violet-500 to-violet-500/0 ${idx % 2 === 0 ? 'bottom-[-60px] h-16' : 'top-[-60px] h-16'
                                    }`}></div>

                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-4 rounded-2xl bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors">
                                        <Award className="w-8 h-8 text-violet-400" />
                                    </div>
                                    <div className="flex items-center gap-2 text-xs md:text-sm text-white/60 bg-white/5 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/5">
                                        <Calendar className="w-4 h-4" />
                                        {exp.period}
                                    </div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 group-hover:text-violet-400 transition-colors">{exp.role}</h3>
                                <p className="text-base md:text-lg text-violet-300 font-medium mb-2 md:mb-4">{exp.company}</p>

                                <p className="text-white/60 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map(tech => (
                                        <span key={tech} className="text-xs px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 text-white/40 group-hover:border-violet-500/10 transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* End Spacer */}
                    <div className="w-[20vw] flex-shrink-0" />
                </motion.div>
            </div>
        </section>
    );
};
