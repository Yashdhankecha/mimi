import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { BookOpen, Calculator, Music, Palette, Brain, Gamepad2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { title: "Alphabets", icon: BookOpen, color: "text-mimi-pink-dark", bg: "bg-mimi-pink-light", border: "border-mimi-pink-DEFAULT", desc: "Learn ABCs with fun stories!" },
  { title: "Numbers", icon: Calculator, color: "text-mimi-blue-dark", bg: "bg-mimi-blue-light", border: "border-mimi-blue-DEFAULT", desc: "Count 1-2-3 with animal friends." },
  { title: "Rhymes", icon: Music, color: "text-mimi-green-dark", bg: "bg-mimi-green-light", border: "border-mimi-green-DEFAULT", desc: "Sing along to catchy tunes." },
  { title: "Drawing", icon: Palette, color: "text-mimi-yellow-dark", bg: "bg-mimi-yellow-light", border: "border-mimi-yellow-DEFAULT", desc: "Unleash creativity & art." },
  { title: "Brain Games", icon: Brain, color: "text-purple-600", bg: "bg-purple-100", border: "border-purple-300", desc: "Puzzles to sharpen the mind." },
  { title: "Logic", icon: Gamepad2, color: "text-orange-600", bg: "bg-orange-100", border: "border-orange-300", desc: "Problem solving made fun." },
];

const Features = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    // Staggered reveal
    gsap.from(cardsRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.2)"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-12 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mimi-yellow-light rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-mimi-pink-light rounded-full blur-[120px] -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-24 relative">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block text-mimi-blue-dark font-heading font-black tracking-widest uppercase bg-mimi-blue-light px-6 py-2 rounded-full text-sm mb-6"
          >
            What We Teach
          </motion.span>
          <h2 className="text-5xl md:text-7xl text-mimi-text-primary font-black relative sticky-header">
            Explore & <span className="text-transparent bg-clip-text bg-gradient-to-r from-mimi-pink-DEFAULT to-mimi-yellow-dark relative z-10">Learn</span>
            <svg className="absolute w-48 h-6 bottom-0 right-1/2 translate-x-16 text-mimi-yellow-DEFAULT/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1000px]">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group relative"
            >
              <div className={`
                    relative z-10 h-full bg-white rounded-[2.5rem] p-10 
                    shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] 
                    border-[3px] ${feature.border} 
                    hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] 
                    transition-all duration-500 ease-out 
                    group-hover:-translate-y-4
                `}>
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500 bg-gradient-to-br from-white to-gray-50 border border-gray-100`}>
                  <feature.icon size={40} strokeWidth={2.5} className={feature.color} />
                </div>

                <h3 className="text-3xl mb-4 font-black font-heading text-slate-800 group-hover:text-mimi-blue-dark transition-colors">{feature.title}</h3>
                <p className="text-mimi-text-secondary font-body text-lg leading-relaxed font-medium">{feature.desc}</p>

                {/* Decorative Hover Gradient */}
                <div className={`absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 ${feature.bg}`} />
              </div>

              {/* 3D bottom layer */}
              <div className={`
                    absolute inset-0 rounded-[2.5rem] translate-y-3 z-0
                    ${feature.bg.replace('light', 'DEFAULT').replace('10', '20')}
                    opacity-0 group-hover:opacity-100 transition-all duration-300
                `} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
