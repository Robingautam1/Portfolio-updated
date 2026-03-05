"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface ParallaxLayerProps {
    children: React.ReactNode;
    speed?: number;
    className?: string;
}

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

// Layer 0: Slow background blobs
export function BackgroundLayer({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const y = useParallax(scrollYProgress, 100);

    return (
        <motion.div
            ref={ref}
            style={{ y }}
            className="parallax-layer-0"
        >
            {children}
        </motion.div>
    );
}

// Layer 2: Fast foreground elements
export function ForegroundLayer({ children }: { children: React.ReactNode }) {
    const { scrollYProgress } = useScroll();
    const y = useParallax(scrollYProgress, -200);

    return (
        <motion.div
            style={{ y }}
            className="parallax-layer-2"
        >
            {children}
        </motion.div>
    );
}

// General parallax wrapper for any element
export function ParallaxElement({
    children,
    speed = 0.5,
    className = "",
}: ParallaxLayerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    );
}

// Floating blobs for background decoration
export function FloatingBlob({
    color,
    size = 400,
    top,
    left,
    delay = 0,
}: {
    color: string;
    size?: number;
    top?: string;
    left?: string;
    delay?: number;
}) {
    return (
        <div
            className="absolute rounded-full opacity-30 blur-3xl animate-blob"
            style={{
                background: color,
                width: size,
                height: size,
                top,
                left,
                animationDelay: `${delay}s`,
            }}
        />
    );
}

// Floating code symbols for foreground
export function FloatingSymbol({
    children,
    top,
    left,
    delay = 0,
    color = "text-zinc-300",
}: {
    children: React.ReactNode;
    top?: string;
    left?: string;
    delay?: number;
    color?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay * 0.2, duration: 0.5 }}
            className={`absolute text-4xl font-mono ${color} animate-float pointer-events-none`}
            style={{ top, left, animationDelay: `${delay * 0.5}s` }}
        >
            {children}
        </motion.div>
    );
}

// Main parallax section wrapper
export default function ParallaxSection({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`relative ${className}`}>
            {children}
        </div>
    );
}
