import React, { useEffect, useState } from 'react';
import Benefits from '../components/Benefits';
import ParentsTrust from '../components/ParentsTrust';
import Pricing from '../components/Pricing';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 flex items-center justify-between text-left font-bold font-heading text-lg text-mimi-text-primary hover:bg-slate-50 transition-colors"
            >
                {question}
                {isOpen ? <ChevronUp className="text-mimi-blue-DEFAULT" /> : <ChevronDown className="text-mimi-text-muted" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 text-mimi-text-secondary leading-relaxed font-medium">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ForParents = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const faqs = [
        { q: "Is Mimi really safe for kids?", a: "Absoloutely. We are COPPA compliant, have zero ads, and no external links. Every piece of content is vetted by educators." },
        { q: "Can I use Mimi offline?", a: "Yes! Our mobile app allows you to download games and videos for road trips or flights." },
        { q: "What age range is this for?", a: "Mimi is designed for children ages 2-8. The content adapts as your child grows." },
        { q: "How many children can I add?", a: "Our standard plan supports up to 3 child profiles, so everyone gets their own progress tracking." }
    ];

    return (
        <div className="pt-20 bg-slate-50">
            <div className="bg-gradient-to-b from-mimi-pink-light/50 to-white py-24 text-center">
                <h1 className="text-5xl md:text-6xl font-black text-mimi-pink-DEFAULT mb-6 font-heading drop-shadow-sm">Trusted by Parents</h1>
                <p className="text-xl md:text-2xl text-mimi-text-secondary font-body max-w-2xl mx-auto px-4 font-medium">
                    See why thousands of families trust Mimi for their child's early education.
                </p>
            </div>

            <div className="bg-white">
                <Benefits />
            </div>

            <ParentsTrust />

            <Pricing />

            {/* FAQ Section */}
            <section className="py-24 bg-white relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-16">
                        <span className="text-mimi-blue-DEFAULT font-bold tracking-widest uppercase text-sm mb-3 block">Got Questions?</span>
                        <h2 className="text-4xl font-heading font-black text-mimi-text-primary">Frequently Asked Questions</h2>
                    </div>

                    <div>
                        {faqs.map((f, i) => <FAQItem key={i} question={f.q} answer={f.a} />)}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ForParents;
