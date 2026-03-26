import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Eye, ArrowRight } from 'lucide-react';

const SocialMedia = () => {
  return (
    <section id="social-media" className="relative bg-[#050505] py-24 border-t border-white/5 overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CiAgPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0wIDM5LjVoNDBNMzkuNSAwVjQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] z-0 opacity-50" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e60023]/20 rounded-full blur-[150px] z-0 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        
        {/* Header Content */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-bebas text-white tracking-wide leading-none mb-6 drop-shadow-md"
            >
              Social Media <br />
              <span className="text-[#e60023]">Management</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/70 font-sans text-sm md:text-base leading-relaxed tracking-wide max-w-xl"
            >
              I completely take over and handle multiple client social media accounts, driving organic growth and maximizing engagement through strategic content curation and high-retention video editing.
            </motion.p>
          </div>
        </div>

        {/* RESULTS SHOWCASE CONTAINER */}
        <div className="bg-[#0a0a0c] border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-1/2 bg-[#e60023]/10 blur-[100px] z-0" />
          
          <h3 className="text-center text-white/50 font-sans tracking-[0.3em] text-sm uppercase mb-16 relative z-10">
            Client Growth Case Study
          </h3>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            
            {/* BEFORE CARD */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-[40%] bg-black border border-white/10 rounded-2xl p-8 md:p-10 shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gray-600" />
              <h4 className="text-4xl font-bebas text-white/60 mb-8 tracking-wider">Before (Month 1)</h4>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/5 rounded-lg text-white/40"><Users size={24} /></div>
                  <div>
                    <p className="text-white/40 text-xs font-sans uppercase tracking-widest font-bold">Followers</p>
                    <p className="text-2xl font-bold font-sans text-white/80">1,200</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/5 rounded-lg text-white/40"><Eye size={24} /></div>
                  <div>
                    <p className="text-white/40 text-xs font-sans uppercase tracking-widest font-bold">Monthly Reach</p>
                    <p className="text-2xl font-bold font-sans text-white/80">15.4K</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ARROW INDICATOR */}
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="hidden lg:flex w-20 h-20 bg-[#e60023] rounded-full flex-col justify-center items-center shadow-[0_0_30px_rgba(230,0,35,0.4)] z-20 flex-shrink-0"
            >
              <ArrowRight size={32} className="text-white animate-pulse" />
            </motion.div>

            {/* AFTER CARD */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="w-full lg:w-[40%] bg-black border border-[#e60023]/50 rounded-2xl p-8 md:p-10 shadow-[0_0_40px_rgba(230,0,35,0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-[#e60023]" />
              <h4 className="text-4xl font-bebas text-white mb-8 tracking-wider">After (Month 6)</h4>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="p-2 md:p-3 bg-[#e60023]/20 rounded-lg text-[#e60023] flex-shrink-0"><Users size={22} /></div>
                  <div className="min-w-0">
                    <p className="text-white/50 text-xs font-sans uppercase tracking-widest font-bold">Followers</p>
                    <p className="text-2xl md:text-4xl font-black font-sans text-white leading-tight">124,500 <span className="text-[#e60023] text-xs md:text-sm tracking-normal">↑ +10,200%</span></p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#e60023]/20 rounded-lg text-[#e60023]"><TrendingUp size={24} /></div>
                  <div>
                    <p className="text-white/50 text-xs font-sans uppercase tracking-widest font-bold">Monthly Reach</p>
                    <p className="text-4xl font-black font-sans text-white">3.2M <span className="text-[#e60023] text-sm tracking-normal">↑ +20,600%</span></p>
                  </div>
                </div>
              </div>
              
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
