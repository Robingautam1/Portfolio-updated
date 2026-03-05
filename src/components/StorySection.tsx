"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Briefcase, Code2, Zap } from "lucide-react";
import MarkerHighlight from "./MarkerHighlight";

export default function StorySection() {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // SVG path drawing animation
    const pathLength = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

    const cards = [
        {
            side: "left",
            icon: Briefcase,
            title: "The MBA",
            subtitle: "IIM Rohtak",
            description: "Deep-diving into strategy, finance, and organizational behavior. Learning to see the big picture.",
            color: "blue",
            iconBg: "bg-blue-50",
            iconColor: "text-blue-500",
            borderColor: "border-blue-200",
        },
        {
            side: "center",
            icon: Zap,
            title: "The Intersection",
            subtitle: "Where I Thrive",
            description: "Combining strategic thinking with hands-on execution. Building things, not just planning them.",
            color: "purple",
            iconBg: "bg-purple-50",
            iconColor: "text-purple-500",
            borderColor: "border-purple-200",
        },
        {
            side: "right",
            icon: Code2,
            title: "The Coder",
            subtitle: "Next.js • React • AI",
            description: "Prototyping ideas fast. Turning concepts into working products before the competition wakes up.",
            color: "emerald",
            iconBg: "bg-emerald-50",
            iconColor: "text-emerald-500",
            borderColor: "border-emerald-200",
        },
    ];

    return (
        <section
            ref={containerRef}
            className="relative py-32 px-6 bg-zinc-50/50"
        >
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-block text-sm font-semibold tracking-widest uppercase text-blue-600 mb-4"
                    >
                        The Journey
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-zinc-900 mb-6"
                    >
                        Where <MarkerHighlight>Strategy</MarkerHighlight> Meets{" "}
                        <MarkerHighlight delay={0.3}>Execution</MarkerHighlight>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-zinc-600 max-w-2xl mx-auto"
                    >
                        I don&apos;t just plan things—I build them. Here&apos;s how the pieces fit together.
                    </motion.p>
                </div>

                {/* The Winding Path */}
                <div className="relative">
                    {/* SVG Path */}
                    <svg
                        className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2"
                        viewBox="0 0 2 100"
                        preserveAspectRatio="none"
                    >
                        <motion.path
                            d="M1 0 L1 100"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            style={{ pathLength }}
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#3B82F6" />
                                <stop offset="50%" stopColor="#8B5CF6" />
                                <stop offset="100%" stopColor="#10B981" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Cards */}
                    <div className="relative space-y-24">
                        {cards.map((card, index) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex ${card.side === "left"
                                        ? "justify-start"
                                        : card.side === "right"
                                            ? "justify-end"
                                            : "justify-center"
                                    }`}
                            >
                                <div
                                    className={`relative w-full max-w-md p-8 card-squircle ${card.borderColor} hover:shadow-xl transition-all duration-300`}
                                >
                                    {/* Connection dot */}
                                    <div
                                        className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 ${card.borderColor} ${card.side === "left"
                                                ? "-right-8"
                                                : card.side === "right"
                                                    ? "-left-8"
                                                    : "hidden"
                                            }`}
                                    />

                                    {/* Icon */}
                                    <div
                                        className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center mb-4`}
                                    >
                                        <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-zinc-900 mb-1">
                                        {card.title}
                                    </h3>
                                    <span className={`text-sm font-medium ${card.iconColor} mb-3 block`}>
                                        {card.subtitle}
                                    </span>
                                    <p className="text-zinc-600 leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
