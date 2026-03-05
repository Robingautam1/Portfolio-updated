"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
    {
        title: "Development",
        color: "#06B6D4",
        skills: [
            { name: "Next.js", level: 90 },
            { name: "React", level: 92 },
            { name: "TypeScript", level: 85 },
            { name: "Python", level: 80 },
            { name: "Node.js", level: 75 },
            { name: "SQL", level: 78 },
        ],
    },
    {
        title: "Strategy",
        color: "#8B5CF6",
        skills: [
            { name: "Market Research", level: 88 },
            { name: "Financial Modeling", level: 85 },
            { name: "Growth Strategy", level: 82 },
            { name: "Business Development", level: 80 },
            { name: "Data Analytics", level: 86 },
        ],
    },
    {
        title: "Tools",
        color: "#10B981",
        skills: [
            { name: "Notion", level: 95 },
            { name: "Figma", level: 78 },
            { name: "n8n / Automation", level: 85 },
            { name: "Git / GitHub", level: 88 },
            { name: "Excel / Sheets", level: 90 },
        ],
    },
];

export default function SkillsSection() {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10%" });

    return (
        <section ref={containerRef} className="relative bg-void py-24 px-6 lg:px-12">
            {/* Background Gradient */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    background: "radial-gradient(ellipse at center, #1A1A1A 0%, #0A0A0A 100%)",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-display font-display text-hero mb-4">
                        What I Bring
                    </h2>
                    <p className="text-secondary text-lg max-w-2xl">
                        The rare blend of technical execution and strategic thinking.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + catIndex * 0.15, duration: 0.8 }}
                            className="card-premium p-6 lg:p-8"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: category.color }}
                                />
                                <h3
                                    className="text-xl font-semibold"
                                    style={{ color: category.color }}
                                >
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skills Bars */}
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.4 + catIndex * 0.1 + skillIndex * 0.05 }}
                                    >
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm text-primary">{skill.name}</span>
                                            <span className="text-xs font-mono text-muted">{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={isInView ? { width: `${skill.level}%` } : {}}
                                                transition={{ delay: 0.6 + catIndex * 0.1 + skillIndex * 0.05, duration: 0.8 }}
                                                className="h-full rounded-full"
                                                style={{ backgroundColor: category.color }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Quote */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="mt-16 text-center"
                >
                    <blockquote className="text-xl text-secondary italic max-w-2xl mx-auto">
                        &ldquo;The best builders understand both the system and the human using it.&rdquo;
                    </blockquote>
                </motion.div>
            </div>
        </section>
    );
}
