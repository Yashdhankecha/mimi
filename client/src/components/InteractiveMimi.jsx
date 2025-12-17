import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MimiSleeping from '../assets/mimi-sleeping.png';
import MimiWaving from '../assets/mimi-waving.png';

const InteractiveMimi = () => {
  const [isAwake, setIsAwake] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleText, setBubbleText] = useState("Meow! 😺");

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      setIsAwake(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsAwake(false);
      }, 2000); // Go back to sleep after 2 seconds of no scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    setIsAwake(true);
    setShowBubble(true);
    const phrases = ["Meow! 😺", "Let's Play!", "Purr...", "Hi Friend!"];
    setBubbleText(phrases[Math.floor(Math.random() * phrases.length)]);
    
    setTimeout(() => {
      setShowBubble(false);
    }, 2000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end pointer-events-none sm:pointer-events-auto">
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="bg-white px-4 py-2 rounded-xl shadow-lg border-2 border-mimi-blue mb-2 mr-4 font-heading font-bold text-gray-700 relative"
          >
            {bubbleText}
            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white border-b-2 border-r-2 border-mimi-blue transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className="cursor-pointer relative group"
      >
         {/* Glow effect */}
         <div className="absolute inset-0 bg-mimi-yellow/50 rounded-full blur-xl group-hover:bg-mimi-yellow/70 transition-colors" />

        <motion.img
          key={isAwake ? 'awake' : 'sleeping'}
          src={isAwake ? MimiWaving : MimiSleeping}
          alt="Mimi Mascot"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, rotate: isAwake ? [0, -5, 5, 0] : 0 }}
          transition={{ duration: 0.3 }}
          className="w-24 h-24 md:w-32 md:h-32 object-contain relative z-10 drop-shadow-xl"
        />
      </motion.div>
    </div>
  );
};

export default InteractiveMimi;
