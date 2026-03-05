"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const LUXURY_EASE = [0.25, 1, 0.5, 1] as const;

interface Project {
    id: string;
    title: string;
    subtitle: string;
    tag: string;
    tagColor: string;
    bgColor: string;
    description: string;
    icon: React.ReactNode;
}

/* -- project card illustrations (editorial SVGs) -- */
const CashCuriousIcon = () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
        <rect x="15" y="30" width="90" height="60" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="60" cy="60" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="60" y="66" textAnchor="middle" fontSize="16" fontWeight="bold" fill="currentColor">₹</text>
        <line x1="30" y1="45" x2="40" y2="45" stroke="currentColor" strokeWidth="2" />
        <line x1="80" y1="75" x2="90" y2="75" stroke="currentColor" strokeWidth="2" />
        <path d="M15 95 L45 85 L75 90 L105 80" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
    </svg>
);

const QuantMasterIcon = () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
        <rect x="20" y="15" width="80" height="90" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <line x1="20" y1="35" x2="100" y2="35" stroke="currentColor" strokeWidth="1.5" />
        <text x="60" y="28" textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.6">CALC</text>
        <text x="60" y="60" textAnchor="middle" fontSize="22" fontWeight="bold" fill="currentColor">25+</text>
        <rect x="30" y="72" width="15" height="12" rx="2" fill="currentColor" opacity="0.15" />
        <rect x="52" y="72" width="15" height="12" rx="2" fill="currentColor" opacity="0.15" />
        <rect x="74" y="72" width="15" height="12" rx="2" fill="currentColor" opacity="0.15" />
        <rect x="30" y="88" width="15" height="12" rx="2" fill="currentColor" opacity="0.15" />
        <rect x="52" y="88" width="59" height="12" rx="2" fill="currentColor" opacity="0.25" />
    </svg>
);

const StockGroIcon = () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
        <path d="M15 90 L35 70 L55 78 L75 45 L95 55 L110 30" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="35" cy="70" r="3" fill="currentColor" />
        <circle cx="55" cy="78" r="3" fill="currentColor" />
        <circle cx="75" cy="45" r="3" fill="currentColor" />
        <circle cx="95" cy="55" r="3" fill="currentColor" />
        <circle cx="110" cy="30" r="3" fill="currentColor" />
        {/* People silhouettes */}
        <circle cx="30" cy="100" r="4" fill="currentColor" opacity="0.3" />
        <circle cx="45" cy="100" r="4" fill="currentColor" opacity="0.3" />
        <circle cx="60" cy="100" r="4" fill="currentColor" opacity="0.3" />
        <text x="75" y="105" fontSize="10" fill="currentColor" opacity="0.4">1.3K+</text>
    </svg>
);

const FinlaticsIcon = () => (
    <svg viewBox="0 0 120 120" className="w-full h-full">
        <circle cx="60" cy="60" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M60 20 A40 40 0 0 1 95 78" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.8" />
        <text x="60" y="56" textAnchor="middle" fontSize="11" fill="currentColor" opacity="0.5">STP</text>
        <text x="60" y="72" textAnchor="middle" fontSize="16" fontWeight="bold" fill="currentColor">+15%</text>
        <line x1="60" y1="60" x2="85" y2="40" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    </svg>
);

const projects: Project[] = [
    {
        id: "cashcurious",
        title: "CashCurious",
        subtitle: "Gamified Financial Literacy.",
        tag: "EdTech",
        tagColor: "text-emerald-700",
        bgColor: "bg-card-edtech",
        description:
            "A gamified platform making financial literacy accessible and fun for young adults. Built with Next.js and interactive data visualizations.",
        icon: <CashCuriousIcon />,
    },
    {
        id: "quantmaster",
        title: "QuantMaster",
        subtitle: "25+ JS Calculators.",
        tag: "FinTech",
        tagColor: "text-blue-700",
        bgColor: "bg-card-fintech",
        description:
            "A comprehensive suite of 25+ financial calculators built with vanilla JavaScript. From SIP to EMI, compound interest to retirement planning.",
        icon: <QuantMasterIcon />,
    },
    {
        id: "stockgro",
        title: "StockGro",
        subtitle: "1,300+ Students Onboarded.",
        tag: "Growth",
        tagColor: "text-amber-700",
        bgColor: "bg-card-growth",
        description:
            "Led the campus ambassador program scaling to 1,300+ active student traders. Designed the onboarding funnel and engagement loops.",
        icon: <StockGroIcon />,
    },
    {
        id: "finlatics",
        title: "Finlatics",
        subtitle: "15% STP Improvement.",
        tag: "Analytics",
        tagColor: "text-purple-700",
        bgColor: "bg-card-analytics",
        description:
            "Optimized straight-through processing rates by 15% through data-driven process re-engineering and analytics dashboards.",
        icon: <FinlaticsIcon />,
    },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity }}
            className="group"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: LUXURY_EASE, delay: 0.1 }}
                className={`${project.bgColor} rounded-2xl p-8 md:p-12 transition-all duration-700 hover:shadow-xl`}
            >
                {/* Tag */}
                <div className="flex items-center justify-between mb-8">
                    <span className="label-swiss">{String(index + 1).padStart(2, "0")}</span>
                    <span className={`label-swiss ${project.tagColor}`}>{project.tag}</span>
                </div>

                {/* Illustration */}
                <motion.div
                    style={{ y }}
                    className="w-24 h-24 md:w-32 md:h-32 mb-8 text-fg/70"
                >
                    {project.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-2">
                    {project.title}
                </h3>
                <p className="text-xl md:text-2xl font-light text-fg/70 mb-6">
                    {project.subtitle}
                </p>
                <p className="text-sm md:text-base text-muted leading-relaxed max-w-lg">
                    {project.description}
                </p>

                {/* Arrow link */}
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider group-hover:gap-3 transition-all duration-500">
                    View project
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Methodology() {
    const [, setActiveProject] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="section-transition py-32 md:py-40 px-6 md:px-12">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
                    {/* ----- Sticky Left Column ----- */}
                    <div className="md:col-span-4 lg:col-span-3">
                        <div className="md:sticky md:top-32">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: LUXURY_EASE }}
                            >
                                <p className="label-swiss mb-4">What I&apos;ve Built</p>
                                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] mb-6">
                                    Selected{" "}
                                    <span className="font-serif italic font-normal">Work.</span>
                                </h2>
                                <p className="text-muted text-base leading-relaxed max-w-xs">
                                    Stories, not just code. Each project represents a system
                                    designed to create real, measurable impact.
                                </p>
                            </motion.div>

                            {/* ---- Project Index ---- */}
                            <div className="hidden md:block mt-12 space-y-3">
                                {projects.map((p, i) => (
                                    <button
                                        key={p.id}
                                        onClick={() => {
                                            setActiveProject(i);
                                            document
                                                .getElementById(`project-${p.id}`)
                                                ?.scrollIntoView({ behavior: "smooth" });
                                        }}
                                        className="block text-left text-sm text-muted hover:text-fg transition-colors duration-300"
                                    >
                                        <span className="label-swiss mr-2">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        {p.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ----- Scrollable Right Column ----- */}
                    <div
                        ref={containerRef}
                        className="md:col-span-8 lg:col-span-9 space-y-16 md:space-y-24 lg:space-y-32"
                    >
                        {projects.map((project, index) => (
                            <div key={project.id} id={`project-${project.id}`}>
                                <ProjectCard project={project} index={index} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
