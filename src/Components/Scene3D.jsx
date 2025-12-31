import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Stars } from '@react-three/drei';
import FloatingObjects from './FloatingObjects';

const Scene3D = ({ activeTheme }) => {
  return (
    <div className="fixed inset-0 -z-10 bg-warmBeige transition-colors duration-1000 ease-in-out">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* Soft Lighting - No harsh shadows */}
        <ambientLight intensity={0.6} />
        <spotLight 
            position={[10, 10, 10]} 
            angle={0.15} 
            penumbra={1} 
            intensity={0.8} 
            color={activeTheme.light} 
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#fff" />

        {/* The 3D Content */}
        <FloatingObjects themeColor={activeTheme.color} />

        {/* Subtle environment reflection */}
        <Environment preset="city" />
        
        {/* Very faint stars for depth */}
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />
      </Canvas>
    </div>
  );
};

export default Scene3D;