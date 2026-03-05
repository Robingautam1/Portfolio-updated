"use client";

import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const } },
};

const projects = [
    {
        type: "PERSONAL PROJECT · BUILT INDEPENDENTLY",
        name: "CashCurious",
        descriptor: "Gamified financial literacy platform",
        description:
            "Financial education is important but often inaccessible. CashCurious makes learning finance feel interactive through simulations and bite-sized modules.",
        features: [
            "Interactive compounding simulations",
            "Bite-sized learning modules",
            "Zero-friction onboarding",
        ],
        tools: "NEXT.JS · TAILWIND · GAMIFICATION DESIGN",
        link: "#",
        linkLabel: "View Project →",
        cardBg: "#DEDBD4",
        cardContent: null,
    },
    {
        type: "PERSONAL PROJECT · PEER RESOURCE",
        name: "QuantMaster",
        descriptor: "25+ financial calculators for students",
        description:
            "Students were spending more time fighting calculators than understanding concepts. QuantMaster is a suite of finance-specific tools built for real academic and professional use.",
        features: [
            "25+ calculators (NPV, IRR, statistics)",
            "Context-aware interfaces",
            "Finance-specific inputs",
        ],
        tools: "NEXT.JS · JAVASCRIPT · FINANCIAL MODELLING",
        link: "#",
        linkLabel: "View Project →",
        cardBg: "#DEDBD4",
        cardContent: null,
    },
    {
        type: "LIVE PROJECT · FINLATICS PROGRAMME · 2025",
        name: "Finlatics",
        descriptor: "Market research & segmentation",
        description:
            "Client operating in a crowded market with unclear positioning. Focused on user segmentation and STP analysis to identify a defensible niche.",
        features: [
            "Structured STP analysis",
            "Financial behaviour segmentation",
            "Data-driven positioning",
        ],
        tools: "MARKET RESEARCH · STP ANALYSIS · EXCEL",
        link: "#",
        linkLabel: "View Case Study →",
        cardBg: "#2C2C24",
        cardContent: "finlatics",
    },
];

function FinlaticsCard() {
    return (
        <div
            className="w-full rounded-[4px] flex flex-col items-center justify-center p-10"
            style={{ aspectRatio: "4/3", backgroundColor: "#2C2C24" }}
        >
            <span
                className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#8A8A6A]"
                style={{ fontFamily: "var(--font-sans)" }}
            >
                MARKET RESEARCH · STP ANALYSIS
            </span>
            <h3
                className="text-[42px] sm:text-[52px] italic text-[#F7F5F0] mt-5"
                style={{ fontFamily: "var(--font-serif)", fontWeight: 400 }}
            >
                Finlatics
            </h3>
            <div className="mt-8 space-y-2 w-full max-w-[280px]">
                {[
                    ["Segments Identified", "3 core clusters"],
                    ["Positioning Gap", "High (underserved)"],
                    ["Recommended Channel", "D2C + Referral"],
                ].map(([label, value], i) => (
                    <div key={i} className="flex items-center justify-between">
                        <span className="text-[12px] text-[#9E9890]" style={{ fontFamily: "var(--font-sans)" }}>{label}</span>
                        <span className="flex-1 mx-2 border-b border-dotted border-[#6B6560]/30" />
                        <span className="text-[12px] text-[#F7F5F0]" style={{ fontFamily: "var(--font-sans)" }}>{value}</span>
                    </div>
                ))}
            </div>
            <span
                className="mt-6 text-[10px] font-medium uppercase tracking-[0.1em] text-[#8A8A6A] border border-[#8A8A6A] rounded-full px-3 py-1"
                style={{ fontFamily: "var(--font-sans)" }}
            >
                CONSULTING PROJECT
            </span>
        </div>
    );
}

function PlaceholderCard({ bg }: { bg: string }) {
    return (
        <div
            className="w-full rounded-[4px] flex items-center justify-center"
            style={{ aspectRatio: "4/3", backgroundColor: bg }}
        >
            <span
                className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#9E9890]"
                style={{ fontFamily: "var(--font-sans)" }}
            >
                PREVIEW COMING SOON
            </span>
        </div>
    );
}

function ProjectText({
    project,
}: {
    project: (typeof projects)[0];
}) {
    return (
        <div className="flex flex-col justify-center">
            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#9E9890]" style={{ fontFamily: "var(--font-sans)" }}>
                {project.type}
            </span>
            <h3 className="text-[28px] font-bold text-[#0D0D0D] mt-3" style={{ fontFamily: "var(--font-sans)" }}>
                {project.name}
            </h3>
            <p className="text-[18px] italic text-[#6B6560] mt-1" style={{ fontFamily: "var(--font-serif)" }}>
                {project.descriptor}
            </p>
            <p className="text-[15px] font-normal text-[#6B6560] leading-[1.75] mt-5" style={{ fontFamily: "var(--font-sans)" }}>
                {project.description}
            </p>
            <div className="mt-5 space-y-1">
                {project.features.map((f, i) => (
                    <p key={i} className="text-[13px] text-[#6B6560]" style={{ fontFamily: "var(--font-sans)" }}>
                        — {f}
                    </p>
                ))}
            </div>
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#9E9890] mt-5" style={{ fontFamily: "var(--font-sans)" }}>
                TOOLS: {project.tools}
            </p>
            <a
                href={project.link}
                className="text-[13px] font-medium text-[#0D0D0D] underline underline-offset-[3px] mt-5 inline-block hover:text-[#4A4A2A] transition-colors"
                style={{ fontFamily: "var(--font-sans)" }}
            >
                {project.linkLabel}
            </a>
        </div>
    );
}

export default function WorkSection() {
    return (
        <section id="work" className="bg-[#EDEAE3] py-[120px]">
            <div className="max-w-[1160px] mx-auto px-6 md:px-12">
                {/* ── Heading ── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={fadeUp}
                    className="mb-4"
                >
                    <span className="label-editorial">PERSONAL PROJECTS</span>
                    <h2 className="heading-primary text-[36px] sm:text-[52px] mt-4" style={{ fontFamily: "var(--font-sans)" }}>
                        Things I Built
                    </h2>
                    <p className="heading-italic text-[34px] sm:text-[48px]" style={{ fontFamily: "var(--font-serif)" }}>
                        on the Side.
                    </p>
                    <p className="text-[15px] text-[#6B6560] mt-4" style={{ fontFamily: "var(--font-sans)" }}>
                        Independent projects built outside of internships and coursework.
                    </p>
                </motion.div>

                <hr className="divider my-12" />

                {/* ── Project rows ── */}
                {projects.map((project, i) => {
                    const isReversed = i % 2 === 1;
                    const visual =
                        project.cardContent === "finlatics" ? (
                            <FinlaticsCard />
                        ) : (
                            <PlaceholderCard bg={project.cardBg} />
                        );

                    return (
                        <motion.div
                            key={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            variants={fadeUp}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[4%] ${i > 0 ? "mt-20" : ""
                                } ${isReversed ? "lg:direction-rtl" : ""}`}
                        >
                            <div className={`${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                                {visual}
                            </div>
                            <div className={`${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                                <ProjectText project={project} />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
