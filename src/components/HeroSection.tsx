"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ── stat counter hook ── */
function useCountUp(target: number, duration = 1200) {
    const [count, setCount] = useState(0);
    const [triggered, setTriggered] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !triggered) setTriggered(true);
            },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [triggered]);

    useEffect(() => {
        if (!triggered) return;
        const start = performance.now();
        const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [triggered, target, duration]);

    return { count, ref };
}

const stats = [
    { value: 2200, suffix: "+", label: "STUDENTS & PROFESSIONALS REACHED" },
    { value: 25, suffix: "+", label: "FINANCIAL TOOLS BUILT" },
    { value: 2000, suffix: "+", label: "STUDENTS SUPPORTED THROUGH PLACEMENTS" },
    { value: 6, suffix: "+", label: "BRAND PARTNERSHIPS BUILT" },
];

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
    const { count, ref } = useCountUp(value);
    return (
        <div ref={ref} className="py-[52px] text-center">
            <div className="text-[48px] font-extrabold text-[#0D0D0D] leading-none" style={{ fontFamily: "var(--font-sans)" }}>
                {count.toLocaleString()}{suffix}
            </div>
            <div className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#9E9890] mt-2" style={{ fontFamily: "var(--font-sans)" }}>
                {label}
            </div>
        </div>
    );
}

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } },
};

export default function HeroSection() {
    return (
        <section className="bg-[#F7F5F0] pt-[120px] pb-0">
            <div className="max-w-[1160px] mx-auto px-6 md:px-12">
                {/* ── Two-column grid ── */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-12 lg:gap-8 items-start"
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                >
                    {/* ── Left Column ── */}
                    <div>
                        {/* Thin rule with availability text */}
                        <motion.div variants={fadeUp} className="mb-8">
                            <div className="flex items-end justify-between mb-2">
                                <span />
                                <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#9E9890]" style={{ fontFamily: "var(--font-sans)" }}>
                                    AVAILABLE FOR OPPORTUNITIES · 2026
                                </span>
                            </div>
                            <hr className="divider" />
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            variants={fadeUp}
                            className="text-[48px] sm:text-[64px] lg:text-[80px] font-extrabold uppercase leading-none tracking-[-0.02em] text-[#0D0D0D]"
                            style={{ fontFamily: "var(--font-sans)" }}
                        >
                            ROBIN GAUTAM
                        </motion.h1>

                        {/* Descriptor */}
                        <motion.p
                            variants={fadeUp}
                            className="text-[36px] sm:text-[48px] lg:text-[64px] italic text-[#4A4A2A] leading-[1.1] mt-1"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            Strategy, Growth & Product.
                        </motion.p>

                        {/* Body */}
                        <motion.p
                            variants={fadeUp}
                            className="text-[17px] font-normal text-[#6B6560] leading-[1.8] max-w-[460px] mt-9"
                            style={{ fontFamily: "var(--font-sans)" }}
                        >
                            MBA Candidate at IIM Rohtak. Previously led growth, content, and
                            partnerships across internships in fintech, social impact, and media.
                            I work at the intersection of business thinking and hands-on execution.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div variants={fadeUp} className="flex items-center gap-6 mt-7">
                            <a
                                href="#contact"
                                className="inline-block bg-[#0D0D0D] text-[#F7F5F0] text-[13px] font-medium uppercase tracking-[0.1em] rounded-[4px] px-7 py-[14px] no-underline hover:bg-[#2A2A2A] transition-colors"
                                style={{ fontFamily: "var(--font-sans)" }}
                            >
                                GET IN TOUCH
                            </a>
                            <a
                                href="#work"
                                className="text-[13px] font-normal text-[#6B6560] no-underline hover:text-[#4A4A2A] hover:underline hover:underline-offset-[3px] transition-colors"
                                style={{ fontFamily: "var(--font-sans)" }}
                            >
                                See My Work →
                            </a>
                        </motion.div>

                        {/* Sub-link */}
                        <motion.p variants={fadeUp} className="text-[12px] text-[#9E9890] mt-4" style={{ fontFamily: "var(--font-sans)" }}>
                            Also building{" "}
                            <a
                                href="https://robingautam.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-2 hover:text-[#4A4A2A] transition-colors"
                            >
                                robingautam.in ↗
                            </a>
                        </motion.p>
                    </div>

                    {/* ── Right Column — Photo placeholder ── */}
                    <motion.div variants={fadeUp} className="flex justify-center lg:justify-end lg:pt-8">
                        <div
                            className="w-full max-w-[340px] bg-[#E8E4DB] rounded-[4px] flex items-center justify-center"
                            style={{
                                aspectRatio: "2/3",
                                transform: "rotate(2deg)",
                            }}
                        >
                            {/* Dashed inset border */}
                            <div
                                className="w-[calc(100%-24px)] h-[calc(100%-24px)] border border-dashed border-[#CCCAC3] rounded-[2px] flex items-center justify-center"
                            >
                                <span
                                    className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#9E9890]"
                                    style={{ fontFamily: "var(--font-sans)" }}
                                >
                                    PORTRAIT COMING SOON
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* ── Stats bar ── */}
                <div className="mt-16 border-t border-[#DEDBD4]">
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className={`${i > 0 ? "border-t lg:border-t-0 lg:border-l border-[#DEDBD4]" : ""}`}
                            >
                                <StatItem {...stat} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
