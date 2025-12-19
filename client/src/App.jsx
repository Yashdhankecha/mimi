import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import VideoPreview from './components/VideoPreview';
import Benefits from './components/Benefits';
import ParentsTrust from './components/ParentsTrust';
import CTA from './components/CTA';
import Footer from './components/Footer';
import VideoLoader from './components/VideoLoader';
import { AnimatePresence, motion } from 'framer-motion';
import useSound from 'use-sound';
import bgMusic from './assets/sounds/platform-bgm.mp3';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [playBg, { stop: stopBg }] = useSound(bgMusic, { volume: 0.1, loop: true });

  // Handle Background Music
  useEffect(() => {
    // Only play music after loading is complete and if enabled
    if (!isLoading && isMusicPlaying) {
      playBg();
    } else {
      stopBg();
    }
    return () => stopBg();
  }, [isLoading, isMusicPlaying, playBg, stopBg]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <VideoLoader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0 }}
            className="min-h-screen bg-white selection:bg-mimi-yellow selection:text-gray-900 font-body"
        >
          <Navbar />
          <main>
            <section id="home">
              <Hero />
            </section>
            <section id="kids">
              <Features />
            </section>
            <section id="demo">
              <VideoPreview />
            </section>
            <section id="why-mimi">
              <Benefits />
            </section>
            <section id="parents">
              <ParentsTrust />
            </section>
            <section id="start">
              <CTA />
            </section>
          </main>
          <Footer musicPlaying={isMusicPlaying} setMusicPlaying={setIsMusicPlaying} />
        </motion.div>
      )}
    </>
  );
}

export default App;
