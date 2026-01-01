import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Team from '../components/Team';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 min-h-screen bg-white">
            <div className="bg-gradient-to-br from-mimi-pink-light/50 via-pink-50 to-white py-24 text-center">
                <span className="text-mimi-pink-dark font-heading font-bold uppercase tracking-wider mb-2 block">Our Story</span>
                <h1 className="text-5xl md:text-6xl font-black text-mimi-text-primary mb-6 font-heading">About Mimi</h1>
                <p className="text-xl md:text-2xl text-mimi-text-secondary font-body max-w-2xl mx-auto px-4 font-medium">
                    Our mission is to make learning an adventure for every child.
                </p>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="inline-block p-4 rounded-2xl bg-mimi-yellow-light">
                            <span className="text-4xl">🚀</span>
                        </div>
                        <h2 className="text-4xl font-black text-mimi-text-primary font-heading leading-tight">
                            Building the Future of <br /><span className="text-mimi-pink-DEFAULT">Playful Learning</span>
                        </h2>
                        <p className="text-lg text-mimi-text-secondary leading-relaxed font-body">
                            Mimi is an interactive learning platform designed by educators and child psychologists.
                            We believe that the best way children learn is through play, curiosity, and exploration.
                        </p>
                        <p className="text-lg text-mimi-text-secondary leading-relaxed font-body">
                            Our team is dedicated to creating a safe, ad-free, and engaging environment where
                            kids can develop essential skills in literacy, numeracy, and creative arts.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-slate-50 rounded-[3rem] h-[500px] relative overflow-hidden shadow-2xl skew-y-2 group border-4 border-white"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-mimi-yellow-light/30 to-mimi-pink-light/30" />

                        {/* Abstract Shapes */}
                        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/50 backdrop-blur opacity-80 animate-bounce" />
                        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-mimi-blue-light/50 backdrop-blur opacity-80" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-mimi-text-muted font-bold text-2xl relative z-10 px-8 text-center">
                                [Insert Office/Team Photo Here]
                            </span>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-32 grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Safe Space", desc: "100% Kid-safe and ad-free environment.", icon: "🛡️", color: "bg-mimi-blue-light text-mimi-blue-dark" },
                        { title: "Expert Designed", desc: "Curriculum approved by early education experts.", icon: "🎓", color: "bg-mimi-yellow-light text-mimi-yellow-dark" },
                        { title: "Always Evolving", desc: "New content and games added weekly.", icon: "🌱", color: "bg-mimi-green-light text-mimi-green-dark" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white border text-center border-slate-100 p-8 rounded-[2.5rem] shadow-lg shadow-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl mb-6 ${item.color}`}>
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-black text-mimi-text-primary mb-3 font-heading">{item.title}</h3>
                            <p className="text-mimi-text-secondary font-medium text-lg">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Team />
        </div>
    );
};

export default About;
