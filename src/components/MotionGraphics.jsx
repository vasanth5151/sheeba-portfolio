import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { id: 1, text: 'B A T E Ç', bg: '#0b0c16' },
  { id: 2, text: 'M O T I O N', bg: '#160b0c' },
  { id: 3, text: 'V I S U A L', bg: '#0c160e' },
];

const MotionGraphics = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section id="motion-graphics" className="relative bg-[#020202] border-t border-white/5 overflow-hidden">

      {/* HEADER SECTION */}
      <div className="relative w-full py-20 flex flex-col items-center justify-center">
        {/* Top Left Red Glow */}
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-[#0057ff]/30 rounded-full blur-[120px] z-0" />

        <div className="relative z-10 text-center">
          <h2 className="text-7xl md:text-8xl font-bebas text-white tracking-wide leading-none m-0 text-shadow-md">
            Motion Graphics
          </h2>
          <p className="text-sm md:text-base font-sans font-medium text-white/70 tracking-[0.2em] mt-2 uppercase">
            Extra
          </p>
        </div>
      </div>

      {/* MAIN VIDEO SHOWCASE SLIDER */}
      <div className="w-full relative z-10 pb-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#0a1a4e]/50 to-black z-0" />
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center py-10">

          <div className="relative flex items-center justify-center w-full max-w-lg">

            {/* Left Button */}
            <button
              onClick={prevSlide}
              className="absolute left-[-20px] md:left-[-60px] z-30 w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Slider Track */}
            <div className="w-[300px] h-[450px] md:w-[350px] md:h-[500px] relative overflow-hidden rounded-2xl md:rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/5 cursor-pointer group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full absolute inset-0 flex items-center justify-center"
                  style={{ backgroundColor: slides[currentIndex].bg }}
                >
                  {/* Background Text Fake Detail */}
                  <div className="absolute flex gap-4 text-white/20 md:text-white/30 font-bebas text-4xl tracking-widest italic z-0 skew-x-[-10deg]">
                    {slides[currentIndex].text.split(' ').map((char, i) => (
                      <span key={i}>{char}</span>
                    ))}
                  </div>

                  {/* Play Button Overlay */}
                  <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center text-black shadow-[0_0_30px_rgba(255,255,255,0.4)] z-10 group-hover:scale-110 transition-transform duration-300">
                    <Play size={32} fill="currentColor" className="ml-1" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Button */}
            <button
              onClick={nextSlide}
              className="absolute right-[-20px] md:right-[-60px] z-30 w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors"
            >
              <ChevronRight size={28} />
            </button>

          </div>

          {/* Pagination Dots */}
          <div className="flex gap-3 mt-8 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-[#0057ff] scale-125' : 'bg-white/30 hover:bg-white/60'
                  }`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* 4 VERTICAL CARDS GRID (NO GAP) */}
      <div className="w-full flex flex-row h-[250px] md:h-[400px] relative z-20">

        {/* Block 1 */}
        <div className="w-1/4 h-full bg-[#0a2a7a] flex items-center justify-center relative overflow-hidden group">
          <h3 className="text-white font-bebas text-2xl md:text-5xl tracking-wide italic leading-none text-center px-4 transform group-hover:scale-110 transition-transform duration-500">
            SUA LOJA COM
          </h3>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
        </div>

        {/* Block 2 */}
        <div className="w-1/4 h-full relative overflow-hidden group border-l border-white/10 bg-black">
          <img src="/images/motion_card_1.png" alt="Card 1" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
        </div>

        {/* Block 3 */}
        <div className="w-1/4 h-full bg-[#111c4e] flex items-center justify-center relative overflow-hidden group border-l border-white/10">
          <div className="absolute inset-0 opacity-20">
            {/* Fake background texture */}
            <div className="w-full h-full bg-gradient-to-b from-blue-400 to-transparent mix-blend-overlay" />
          </div>
          <div className="z-10 text-center px-4">
            <h3 className="text-white font-bebas text-3xl md:text-6xl uppercase leading-[0.85] tracking-tight transform group-hover:scale-105 transition-transform duration-500">
              PRIMEIRA<br />COMPRA
            </h3>
          </div>
        </div>

        {/* Block 4 */}
        <div className="w-1/4 h-full relative overflow-hidden group border-l border-white/10 bg-black">
          <img src="/images/motion_card_2.png" alt="Card 2" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
        </div>

      </div>

    </section>
  );
};

export default MotionGraphics;
