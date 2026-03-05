"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#F7F5F0]/95 backdrop-blur-sm" : "bg-[#F7F5F0]"
                    }`}
                style={{ borderBottom: "1px solid #DEDBD4" }}
            >
                <div className="max-w-[1160px] mx-auto px-12 md:px-12 h-[60px] flex items-center justify-between">
                    {/* Left — Name */}
                    <a
                        href="#"
                        className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#0D0D0D] no-underline"
                        style={{ fontFamily: "var(--font-sans)" }}
                    >
                        ROBIN GAUTAM
                    </a>

                    {/* Center — Links (desktop) */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-[12px] font-normal text-[#6B6560] hover:text-[#0D0D0D] transition-colors duration-200 no-underline"
                                style={{ fontFamily: "var(--font-sans)" }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Right — Open to Work pill + Hamburger */}
                    <div className="flex items-center gap-4">
                        <span
                            className="hidden sm:inline-block text-[11px] font-medium uppercase tracking-[0.1em] text-[#4A4A2A] border border-[#4A4A2A] rounded-full px-[14px] py-[6px]"
                            style={{ fontFamily: "var(--font-sans)" }}
                        >
                            Open to Work
                        </span>

                        {/* Hamburger (mobile) */}
                        <button
                            className="md:hidden flex flex-col gap-[5px] p-1"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            <span
                                className={`block w-5 h-[1px] bg-[#0D0D0D] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[3px]" : ""
                                    }`}
                            />
                            <span
                                className={`block w-5 h-[1px] bg-[#0D0D0D] transition-all duration-300 ${isOpen ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`block w-5 h-[1px] bg-[#0D0D0D] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[3px]" : ""
                                    }`}
                            />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-[#F7F5F0] flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08, duration: 0.4 }}
                                className="text-[24px] font-light text-[#0D0D0D] no-underline"
                                style={{ fontFamily: "var(--font-sans)" }}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#4A4A2A] border border-[#4A4A2A] rounded-full px-[14px] py-[6px] mt-4"
                        >
                            Open to Work
                        </motion.span>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
