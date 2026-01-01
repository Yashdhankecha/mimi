import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import MimiSleeping from '../assets/mimi-sleeping.png';

const Footer = ({ musicPlaying, setMusicPlaying }) => {
    // Local state removed in favor of props


    return (
        <footer className="bg-slate-900 text-white pt-24 pb-12 relative overflow-hidden">
            {/* Subtle top border */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-mimi-blue-DEFAULT via-mimi-pink-DEFAULT to-mimi-yellow-DEFAULT" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-16">

                    {/* Brand & Sleeping Mimi */}
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <span className="text-4xl font-heading font-black text-mimi-yellow-DEFAULT">Mimi</span>
                            <span className="text-4xl">🐱</span>
                        </Link>
                        <p className="text-slate-400 font-body max-w-sm mb-8 text-lg">
                            Making learning magical for curious minds everywhere. Safe, fun, and educational.
                        </p>

                        {/* Sleeping Mimi Animation */}
                        <motion.div
                            className="relative w-48"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            <img src={MimiSleeping} alt="Mimi Sleeping" className="w-full opacity-90 hover:opacity-100 transition-opacity" />
                            <motion.div
                                className="absolute -top-4 right-10 text-2xl text-mimi-blue-DEFAULT font-bold"
                                animate={{ y: -20, x: 10, opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 2.5 }}
                            >Zzz</motion.div>
                        </motion.div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-xl font-heading font-bold mb-6 text-mimi-green-DEFAULT">Explore</h4>
                        <ul className="space-y-4 font-body text-slate-400 font-medium">
                            <li><Link to="/kids" className="hover:text-mimi-yellow-DEFAULT transition-colors">For Kids</Link></li>
                            <li><Link to="/parents" className="hover:text-mimi-pink-DEFAULT transition-colors">For Parents</Link></li>
                            <li><Link to="/" className="hover:text-mimi-blue-DEFAULT transition-colors">How it Works</Link></li>
                            <li><Link to="/start-learning" className="hover:text-white transition-colors">Get Started</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Music */}
                    <div>
                        <h4 className="text-xl font-heading font-bold mb-6 text-mimi-pink-DEFAULT">Connect</h4>
                        <div className="flex gap-4 mb-8">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-mimi-blue-DEFAULT hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-mimi-blue-DEFAULT hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-mimi-blue-DEFAULT hover:text-white transition-colors"><Twitter size={20} /></a>
                        </div>

                        {/* Music Toggle */}
                        <button
                            onClick={() => setMusicPlaying(!musicPlaying)}
                            className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full transition-colors group"
                        >
                            {musicPlaying ? <Volume2 size={20} className="text-mimi-green-DEFAULT" /> : <VolumeX size={20} className="text-gray-400" />}
                            <span className="text-sm font-bold text-gray-300 group-hover:text-white">
                                {musicPlaying ? "Music On" : "Music Off"}
                            </span>
                        </button>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Mimi Learning. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
