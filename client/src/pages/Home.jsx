import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import VideoPreview from '../components/VideoPreview';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import { motion } from 'framer-motion';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-slate-50">
            <Hero />

            {/* How It Works Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center">
                    <span className="text-mimi-blue-dark font-heading font-bold tracking-widest uppercase mb-4 inline-block bg-mimi-blue-light px-4 py-1 rounded-full text-sm">Simple & Fun</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-mimi-text-primary mb-16">How Mimi Works</h2>

                    <div className="grid md:grid-cols-3 gap-8 relative z-10">
                        {[
                            { step: "1", title: "Create Profile", desc: "Set up a personalized learning path for your child.", color: "bg-mimi-yellow-DEFAULT shadow-mimi-yellow-light" },
                            { step: "2", title: "Start Playing", desc: "Kids explore safe, ad-free educational games.", color: "bg-mimi-pink-DEFAULT shadow-mimi-pink-light" },
                            { step: "3", title: "Track Progress", desc: "Watch them grow with detailed parent reports.", color: "bg-mimi-green-DEFAULT shadow-mimi-green-light" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="relative group"
                            >
                                <div className={`w-24 h-24 mx-auto ${item.color} rounded-[2rem] flex items-center justify-center text-4xl font-black text-white shadow-xl mb-8 rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
                                    {item.step}
                                </div>
                                <h3 className="text-2xl font-bold font-heading text-mimi-text-primary mb-3">{item.title}</h3>
                                <p className="text-mimi-text-secondary font-medium px-8 leading-relaxed text-lg">{item.desc}</p>

                                {/* Connector Line (Desktop) */}
                                {i !== 2 && (
                                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-[3px] bg-slate-100 -z-10 transform translate-x-1/2" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <VideoPreview />
            <Testimonials />

            {/* Final CTA Banner */}
            <div className="py-24 bg-gradient-to-r from-mimi-blue-DEFAULT via-blue-400 to-mimi-blue-dark text-center relative overflow-hidden">
                {/* Abstract overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />

                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-10 drop-shadow-md">
                        Ready to Start the Adventure?
                    </h2>
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-[2.5rem] inline-block w-full max-w-4xl">
                        <CTA />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
