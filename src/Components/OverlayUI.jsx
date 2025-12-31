import React, { useState } from 'react';
import { comfortMessages } from '../data/message.js';

const OverlayUI = ({ setTheme }) => {
    const [message, setMessage] = useState("Hey. This space is just for you.");
    const [fadeKey, setFadeKey] = useState(0); // Used to re-trigger CSS animation

    const handleNewMessage = () => {
        const randomMsg = comfortMessages[Math.floor(Math.random() * comfortMessages.length)];
        setMessage(randomMsg);
        setFadeKey(prev => prev + 1); // Trigger fade animation
    };

    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-6">

            {/* Main Glass Card */}
            <div className="pointer-events-auto max-w-md w-full bg-white/30 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/40 text-center transition-all duration-500">

                {/* Dynamic Message */}
                <div key={fadeKey} className="min-h-[100px] flex items-center justify-center animate-fade-in">
                    <h1 className="text-2xl md:text-3xl font-medium text-slate-700 leading-relaxed font-sans">
                        "{message}"
                    </h1>
                </div>

                <div className="h-px w-24 bg-slate-400/30 mx-auto my-6" />

                {/* Action Button */}
                <button
                    onClick={handleNewMessage}
                    className="bg-white/50 hover:bg-white/80 text-slate-700 font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95"
                >
                    Need another thought?
                </button>
            </div>

            {/* Mood Selectors (Bottom) */}
            <div className="pointer-events-auto absolute bottom-12 flex gap-4">
                <MoodBtn label="Calm" color="bg-blue-100/50" onClick={() => setTheme('calm')} />
                <MoodBtn label="Cozy" color="bg-pink-100/50" onClick={() => setTheme('cozy')} />
                <MoodBtn label="Rest" color="bg-purple-100/50" onClick={() => setTheme('rest')} />
            </div>
        </div>
    );
};

const MoodBtn = ({ label, color, onClick }) => (
    <button
        onClick={onClick}
        className={`${color} backdrop-blur-md px-6 py-2 rounded-full text-slate-600 font-medium text-sm hover:scale-110 transition-transform duration-300 shadow-sm`}
    >
        {label}
    </button>
);

export default OverlayUI;