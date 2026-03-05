"use client";

import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const } },
};

export default function AboutSection() {
    return (
        <section id="about" className="bg-[#EDEAE3] py-[120px] md:py-[120px]">
            <div className="max-w-[1160px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-12 lg:gap-16">
                    {/* ── Left — Heading ── */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeUp}
                    >
                        <span className="label-editorial">ABOUT</span>
                        <h2
                            className="heading-primary text-[36px] sm:text-[48px] mt-4"
                            style={{ fontFamily: "var(--font-sans)" }}
                        >
                            Background &
                        </h2>
                        <p
                            className="heading-italic text-[32px] sm:text-[44px]"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            What I&rsquo;m Looking For.
                        </p>
                    </motion.div>

                    {/* ── Right — Body ── */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                        className="max-w-[580px]"
                    >
                        <motion.p
                            variants={fadeUp}
                            className="text-[17px] font-normal text-[#6B6560] leading-[1.85] mb-6"
                            style={{ fontFamily: "var(--font-sans)" }}
                        >
                            I completed my BBA in Banking, Financial Services & Insurance from
                            DSEU, where I led the Entrepreneurship Cell, coordinated placements
                            for over 2,000 students, and developed a genuine interest in how
                            organisations actually get things done — not just how they plan to.
                        </motion.p>

                        <motion.p
                            variants={fadeUp}
                            className="text-[17px] font-normal text-[#6B6560] leading-[1.85] mb-6"
                            style={{ fontFamily: "var(--font-sans)" }}
                        >
                            During those years I also started building things on the side —
                            financial literacy tools, market research projects, a few automation
                            systems. Not to become a developer, but to understand what execution
                            actually feels like from the inside.
                        </motion.p>

                        <motion.p
                            variants={fadeUp}
                            className="text-[17px] font-normal text-[#6B6560] leading-[1.85] mb-6"
                            style={{ fontFamily: "var(--font-sans)" }}
                        >
                            I&rsquo;m now in the MBA programme at IIM Rohtak. I&rsquo;m actively
                            looking for roles in product management, growth, strategy, or
                            consulting — environments where analytical thinking and practical
                            execution both matter.
                        </motion.p>

                        {/* ── Credential tags ── */}
                        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3 mt-6">
                            <span
                                className="inline-block bg-[#0D0D0D] text-[#F7F5F0] text-[11px] font-medium uppercase tracking-[0.1em] rounded-[4px] px-4 py-2"
                                style={{ fontFamily: "var(--font-sans)" }}
                            >
                                IIM ROHTAK · MBA 2025–27
                            </span>
                            <span
                                className="inline-block border border-[#4A4A2A] text-[#4A4A2A] text-[11px] font-medium uppercase tracking-[0.1em] rounded-[4px] px-4 py-2"
                                style={{ fontFamily: "var(--font-sans)" }}
                            >
                                BBA (BFSI) · DSEU · 77%
                            </span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
