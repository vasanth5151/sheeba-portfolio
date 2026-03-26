import React from 'react';

const InstagramIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const shortLinks = [
  "https://www.youtube.com/embed/5Peo-ivmupE?autoplay=1&mute=1&loop=1&playlist=5Peo-ivmupE&controls=0",
  "https://www.youtube.com/embed/hT_nvWreIhg?autoplay=1&mute=1&loop=1&playlist=hT_nvWreIhg&controls=0",
];

const instagramReels = [
  { url: "https://www.instagram.com/reels/DG5ZOFJN_A-/", label: "Reel #1" },
  { url: "https://www.instagram.com/reels/DDhMLciN6QT/", label: "Reel #2" },
];

const longLinks = [
  "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1&loop=1&playlist=LXb3EKWsInQ&controls=1",
  "https://www.youtube.com/embed/9bZkp7q19f0?autoplay=1&mute=1&loop=1&playlist=9bZkp7q19f0&controls=1",
];

const Portfolio = () => {
  return (
    <section id="work" className="relative bg-background border-t border-white/10 overflow-hidden">

      {/* HEADER */}
      <div className="relative w-full py-16 md:py-24 flex flex-col items-center justify-center border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-black to-black opacity-30 z-0" />
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary/20 rounded-full blur-[150px] z-0" />
        <div className="relative z-10 text-center px-4">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-bebas text-white tracking-wide leading-none m-0">
            Video Edits
          </h2>
          <p className="text-base md:text-2xl font-sans font-medium text-white tracking-widest mt-2">
            Video Editing
          </p>
        </div>
      </div>

      {/* DISCLAIMER */}
      <div className="container mx-auto px-4 md:px-12 py-8 text-center relative z-20">
        <p className="text-[#e60023] font-black italic text-sm md:text-lg tracking-widest uppercase mb-2">
          Disclaimer:
        </p>
        <p className="text-white/60 text-[10px] md:text-xs font-sans max-w-xl mx-auto italic leading-relaxed">
          The videos below were edited by me exclusively to demonstrate my skills. All original material belongs to its respective creators, and I have no professional affiliation with them.
        </p>
      </div>

      {/* BEFORE / AFTER */}
      <div className="container mx-auto px-4 md:px-12 py-8 md:py-16 relative z-20">
        <div className="bg-[#050505] rounded-2xl md:rounded-[3rem] p-6 md:p-16 border border-white/10 relative overflow-hidden mx-auto max-w-5xl shadow-2xl">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#e60023]/20 to-transparent" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-24 items-center w-full">

            {/* BEFORE */}
            <div className="flex flex-col items-center w-full lg:w-auto">
              <h3 className="text-3xl md:text-4xl font-bebas text-white/50 mb-4 tracking-widest">Before</h3>
              <div className="w-full max-w-[280px] lg:w-56 aspect-video rounded-xl overflow-hidden border-2 border-white/20 grayscale bg-black mx-auto">
                <iframe src="https://www.youtube.com/embed/LXb3EKWsInQ?controls=0&mute=1" title="Before" className="w-full h-full" allowFullScreen />
              </div>
            </div>

            {/* AFTER */}
            <div className="flex flex-col items-center flex-1 w-full">
              <h3 className="text-4xl md:text-6xl font-bebas text-white mb-4 tracking-widest">After</h3>
              <div className="w-full aspect-video rounded-xl md:rounded-[2rem] overflow-hidden border-2 md:border-[3px] border-white/80 shadow-2xl bg-black">
                <iframe
                  src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1&loop=1&playlist=LXb3EKWsInQ&controls=1"
                  title="After"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-white/40 text-xs tracking-widest mt-4 uppercase font-sans">Channel: Gameplay RJ</p>
            </div>

          </div>
        </div>
      </div>

      {/* VIDEO GRID */}
      <div className="w-full bg-[#020202] border-y border-white/10 relative z-20">

        {/* ROW: 2 YouTube Shorts + 2 Instagram Cards — 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-b border-white/10">

          {shortLinks.map((link, idx) => (
            <div key={`short-${idx}`} className="aspect-[9/16] relative border-r border-white/10 overflow-hidden bg-black">
              <iframe
                src={link}
                title={`Short ${idx}`}
                className="w-full h-full pointer-events-auto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ transform: 'scale(1.25)', transformOrigin: 'center center' }}
              />
            </div>
          ))}

          {instagramReels.map((reel, idx) => (
            <a
              key={`reel-${idx}`}
              href={reel.url}
              target="_blank"
              rel="noreferrer"
              className="aspect-[9/16] relative border-r border-white/10 last:border-r-0 bg-black flex flex-col items-center justify-center gap-4 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#833ab4]/30 via-[#fd1d1d]/20 to-[#fcb045]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                <InstagramIcon />
              </div>
              <div className="relative z-10 text-center px-2">
                <p className="text-white font-bebas text-base md:text-2xl tracking-widest">{reel.label}</p>
                <p className="text-white/40 text-[9px] md:text-xs font-sans uppercase tracking-widest hidden sm:block mt-1">Watch on Instagram</p>
              </div>
              <div className="relative z-10 px-3 md:px-5 py-1.5 border border-white/30 rounded-full text-white text-[9px] md:text-xs font-sans uppercase group-hover:bg-white group-hover:text-black transition-colors duration-300">
                Open ↗
              </div>
            </a>
          ))}
        </div>

        {/* ROW: 2 Long-form Videos — stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {longLinks.map((link, idx) => (
            <div key={`long-${idx}`} className="aspect-video relative border-b md:border-b-0 md:border-r border-white/10 last:border-0 overflow-hidden bg-black">
              <iframe
                src={link}
                title={`Long ${idx}`}
                className="w-full h-full pointer-events-auto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Portfolio;
