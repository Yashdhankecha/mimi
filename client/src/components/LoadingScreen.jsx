import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MimiWaving from '../assets/mimi-waving.png';

const LoadingScreen = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Increment counter from 0 to 100
    const duration = 2000; // Total loading time in ms
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    // Ensure we trigger complete slightly after 100% to allow animations to finish
    const completeTimeout = setTimeout(() => {
      onComplete();
    }, duration + 500);

    return () => {
      clearInterval(timer);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-mimi-white overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Moving Cat Container */}
      <div className="relative w-full h-64 flex items-center">
        {/* Track line (optional, subtle) */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100/50" />

        <motion.div
            className="absolute top-1/2 -ml-32" // Center vertically, offset horizontally by approx half width
            initial={{ left: "-10%" }}
            animate={{ left: "110%" }}
            transition={{ duration: 3, ease: "linear" }} // Slightly longer than count to clear screen
        >
            <div className="relative">
                {/* Thought bubble with percentage */}
                <motion.div 
                    className="absolute -top-24 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-2xl shadow-xl border-4 border-mimi-yellow flex flex-col items-center z-20"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <span className="text-3xl font-heading font-black text-mimi-blue">
                        {Math.round(count)}%
                    </span>
                    {/* Triangle pointer */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-4 border-r-4 border-mimi-yellow transform rotate-45" />
                </motion.div>

                {/* The Cat */}
                <img 
                    src={MimiWaving} 
                    alt="Loading..." 
                    className="w-40 h-40 object-contain drop-shadow-2xl" 
                />
                
                {/* Dust/Motion particles behind */}
                <motion.div 
                    className="absolute bottom-5 left-0 flex gap-2"
                    animate={{ opacity: [0, 1, 0], x: [-20, -50] }}
                    transition={{ repeat: Infinity, duration: 0.5 }}
                >
                    <div className="w-2 h-2 rounded-full bg-gray-200" />
                    <div className="w-4 h-4 rounded-full bg-gray-300" />
                    <div className="w-3 h-3 rounded-full bg-gray-200" />
                </motion.div>
            </div>
        </motion.div>
      </div>

      <motion.p 
        className="mt-12 text-xl font-heading font-bold text-gray-400 tracking-widest uppercase"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        Loading Cuteness...
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
