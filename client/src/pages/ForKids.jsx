import React, { useEffect } from 'react';
import Features from '../components/Features';
import { motion } from 'framer-motion';

const ForKids = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const characters = [
        { name: "Mimi", role: "The Leader", color: "bg-mimi-yellow-light text-mimi-yellow-dark", icon: "🐱" },
        { name: "Bubbles", role: "The Artist", color: "bg-mimi-blue-light text-mimi-blue-dark", icon: "🐙" },
        { name: "Rocky", role: "The Explorer", color: "bg-mimi-green-light text-mimi-green-dark", icon: "🐢" },
        { name: "Sparky", role: "The Genius", color: "bg-mimi-pink-light text-mimi-pink-dark", icon: "⚡" }
    ];

    return (
        <div className="pt-20 bg-white">
            <div className="bg-gradient-to-b from-mimi-yellow-light/50 to-white py-24 text-center relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-mimi-yellow-DEFAULT rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
                <div className="absolute top-10 right-10 w-32 h-32 bg-mimi-pink-DEFAULT rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-32 h-32 bg-mimi-blue-DEFAULT rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>

                <h1 className="text-6xl md:text-7xl font-black text-mimi-blue-DEFAULT mb-6 font-heading relative z-10 drop-shadow-sm">
                    Fun Learning for Kids!
                </h1>
                <p className="text-xl md:text-2xl text-mimi-text-secondary font-body max-w-3xl mx-auto px-4 relative z-10 font-bold">
                    Explore a world of games, stories, and creativity designed just for you.
                    Get ready for the <span className="text-mimi-pink-DEFAULT">best adventure ever!</span>
                </p>
            </div>

            <Features />

            {/* Meet the Friends Section */}
            <section className="py-24 bg-mimi-blue-light/10 relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-mimi-pink-dark font-heading font-bold uppercase tracking-wider mb-2 block">Squad Goals</span>
                        <h2 className="text-5xl font-black font-heading text-mimi-text-primary">Meet Your New Friends</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {characters.map((char, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                                className="bg-white p-6 rounded-[2rem] shadow-xl border-4 border-white text-center hover:shadow-2xl transition-all"
                            >
                                <div className={`w-32 h-32 mx-auto ${char.color.split(' ')[0]} rounded-full flex items-center justify-center text-6xl mb-6 shadow-inner`}>
                                    {char.icon}
                                </div>
                                <h3 className="text-2xl font-black font-heading text-mimi-text-primary">{char.name}</h3>
                                <p className="text-mimi-text-secondary font-bold">{char.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ForKids;
