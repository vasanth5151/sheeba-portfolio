import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import SocialMedia from './components/SocialMedia';
import ContentCreation from './components/ContentCreation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen font-sans antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <SocialMedia />
        <ContentCreation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
