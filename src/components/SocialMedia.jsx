import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Eye, Sparkles } from 'lucide-react';

const InstagramSvg = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const clients = [
  { name: 'Dr Prasanth Arun', ig: 'drprasantharun' },
  { name: 'Assana Gut & Wellness', ig: 'assanagut' },
  { name: 'Stepwise Shoe Brand', ig: 'stepwisehealth.in' },
  { name: 'Dr Roopa', ig: 'dr_roopa.r' },
  { name: 'Car Dealer', ig: 'circuits99' },
  { name: 'Dr. Keerthana Fertility', ig: 'dr.keerthana_gynaec' },
  { name: 'Vj Scans & Labs', ig: 'vjscansandlabs' },
  { name: 'Dr. Preethimrinalini', ig: 'dr.preethimrinalini' },
  { name: 'Dr. Preethi Udhayaraja', ig: 'preethi_udhayaraja' },
  { name: 'Diya Fertility', ig: 'dfmc_fertility' },
];

const workImages = [
  { src: '/images/work1.jpeg', label: 'Instagram Campaign', client: '@zerogravity' },
  { src: '/images/work2.jpeg', label: 'Content Strategy', client: '@stepwisehealth' },
  { src: '/images/work3.jpeg', label: 'Brand Growth', client: '@drprasantharun' },
  { src: '/images/work4.jpeg', label: 'Reel Performance', client: '@assanagut' },
];

const SocialMedia = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="social-media" className="relative bg-[#030308] py-28 overflow-hidden">

      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#0057ff]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#833ab4]/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* ═══════════ HEADER ═══════════ */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center">
              <InstagramSvg size={10} className="text-white" />
            </span>
            <span className="text-white/60 text-xs font-sans tracking-wider uppercase">Instagram Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bebas text-white tracking-wide leading-none mb-6"
          >
            Social Media <span className="text-[#0057ff]">Management</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Handling multiple client accounts — driving organic growth, maximizing engagement, and producing high-retention reels & content that converts.
          </motion.p>
        </div>

        {/* ═══════════ STATS BAR ═══════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 md:gap-12 mb-20"
        >
          {[
            { icon: <Users size={20} />, value: '10+', label: 'Clients Managed' },
            { icon: <TrendingUp size={20} />, value: '150+', label: 'Reels Edited' },
            { icon: <Eye size={20} />, value: '200+', label: 'Content Pieces' },
            { icon: <Sparkles size={20} />, value: '1M+', label: 'Total Reach' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0057ff]/10 border border-[#0057ff]/20 flex items-center justify-center text-[#0057ff]">
                {stat.icon}
              </div>
              <div>
                <p className="text-white font-black text-2xl leading-none">{stat.value}</p>
                <p className="text-white/35 text-[10px] font-sans uppercase tracking-wider mt-0.5">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ═══════════ PHONE MOCKUP SHOWCASE ═══════════ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-24">
          {workImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group cursor-pointer"
            >
              {/* Phone Frame */}
              <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#111] border border-white/10 shadow-xl group-hover:shadow-[0_20px_60px_rgba(0,87,255,0.2)] group-hover:border-[#0057ff]/30 transition-all duration-500">

                {/* Notch */}
                <div className="relative z-20 flex items-center justify-center pt-2 pb-1">
                  <div className="w-16 h-1 rounded-full bg-white/10" />
                </div>

                {/* IG-style top bar */}
                <div className="flex items-center gap-2 px-3 py-1.5 relative z-20">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-[1.5px] flex-shrink-0">
                    <div className="w-full h-full rounded-full bg-[#111] flex items-center justify-center">
                      <span className="text-white text-[5px] font-black">SV</span>
                    </div>
                  </div>
                  <p className="text-white/70 text-[9px] font-semibold leading-none truncate">{img.client}</p>
                  <InstagramSvg size={10} className="ml-auto text-white/30 flex-shrink-0" />
                </div>

                {/* Screenshot Image */}
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#0057ff]/60 via-transparent to-transparent transition-opacity duration-500 ${hoveredCard === i ? 'opacity-100' : 'opacity-0'}`} />
                  <div className={`absolute bottom-0 left-0 right-0 p-3 md:p-4 transition-all duration-500 ${hoveredCard === i ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <p className="text-white font-bold text-xs md:text-sm">{img.label}</p>
                    <p className="text-white/60 text-[9px] md:text-[10px] mt-0.5">{img.client}</p>
                  </div>
                </div>

                {/* Bottom bar — IG action icons */}
                <div className="flex items-center gap-3 px-3 py-2 relative z-20">
                  <svg width="12" height="12" fill="white" opacity="0.4" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  <svg width="12" height="12" fill="none" stroke="white" opacity="0.4" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  <svg width="12" height="12" fill="none" stroke="white" opacity="0.4" strokeWidth="1.5" viewBox="0 0 24 24" className="ml-auto"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                </div>

                {/* Home bar at bottom */}
                <div className="flex justify-center pb-1.5 pt-0.5 relative z-20">
                  <div className="w-10 h-1 rounded-full bg-white/15" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ═══════════ CLIENTS SECTION ═══════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bebas text-white tracking-wider mb-2">Freelance Clients</h3>
            <p className="text-white/30 font-sans text-xs tracking-wider">BRANDS I'VE WORKED WITH</p>
          </div>

          <div className="relative overflow-hidden py-10 before:content-[''] before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-[#030308] before:to-transparent before:pointer-events-none after:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-[#030308] after:to-transparent after:pointer-events-none">
            <motion.div
              className="flex gap-4 w-max px-4"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={i}
                  className="w-[180px] sm:w-[240px] flex-shrink-0 bg-white/[0.03] border border-white/8 rounded-2xl px-6 py-8 hover:border-[#0057ff]/40 hover:bg-[#0057ff]/5 transition-all duration-300 text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center mx-auto mb-4">
                    <InstagramSvg size={18} className="text-white" />
                  </div>
                  <p className="text-white text-sm font-semibold leading-tight mb-1">{client.name}</p>
                  <p className="text-white/25 text-[10px] font-sans">@{client.ig}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SocialMedia;
