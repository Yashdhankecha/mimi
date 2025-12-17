import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'For Kids', href: '#kids' },
    { name: 'For Parents', href: '#parents' },
    { name: 'About', href: '#why-mimi' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-8",
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20 py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <span className="text-3xl font-heading font-black text-orange-400 drop-shadow-sm tracking-wide group-hover:scale-105 transition-transform duration-300">
            Mimi
          </span>
          <span className="text-3xl filter drop-shadow-md">🐱</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-heading font-bold text-gray-600 hover:text-mimi-blue transition-colors text-lg relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-1 after:bg-mimi-yellow after:rounded-full after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('start').scrollIntoView({ behavior: 'smooth' })}
            className="bg-mimi-yellow text-gray-800 font-heading font-bold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all border-2 border-transparent hover:border-white"
          >
            Start Learning
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-4 md:hidden flex flex-col gap-4 rounded-b-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-heading font-bold text-gray-600 text-lg hover:text-mimi-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById('start').scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-mimi-yellow text-gray-800 font-heading font-bold px-6 py-3 rounded-xl shadow-md w-full"
            >
              Start Learning
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
