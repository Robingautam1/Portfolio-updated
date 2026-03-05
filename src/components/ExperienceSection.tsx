"use client";

import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] as const } },
};

const experiences = [
    {
        date: "CURRENT",
        role: "MBA Candidate",
        org: "IIM Rohtak",
        problem: "Most MBA students focus on academics or activities in isolation.",
        solution: "Running personal projects and committee responsibilities alongside coursework.",
        outcome: "Junior Coordinator, IT Committee. Tech talks, Power BI and Python workshops, monthly industry newsletter.",
    },
    {
        date: "2023–25",
        role: "President — E-Cell",
        org: "DSEU Dwarka",
        problem: "The society ran events but lacked brand visibility and external pipelines.",
        solution: "Built structured brand partnerships and focused on institutional relationships over one-off events.",
        outcome: "Led 30-member team. 2,200+ students engaged. 6+ brand partnerships. Riwaaz 2.0: 1,500+ attendees.",
    },
    {
        date: "INTERNSHIP · 2025",
        role: "Content & Outreach Intern",
        org: "CorStone",
        problem: "Field-level impact stories needed translating into professional stakeholder reports.",
        solution: "Developed structured content and storytelling frameworks for leadership communication.",
        outcome: "Impact stories presented at leadership level. Measurable uplift in stakeholder NPS metrics.",
    },
    {
        date: "INTERNSHIP · 2024",
        role: "Program Operations & Research Intern",
        org: "Udyogini",
        problem: "NGO program data was scattered across teams with no unified documentation.",
        solution: "Consolidated documents, built impact narratives, and coordinated field operations.",
        outcome: "30+ vendors researched. 10+ impact stories developed. 50+ documents consolidated.",
    },
    {
        date: "INTERNSHIP · 2023",
        role: "Campus Intern",
        org: "StockGro",
        problem: "Campus fintech adoption was low despite high student interest in personal finance.",
        solution: "Ran targeted digital campaigns and built an institutional MoU rather than focusing on downloads alone.",
        outcome: "2,200+ reach via campus campaigns. 1,100+ students onboarded. Formal DSEU–StockGro partnership secured.",
    },
    {
        date: "LIVE PROJECT · 2025",
        role: "Market Research Analyst",
        org: "Finlatics",
        problem: "Client needed clear market positioning across a crowded, multi-industry competitive landscape.",
        solution: "Structured STP analysis across 20+ firms in 5+ industries.",
        outcome: "Segmentation improved by 15%. 500+ survey impressions. CTR raised 12%. Acquisition optimised 10–12%.",
    },
    {
        date: "2022–25",
        role: "Placement Coordinator",
        org: "DSEU Dwarka",
        problem: "Students across multiple batches needed structured, end-to-end placement support.",
        solution: "Coordinated full placement drives, recruiter relationships, and pre-placement preparation.",
        outcome: "Managed placements for 2,000+ students across 3 batches. Expanded recruiter network.",
    },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="bg-[#F7F5F0] py-[120px]">
            <div className="max-w-[1160px] mx-auto px-6 md:px-12">
                {/* ── Section heading ── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={fadeUp}
                    className="mb-8"
                >
                    <span className="label-editorial">EXPERIENCE</span>
                    <h2 className="heading-primary text-[36px] sm:text-[52px] mt-4" style={{ fontFamily: "var(--font-sans)" }}>
                        Where Strategy
                    </h2>
                    <p className="heading-italic text-[34px] sm:text-[48px]" style={{ fontFamily: "var(--font-serif)" }}>
                        Met Execution.
                    </p>
                </motion.div>

                <hr className="divider mb-0" />

                {/* ── Entries ── */}
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-40px" }}
                        variants={fadeUp}
                    >
                        {/* Desktop: 4-column row */}
                        <div className="hidden md:grid grid-cols-[22%_26%_26%_26%] gap-4 py-[52px] border-b border-[#DEDBD4]">
                            {/* Col 1 — Date + Role */}
                            <div>
                                <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#9E9890]" style={{ fontFamily: "var(--font-sans)" }}>
                                    {exp.date}
                                </span>
                                <div className="text-[20px] font-semibold text-[#0D0D0D] mt-2 leading-tight" style={{ fontFamily: "var(--font-sans)" }}>
                                    {exp.role}
                                </div>
                                <div className="text-[16px] italic text-[#6B6560] mt-1" style={{ fontFamily: "var(--font-serif)" }}>
                                    {exp.org}
                                </div>
                            </div>

                            {/* Col 2 — Problem */}
                            <div>
                                <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#9E9890]" style={{ fontFamily: "var(--font-sans)" }}>
                                    THE PROBLEM
                                </span>
                                <p className="text-[14px] font-normal text-[#6B6560] leading-[1.7] mt-[10px]" style={{ fontFamily: "var(--font-sans)" }}>
                                    {exp.problem}
                                </p>
                            </div>

                            {/* Col 3 — Solution */}
                            <div>
                                <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#9E9890]" style={{ fontFamily: "var(--font-sans)" }}>
                                    THE SOLUTION
                                </span>
                                <p className="text-[14px] font-normal text-[#6B6560] leading-[1.7] mt-[10px]" style={{ fontFamily: "var(--font-sans)" }}>
                                    {exp.solution}
                                </p>
                            </div>

                            {/* Col 4 — Outcome */}
                            <div>
                                <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-[#9E9890]" style={{ fontFamily: "var(--font-sans)" }}>
                                    OUTCOME
                                </span>
                                <p className="text-[20px] font-semibold text-[#0D0D0D] leading-[1.4] mt-[10px]" style={{ fontFamily: "var(--font-sans)" }}>
                                    {exp.outcome}
                                </p>
                            </div>
                        </div>

                        {/* Mobile: Role + Outcome only */}
                        <div className="md:hidden py-10 border-b border-[#DEDBD4]">
                            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#9E9890]" style={{ fontFamily: "var(--font-sans)" }}>
                                {exp.date}
                            </span>
                            <div className="text-[18px] font-semibold text-[#0D0D0D] mt-2 leading-tight" style={{ fontFamily: "var(--font-sans)" }}>
                                {exp.role}
                            </div>
                            <div className="text-[15px] italic text-[#6B6560] mt-1" style={{ fontFamily: "var(--font-serif)" }}>
                                {exp.org}
                            </div>
                            <hr className="divider my-4" />
                            <p className="text-[16px] font-semibold text-[#0D0D0D] leading-[1.4]" style={{ fontFamily: "var(--font-sans)" }}>
                                {exp.outcome}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
