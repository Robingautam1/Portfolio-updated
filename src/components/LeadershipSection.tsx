"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Briefcase, Monitor } from "lucide-react";

const leadershipRoles = [
    {
        title: "E-Cell DSEU",
        role: "President",
        icon: Users,
        description: "Led a 30-member team and reached 2,100+ students through entrepreneurship initiatives, workshops, and startup mentorship programs.",
        metric: "2,100+",
        metricLabel: "Students Reached",
    },
    {
        title: "Placement Cell",
        role: "Coordinator",
        icon: Briefcase,
        description: "Facilitated placements and career guidance for 2,000+ students, coordinating between recruiters and candidates.",
        metric: "2,000+",
        metricLabel: "Students Placed",
    },
    {
        title: "IT Committee",
        role: "Head",
        icon: Monitor,
        description: "Managed technical infrastructure and led digital transformation initiatives across campus operations.",
    },
];

export default function LeadershipSection() {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={containerRef}
            id="leadership"
            className="relative py-32 px-6"
            style={{
                background: "linear-gradient(180deg, #050505 0%, #080808 100%)",
            }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-block text-xs font-semibold tracking-[2px] uppercase text-[#10b981] mb-4"
                    >
                        Beyond the Resume
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-serif-display text-[clamp(2rem,4vw,3rem)]"
                    >
                        Leadership & Community
                    </motion.h2>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {leadershipRoles.map((role, index) => (
                        <motion.div
                            key={role.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass-card p-8 text-center hover:border-white/20 transition-all duration-300 group"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <role.icon className="w-6 h-6 text-[#10b981]" />
                            </div>

                            {/* Title & Role */}
                            <h3 className="text-xl font-serif-display mb-1">{role.title}</h3>
                            <span className="text-sm text-[#10b981] font-medium">{role.role}</span>

                            {/* Description */}
                            <p className="text-sm text-[#a1a1aa] mt-4 leading-relaxed">
                                {role.description}
                            </p>

                            {/* Metric */}
                            {role.metric && (
                                <div className="mt-6 pt-4 border-t border-white/5">
                                    <div className="text-2xl font-bold font-mono-data text-[#10b981]">
                                        {role.metric}
                                    </div>
                                    <div className="text-xs text-[#71717a] uppercase tracking-wider">
                                        {role.metricLabel}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
