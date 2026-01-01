import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
    const team = [
        { name: "Dr. Emily Su", role: "Child Psychologist", color: "bg-mimi-blue-light border-mimi-blue-DEFAULT" },
        { name: "Mark Johnson", role: "Lead Game Designer", color: "bg-mimi-yellow-light border-mimi-yellow-DEFAULT" },
        { name: "Sarah Lee", role: "Curriculum Director", color: "bg-mimi-pink-light border-mimi-pink-DEFAULT" },
        { name: "Mimi", role: "Chief Fun Officer", color: "bg-mimi-green-light border-mimi-green-DEFAULT" }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-heading font-black text-mimi-text-primary mb-6">Meet the Experts</h2>
                    <p className="text-mimi-text-secondary max-w-2xl mx-auto text-lg">
                        Our team combines decades of experience in early childhood education, game design, and psychology.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="text-center group"
                        >
                            <div className={`w-40 h-40 mx-auto rounded-full ${member.color.split(' ')[0]} mb-6 overflow-hidden border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300 relative`}>
                                <div className={`absolute inset-0 opacity-30 ${member.color.split(' ')[0]}`} />
                                {/* Placeholder for avatar */}
                                <div className="w-full h-full flex items-center justify-center text-5xl relative z-10">
                                    {['👩‍⚕️', '👨‍💻', '👩‍🏫', '🐱'][i]}
                                </div>
                            </div>
                            <h3 className="text-xl font-heading font-bold text-mimi-text-primary">{member.name}</h3>
                            <p className="text-mimi-blue-DEFAULT font-bold">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
