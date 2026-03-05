"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";
import RevealText from "./ui/RevealText";

const LUXURY_EASE = [0.25, 1, 0.5, 1] as const;

const links = [
    { label: "LinkedIn", href: "https://linkedin.com/in/robingautam" },
    { label: "GitHub", href: "https://github.com/robingautam" },
    { label: "Resume", href: "#" },
];

export default function Footer() {
    return (
        <footer className="bg-footer text-fg">
            {/* ---- CTA Section ---- */}
            <section className="py-32 md:py-40 px-6 md:px-12">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                        {/* Left — CTA */}
                        <div className="md:col-span-7">
                            <p className="label-swiss mb-6 text-fg/60">Get in touch</p>
                            <RevealText
                                text="Ready when"
                                as="h2"
                                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]"
                                delay={0}
                            />
                            <RevealText
                                text="you are."
                                as="h2"
                                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]"
                                delay={0.12}
                            />

                            <motion.p
                                className="text-base md:text-lg leading-relaxed max-w-md mt-10 text-fg/70"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: LUXURY_EASE, delay: 0.4 }}
                            >
                                Have a project in mind? I&apos;d love to hear what you&apos;re
                                working on. Whether you&apos;re building a product or scaling a
                                team, I&apos;m ready when you are.
                            </motion.p>

                            {/* Big CTA Button */}
                            <motion.div
                                className="mt-12"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: LUXURY_EASE, delay: 0.5 }}
                            >
                                <MagneticButton
                                    href="mailto:robingautam@outlook.com"
                                    className="group inline-flex items-center gap-4 bg-fg text-bg px-10 py-5 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-fg/80 transition-colors duration-500"
                                    strength={0.2}
                                >
                                    Email Robin
                                    <ArrowUpRight
                                        className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                        strokeWidth={1.5}
                                    />
                                </MagneticButton>
                            </motion.div>
                        </div>

                        {/* Right — Links */}
                        <div className="md:col-span-5 flex flex-col justify-between">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: LUXURY_EASE, delay: 0.3 }}
                            >
                                <p className="label-swiss mb-6 text-fg/60">Links</p>
                                <div className="space-y-4">
                                    {links.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center justify-between py-3 border-b border-fg/15 hover:border-fg/40 transition-colors duration-300"
                                        >
                                            <span className="text-base font-medium">{link.label}</span>
                                            <ArrowUpRight
                                                className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                                                strokeWidth={1.5}
                                            />
                                        </a>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                className="mt-12 md:mt-0"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: LUXURY_EASE, delay: 0.6 }}
                            >
                                <p className="label-swiss text-fg/40">
                                    Based in India · Open to global opportunities
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---- Bottom Bar ---- */}
            <section className="border-t border-fg/15 py-8 px-6 md:px-12">
                <div className="max-w-[1400px] mx-auto">
                    {/* ---- Massive "Let's Connect" ---- */}
                    <div className="mb-8 overflow-hidden">
                        <RevealText
                            text="Let's Connect"
                            as="h2"
                            className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.85]"
                            delay={0}
                        />
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <p className="label-swiss text-fg/40">
                            © {new Date().getFullYear()} Robin Gautam. All rights reserved.
                        </p>
                        <p className="label-swiss text-fg/40">
                            Designed & developed with intention.
                        </p>
                    </div>
                </div>
            </section>
        </footer>
    );
}
