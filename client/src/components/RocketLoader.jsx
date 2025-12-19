import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import useSound from 'use-sound';
import { Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MimiRocket from '../assets/mimi-rocket.png';
// Import sounds directly for Vite to handle paths correctly
import popSound from '../assets/sounds/pop.mp3';
import launchSound from '../assets/sounds/launch.mp3';
import sweetBgSound from '../assets/sounds/sweet-loading.mp3';
import MimiWaving from '../assets/mimi-waving.png';
import mimiIntroVideo from '../assets/mimi_intro.mp4';

gsap.registerPlugin(useGSAP);

const RocketLoader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const rocketRef = useRef(null);
  const textRef = useRef(null);
  const cloudsRef = useRef(null);
  
  // No longer needed refs for cat sequence (removed)
  // const catRef = useRef(null);
  // const helloRef = useRef(null);

  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Sound Effects
  const [playPop] = useSound(popSound, { volume: 0.15 });
  const [playLaunch] = useSound(launchSound, { volume: 0.2 });
  const [playSweet, { stop: stopSweet }] = useSound(sweetBgSound, { volume: 0.1, loop: true });

  // Start the experience
  const handleStart = () => {
    setHasStarted(true);
    playPop(); // Play one immediately to unlock audio context
    playSweet();
  };

  useEffect(() => {
    return () => {
        stopSweet();
    };
  }, [stopSweet]);

  // Counter Logic - Only starts after user interaction
  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = 100;
    const duration = 2500;
    const stepTime = Math.abs(Math.floor(duration / end));
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    // Pop sound on counter increment (throttled)
    const soundInterval = setInterval(() => {
        if (start < 90) playPop();
    }, stepTime * 20); // Play every ~20%

    return () => {
        clearInterval(timer);
        clearInterval(soundInterval);
    };
  }, [hasStarted, playPop]);

  useGSAP(() => {
    if (!hasStarted) return; // Wait for start

    const tl = gsap.timeline({
      // We manually handle completion now
    });

    // 1. Idle / Revving State (0-80%)
    gsap.to(rocketRef.current, {
      x: "+=2",
      y: "+=2",
      rotation: "+=1",
      duration: 0.1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Animate Clouds
    gsap.to(".cloud", {
      y: "+=100",
      duration: 3,
      ease: "linear",
      repeat: -1,
      stagger: 0.5
    });

    // 2. Pre-Launch (80-100%)
    tl.to(rocketRef.current, {
      scale: 0.9,
      y: "+=20",
      duration: 0.5,
      delay: 2.0, 
      ease: "power2.in"
    })
    
    // 3. BLAST OFF (100%)
    .to(rocketRef.current, {
      y: -1500,
      scale: 1.5,
      rotation: 0,
      duration: 1.5,
      ease: "power4.in",
      onStart: () => {
        gsap.killTweensOf(rocketRef.current, {x:true, y:true, rotation:true});
        playLaunch();
      }
    }, ">")
    
    // Speed lines
    .to(".speed-line", {
      opacity: 1,
      y: 1000,
      duration: 0.5,
      stagger: 0.1
    }, "<")

    // Fade out text
    .to(textRef.current, {
      opacity: 0,
      scale: 0.5,
      duration: 0.3
    }, "<")

    // TRIGGER VIDEO START
    .call(() => {
        setShowVideo(true);
    });

  }, { scope: containerRef, dependencies: [hasStarted] });

  const handleVideoEnd = () => {
        // Slide away container to reveal app
        gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => {
                stopSweet();
                if (onComplete) onComplete();
            }
        });
  };

  // Initial "Click to Start" View
  if (!hasStarted) {
    return (
        <div className="fixed inset-0 z-[100] bg-sky-100 flex items-center justify-center">
             <button 
                onClick={handleStart}
                className="group relative flex flex-col items-center gap-4 transition-transform hover:scale-105"
            >
                <div className="w-24 h-24 bg-mimi-yellow rounded-full flex items-center justify-center shadow-xl border-4 border-white animate-bounce-slow">
                    <Play size={40} className="text-gray-900 ml-2 fill-current" />
                </div>
                <span className="text-2xl font-heading font-black text-mimi-blue tracking-widest uppercase">
                    Start Adventure
                </span>
            </button>
            {/* Background elements to keep it lively */}
            <div className="absolute inset-0 pointer-events-none opacity-50">
                 <div className="absolute top-20 left-20 text-4xl animate-bounce">☁️</div>
                 <div className="absolute bottom-20 right-20 text-4xl animate-bounce">☁️</div>
            </div>
        </div>
    );
  }

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] bg-gradient-to-b from-sky-300 to-sky-100 flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background Clouds */}
        <div ref={cloudsRef} className="absolute inset-0 w-full h-full pointer-events-none">
            {[...Array(6)].map((_, i) => (
                <div key={i} className={`cloud absolute bg-white/40 rounded-full blur-xl
                    ${i % 2 === 0 ? 'w-64 h-24' : 'w-96 h-32'}
                `}
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    opacity: 0.3 + Math.random() * 0.5
                }}
                />
            ))}
        </div>

        {/* Speed Lines */}
        <div className="absolute inset-0 flex justify-between px-20 pointer-events-none">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="speed-line w-1 h-32 bg-white/80 rounded-full opacity-0 transform -translate-y-full" />
            ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center gap-8">
            {/* 1. Counter */}
            <h1 className="text-9xl font-black text-white drop-shadow-lg font-heading tracking-tighter">
                {count}%
            </h1>

            {/* 2. Rocket */}
            <div ref={rocketRef} className="relative">
                <img src={MimiRocket} alt="Mimi Rocket" className="w-64 md:w-80 drop-shadow-2xl z-20 relative" />
                
                {/* Engine Glow */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-orange-400 blur-2xl rounded-full animate-pulse z-10 opacity-80" />
            </div>

            {/* 3. Preparing Launch Text */}
            <div ref={textRef}>
                <span className="text-mimi-blue font-bold text-xl uppercase tracking-widest bg-white/80 py-2 rounded-full px-6 shadow-sm">
                    Preparing Launch
                </span>
            </div>
        </div>

        {/* Video Overlay - Plays after rocket launch */}
        <AnimatePresence>
            {showVideo && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
                >
                    <video 
                        src={mimiIntroVideo} 
                        autoPlay 
                        className="w-full h-full object-cover"
                        onEnded={handleVideoEnd}
                        muted={false}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
};

export default RocketLoader;
