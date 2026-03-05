"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import { useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import * as THREE from "three";

interface CoreMeshProps {
    scrollProgress: MotionValue<number>;
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
}

function CoreMesh({ scrollProgress, mouseX, mouseY }: CoreMeshProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const { viewport } = useThree();

    // Smooth spring values for mouse position
    const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    // Transform scroll progress to different visual states
    // More subtle distortion for the technical look
    const distortion = useTransform(scrollProgress, [0, 0.5, 1], [0.3, 0.6, 0.4]);
    const scale = useTransform(scrollProgress, [0, 0.2, 1], [1, 0.8, 1.2]);
    const rotationSpeed = useTransform(scrollProgress, [0, 1], [0.2, 1.5]);

    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.getElapsedTime();
        const rSpeed = rotationSpeed.get();

        // Mechanical rotation
        meshRef.current.rotation.x = time * 0.1 * rSpeed + smoothMouseY.get() * 0.1;
        meshRef.current.rotation.y = time * 0.2 * rSpeed + smoothMouseX.get() * 0.1;

        // Mouse follow position (subtle)
        meshRef.current.position.x = smoothMouseX.get() * viewport.width * 0.05;
        meshRef.current.position.y = smoothMouseY.get() * viewport.height * 0.05;

        // Apply scroll-based scale
        const currentScale = scale.get();
        meshRef.current.scale.setScalar(currentScale);

        // Update distortion
        const material = meshRef.current.material as any;
        if (material && material.distort) {
            material.distort = distortion.get();
        }
    });

    return (
        <group>
            {/* Inner Core: Solid but subtle */}
            <Icosahedron ref={meshRef} args={[2, 4]}>
                <MeshDistortMaterial
                    color="#e5e5e5"
                    distort={0.3}
                    speed={2}
                    roughness={0.9}
                    metalness={0.1}
                />
            </Icosahedron>

            {/* Wireframe Overlay: The "Technical" look (Black) */}
            <Icosahedron args={[2.05, 3]}>
                <meshBasicMaterial
                    wireframe
                    color="#111111"
                    opacity={0.15}
                    transparent
                />
            </Icosahedron>

            {/* Inner Structural Lines (Darker) */}
            <Icosahedron args={[1.8, 2]}>
                <meshBasicMaterial
                    wireframe
                    color="#111111"
                    opacity={0.05}
                    transparent
                />
            </Icosahedron>

            {/* Outer Orbital Ring (Faint) */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[3.5, 0.01, 16, 100]} />
                <meshBasicMaterial color="#111111" opacity={0.1} transparent />
            </mesh>
        </group>
    );
}

function Scene({ scrollProgress, mouseX, mouseY }: CoreMeshProps) {
    return (
        <>
            <ambientLight intensity={0.9} />
            <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#eeeeee" />
            <CoreMesh scrollProgress={scrollProgress} mouseX={mouseX} mouseY={mouseY} />
        </>
    );
}

export default function LivingCore() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress (0 to 1 over entire page)
    const { scrollYProgress } = useScroll();

    // Track mouse position
    const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

    // Handle mouse movement
    const handleMouseMove = (e: React.MouseEvent) => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <div
            ref={containerRef}
            className="canvas-container w-full h-full absolute inset-0 z-0 pointer-events-none"
            onMouseMove={handleMouseMove}
            style={{ pointerEvents: "auto" }}
        >
            <Canvas
                dpr={[1, 2]} // Crisp lines for wireframe
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance"
                }}
                camera={{ position: [0, 0, 8], fov: 45 }}
            >
                <Scene
                    scrollProgress={scrollYProgress}
                    mouseX={mouseX}
                    mouseY={mouseY}
                />
            </Canvas>
        </div>
    );
}
