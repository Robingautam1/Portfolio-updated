"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const anim = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease },
    viewport: { once: true, margin: "-10%" },
};

interface ProjectCardProps {
    index: string;
    title: string;
    description: string;
    tags: string[];
    metric?: string;
    metricLabel?: string;
    gradient: string;
    icon: string;
}

const projects: ProjectCardProps[] = [
    {
        index: "01",
        title: "CashCurious",
        description:
            "Gamifying financial literacy for young adults. Interactive learning modules with real-time market simulations and AI-driven personalized curricula.",
        tags: ["EdTech", "AI", "Next.js"],
        metric: "10K+",
        metricLabel: "Active Learners",
        gradient: "from-emerald-500/15 via-teal-500/8 to-transparent",
        icon: "📈",
    },
    {
        index: "02",
        title: "QuantMaster",
        description:
            "A suite of 25+ JavaScript-powered financial calculators covering SIP, EMI, CAGR, IRR, and more. Built for precision with real-time charting.",
        tags: ["FinTech", "JavaScript", "Data Viz"],
        metric: "25+",
        metricLabel: "Financial Tools",
        gradient: "from-blue-500/15 via-indigo-500/8 to-transparent",
        icon: "🧮",
    },
    {
        index: "03",
        title: "StockGro Campus",
        description:
            "Led the onboarding of 1,300+ students into a virtual trading platform. Built engagement funnels, coordinated campus teams, and drove 60% research-time savings.",
        tags: ["Growth", "Operations", "Strategy"],
        metric: "1,300+",
        metricLabel: "Students Onboarded",
        gradient: "from-violet-500/15 via-purple-500/8 to-transparent",
        icon: "🚀",
    },
];

function ProjectCard({
    index,
    title,
    description,
    tags,
    metric,
    metricLabel,
    gradient,
    icon,
}: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"],
    });

    const parallaxY = useTransform(scrollYProgress, [0, 1], [40, -40]);

    return (
        <motion.div ref={cardRef} {...anim} className="group">
            <div className="border border-border hover:border-fg/15 transition-all duration-500 overflow-hidden">
                {/* Visual Header — Gradient panel with large icon */}
                <div className={`relative h-48 md:h-56 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
                    {/* Grid pattern overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: `
                                linear-gradient(#18181B 1px, transparent 1px),
                                linear-gradient(90deg, #18181B 1px, transparent 1px)
                            `,
                            backgroundSize: "30px 30px",
                        }}
                    />
                    {/* Large icon */}
                    <motion.span
                        className="text-7xl md:text-8xl select-none"
                        style={{ y: parallaxY }}
                    >
                        {icon}
                    </motion.span>
                    {/* Ghost metric */}
                    {metric && (
                        <motion.div
                            style={{ y: parallaxY }}
                            className="absolute bottom-4 right-6 text-right"
                        >
                            <span className="text-5xl md:text-6xl font-bold tracking-tighter text-fg/[0.06]">
                                {metric}
                            </span>
                        </motion.div>
                    )}
                    {/* Index badge */}
                    <span className="absolute top-4 left-6 text-xs font-mono text-fg/30 tracking-widest uppercase">
                        {index}
                    </span>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                    {/* Title row */}
                    <div className="flex items-start justify-between mb-6">
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tighter leading-none">
                            {title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-fg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 mt-1" />
                    </div>

                    {/* Metric label */}
                    {metricLabel && (
                        <p className="text-xs text-muted tracking-widest uppercase mb-4">
                            {metric} {metricLabel}
                        </p>
                    )}

                    {/* Description */}
                    <p className="text-muted text-base leading-relaxed max-w-2xl mb-8">
                        {description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-4 py-1.5 border border-border text-xs font-medium tracking-wider uppercase text-muted"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section className="py-32 md:py-40">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-16">
                    {/* Left — Sticky Title */}
                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-40">
                            <motion.div {...anim}>
                                <p className="text-sm text-muted tracking-[0.2em] uppercase mb-4">
                                    Work
                                </p>
                                <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-none">
                                    Selected
                                    <br />
                                    <span className="font-serif italic font-normal">Work.</span>
                                </h2>
                                <p className="text-muted mt-8 max-w-xs leading-relaxed">
                                    Projects at the intersection of strategy, code, and human-centered
                                    design.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right — Scrolling Cards */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.index} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
