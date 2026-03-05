"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ExternalLink, Coins, Calculator, TrendingUp, FileCode2, Zap } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "CashCurious",
        tagline: "Financial Literacy, Gamified",
        description: "Teaching Gen-Z financial literacy through interactive quizzes and gamified lessons. Making money talk fun, accessible, and actually engaging.",
        role: "Creator & Developer",
        tech: ["Next.js", "React", "TypeScript"],
        metrics: [
            { label: "Lessons", value: "20+" },
            { label: "Users", value: "500+" },
            { label: "Completion", value: "78%" },
        ],
        url: "https://cash-curious.vercel.app/",
        color: "#10B981",
        bgGradient: "from-emerald-900/40 to-teal-900/40",
        icon: Coins,
    },
    {
        id: 2,
        title: "QuantMaster",
        tagline: "Financial Calculators Suite",
        description: "25+ interactive financial calculators — NPV, IRR, CAPM, and more. Built during exam pressure, now helps thousands make better investment decisions.",
        role: "Creator",
        tech: ["JavaScript", "HTML/CSS", "Finance"],
        metrics: [
            { label: "Calculators", value: "25+" },
            { label: "Downloads", value: "1K+" },
            { label: "Accuracy", value: "100%" },
        ],
        url: "#",
        color: "#3B82F6",
        bgGradient: "from-blue-900/40 to-indigo-900/40",
        icon: Calculator,
    },
    {
        id: 3,
        title: "StockGro Campus",
        tagline: "Campus Growth Engine",
        description: "Led the campus ambassador program, onboarding 1,300+ students through strategic MoUs and targeted campaigns. Turned engagement into action.",
        role: "Campus Lead",
        tech: ["Strategy", "Marketing", "Analytics"],
        metrics: [
            { label: "Students", value: "1,300+" },
            { label: "MoUs", value: "5+" },
            { label: "Growth", value: "340%" },
        ],
        url: "#",
        color: "#F59E0B",
        bgGradient: "from-amber-900/40 to-orange-900/40",
        icon: TrendingUp,
    },
    {
        id: 4,
        title: "Automation Suite",
        tagline: "Research on Autopilot",
        description: "Custom n8n workflows that automated repetitive MBA research tasks. Saved 60% of research time for cohort members by streamlining data collection.",
        role: "Builder",
        tech: ["n8n", "APIs", "Python"],
        metrics: [
            { label: "Time Saved", value: "60%" },
            { label: "Workflows", value: "12+" },
            { label: "Users", value: "50+" },
        ],
        url: "#",
        color: "#8B5CF6",
        bgGradient: "from-purple-900/40 to-violet-900/40",
        icon: Zap,
    },
];

export default function ProjectsSection() {
    return (
        <section className="relative bg-void">
            {/* Header */}
            <div className="sticky top-0 z-20 bg-void/80 backdrop-blur-xl border-b border-white/5 px-6 lg:px-12 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto flex items-center justify-between"
                >
                    <div>
                        <h2 className="text-display font-display text-hero">
                            Selected Work
                        </h2>
                        <p className="text-secondary mt-2">
                            Real projects, real outcomes.
                        </p>
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-sm text-muted">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        {projects.length} Projects
                    </div>
                </motion.div>
            </div>

            {/* Stacked Cards */}
            <div className="relative px-6 lg:px-12 pb-24">
                <div className="max-w-7xl mx-auto space-y-8">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

    return (
        <motion.div
            ref={cardRef}
            style={{ scale, opacity }}
            className={`stacked-card bg-gradient-to-br ${project.bgGradient} border border-white/10`}
        >
            <div className="h-full p-8 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-16">
                {/* Left: Content */}
                <div className="flex-1 flex flex-col justify-center">
                    {/* Icon & Tag */}
                    <div className="flex items-center gap-4 mb-6">
                        <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center"
                            style={{ backgroundColor: `${project.color}20` }}
                        >
                            <project.icon className="w-7 h-7" style={{ color: project.color }} />
                        </div>
                        <span className="text-sm font-mono text-muted uppercase tracking-wider">
                            {project.role}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl lg:text-5xl font-display font-bold text-hero mb-2">
                        {project.title}
                    </h3>
                    <p
                        className="text-xl font-medium mb-6"
                        style={{ color: project.color }}
                    >
                        {project.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-secondary text-lg leading-relaxed mb-8 max-w-xl">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-sm rounded-full border border-white/10 text-secondary bg-white/5"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    {project.url !== "#" && (
                        <motion.a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 4 }}
                            className="inline-flex items-center gap-2 text-hero font-medium group"
                        >
                            View Project
                            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </motion.a>
                    )}
                </div>

                {/* Right: Metrics Grid */}
                <div className="lg:w-80 flex flex-row lg:flex-col gap-4 items-end lg:items-stretch justify-center">
                    {project.metrics.map((metric, i) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="flex-1 lg:flex-none p-6 rounded-2xl bg-black/30 border border-white/5 text-center"
                        >
                            <div
                                className="text-3xl lg:text-4xl font-bold font-mono mb-1"
                                style={{ color: project.color }}
                            >
                                {metric.value}
                            </div>
                            <div className="text-xs uppercase tracking-widest text-muted">
                                {metric.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
