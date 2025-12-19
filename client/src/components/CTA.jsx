import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';
import MimiBalloons from '../assets/mimi-balloons.png';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
    const containerRef = useRef(null);
    const mimiRef = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            }
        });

        tl.from(contentRef.current, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        })
        .from(mimiRef.current, {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.2)"
        }, "-=0.6");
        
        // Float animation
        gsap.to(mimiRef.current, {
            y: "-=15",
            rotation: 2,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-12 md:py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden text-slate-900">
      {/* Subtle Texture */}
      <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      {/* Soft Glows - simplified */}
      <div className="absolute -top-40 -left-20 w-96 h-96 bg-blue-100/50 rounded-full blur-[80px]" />
      <div className="absolute -bottom-40 right-0 w-96 h-96 bg-yellow-100/50 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            
            {/* Left: Content */}
            <div ref={contentRef} className="md:w-1/2 text-center md:text-left md:ml-16">
                 <h2 className="text-4xl md:text-6xl font-heading font-black mb-6 leading-tight text-slate-900">
                    Ready for the <br className="hidden md:block" />
                    <span className="text-mimi-green relative inline-block">
                        Fun?
                        <svg className="absolute w-full h-3 bottom-1 left-0 text-mimi-yellow/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
                    </span>
                 </h2>
                 <p className="text-lg md:text-xl font-body font-medium text-slate-500 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                    Join 50,000+ happy families. Start your 7-day free trial today.
                 </p>

                 {/* Simple Feature Pills */}
                 <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
                    {['Ad-Free', 'Offline Mode', 'Safe & Secure'].map((item, i) => (
                        <div key={i} className="flex items-center gap-1.5 bg-white border border-slate-200 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm text-slate-600">
                            <Check size={14} className="text-mimi-blue" strokeWidth={4} />
                            <span>{item}</span>
                        </div>
                    ))}
                 </div>

                 {/* Main Buttons */}
                 <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                     <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-mimi-green text-white text-lg font-heading font-black px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                     >
                        <span>🚀</span> Get Started Free
                     </motion.button>
                     <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white border-2 border-slate-100 text-slate-600 text-lg font-heading font-bold px-8 py-4 rounded-2xl hover:bg-slate-50 transition-all"
                     >
                        View Plans
                     </motion.button>
                 </div>

                 {/* App Stores */}
                 <div className="flex justify-center md:justify-start gap-4 opacity-80">
                   <button className="flex items-center gap-2 hover:opacity-100 transition-opacity bg-black text-white px-4 py-2 rounded-xl">
                        <span className="text-2xl">🍎</span>
                        <div className="text-left leading-none">
                            <div className="text-[10px] uppercase font-bold opacity-70">Download on</div>
                            <div className="text-xs font-bold font-heading">App Store</div>
                        </div>
                   </button>
                   <button className="flex items-center gap-2 hover:opacity-100 transition-opacity bg-black text-white px-4 py-2 rounded-xl">
                        <span className="text-2xl">🤖</span>
                        <div className="text-left leading-none">
                            <div className="text-[10px] uppercase font-bold opacity-70">Get it on</div>
                            <div className="text-xs font-bold font-heading">Google Play</div>
                        </div>
                   </button>
                </div>
            </div>

            {/* Right: Mimi Image */}
            <div ref={mimiRef} className="md:w-1/2 flex justify-center md:justify-end relative">
                <div className="relative z-10 w-[80%] max-w-[400px]">
                    <img 
                        src={MimiBalloons} 
                        alt="Mimi Balloons" 
                        className="w-full drop-shadow-2xl" 
                    />
                </div>
                {/* Simple Glow check */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-blue-100 rounded-full blur-[60px] -z-10 opacity-50" />
            </div>

        </div>
      </div>
    </section>
  );
};
export default CTA;
