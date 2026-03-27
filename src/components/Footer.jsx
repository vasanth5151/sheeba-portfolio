import React from 'react';
import { Mail } from 'lucide-react';

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative bg-[#020202] py-32 overflow-hidden flex flex-col items-center border-t border-white/5">
      {/* Background Red Glow */}
      <div className="absolute bottom-[-20%] left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-[#0057ff]/40 rounded-[100%] blur-[100px] z-0 pointer-events-none" />

      {/* Title */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-8xl md:text-[10rem] font-bebas text-white tracking-wide leading-none m-0 shadow-lg drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]">
          Thank you!
        </h2>
        <p className="font-sans text-xl md:text-2xl mt-4 font-medium text-white/80 tracking-widest text-[#aaaaaa]">
          Let's talk soon.
        </p>
      </div>

      {/* Social Links */}
      <div className="relative z-10 flex flex-wrap gap-8 md:gap-14 items-center text-white/60 text-sm font-sans tracking-wide">

        <a href="mailto:fooyzeffects128@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors duration-300 group">
          <span className="group-hover:text-[#0057ff] transition-colors"><Mail size={20} /></span>
          <span>fooyzeffects128@gmail.com</span>
        </a>

        <a href="https://instagram.com/fooyz.edit" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors duration-300 group">
          <span className="group-hover:text-[#e1306c] transition-colors"><InstagramIcon /></span>
          <span>fooyz.edit</span>
        </a>

        <a href="https://facebook.com/fooyzedit" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors duration-300 group">
          <span className="group-hover:text-[#1877f2] transition-colors"><FacebookIcon /></span>
          <span>fooyzedit</span>
        </a>

      </div>

      <div className="absolute inset-0 z-30 pointer-events-none">
        <div className="container mx-auto px-6 md:px-12 h-full border-l border-r border-white/10" />
      </div>
    </footer>
  );
};

export default Footer;
