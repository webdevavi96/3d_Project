import React, { useState, useRef, useEffect } from 'react';
import { Music, VolumeX } from 'lucide-react';
// Import audio file if in src/assets, otherwise reference via path if in public
import bgMusic from '../assets/calm-music.mp3';

const MusicToggle = () => {
    // Start as false. We only set to true if the browser allows the autoplay.
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(bgMusic));

    useEffect(() => {
        const audio = audioRef.current;
        audio.loop = true;
        audio.volume = 0.4;

        // Attempt to autoplay immediately on mount
        const playPromise = audio.play();

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    // Autoplay started!
                    setIsPlaying(true);
                })
                .catch((error) => {
                    // Autoplay was prevented by browser policy.
                    // We stay 'false' so the user sees the 'Unmute' icon.
                    console.log("Autoplay prevented by browser (interaction required):", error);
                    setIsPlaying(false);
                });
        }

        return () => {
            audio.pause();
        };
    }, []);

    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Audio play failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <button
            onClick={toggleMusic}
            className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/40 backdrop-blur-md shadow-lg hover:bg-white/60 transition-all duration-300 group"
            aria-label="Toggle Music"
        >
            {isPlaying ? (
                <Music className="w-6 h-6 text-gray-700 group-hover:text-purple-600" />
            ) : (
                <VolumeX className="w-6 h-6 text-gray-500" />
            )}
        </button>
    );
};

export default MusicToggle;