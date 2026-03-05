"use client";

import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as const } },
};

const sideLinks = [
    { label: "LinkedIn ↗", href: "#" },
    { label: "Resume ↗", href: "#" },
    { label: "robingautam.in ↗", href: "https://robingautam.in/" },
];

export default function ContactFooter() {
    return (
        <section id="contact" className="bg-[#F7F5F0] pt-[60px] md:pt-[96px] pb-0">
            <div className="max-w-[1160px] mx-auto px-5 md:px-12">
                {/* ── Contact area ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16">
                    {/* Left */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                    >
                        <motion.span variants={fadeUp} className="label-editorial block mb-4">
                            CONTACT
                        </motion.span>
                        <motion.h2
                            variants={fadeUp}
                            className="heading-primary text-[32px] md:text-[48px]"
                            style={{ fontFamily: "var(--font-sans)" }}
                        >
                            Open to
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="heading-italic text-[30px] md:text-[44px]"
                            style={{ fontFamily: "var(--font-serif)" }}
                        >
                            the Right Opportunity.
                        </motion.p>
                        <motion.p
                            variants={fadeUp}
                            className="text-[16px] text-[#6B6560] leading-[1.8] max-w-[440px] mt-6"
                            style={{ fontFamily: "var(--font-sans)" }}
                        >
                            I&rsquo;m actively looking for internships and full-time roles in
                            product, growth, strategy, or consulting. If you&rsquo;re hiring or
                            know someone who is — I&rsquo;d love to connect.
                        </motion.p>
                        <motion.div variants={fadeUp} className="mt-8">
                            <a
                                href="mailto:robin@robingautam.in"
                                className="inline-block bg-[#0D0D0D] text-[#F7F5F0] text-[13px] font-medium uppercase tracking-[0.1em] rounded-[4px] px-8 py-[14px] no-underline hover:bg-[#2A2A2A] transition-colors"
                                style={{ fontFamily: "var(--font-sans)" }}
                            >
                                GET IN TOUCH
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right — Links */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
                        className="flex flex-col items-start lg:items-end justify-center gap-5"
                    >
                        {sideLinks.map((link) => (
                            <motion.a
                                key={link.label}
                                variants={fadeUp}
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="text-[22px] italic text-[#0D0D0D] no-underline hover:underline hover:underline-offset-[3px] hover:decoration-[#4A4A2A] transition-colors"
                                style={{ fontFamily: "var(--font-serif)" }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* ── Footer bar ── */}
                <div className="border-t border-[#DEDBD4] mt-[60px] md:mt-[96px] py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 text-center sm:text-left">
                        <span
                            className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#9E9890]"
                            style={{ fontFamily: "var(--font-sans)" }}
                        >
                            BASED IN INDIA. WORKING GLOBALLY.
                        </span>
                        <a
                            href="mailto:robin@robingautam.in"
                            className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#9E9890] no-underline hover:text-[#4A4A2A] transition-colors sm:text-center block"
                            style={{ fontFamily: "var(--font-sans)" }}
                        >
                            robin@robingautam.in
                        </a>
                        <span
                            className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#9E9890] sm:text-right"
                            style={{ fontFamily: "var(--font-sans)" }}
                        >
                            © 2026 ROBIN GAUTAM
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
