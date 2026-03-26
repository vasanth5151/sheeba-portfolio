import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Video Editing (Premiere Pro)', level: 95 },
  { name: 'Motion Graphics (After Effects)', level: 85 },
  { name: 'Color Grading (DaVinci Resolve)', level: 90 },
  { name: 'Sound Design', level: 80 },
  { name: 'YouTube Strategy', level: 88 },
  { name: 'Creative Direction', level: 92 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center md:text-left mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase mb-4 text-sm">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-['Outfit'] font-bold text-foreground">
            Professional <span className="text-muted">Skills.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 max-w-5xl mx-auto md:mx-0">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-3">
                <span className="text-foreground font-semibold text-lg">{skill.name}</span>
                <span className="text-muted font-['Outfit'] font-bold">{skill.level}%</span>
              </div>
              <div className="w-full h-3 bg-accent rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-indigo-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
