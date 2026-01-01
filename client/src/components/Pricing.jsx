import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Monthly",
        price: "$9.99",
        period: "/month",
        features: ["Unlimited Access", "Ad-free experience", "3 Profiles", "Offline Mode"],
        color: "blue",
        popular: false
    },
    {
        name: "Annual",
        price: "$79.99",
        period: "/year",
        features: ["Everything in Monthly", "Save 33%", "Parent Dashboard", "Exclusive Content"],
        color: "pink",
        popular: true
    },
    {
        name: "Lifetime",
        price: "$199",
        period: "/once",
        features: ["One-time payment", "All future updates", "VIP Support", "Gift for a friend"],
        color: "yellow",
        popular: false
    }
];

const Pricing = () => {
    return (
        <section className="py-20 md:py-32 bg-slate-50 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-gray-800 mb-4">
                        Simple Pricing
                    </h2>
                    <p className="text-xl text-gray-500 font-body">Cancel anytime. No hidden fees.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className={`relative bg-white rounded-[2.5rem] p-8 border-2 ${plan.popular ? 'border-mimi-pink-DEFAULT shadow-xl scale-105 z-10' : 'border-slate-100 shadow-soft'} flex flex-col h-full`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-mimi-pink-DEFAULT text-white px-6 py-2 rounded-full font-bold text-sm shadow-md">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold font-heading text-gray-700 mb-2">{plan.name}</h3>
                                <div className="flex items-end justify-center gap-1 text-gray-800">
                                    <span className="text-4xl font-black">{plan.price}</span>
                                    <span className="text-gray-400 font-medium mb-2">{plan.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feat, j) => (
                                    <li key={j} className="flex items-center gap-3 text-gray-600 font-medium">
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center bg-${plan.color}-100`}>
                                            <Check size={14} className={`text-${plan.color}-500`} strokeWidth={3} />
                                        </div>
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-heading font-bold text-lg transition-colors ${plan.popular
                                ? 'bg-mimi-pink-DEFAULT text-white hover:bg-mimi-pink-dark shadow-lg shadow-mimi-pink-light'
                                : 'bg-slate-100 text-mimi-text-secondary hover:bg-slate-200'
                                }`}>
                                Choose {plan.name}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
