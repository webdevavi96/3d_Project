import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';

const SoftBubble = ({ position, scale, color, speed }) => {
    const materialRef = useRef();

    useFrame((state) => {
        // Subtle breathing effect on the material distortion
        const t = state.clock.getElapsedTime();
        if (materialRef.current) {
            materialRef.current.distort = 0.3 + Math.sin(t * 0.5) * 0.1;
        }
    });

    return (
        <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
            <Sphere args={[1, 64, 64]} position={position} scale={scale}>
                <MeshDistortMaterial
                    ref={materialRef}
                    color={color}
                    envMapIntensity={0.4}
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                    metalness={0.1}
                />
            </Sphere>
        </Float>
    );
};

export default function FloatingObjects({ themeColor }) {
    return (
        <group>
            {/* Main soothing object */}
            <SoftBubble position={[0, 0, -2]} scale={1.8} color={themeColor} speed={1.5} />

            {/* Background floating particles */}
            <SoftBubble position={[-3, 2, -5]} scale={0.8} color="#ffffff" speed={1} />
            <SoftBubble position={[3, -2, -4]} scale={0.6} color={themeColor} speed={0.8} />
            <SoftBubble position={[-2, -3, -6]} scale={1.1} color="#ffffff" speed={1.2} />
            <SoftBubble position={[4, 3, -8]} scale={1.5} color={themeColor} speed={0.5} />
        </group>
    );
}