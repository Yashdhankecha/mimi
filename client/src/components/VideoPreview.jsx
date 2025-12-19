import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import MimiTablet from '../assets/mimi-tablet.png';

const VideoPreview = () => {
  const containerRef = useRef(null);
  const tabletRef = useRef(null);

  useGSAP(() => {
    // Floating Animation
    gsap.to(tabletRef.current, {
        y: -20,
        rotation: 2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // Parallax Tilt on Mouse Move
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 10;
        const y = (clientY / window.innerHeight - 0.5) * 10;
        
        gsap.to(tabletRef.current, {
            rotationY: x,
            rotationX: -y,
            duration: 0.5,
            ease: "power2.out"
        });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-12 md:py-32 bg-sky-50 relative overflow-hidden perspective-[2000px]">
        {/* Background blobs */}
        <div className="absolute top-10 left-[-50px] w-96 h-96 bg-mimi-yellow/20 rounded-full blur-[80px] opacity-60 mix-blend-multiply" />
        <div className="absolute bottom-10 right-[-50px] w-[500px] h-[500px] bg-mimi-pink/20 rounded-full blur-[100px] opacity-60 mix-blend-multiply" />
        
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8 md:mb-16"
            >
                <span className="text-mimi-pink font-heading font-black tracking-wider uppercase bg-white px-6 py-2 rounded-full shadow-sm text-sm mb-6 inline-block">Watch & Discover</span>
                <h2 className="text-5xl md:text-7xl text-gray-800 mb-6 font-black">
                    Safe, Fun & <span className="text-transparent bg-clip-text bg-gradient-to-r from-mimi-blue to-mimi-green">Ad-Free!</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-500 font-body max-w-2xl mx-auto leading-relaxed font-medium">
                    100% kid-safe content curated by experts for a joyful learning adventure.
                </p>
            </motion.div>

            <div className="relative max-w-5xl mx-auto perspective-[1000px]">
                <div ref={tabletRef} className="relative z-20">
                    <img 
                        src={MimiTablet} 
                        alt="Mimi holding tablet" 
                        className="w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
                    />
                    
                    {/* Play Button Overlay (Positioned over screen area) */}
                    <div className="absolute top-[30%] left-[25%] md:top-[35%] md:left-[28%] w-[40%] h-[40%] flex items-center justify-center group cursor-pointer">
                        <div className="relative">
                            <div className="absolute inset-0 bg-white/30 rounded-full animate-ping opacity-75" />
                            <div className="bg-mimi-yellow w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center shadow-lg border-4 border-white transform transition-transform group-hover:scale-110">
                                <Play size={48} className="text-gray-900 ml-2 fill-current" />
                            </div>
                        </div>
                    </div>
                </div>

                 {/* Decorative background glow behind tablet */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/40 blur-[100px] -z-10 rounded-full" />
            </div>
        </div>
    </section>
  );
};

export default VideoPreview;
