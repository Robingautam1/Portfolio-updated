"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ImmersiveHero() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Smooth spring for all transforms
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Hero text animations
    const titleY = useTransform(smoothProgress, [0, 0.5], [0, -150]);
    const titleScale = useTransform(smoothProgress, [0, 0.3], [1, 0.8]);
    const titleOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);

    // Background gradient rotation
    const gradientRotate = useTransform(smoothProgress, [0, 1], [0, 180]);

    // Subtitle reveal
    const subtitleY = useTransform(smoothProgress, [0, 0.3], [0, -50]);
    const subtitleOpacity = useTransform(smoothProgress, [0.1, 0.4], [1, 0]);

    // Stats slide in
    const statsOpacity = useTransform(smoothProgress, [0.15, 0.35], [1, 0]);
    const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="section-pinned bg-void"
        >
            {/* Sticky Container */}
            <div className="section-sticky flex flex-col justify-center items-center px-6">

                {/* Animated Gradient Background */}
                <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: "conic-gradient(from 0deg at 50% 50%, #6366F1, #8B5CF6, #06B6D4, #6366F1)",
                        filter: "blur(120px)",
                        rotate: gradientRotate,
                    }}
                />

                {/* Grid Lines Background */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Main Content */}
                <div className="relative z-10 text-center max-w-6xl mx-auto">

                    {/* Pre-title Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="mb-8"
                    >
                        <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-secondary">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Open to Summer 2026 Internships
                        </span>
                    </motion.div>

                    {/* Main Title - Massive Typography */}
                    <motion.h1
                        style={{ y: titleY, scale: titleScale, opacity: titleOpacity }}
                        className="font-display text-massive text-hero mb-6"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="block"
                        >
                            I Build
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="block text-gradient-animated"
                        >
                            Systems
                        </motion.span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        style={{ y: subtitleY, opacity: subtitleOpacity }}
                        className="text-body-lg text-secondary max-w-2xl mx-auto mb-12"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        >
                            MBA @ <span className="text-hero font-medium">IIM Rohtak</span> • Developer • Strategist
                        </motion.span>
                    </motion.p>

                    {/* Stats Row */}
                    <motion.div
                        style={{ opacity: statsOpacity }}
                        className="flex justify-center gap-12 md:gap-20"
                    >
                        {[
                            { value: "1,300+", label: "Students Reached" },
                            { value: "25+", label: "Tools Built" },
                            { value: "60%", label: "Time Saved" },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 + i * 0.15, duration: 0.8 }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-hero font-mono mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-xs uppercase tracking-widest text-muted">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll Indicator - Integrated */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    style={{ opacity: scrollIndicatorOpacity }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                >
                    <span className="text-xs uppercase tracking-widest text-muted">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-2"
                    >
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1 h-1 rounded-full bg-white/40"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
