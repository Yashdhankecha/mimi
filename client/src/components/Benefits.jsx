import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Heart } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MimiTrophy from '../assets/mimi-trophy.png';

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const containerRef = useRef(null);
  const trophyRef = useRef(null);
  const listRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%", // Trigger earlier
            toggleActions: "play none none reverse" // Re-play if scrolled back up
        }
    });

    // Animate Trophy
    tl.from(trophyRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    })
    
    // Animate List Items (using fromTo for reliability)
    .fromTo(listRef.current.children, 
        { 
            x: -30, 
            opacity: 0 
        },
        {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.2)"
        }, 
        "-=0.5"
    );

  }, { scope: containerRef });

  const benefits = [
    { text: "Curriculum developed by educators", icon: Star, color: "text-amber-500", bg: "bg-amber-100" },
    { text: "Boosts creativity & critical thinking", icon: Zap, color: "text-purple-500", bg: "bg-purple-100" },
    { text: "Safe environment for independent play", icon: Heart, color: "text-rose-500", bg: "bg-rose-100" },
    { text: "Progress tracking for parents", icon: Check, color: "text-emerald-500", bg: "bg-emerald-100" },
  ];

  return (
    <section ref={containerRef} className="py-12 md:py-32 bg-amber-50/50 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-200/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
            {/* Header */}
            <div className="text-center mb-10 md:mb-20">
                 <span className="text-amber-500 font-heading font-black tracking-wider uppercase bg-white px-6 py-2 rounded-full shadow-sm text-sm mb-6 inline-block">why Mimi?</span>
                <h2 className="text-5xl md:text-7xl font-heading font-black text-slate-800">
                    Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Super Parents!</span>
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                {/* Left: Content */}
                <div ref={listRef} className="space-y-6 md:pl-8 order-2 md:order-1">
                    {benefits.map((benefit, index) => (
                        <div 
                            key={index}
                            className="bg-white p-6 rounded-[2rem] shadow-sm border border-amber-100 flex items-center gap-6 hover:shadow-md hover:-translate-x-2 transition-all duration-300 group"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${benefit.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                <benefit.icon size={32} className={benefit.color} strokeWidth={3} />
                            </div>
                            <span className="text-xl md:text-2xl font-bold font-heading text-slate-700 leading-tight">
                                {benefit.text}
                            </span>
                        </div>
                    ))}
                    
                    <div className="pt-8">
                         <div className="bg-white inline-block p-4 rounded-3xl shadow-lg border-2 border-amber-100 rotate-2 hover:rotate-0 transition-transform cursor-default">
                             <div className="flex items-center gap-3">
                                 <div className="flex -space-x-3">
                                     {[...Array(4)].map((_,i) => (
                                         <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white" />
                                     ))}
                                 </div>
                                 <div className="text-sm font-bold text-slate-600">
                                     <span className="text-amber-500 text-lg">50k+</span> Happy Families
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>

                {/* Right: 3D Trophy */}
                <div className="order-1 md:order-2 flex justify-center relative perspective-[1000px]">
                    <div ref={trophyRef} className="relative z-10">
                         <img 
                            src={MimiTrophy} 
                            alt="Mimi with Trophy" 
                            className="w-full max-w-[500px] drop-shadow-[0_25px_50px_rgba(251,191,36,0.25)]" 
                        />
                        
                        {/* Confetti Particles (Simple DIVs) */}
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ y: [0, 100], opacity: [1, 0], rotate: [0, 360] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                                className={`absolute -top-10 w-4 h-4 rounded-sm ${['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400'][i%4]}`}
                                style={{ left: `${20 + i*15}%` }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Benefits;
