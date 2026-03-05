"use client";

import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const } },
};

const columns = [
    {
        label: "RESEARCH & STRATEGY",
        tools: ["Perplexity (Market Scans)", "Academic Frameworks", "AI Narratives"],
    },
    {
        label: "PRODUCT & DEVELOPMENT",
        tools: ["Next.js (Architecture)", "Tailwind (Rapid UI)", "JavaScript (Logic)"],
    },
    {
        label: "SYSTEMS & AUTOMATION",
        tools: ["Notion (Process Design)", "AI Workflows", "Structured Templates"],
    },
];

export default function ToolkitSection() {
    return (
        <section className="bg-[#F7F5F0] py-[60px] md:py-[96px]">
            <div className="max-w-[1160px] mx-auto px-5 md:px-12">
                {/* ── Header row ── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={fadeUp}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-10"
                >
                    <div>
                        <span className="label-editorial">TOOLKIT</span>
                        <h2 className="heading-primary text-[32px] md:text-[48px] mt-4" style={{ fontFamily: "var(--font-sans)" }}>
                            Tools Behind
                        </h2>
                        <p className="heading-italic-accent text-[30px] md:text-[44px]" style={{ fontFamily: "var(--font-serif)" }}>
                            the Systems.
                        </p>
                    </div>
                    <div className="flex items-end">
                        <p className="text-[16px] text-[#6B6560] max-w-[360px] lg:ml-auto" style={{ fontFamily: "var(--font-sans)" }}>
                            I think in terms of workflows, not tools. Each tool is a component
                            inside a larger system.
                        </p>
                    </div>
                </motion.div>

                <hr className="divider" />

                {/* ── Three columns ── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-0"
                >
                    {columns.map((col, ci) => (
                        <motion.div
                            key={ci}
                            variants={fadeUp}
                            className={`${ci > 0 ? "md:border-l border-[#DEDBD4]" : ""} md:px-8 first:md:pl-0 last:md:pr-0 py-8`}
                        >
                            <span className="label-editorial">{col.label}</span>
                            <hr className="divider mt-5" />
                            {col.tools.map((tool, ti) => (
                                <div key={ti}>
                                    <div className="py-[14px] text-[16px] font-normal text-[#0D0D0D]" style={{ fontFamily: "var(--font-sans)" }}>
                                        {tool}
                                    </div>
                                    <hr className="divider" />
                                </div>
                            ))}
                        </motion.div>
                    ))}
                </motion.div>

                {/* ── Closing quote ── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-center mt-[52px]"
                >
                    <p className="text-[20px] italic text-[#9E9890]" style={{ fontFamily: "var(--font-serif)" }}>
                        &ldquo;The goal is always the same: reduce friction between idea and execution.&rdquo;
                    </p>
                    <p
                        className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#BBBB99] mt-2"
                        style={{ fontFamily: "var(--font-sans)" }}
                    >
                        — ROBIN GAUTAM
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
