import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ForKids from './pages/ForKids';
import ForParents from './pages/ForParents';
import About from './pages/About';
import StartLearning from './pages/StartLearning';
import Footer from './components/Footer';
import VideoLoader from './components/VideoLoader';
import { AnimatePresence, motion } from 'framer-motion';
import useSound from 'use-sound';
import bgMusic from './assets/sounds/platform-bgm.mp3';

// Wrapper to handle page transitions and scroll to top
const PageWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white selection:bg-mimi-yellow selection:text-gray-900 font-body"
    >
      {children}
    </motion.div>
  );
};

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
    <Router>
      <AnimatePresence>
        {isLoading && <VideoLoader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <main>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/kids" element={<PageWrapper><ForKids /></PageWrapper>} />
                <Route path="/parents" element={<PageWrapper><ForParents /></PageWrapper>} />
                <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                <Route path="/start-learning" element={<PageWrapper><StartLearning /></PageWrapper>} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer musicPlaying={isMusicPlaying} setMusicPlaying={setIsMusicPlaying} />
        </>
      )}
    </Router>
  );
}

export default App;
