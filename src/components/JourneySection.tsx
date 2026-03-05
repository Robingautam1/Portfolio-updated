"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Briefcase, Code2, GraduationCap, TrendingUp, Users } from "lucide-react";

const timeline = [
    {
        year: "2024-26",
        title: "MBA @ IIM Rohtak",
        description: "Specializing in Strategy & Finance. Building the bridge between business thinking and technical execution.",
        icon: GraduationCap,
        color: "#6366F1",
        metrics: ["Top 1% B-School", "Strategic Management"],
    },
    {
        year: "2024",
        title: "StockGro Campus Lead",
        description: "Onboarded 1,300+ students through strategic partnerships and targeted campus campaigns.",
        icon: TrendingUp,
        color: "#10B981",
        metrics: ["1,300+ Users", "MoU Strategy"],
    },
    {
        year: "2023",
        title: "Finlatics Analyst",
        description: "Improved STP by 15% and CTR by 12% through data-driven market research and growth strategies.",
        icon: Briefcase,
        color: "#F59E0B",
        metrics: ["+15% STP", "+12% CTR"],
    },
    {
        year: "2022-24",
        title: "Leadership Roles",
        description: "E-Cell Coordinator, Placement Cell Lead, IT Committee Head — building ecosystems from the ground up.",
        icon: Users,
        color: "#EC4899",
        metrics: ["3 Key Roles", "1000+ Impact"],
    },
    {
        year: "Ongoing",
        title: "Developer & Builder",
        description: "25+ financial calculators, CashCurious platform, QuantMaster tools — turning ideas into working products.",
        icon: Code2,
        color: "#06B6D4",
        metrics: ["25+ Tools", "Next.js Expert"],
    },
];

export default function JourneySection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

    // Horizontal scroll transform
    const x = useTransform(smoothProgress, [0.1, 0.9], ["0%", `-${(timeline.length - 1) * 100}%`]);

    // Progress bar
    const progressWidth = useTransform(smoothProgress, [0.1, 0.9], ["0%", "100%"]);

    return (
        <section
            ref={containerRef}
            className="relative bg-void"
            style={{ height: `${timeline.length * 100}vh` }}
        >
            {/* Sticky Horizontal Scroll Container */}
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col">

                {/* Header */}
                <div className="flex-shrink-0 px-6 lg:px-12 pt-12 pb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-display font-display text-hero"
                    >
                        The Journey
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-secondary text-lg mt-2"
                    >
                        From classroom to codebase — every step builds on the last.
                    </motion.p>

                    {/* Progress Bar */}
                    <div className="mt-6 h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full rounded-full"
                            style={{
                                width: progressWidth,
                                background: "linear-gradient(90deg, #6366F1, #8B5CF6, #06B6D4)",
                            }}
                        />
                    </div>
                </div>

                {/* Horizontal Cards */}
                <div className="flex-1 flex items-center overflow-hidden">
                    <motion.div
                        style={{ x }}
                        className="flex gap-8 px-6 lg:px-12"
                    >
                        {timeline.map((item, i) => (
                            <motion.div
                                key={item.title}
                                className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] max-w-[600px]"
                            >
                                <div className="h-full card-premium p-8 lg:p-10 flex flex-col">
                                    {/* Year Badge */}
                                    <div
                                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-mono mb-6 w-fit"
                                        style={{
                                            backgroundColor: `${item.color}20`,
                                            color: item.color,
                                        }}
                                    >
                                        <item.icon className="w-4 h-4" />
                                        {item.year}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-heading text-hero mb-4">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-secondary text-lg leading-relaxed flex-1">
                                        {item.description}
                                    </p>

                                    {/* Metrics */}
                                    <div className="flex gap-4 mt-8">
                                        {item.metrics.map((metric) => (
                                            <div
                                                key={metric}
                                                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10"
                                            >
                                                <span className="text-sm font-medium text-hero">
                                                    {metric}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Visual Accent */}
                                    <div
                                        className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-bl-full"
                                        style={{ backgroundColor: item.color }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Navigation Dots */}
                <div className="flex-shrink-0 flex justify-center gap-3 pb-12">
                    {timeline.map((item, i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 rounded-full transition-colors"
                            style={{
                                backgroundColor: useTransform(
                                    smoothProgress,
                                    [i / timeline.length, (i + 1) / timeline.length],
                                    ["rgba(255,255,255,0.2)", item.color]
                                ),
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
