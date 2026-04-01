import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative pb-24 top-[-20px] overflow-hidden" style={{ background: 'radial-gradient(ellipse 70% 50% at 100% 0%, rgba(0,87,255,0.2) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(0,50,200,0.15) 0%, transparent 60%), #000000' }}>

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
                {/* Profile Image with Blue Tint */}
                <div className="absolute inset-0 bg-blue-600/30 mix-blend-color z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20" />
                <img
                  src="/images/about-pic.jpg"
                  alt="Sheeba Venkatesan"
                  className="w-full h-full object-cover object-top z-0"
                />
                {/* Name Tag at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-30 p-6">
                  <p className="text-white font-bebas text-2xl tracking-widest leading-none">Sheeba Venkatesan</p>
                  <p className="text-[#0057ff] text-xs font-sans uppercase tracking-widest mt-1">Social Media Strategist & Video Editor</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Content Grid */}
          <div className="w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-2">

            {/* INNER LEFT: About Me + Skills */}
            <div className="p-8 md:p-12 md:pr-8 border-b md:border-b-0 md:border-r border-white/10 space-y-16">

              {/* About Me */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-5xl md:text-6xl font-bebas text-white mb-6 tracking-wide">
                  About Me
                </h2>
                <div className="space-y-4 text-xs md:text-sm leading-relaxed text-gray-300 font-sans">
                  <p>
                    I'm <strong className="text-white">Sheeba Venkatesan,</strong> a <strong className="text-white">Results-driven Social Media Strategist and Video Editor</strong> with 1 year of experience in creating engaging content and managing social media campaigns.
                  </p>
                  <p>
                    Skilled in <strong className="text-white">boosting brand presence, driving audience engagement,</strong> and <strong className="text-white">producing compelling videos.</strong> Eager to leverage creative skills and stay ahead of digital trends to deliver impactful social media strategies.
                  </p>
                  <div className="flex flex-col gap-1 pt-2 text-xs text-gray-400">
                    <span>📍 RA Puram, Chennai - 28</span>
                    <span>📞 8925040367</span>
                    <span>✉️ sheebavenkatesan27@gmail.com</span>
                  </div>
                </div>
              </motion.div>

              {/* Education */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-5xl md:text-6xl font-bebas text-white mb-6">
                  Education
                </h2>
                <div className="space-y-5 text-xs text-gray-300 font-sans">
                  <div>
                    <p className="text-white font-bold text-sm">BSC Visual Communication</p>
                    <p className="text-[#0057ff] text-xs">Women's Christian College (2021–2024)</p>
                    <ul className="text-gray-400 text-xs list-disc pl-4 mt-1 space-y-1">
                      <li>Specialization in Post Production</li>
                      <li>Relevant coursework in production & post production</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">HSC / SSLC</p>
                    <p className="text-[#0057ff] text-xs">Fathima Basheer Mat. Hr. Sec School for Girls</p>
                    <p className="text-gray-400 text-xs mt-1">Commerce</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* INNER RIGHT: Experience + Software */}
            <div className="p-8 md:p-12 md:pl-8 space-y-16">

              {/* Experience */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-5xl md:text-6xl font-bebas text-white mb-6">
                  Experience
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1 leading-snug">
                      ZeroGravity Photography <br /><span className="text-[#0057ff] font-normal text-[0.75rem]">Social Media Strategist & Video Editor</span>
                    </h3>
                    <ul className="text-gray-400 text-xs list-disc pl-4 space-y-1 leading-snug">
                      <li>Content creation & reels editing</li>
                      <li>Analyzing & implementing new Instagram strategy</li>
                      <li>Carousel, poster & thumbnail designing</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-sm mb-1 leading-snug">
                      India Glitz <br /><span className="text-gray-400 font-normal text-[0.75rem]">Internship (Dec 2023)</span>
                    </h3>
                    <ul className="text-gray-400 text-xs list-disc pl-4 space-y-1 leading-snug">
                      <li>Editing reels and shorts</li>
                      <li>Preparing content for YouTube & Instagram</li>
                      <li>Creating thumbnails for YouTube</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-sm mb-1 leading-snug">
                      Vijay Television <br /><span className="text-gray-400 font-normal text-[0.75rem]">Internship (May 2023)</span>
                    </h3>
                    <ul className="text-gray-400 text-xs list-disc pl-4 space-y-1 leading-snug">
                      <li>Analyzing the editing process</li>
                      <li>Content writing & production works</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Software */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-5xl md:text-6xl font-bebas text-white mb-6">
                  Software
                </h2>
                <div className="flex gap-3 flex-wrap">
                  {[
                    { abbr: 'Pr', name: 'Premiere Pro' },
                    { abbr: 'Ae', name: 'After Effects' },
                    { abbr: 'Ps', name: 'Photoshop' },
                    { abbr: 'Ai', name: 'Illustrator' },
                    { abbr: 'Cc', name: 'Capcut' },
                  ].map((sw, i) => (
                    <div key={i} className="group relative w-12 h-12 bg-[#020202] border-[1.5px] border-white/30 hover:border-[#0057ff] flex justify-center items-center rounded-sm transition-colors duration-300 cursor-default">
                      <span className="text-white font-black text-xl tracking-tighter leading-none">{sw.abbr}</span>
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] text-[#0057ff] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{sw.name}</span>
                    </div>
                  ))}
                  <div className="w-12 h-12 bg-[#020202] border-[1.5px] border-white/30 flex justify-center items-center rounded-sm">
                    <span className="text-white font-black text-sm tracking-tighter leading-none">Ca</span>
                  </div>
                </div>
                <p className="text-gray-500 text-[10px] mt-8 font-sans">Also: Canva · CapCut · Adobe Suite</p>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
