"use client";

import { motion } from "framer-motion";
import RevealText from "./ui/RevealText";
import MagneticButton from "./ui/MagneticButton";

const LUXURY_EASE = [0.25, 1, 0.5, 1] as const;

/* ---- Animated SVG Illustration for Hero ---- */
function HeroIllustration() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
            {/* Large soft circle — top right */}
            <motion.div
                className="absolute -top-20 -right-32 w-[500px] h-[500px] rounded-full opacity-20"
                style={{ background: "radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)" }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 2, ease: LUXURY_EASE, delay: 0.5 }}
            />

            {/* Geometric cross — mid-left */}
            <motion.svg
                className="absolute top-[30%] left-[8%] w-16 h-16 anim-float"
                viewBox="0 0 60 60"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 0.3, rotate: 0 }}
                transition={{ duration: 1.5, ease: LUXURY_EASE, delay: 0.8 }}
            >
                <rect x="22" y="0" width="16" height="60" rx="2" fill="#1A1A1A" />
                <rect x="0" y="22" width="60" height="16" rx="2" fill="#1A1A1A" />
            </motion.svg>

            {/* Scattered dots — bottom right cluster */}
            <motion.svg
                className="absolute bottom-[15%] right-[12%] w-32 h-32 anim-float-reverse"
                viewBox="0 0 120 120"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.25 }}
                transition={{ duration: 1.2, ease: LUXURY_EASE, delay: 1 }}
            >
                {[
                    [20, 30], [45, 15], [70, 40], [95, 20],
                    [30, 65], [55, 85], [80, 60], [100, 90],
                    [15, 100], [60, 55],
                ].map(([cx, cy], i) => (
                    <circle key={i} cx={cx} cy={cy} r={4} fill="#1A1A1A" />
                ))}
            </motion.svg>

            {/* Wavy line — left bottom */}
            <motion.svg
                className="absolute bottom-[25%] left-[5%] w-48 h-12"
                viewBox="0 0 200 40"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.2 }}
                transition={{ duration: 2, ease: LUXURY_EASE, delay: 1.2 }}
            >
                <motion.path
                    d="M0 20 Q25 0, 50 20 T100 20 T150 20 T200 20"
                    stroke="#1A1A1A"
                    strokeWidth="2.5"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.5, ease: LUXURY_EASE, delay: 1.2 }}
                />
            </motion.svg>

            {/* Hollow ring — center-right */}
            <motion.div
                className="absolute top-[45%] right-[25%] w-24 h-24 rounded-full border-[3px] border-[#1A1A1A]/15 anim-pulse-slow"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: LUXURY_EASE, delay: 0.9 }}
            />

            {/* Small diamond — top left */}
            <motion.svg
                className="absolute top-[15%] left-[15%] w-8 h-8 anim-float"
                viewBox="0 0 30 30"
                initial={{ opacity: 0, rotate: 45 }}
                animate={{ opacity: 0.2, rotate: 45 }}
                transition={{ duration: 1.2, ease: LUXURY_EASE, delay: 1.4 }}
            >
                <rect x="5" y="5" width="20" height="20" fill="#1A1A1A" />
            </motion.svg>

            {/* Arch accent — bottom center */}
            <motion.svg
                className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-40 h-20"
                viewBox="0 0 160 80"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 0.15, y: 0 }}
                transition={{ duration: 1.5, ease: LUXURY_EASE, delay: 1.5 }}
            >
                <path
                    d="M10 70 Q80 -10, 150 70"
                    stroke="#1A1A1A"
                    strokeWidth="3"
                    fill="none"
                />
            </motion.svg>
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col bg-hero overflow-hidden">
            {/* ---- Illustration Layer ---- */}
            <HeroIllustration />

            {/* ---- Top Bar ---- */}
            <motion.nav
                className="relative z-10 flex items-center justify-between px-6 md:px-12 pt-8 md:pt-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: LUXURY_EASE, delay: 0.2 }}
            >
                <span className="text-sm font-bold uppercase tracking-[0.15em]">
                    Robin Gautam
                </span>
                <MagneticButton
                    href="mailto:robingautam@outlook.com"
                    className="text-sm font-medium uppercase tracking-[0.15em] px-6 py-3 border border-fg/20 rounded-full hover:bg-fg hover:text-bg transition-colors duration-500"
                >
                    Menu
                </MagneticButton>
            </motion.nav>

            {/* ---- Central Typography ---- */}
            <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 pb-16">
                <div className="max-w-[1400px] mx-auto w-full">
                    <RevealText
                        text="REAL DIGITAL"
                        as="h1"
                        className="text-[clamp(3rem,14vw,16rem)] font-bold tracking-tighter leading-[0.85]"
                        delay={0.3}
                    />
                    <div className="md:ml-[20%]">
                        <RevealText
                            text="IMPACT."
                            as="h1"
                            className="text-[clamp(3rem,14vw,16rem)] font-bold tracking-tighter leading-[0.85] font-serif italic"
                            delay={0.45}
                        />
                    </div>
                </div>
            </div>

            {/* ---- Bottom Bio ---- */}
            <motion.div
                className="relative z-10 px-6 md:px-12 pb-12 md:pb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: LUXURY_EASE, delay: 0.8 }}
            >
                <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <p className="text-lg md:text-xl leading-relaxed max-w-md">
                            I turn ideas into systems and people into teams.
                        </p>
                        <p className="label-swiss mt-3">
                            MBA @ IIM Rohtak • Ecosystem Builder
                        </p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: LUXURY_EASE, delay: 1.2 }}
                    >
                        <p className="label-swiss">Scroll to explore ↓</p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
