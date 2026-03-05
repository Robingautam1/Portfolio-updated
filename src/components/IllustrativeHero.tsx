"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import LivingCore from "@/components/LivingCore";
import { ArrowDown } from "lucide-react";

export default function IllustrativeHero() {
    const { scrollY } = useScroll();

    // Parallax effects
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const y = useTransform(scrollY, [0, 300], [0, 100]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-paper section-full">
            {/* 3D Wireframe Core (Background Layer) */}
            <div className="absolute inset-0 z-0 opacity-80 mix-blend-multiply">
                <LivingCore />
            </div>

            {/* Typography Layer */}
            <motion.div
                style={{ opacity, y, scale }}
                className="relative z-10 text-center max-w-5xl px-6"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="text-technical text-text-subtle mb-4 block tracking-widest">
                        EST. 2024 • ROBIN GAUTAM
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-display-xl font-bold tracking-tighter text-ink mb-6"
                >
                    Building Digital
                    <br />
                    <span className="text-text-graphite font-light italic">Ecosystems</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-text-subtle text-lg max-w-xl mx-auto leading-relaxed"
                >
                    Bridging the gap between
                    <span className="text-ink font-medium"> Strategy </span>
                    and
                    <span className="text-ink font-medium"> Code</span>.
                </motion.p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-text-subtle to-transparent" />
                <span className="text-xs text-text-subtle uppercase tracking-widest">Scroll</span>
            </motion.div>
        </section>
    );
}
