import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Lock, Clock, Settings, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MimiShield from '../assets/mimi-shield.png';

gsap.registerPlugin(ScrollTrigger);

const ParentsTrust = () => {
    const containerRef = useRef(null);
    const shieldRef = useRef(null);
    const cardsRef = useRef([]);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%",
            }
        });

        // Animate Shield Pop
        tl.from(shieldRef.current, {
            scale: 0,
            rotation: -45,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.5)"
        })

            // Animate Cards Stagger
            .from(cardsRef.current, {
                y: 50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: "power2.out"
            }, "-=0.4");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-12 md:py-32 bg-white relative overflow-hidden">
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">

                    {/* Left: 3D Image */}
                    <div className="order-2 md:order-1 flex justify-center relative">
                        <div ref={shieldRef} className="relative z-10">
                            <img
                                src={MimiShield}
                                alt="Mimi with Shield"
                                className="w-full max-w-[450px] drop-shadow-2xl"
                            />
                            {/* Floating Shield Icon */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-5 bg-white p-4 rounded-2xl shadow-xl border-2 border-mimi-blue-light hidden sm:block"
                            >
                                <ShieldCheck size={40} className="text-mimi-blue-DEFAULT" />
                            </motion.div>
                        </div>
                        {/* Glow behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-mimi-blue-light/50 rounded-full blur-[80px] -z-10" />
                    </div>

                    {/* Right: Content */}
                    <div className="order-1 md:order-2">
                        <div className="mb-12">
                            <span className="inline-block py-2 px-5 rounded-full bg-mimi-blue-light border border-mimi-blue-DEFAULT/30 text-mimi-blue-dark font-heading font-black text-xs uppercase tracking-widest mb-6">
                                For Parents
                            </span>
                            <h2 className="text-5xl md:text-6xl font-heading font-black text-mimi-text-primary mb-6 leading-tight">
                                Safe. <span className="text-mimi-green-DEFAULT relative">Secure.<svg className="absolute w-full h-3 bottom-1 left-0 text-mimi-green-DEFAULT/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg></span> Smart.
                            </h2>
                            <p className="text-xl text-mimi-text-secondary font-body leading-relaxed max-w-lg">
                                We know screen time is a concern. That's why Mimi is built with strict limits and detailed reports, putting you in complete control.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { title: "COPPA Compliant", desc: "Strict data privacy. No ads. No trackers.", icon: Lock, color: "text-mimi-blue-dark", bg: "bg-mimi-blue-light" },
                                { title: "Screen-Time Limits", desc: "Set automatic daily viewing limits easily.", icon: Clock, color: "text-mimi-green-dark", bg: "bg-mimi-green-light" },
                                { title: "Parent Dashboard", desc: "Track progress and customize the curriculum.", icon: Settings, color: "text-mimi-yellow-dark", bg: "bg-mimi-yellow-light" }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    ref={el => cardsRef.current[index] = el}
                                    className="flex items-start gap-5 p-4 rounded-3xl hover:bg-slate-50 transition-colors group cursor-default"
                                >
                                    <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                        <item.icon size={32} className={item.color} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold font-heading text-mimi-text-primary mb-1">{item.title}</h3>
                                        <p className="text-mimi-text-secondary font-body text-lg leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParentsTrust;
