import { motion } from "framer-motion";
import MagneticButton from "../components/ui/MagneticButton";
import { LUXURY_EASE } from "@/lib/utils";

const links = [
    { label: "LinkedIn", href: "https://linkedin.com/in/robingautam", external: true },
    { label: "Resume", href: "#", external: false },
    { label: "robingautam.in", href: "https://robingautam.in", external: true },
];

export default function CTA() {
    return (
        <footer className="bg-fg text-bg">

            {/* Main CTA Area */}
            <section className="pt-24 md:pt-32 pb-16 px-6 md:px-12 border-t border-bg/10">
                <div className="max-w-[1400px] mx-auto">

                    {/* Two-column: Headline left, Links right */}
                    <div className="grid md:grid-cols-12 gap-16 md:gap-8 mb-20">

                        {/* Left: Heading */}
                        <div className="md:col-span-8">
                            <span className="label-swiss text-bg/40 block mb-8">Contact</span>
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.85] mb-2">
                                Got a Problem
                            </h2>
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.85] font-serif italic text-accent">
                                Worth Solving?
                            </h2>
                        </div>

                        {/* Right: Links stacked */}
                        <div className="md:col-span-4 flex flex-col md:items-end md:justify-end gap-4">
                            {links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    target={link.external ? "_blank" : undefined}
                                    rel={link.external ? "noopener noreferrer" : undefined}
                                    className="text-2xl font-serif italic text-bg/80 hover:text-bg hover:underline decoration-1 underline-offset-4 transition-colors"
                                >
                                    {link.label}{link.external ? " ↗" : ""}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Body + CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: LUXURY_EASE }}
                    >
                        <p className="text-lg md:text-xl font-light leading-relaxed text-bg/50 max-w-xl mb-10">
                            I work with founders and teams who need strategy that ships. If that's you — let's talk.
                        </p>

                        <MagneticButton
                            href="mailto:robingautam@outlook.com"
                            className="inline-block px-12 py-5 rounded-full text-sm font-bold uppercase tracking-[0.2em] bg-bg text-fg hover:bg-accent hover:text-fg transition-colors duration-300"
                        >
                            Start a Conversation
                        </MagneticButton>
                    </motion.div>

                </div>
            </section>

            {/* Bottom Bar — same style as toolkit grid lines */}
            <div className="px-6 md:px-12 border-t border-bg/10">
                <div className="max-w-[1400px] mx-auto py-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-bg/30">Based in India. Working globally.</span>
                    <span className="text-[10px] tracking-[0.15em] text-bg/30 font-mono">robin@robingautam.in</span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-bg/30">© {new Date().getFullYear()} Robin Gautam</span>
                </div>
            </div>

        </footer>
    );
}
