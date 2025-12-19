import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import mimiIntroVideo from '../assets/mimi_intro.mp4';

const VideoLoader = ({ onComplete }) => {
  const videoRef = useRef(null);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    const playVideo = async () => {
        if (videoRef.current) {
            try {
                await videoRef.current.play();
                setShowPlayButton(false);
            } catch (err) {
                console.log("Autoplay blocked, showing play button", err);
                setShowPlayButton(true);
            }
        }
    };
    playVideo();
  }, []);

  const handleManualStart = () => {
      if (videoRef.current) {
          videoRef.current.play();
          setShowPlayButton(false);
      }
  };

  return (
    <motion.div 
        className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
        <video 
            ref={videoRef}
            src={mimiIntroVideo} 
            className="w-full h-auto md:h-full object-contain md:object-cover scale-150 md:scale-100"
            onEnded={onComplete}
            playsInline // Important for mobile
            muted={false} // Try unmuted
        />

        {showPlayButton && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                <button 
                    onClick={handleManualStart}
                    className="group flex flex-col items-center gap-4 transition-transform hover:scale-105"
                >
                    <div className="w-24 h-24 bg-mimi-yellow/90 backdrop-blur rounded-full flex items-center justify-center shadow-2xl border-4 border-white animate-bounce-slow cursor-pointer">
                        <Play size={40} className="text-gray-900 ml-2 fill-current" />
                    </div>
                    <span className="text-white font-heading font-bold text-xl tracking-widest uppercase drop-shadow-md">
                        Start Adventure
                    </span>
                </button>
            </div>
        )}
    </motion.div>
  );
};

export default VideoLoader;
