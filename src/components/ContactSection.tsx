"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, ArrowUpRight, Send } from "lucide-react";

const links = [
    {
        name: "Email",
        href: "mailto:hello@robingautam.in",
        icon: Mail,
        color: "#3B82F6",
        label: "hello@robingautam.in"
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/robingautam/",
        icon: Linkedin,
        color: "#0A66C2",
        label: "/in/robingautam"
    },
    {
        name: "GitHub",
        href: "https://github.com/robingautam",
        icon: Github,
        color: "#FFFFFF",
        label: "@robingautam"
    },
    {
        name: "Twitter",
        href: "https://twitter.com/robingautam",
        icon: Twitter,
        color: "#1DA1F2",
        label: "@robingautam"
    },
];

export default function ContactSection() {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-20%" });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen bg-void flex items-center justify-center overflow-hidden"
        >
            {/* Animated Background */}
            <motion.div
                style={{ y: bgY }}
                className="absolute inset-0"
            >
                {/* Gradient Orbs */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30"
                    style={{
                        background: "radial-gradient(circle, #6366F1 0%, transparent 50%)",
                        filter: "blur(100px)",
                    }}
                />
                <div
                    className="absolute top-1/4 left-1/4 w-[400px] h-[400px] opacity-20"
                    style={{
                        background: "radial-gradient(circle, #06B6D4 0%, transparent 60%)",
                        filter: "blur(80px)",
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] opacity-20"
                    style={{
                        background: "radial-gradient(circle, #8B5CF6 0%, transparent 60%)",
                        filter: "blur(80px)",
                    }}
                />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ scale }}
                className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-12 text-center"
            >
                {/* Pre-title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-secondary">
                        <Send className="w-4 h-4" />
                        Let&apos;s connect
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="text-massive font-display text-hero mb-6"
                >
                    <span className="block">Ready to</span>
                    <span className="block text-gradient-animated">Build Together?</span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-body-lg text-secondary max-w-2xl mx-auto mb-12"
                >
                    Whether it&apos;s a product idea, a strategy question, or you just want to talk about
                    the intersection of business and technology — I&apos;m all ears.
                </motion.p>

                {/* Primary CTA */}
                <motion.a
                    href="mailto:hello@robingautam.in"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-lg font-semibold text-void transition-all"
                    style={{
                        background: "linear-gradient(135deg, #6366F1, #8B5CF6, #06B6D4)",
                    }}
                >
                    Start a Conversation
                    <ArrowUpRight className="w-5 h-5" />
                </motion.a>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {links.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            target={link.name !== "Email" ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.7 + i * 0.1 }}
                            whileHover={{ y: -4, borderColor: `${link.color}40` }}
                            className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-center group"
                        >
                            <link.icon
                                className="w-6 h-6 mx-auto mb-3 transition-colors"
                                style={{ color: link.color }}
                            />
                            <div className="font-medium text-hero text-sm">{link.name}</div>
                            <div className="text-xs text-muted mt-1">{link.label}</div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 }}
                    className="mt-24 pt-8 border-t border-white/10"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
                        <p>© {new Date().getFullYear()} Robin Gautam. Built with Next.js 14.</p>
                        <p className="font-mono text-xs">v3.0 — Immersive Portfolio</p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
