import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="relative bg-[#020202] py-24 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <div className="max-w-3xl mx-auto flex flex-col items-center">

          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-8xl font-bebas text-white tracking-wide leading-none mb-2">
              Contact
            </h2>
            <p className="font-sans text-sm md:text-base text-gray-400 tracking-widest uppercase">
              Get in touch
            </p>
          </div>

          <form className="w-full space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/50 font-sans text-sm tracking-widest uppercase mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-black border border-white/20 rounded-md px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#e60023] focus:ring-1 focus:ring-[#e60023] transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/50 font-sans text-sm tracking-widest uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-black border border-white/20 rounded-md px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#e60023] focus:ring-1 focus:ring-[#e60023] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/50 font-sans text-sm tracking-widest uppercase mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full bg-black border border-white/20 rounded-md px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#e60023] focus:ring-1 focus:ring-[#e60023] transition-colors resize-none"
              ></textarea>
            </div>

            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="bg-white text-black hover:bg-[#e60023] hover:text-white hover:border-[#e60023] border border-white px-12 py-4 rounded-md tracking-widest uppercase font-bold text-sm transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(230,0,35,0.4)]"
              >
                Send Message
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
