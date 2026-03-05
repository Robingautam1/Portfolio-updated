"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const aiTools = [
    {
        name: "Perplexity",
        category: "Market Research",
        description: "Deep-dive competitive analysis and trend discovery.",
        icon: "🔮",
        size: "normal",
    },
    {
        name: "Gemini / ChatGPT",
        category: "Narratives",
        description: "Crafting compelling stories and strategic communication.",
        icon: "✨",
        size: "wide",
    },
    {
        name: "Notion AI",
        category: "Workflows",
        description: "Systematic documentation and knowledge management.",
        icon: "📋",
        size: "normal",
    },
    {
        name: "Gamma",
        category: "Decks",
        description: "High-impact presentations that tell a story.",
        icon: "🎨",
        size: "normal",
    },
    {
        name: "Otter.ai",
        category: "Meeting Intel",
        description: "Never miss an insight from conversations.",
        icon: "🎙️",
        size: "normal",
    },
    {
        name: "Cursor",
        category: "Prototyping",
        description: "Rapid development and iteration on ideas.",
        icon: "⚡",
        size: "wide",
    },
];

function ToolCard({ tool, index }: { tool: typeof aiTools[0]; index: number }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onMouseMove={handleMouseMove}
            className={`relative p-6 bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden group hover:border-[#10b981]/30 transition-colors ${tool.size === "wide" ? "md:col-span-2" : ""
                }`}
        >
            {/* Mouse-tracking glow effect */}
            <div
                className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    width: 300,
                    height: 300,
                    left: mousePosition.x - 150,
                    top: mousePosition.y - 150,
                    background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
                    filter: "blur(40px)",
                }}
            />

            {/* Content */}
            <div className="relative z-10">
                <div className="text-3xl mb-4 grayscale group-hover:grayscale-0 transition-all group-hover:scale-110 inline-block">
                    {tool.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1">{tool.name}</h3>
                <span className="text-[10px] uppercase tracking-widest text-[#71717a] mb-3 block">
                    {tool.category}
                </span>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">{tool.description}</p>
            </div>
        </motion.div>
    );
}

export default function AIArsenalSection() {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={containerRef}
            id="toolkit"
            className="relative py-32 px-6"
            style={{
                background: "linear-gradient(180deg, #080808 0%, #050505 100%)",
            }}
        >
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-block text-xs font-semibold tracking-[2px] uppercase text-[#10b981] mb-4"
                    >
                        Think Faster, Not Replace Thinking
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-serif-display text-[clamp(2rem,4vw,3rem)] mb-4"
                    >
                        AI Arsenal
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-serif-display text-lg italic text-[#a1a1aa] max-w-md mx-auto"
                    >
                        &quot;These tools don&apos;t replace thinking—they amplify it.&quot;
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid md:grid-cols-3 gap-4">
                    {aiTools.map((tool, index) => (
                        <ToolCard key={tool.name} tool={tool} index={index} />
                    ))}
                </div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12 p-6 bg-[#0a0a0a] rounded-2xl border border-white/5"
                >
                    <p className="text-[#a1a1aa]">
                        <strong className="text-white">The Mindset:</strong> AI handles the research grind.{" "}
                        <span className="text-[#10b981]">I focus on judgment calls.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
