import React, { useState } from 'react';
import Scene3D from './Components/Scene3D';
import OverlayUI from './Components/OverlayUI';
import MusicToggle from './Components/MusicToggle';
import { themes } from "./data/message.js";

function App() {
  const [currentTheme, setCurrentTheme] = useState('cozy');

  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Background Music Control */}
      <MusicToggle />

      {/* 3D Background Layer */}
      <Scene3D activeTheme={themes[currentTheme]} />

      {/* UI Overlay Layer */}
      <OverlayUI setTheme={setCurrentTheme} />
      <div className="bg-black h-20 w-full">
        <p className='text-white'>
          Wish you a happy new year in advance from
          <a
            className='text-white'
            href="https://webdevavi96.netlify.app/" target='_blank'>Avinash</a>
        </p>
      </div>
    </main>
  );
}

export default App;