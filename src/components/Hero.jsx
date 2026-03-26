import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative w-full pt-32 pb-0 flex flex-col justify-end">
      {/* Background Image with Gradient Fade */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/editing_timeline.png"
          alt="Timeline"
          className="w-full h-[100vh] object-cover object-top opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background z-10 h-[80vh]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-transparent z-10 h-[80vh] top-auto bottom-[20vh]" />
        <div className="absolute inset-0 bg-background z-10 top-[80vh]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 w-full mt-[40vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-8xl md:text-[10rem] lg:text-[12rem] font-bebas text-foreground leading-[0.8] tracking-normal m-0 p-0 text-shadow-md">
            Portfolio
          </h1>
          <p className="font-sans text-xl md:text-2xl mt-4 font-medium tracking-wide text-foreground">
            Video Editor / Graphic Designer
          </p>
        </motion.div>
      </div>

      {/* Grid line overlay to match exact design */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <div className="container mx-auto px-6 md:px-12 h-full border-l border-r border-white/10" />
      </div>
    </section>
  );
};

export default Hero;
