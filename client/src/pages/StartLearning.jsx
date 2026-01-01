import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Play, Star, BookOpen, Clock, Zap, Lock } from 'lucide-react';
import CTA from '../components/CTA';

// Dummy Data
const videos = [
    { id: 1, title: "Counting to 10 with Mimi", category: "Math", age: "3-5", duration: "5 min", thumbnail: "bg-mimi-yellow-light", locked: false, difficulty: "Easy" },
    { id: 2, title: "Alphabet Safari Adventure", category: "Reading", age: "4-6", duration: "8 min", thumbnail: "bg-mimi-green-light", locked: false, difficulty: "Easy" },
    { id: 3, title: "Shapes in the Sky", category: "Geometry", age: "3-5", duration: "4 min", thumbnail: "bg-mimi-blue-light", locked: false, difficulty: "Medium" },
    { id: 4, title: "Colors of the Rainbow", category: "Art", age: "3-6", duration: "6 min", thumbnail: "bg-mimi-pink-light", locked: false, difficulty: "Easy" },
    { id: 5, title: "Space Mission: Planets", category: "Science", age: "5-8", duration: "12 min", thumbnail: "bg-indigo-100", locked: true, difficulty: "Hard" },
    { id: 6, title: "Mimi's Manners Guide", category: "Social", age: "4-7", duration: "7 min", thumbnail: "bg-orange-100", locked: true, difficulty: "Medium" },
];

const categories = ["All", "Math", "Reading", "Science", "Art", "Social"];

const StartLearning = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [filteredVideos, setFilteredVideos] = useState(videos);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const results = videos.filter(video => {
            const matchesCategory = activeCategory === "All" || video.category === activeCategory;
            const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
        setFilteredVideos(results);
    }, [searchTerm, activeCategory]);

    return (
        <div className="pt-20 bg-slate-50 min-h-screen">

            {/* Header Section */}
            <div className="bg-white pb-12 pt-16 rounded-b-[3rem] shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-mimi-yellow-light/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-mimi-blue-light/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <span className="text-mimi-blue-DEFAULT font-bold tracking-wider uppercase text-sm bg-mimi-blue-light px-3 py-1 rounded-full mb-4 inline-block">
                            Let's Learn!
                        </span>
                        <h1 className="text-4xl md:text-5xl font-heading font-black text-mimi-text-primary mb-6">
                            Pick Your Adventure
                        </h1>

                        {/* Search Bar */}
                        <div className="relative max-w-lg mx-auto">
                            <input
                                type="text"
                                placeholder="Search for games, videos..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-mimi-blue-DEFAULT focus:ring-4 focus:ring-mimi-blue-light/30 outline-none transition-all text-lg font-bold text-slate-700 placeholder-slate-400 shadow-sm"
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
                        </div>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrapjustify-center gap-3 md:gap-4 overflow-x-auto pb-4 no-scrollbar justify-center">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full font-heading font-bold whitespace-nowrap transition-all ${activeCategory === cat
                                        ? 'bg-mimi-text-primary text-white shadow-lg scale-105'
                                        : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="container mx-auto px-4 py-16">

                {/* Continue Learning (Simulated) */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-mimi-yellow-light rounded-xl">
                            <Play size={24} className="text-mimi-yellow-dark fill-current" />
                        </div>
                        <h2 className="text-3xl font-heading font-black text-mimi-text-primary">Continue Watching</h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-md flex flex-col md:flex-row gap-6 items-center"
                    >
                        <div className="w-full md:w-64 h-40 bg-mimi-blue-light rounded-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                <Play size={20} className="text-mimi-blue-DEFAULT ml-1" fill="currentColor" />
                            </div>
                            {/* Progress Bar overlay */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-200">
                                <div className="h-full bg-mimi-green-DEFAULT w-[60%]" />
                            </div>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                                <span className="text-xs font-bold text-mimi-blue-dark bg-mimi-blue-light px-2 py-0.5 rounded-md">Math</span>
                                <span className="text-xs font-bold text-slate-400 flex items-center gap-1"><Clock size={12} /> 2m left</span>
                            </div>
                            <h3 className="text-2xl font-bold font-heading text-mimi-text-primary mb-2">Counting to 10 with Mimi</h3>
                            <button className="bg-mimi-green-DEFAULT text-white px-6 py-2 rounded-xl font-bold font-heading hover:bg-mimi-green-dark transition-colors shadow-mimi-green-light shadow-lg">
                                Resume Video
                            </button>
                        </div>
                    </motion.div>
                </div>


                {/* Video Grid */}
                <div>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-heading font-black text-mimi-text-primary">
                            {activeCategory === "All" ? "Explore All" : `${activeCategory} Videos`}
                        </h2>
                        <span className="text-mimi-text-secondary font-bold">{filteredVideos.length} Results</span>
                    </div>

                    <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {filteredVideos.map((video) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    key={video.id}
                                    className="bg-white rounded-[2rem] p-4 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
                                >
                                    {/* Thumbnail */}
                                    <div className={`relative w-full h-48 ${video.thumbnail} rounded-3xl mb-4 overflow-hidden flex items-center justify-center`}>
                                        {video.locked ? (
                                            <div className="w-12 h-12 bg-slate-900/10 backdrop-blur-md rounded-full flex items-center justify-center">
                                                <Lock size={24} className="text-slate-600" />
                                            </div>
                                        ) : (
                                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                                <Play size={24} className="text-mimi-blue-DEFAULT ml-1" fill="currentColor" />
                                            </div>
                                        )}

                                        {/* Badge */}
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-700 shadow-sm flex items-center gap-1">
                                            <Zap size={12} className="text-mimi-yellow-DEFAULT fill-current" />
                                            {video.difficulty}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="px-2 pb-2">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs font-bold uppercase tracking-wider text-mimi-blue-DEFAULT bg-blue-50 px-2 py-1 rounded-lg">
                                                {video.category}
                                            </span>
                                            <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                                                <Clock size={12} /> {video.duration}
                                            </span>
                                        </div>
                                        <h3 className={`text-xl font-heading font-black mb-2 leading-tight ${video.locked ? 'text-slate-400' : 'text-mimi-text-primary group-hover:text-mimi-blue-DEFAULT transition-colors'}`}>
                                            {video.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                                            <BookOpen size={14} />
                                            <span>Ages {video.age}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredVideos.length === 0 && (
                        <div className="text-center py-20 opacity-50">
                            <div className="text-6xl mb-4">🤔</div>
                            <h3 className="text-2xl font-bold font-heading">No videos found!</h3>
                            <p>Try searching for something else.</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 pb-20">
                <CTA />
            </div>
        </div>
    );
};

export default StartLearning;
