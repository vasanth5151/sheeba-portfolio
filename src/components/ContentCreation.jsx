import React from 'react';
import { motion } from 'framer-motion';

const videosList = [
  { id: 1, src: "https://www.youtube.com/embed/5Peo-ivmupE?controls=1&mute=0", type: "short" },
  { id: 2, src: "https://www.youtube.com/embed/hT_nvWreIhg?controls=1&mute=0", type: "short" },
  { id: 3, src: "https://www.youtube.com/embed/LXb3EKWsInQ?controls=1&mute=0", type: "long" },
  { id: 4, src: "https://www.youtube.com/embed/YxwVGQtvpL8?controls=1&mute=0", type: "short" },
  { id: 5, src: "https://www.youtube.com/embed/9bZkp7q19f0?controls=1&mute=0", type: "long" },
  { id: 6, src: "https://www.youtube.com/embed/d291A-JgO-I?controls=1&mute=0", type: "short" },
];

const ContentCreation = () => {
  return (
    <section id="content-creation" className="relative bg-[#020202] py-24 border-t border-white/5 overflow-hidden">
      
      {/* Background Red Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#e60023]/20 rounded-full blur-[150px] z-0 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bebas text-white tracking-wide leading-none mb-4 drop-shadow-lg"
          >
            Content Creation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 font-sans text-sm md:text-base tracking-[0.2em] uppercase font-bold max-w-2xl mx-auto"
          >
            I conceptualize, shoot, and direct original high-quality video content from start to finish.
          </motion.p>
        </div>

        {/* Video Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {videosList.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className={`relative overflow-hidden rounded-2xl bg-black shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-white/10 group ${
                video.type === 'long' ? 'sm:col-span-2 h-[220px] sm:h-[280px] md:h-[320px]' : 'h-[220px] sm:h-[280px] md:h-[320px]'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#e60023]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
              <iframe
                src={video.src}
                title={`Content Video ${video.id}`}
                className="w-full h-full pointer-events-auto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContentCreation;
