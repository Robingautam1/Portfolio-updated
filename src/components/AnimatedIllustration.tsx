"use client";

import Lottie, { LottieComponentProps } from "lottie-react";
import { useRef, useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface AnimatedIllustrationProps {
    src: string;
    className?: string;
    loop?: boolean;
    autoplay?: boolean;
    enableTilt?: boolean;
}

export default function AnimatedIllustration({
    src,
    className = "",
    loop = true,
    autoplay = true,
    enableTilt = false,
}: AnimatedIllustrationProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [animationData, setAnimationData] = useState<unknown>(null);
    const [error, setError] = useState(false);

    // Mouse tilt effect
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 20 });
    const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 20 });

    // Fetch Lottie JSON
    useEffect(() => {
        fetch(src)
            .then((res) => res.json())
            .then((data) => setAnimationData(data))
            .catch(() => setError(true));
    }, [src]);

    // Mouse move handler for tilt
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!enableTilt || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate rotation based on mouse position (-10 to 10 degrees)
        const x = ((e.clientY - centerY) / (rect.height / 2)) * -8;
        const y = ((e.clientX - centerX) / (rect.width / 2)) * 8;

        rotateX.set(x);
        rotateY.set(y);
    };

    const handleMouseLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    if (error) {
        return (
            <div className={`flex items-center justify-center bg-zinc-100 rounded-3xl ${className}`}>
                <span className="text-zinc-400">Illustration</span>
            </div>
        );
    }

    if (!animationData) {
        return (
            <div className={`flex items-center justify-center ${className}`}>
                <div className="w-12 h-12 rounded-full border-2 border-zinc-200 border-t-blue-500 animate-spin" />
            </div>
        );
    }

    return (
        <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: enableTilt ? springRotateX : 0,
                rotateY: enableTilt ? springRotateY : 0,
                transformPerspective: 1000,
            }}
            className={className}
        >
            <Lottie
                animationData={animationData}
                loop={loop}
                autoplay={autoplay}
                style={{ width: "100%", height: "100%" }}
            />
        </motion.div>
    );
}
