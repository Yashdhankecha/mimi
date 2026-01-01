import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import MimiHero3D from '../assets/mimi-hero-3d.png';

const Hero = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const navigate = useNavigate();

  // Parallax mouse effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;

    if (heroRef.current) {
      gsap.to(heroRef.current, {
        x: x * 2,
        y: y * 2,
        duration: 1,
        ease: "power2.out"
      });
    }

    // Move floating elements inversely
    gsap.to(".floater", {
      x: -x,
      y: -y,
      duration: 1.5,
      ease: "power2.out"
    });
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(heroRef.current, {
      opacity: 0,
      y: 100,
      scale: 0.8,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)"
    })
      .from(textRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.8");

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden bg-white"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Gradients */}
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-sky-200/30 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] bg-mimi-yellow/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[40%] h-[40%] bg-mimi-pink/20 rounded-full blur-[100px]" />

        {/* Floating Shapes */}
        <motion.div
          className="floater absolute top-20 right-[10%] text-6xl opacity-60"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          ☁️
        </motion.div>
        <motion.div
          className="floater absolute bottom-40 left-[10%] text-6xl opacity-60"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          📚
        </motion.div>
        <motion.div
          className="floater absolute top-40 left-[20%] w-6 h-6 rounded-full bg-mimi-green/40 blur-sm"
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-4 md:gap-12 items-center relative z-10 h-full">

        {/* Left: Text Content */}
        <div ref={textRef} className="text-center md:text-left space-y-4 md:space-y-8 md:ml-16 order-2 md:order-1">
          <div className="inline-block relative group cursor-default">
            <span className="relative z-10 inline-block py-2 px-5 rounded-full bg-white border-2 border-mimi-blue/20 text-mimi-blue-dark font-heading font-black text-sm tracking-widest uppercase shadow-sm group-hover:scale-105 transition-transform">
              ✨ Spark Curiosity
            </span>
            <div className="absolute inset-0 bg-mimi-blue/20 rounded-full blur-md -z-10 group-hover:blur-lg transition-all" />
          </div>

          <h1 className="text-4xl md:text-[5.5rem] font-heading font-black text-mimi-text-primary leading-[0.95] tracking-tight">
            Start Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mimi-pink-DEFAULT to-mimi-yellow-dark relative inline-block">
              Adventure
              {/* Underline decor */}
              <svg className="absolute w-full h-4 bottom-1 left-0 text-mimi-blue-DEFAULT -z-10 opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-mimi-text-secondary font-body font-medium max-w-lg mx-auto md:mx-0 leading-relaxed">
            Join Mimi in a world of animated stories, games, and magical lessons designed for little explorers.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center md:justify-start pt-2">
            <button
              onClick={() => navigate('/start-learning')}
              className="relative group overflow-hidden bg-slate-900 text-white text-lg md:text-xl font-heading font-black px-8 py-3 md:px-10 md:py-5 rounded-[2rem] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex justify-center items-center"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Learning 🚀
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-mimi-blue-DEFAULT via-mimi-pink-DEFAULT to-mimi-yellow-DEFAULT opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>

            <button
              onClick={() => navigate('/parents')}
              className="bg-white text-mimi-text-secondary text-lg md:text-xl font-heading font-black px-8 py-3 md:px-10 md:py-5 rounded-[2rem] shadow-sm border-2 border-slate-100 hover:border-mimi-blue-DEFAULT hover:text-mimi-blue-dark hover:-translate-y-1 transition-all"
            >
              👨‍👩‍👧 Parent Guide
            </button>
          </div>
        </div>

        {/* Right: 3D Mascot */}
        <div className="relative flex justify-center perspective-[1000px] order-1 md:order-2">
          <div ref={heroRef} className="relative z-20">
            <img
              src={MimiHero3D}
              alt="Mimi Hero"
              className="w-80 md:w-full max-w-[550px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] filter saturate-110 mx-auto"
            />

            {/* Floating Badges usually found in 3D renders */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-20 bg-white p-4 rounded-2xl shadow-xl border-2 border-mimi-yellow rotate-12 hidden md:block"
            >
              <span className="text-3xl">🌟</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-4 bottom-20 bg-white p-4 rounded-2xl shadow-xl border-2 border-mimi-blue -rotate-6 hidden md:block"
            >
              <span className="text-3xl">🎨</span>
            </motion.div>
          </div>

          {/* Ground Shadow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[60%] h-12 bg-black/5 rounded-[100%] blur-xl" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
