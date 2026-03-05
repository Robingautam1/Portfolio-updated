"use client";

import { motion } from "framer-motion";
import { Brain, Code2, TrendingUp, Layers, Zap, Users } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const services = [
    {
        icon: Brain,
        title: "AI Strategy",
        description: "Building intelligent systems that automate workflows and unlock new revenue streams.",
        accent: "from-violet-500/20 to-purple-600/5",
    },
    {
        icon: Code2,
        title: "Full-Stack Dev",
        description: "Pixel-perfect Next.js applications with modern tooling and premium interactions.",
        accent: "from-blue-500/20 to-cyan-500/5",
    },
    {
        icon: TrendingUp,
        title: "Financial Modeling",
        description: "25+ calculators, simulations, and data-driven tools for fintech products.",
        accent: "from-emerald-500/20 to-green-500/5",
    },
    {
        icon: Layers,
        title: "System Design",
        description: "Architecting scalable platforms — from database to deployment.",
        accent: "from-amber-500/20 to-orange-500/5",
    },
    {
        icon: Zap,
        title: "Automation",
        description: "n8n workflows, API integrations, and intelligent process automation.",
        accent: "from-rose-500/20 to-pink-500/5",
    },
    {
        icon: Users,
        title: "Growth Ops",
        description: "Campus campaigns, onboarding funnels, and engagement systems at scale.",
        accent: "from-sky-500/20 to-blue-500/5",
    },
];

export default function Services() {
    return (
        <section className="py-32 md:py-40">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease }}
                    viewport={{ once: true, margin: "-10%" }}
                    className="mb-20"
                >
                    <p className="text-sm text-muted tracking-[0.2em] uppercase mb-4">
                        What I Build
                    </p>
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-none">
                        Core
                        <br />
                        <span className="font-serif italic font-normal">Capabilities.</span>
                    </h2>
                </motion.div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease, delay: i * 0.08 }}
                                viewport={{ once: true, margin: "-5%" }}
                                className="group relative border border-border p-8 md:p-10 hover:border-fg/20 transition-all duration-500 overflow-hidden"
                            >
                                {/* Gradient background on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-fg/20 mb-8 transition-colors duration-500">
                                        <Icon className="w-5 h-5 text-muted group-hover:text-fg transition-colors duration-500" strokeWidth={1.5} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold tracking-tight mb-3">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-muted text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
