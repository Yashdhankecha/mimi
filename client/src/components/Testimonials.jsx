import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Mom of 2",
        text: "Mimi has completely transformed how my 4-year-old learns math. He actually asks to play!",
        rating: 5,
        color: "bg-mimi-pink-light/30 border-mimi-pink-DEFAULT"
    },
    {
        name: "David Chen",
        role: "Preschool Teacher",
        text: "The curriculum is spot on. It reinforces exactly what we teach in class, but in a fun way.",
        rating: 5,
        color: "bg-mimi-blue-light/30 border-mimi-blue-DEFAULT"
    },
    {
        name: "Emily Rodriguez",
        role: "Homeschooling Parent",
        text: "I love the screen time limits. I feel safe letting my daughter explore independently.",
        rating: 5,
        color: "bg-mimi-green-light/30 border-mimi-green-DEFAULT"
    }
];

const Testimonials = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".testimonial-card", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.2)"
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-mimi-yellow-DEFAULT/20 blur-xl" />
            <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-mimi-blue-DEFAULT/20 blur-xl" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-4 rounded-full bg-orange-100 text-orange-600 font-heading font-bold text-sm mb-4">
                        Family Stories
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-mimi-text-primary">
                        Loved by Parents & Teachers
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className={`testimonial-card relative p-8 rounded-[2rem] border-2 ${t.color} bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300`}>
                            <Quote className="absolute top-8 right-8 text-gray-200" size={40} />

                            <div className="flex gap-1 mb-6">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-600 font-medium text-lg mb-8 relative z-10 leading-relaxed">
                                "{t.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-400">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-gray-800">{t.name}</h4>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
