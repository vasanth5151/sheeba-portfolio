import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative pb-24 top-[-20px] overflow-hidden" style={{background: 'radial-gradient(ellipse 70% 50% at 100% 0%, rgba(0,87,255,0.2) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(0,50,200,0.15) 0%, transparent 60%), #000000'}}>

      {/* Blue Gradient Glows */}
      <div className="absolute top-0 right-[-5%] w-[600px] h-[600px] bg-[#0057ff]/15 rounded-full blur-[150px] z-0 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#003ecc]/20 rounded-full blur-[130px] z-0 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#0057ff]/08 rounded-full blur-[120px] z-0 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        
        {/* Main Grid: Left (Image) + Right (Text Content) */}
        <div className="flex flex-col lg:flex-row border-x border-white/10">
          
          {/* Left Column - Image Container */}
          <div className="w-full lg:w-[35%] p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex justify-center items-start pt-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-[340px] relative aspect-[3/4.5] overflow-hidden rounded-[2rem] border-[4px] border-white p-1"
            >
              <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative bg-[#0057ff]/20">
                {/* Profile Image with Red Tint */}
                <div className="absolute inset-0 bg-blue-600/40 mix-blend-color z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20" />
                <img
                  src="/images/profile_photo.png"
                  alt="Profile"
                  className="w-full h-full object-cover object-center grayscale z-0"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column - Content Grid */}
          <div className="w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-2">
            
            {/* INNER LEFT: Sobre Mim + Habilidades */}
            <div className="p-8 md:p-12 md:pr-8 border-b md:border-b-0 md:border-r border-white/10 space-y-20">
              
              {/* Sobre mim */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-5xl md:text-6xl font-bebas text-white mb-6 tracking-wide">
                  About Me
                </h2>
                <div className="space-y-6 text-xs md:text-sm leading-relaxed text-gray-300 font-sans">
                  <p>
                    My name is <strong className="text-white">Rafael Costa.</strong> I have 4 years of professional experience as a <strong className="text-white">Graphic Designer.</strong> I learned to use After Effects in 2016, and since then, I have been increasingly moving closer to the <strong className="text-white">audiovisual</strong> field. Currently, I am proficient in various tools and <strong className="text-white">have already completed projects for numerous content creators.</strong>
                  </p>
                </div>
              </motion.div>

              {/* Habilidades */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-5xl md:text-6xl font-bebas text-white mb-6">
                  Skills
                </h2>
                <ul className="text-gray-300 text-sm list-disc pl-4 space-y-2 font-medium">
                  <li>Video Editing;</li>
                  <li>Motion Graphics;</li>
                  <li>Photo Manipulation;</li>
                  <li>Vectorization;</li>
                  <li>3D Modeling;</li>
                </ul>
              </motion.div>
            </div>

            {/* INNER RIGHT: Experiências + Softwares */}
            <div className="p-8 md:p-12 md:pl-8 space-y-20">
              
              {/* Experiências */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-5xl md:text-6xl font-bebas text-white mb-6">
                  Experience
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1 leading-snug">
                      Graphic Design Intern <br/><span className="text-gray-400 font-normal text-[0.8rem]">(2021-2023)</span>
                    </h3>
                    <p className="text-gray-400 text-xs mb-3">Shizen Max.</p>
                    <p className="text-gray-300 text-xs mb-2">Tasks:</p>
                    <ul className="text-gray-400 text-xs list-disc pl-4 space-y-1.5 leading-snug">
                      <li>E-commerce Visual Maintenance;</li>
                      <li>Social Media Artworks;</li>
                      <li>Product Motion Graphics;</li>
                      <li>Corporate Video Editing;</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-sm mb-1 leading-snug">
                      Jr. Graphic Designer <br/><span className="text-gray-400 font-normal text-[0.8rem]">(2023-present)</span>
                    </h3>
                    <p className="text-gray-400 text-xs mb-3">Distribuidora Wilson.</p>
                    <p className="text-gray-300 text-xs mb-2">Tasks:</p>
                    <ul className="text-gray-400 text-xs list-disc pl-4 space-y-1.5 leading-snug">
                      <li>E-commerce Visual Maintenance;</li>
                      <li>E-mail Marketing Design;</li>
                      <li>Social Media Artworks;</li>
                      <li>Product Motion Graphics;</li>
                      <li>Corporate Video Editing;</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Softwares */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-5xl md:text-6xl font-bebas text-white mb-6">
                  Software
                </h2>
                <div className="flex gap-3 flex-wrap">
                  {['Pr', 'Ae', 'Ps', 'Ai'].map((sw, i) => (
                    <div key={i} className="w-12 h-12 bg-[#020202] border-[1.5px] border-white flex justify-center items-center rounded-sm">
                      <span className="text-white font-black text-xl tracking-tighter leading-none pr-0.5">{sw}</span>
                    </div>
                  ))}
                  {/* Custom icon for blender/others if needed */}
                  <div className="w-12 h-12 bg-[#020202] border-[1.5px] border-white flex justify-center items-center rounded-sm">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white shrink-0"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
