import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Core Skills',
    skills: [
      { name: 'Video Editing', level: 92 },
      { name: 'Social Media Management', level: 90 },
      { name: 'Content Creation', level: 95 },
      { name: 'Influencer Marketing', level: 80 },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Digital Marketing', level: 85 },
      { name: 'Content Framework', level: 88 },
      { name: 'Multitasking', level: 90 },
      { name: 'Content Shooting', level: 82 },
    ],
  },
];

const softwareList = [
  { name: 'Premiere Pro', abbr: 'Pr', color: '#9999FF' },
  { name: 'After Effects', abbr: 'Ae', color: '#9999FF' },
  { name: 'CapCut', abbr: 'Cc', color: '#FFFFFF' },
  { name: 'Canva', abbr: 'Cn', color: '#00C4CC' },
  { name: 'Photoshop', abbr: 'Ps', color: '#31A8FF' },
  { name: 'Illustrator', abbr: 'Ai', color: '#FF9A00' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden" style={{background: 'radial-gradient(ellipse 60% 40% at 0% 50%, rgba(0,87,255,0.12) 0%, transparent 60%), #050505'}}>
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#0057ff]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0057ff] font-medium tracking-[0.2em] uppercase mb-4 text-sm"
          >
            Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bebas text-white tracking-wide leading-none"
          >
            Professional <span className="text-white/30">Skills.</span>
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.15 }}
            >
              <h3 className="text-white/40 font-sans text-xs uppercase tracking-[0.3em] mb-8 border-b border-white/10 pb-3">{cat.title}</h3>
              <div className="space-y-8">
                {cat.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-semibold text-sm md:text-base">{skill.name}</span>
                      <span className="text-[#0057ff] font-bold text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#0057ff] to-[#00c6ff] rounded-full relative"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
                      >
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_8px_rgba(0,87,255,0.8)]" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Software Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-16"
        >
          <h3 className="text-white/40 font-sans text-xs uppercase tracking-[0.3em] mb-10">Software & Tools</h3>
          <div className="flex flex-wrap gap-4 md:gap-6">
            {softwareList.map((sw, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="group flex flex-col items-center gap-2"
              >
                <div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center border border-white/10 bg-[#0a0a0a] shadow-lg group-hover:border-[#0057ff]/50 transition-all duration-300"
                  style={{ boxShadow: `0 0 0 0 ${sw.color}00` }}
                >
                  <span className="font-black text-lg md:text-xl" style={{ color: sw.color }}>{sw.abbr}</span>
                </div>
                <span className="text-[10px] text-white/40 font-sans tracking-wide">{sw.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
