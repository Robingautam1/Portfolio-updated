import { motion } from "framer-motion";
import MagneticButton from "../components/ui/MagneticButton";
import RevealText from "../components/ui/RevealText";
import { LUXURY_EASE } from "@/lib/utils";

export default function CTA() {
    return (
        <footer className="relative overflow-hidden" style={{ backgroundColor: "#1a1a1a" }}>

            <section className="pt-24 md:pt-32 pb-12 px-6 md:px-12">
                <div className="max-w-[1400px] mx-auto w-full z-10 relative">

                    {/* Headline */}
                    <div className="max-w-7xl mb-16 md:mb-24">
                        <RevealText
                            text="Got a Problem"
                            className="text-[11vw] md:text-[7rem] font-bold tracking-tighter leading-[0.85] text-white"
                            delay={0}
                        />
                        <RevealText
                            text="Worth Solving?"
                            className="text-[11vw] md:text-[7rem] font-bold tracking-tighter leading-[0.85] font-serif italic text-white/40"
                            delay={0.15}
                        />
                    </div>

                    {/* Body */}
                    <div className="grid md:grid-cols-12 gap-12 items-end">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: LUXURY_EASE, delay: 0.3 }}
                            className="md:col-span-8"
                        >
                            <p className="text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12" style={{ color: "#9ca3af" }}>
                                I work with founders and teams who need strategy that ships. If that's you — let's talk.
                            </p>

                            <MagneticButton
                                href="mailto:robingautam@outlook.com"
                                className="inline-block px-12 py-6 rounded-full text-lg font-bold uppercase tracking-widest bg-white text-black border-2 border-white hover:bg-transparent hover:text-white transition-colors duration-300"
                            >
                                Start a Conversation
                            </MagneticButton>
                        </motion.div>

                        {/* Footer Links */}
                        <div className="md:col-span-4 flex flex-col md:items-end gap-4 md:gap-6">
                            <a href="https://linkedin.com/in/robingautam" target="_blank" rel="noopener noreferrer" className="text-2xl font-serif italic text-white hover:underline decoration-2 underline-offset-4">LinkedIn</a>
                            <a href="#" className="text-2xl font-serif italic text-white hover:underline decoration-2 underline-offset-4">Resume</a>
                            <a href="https://robingautam.in" target="_blank" rel="noopener noreferrer" className="text-2xl font-serif italic text-white/60 hover:text-white hover:underline decoration-2 underline-offset-4 transition-colors">robingautam.in ↗</a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="max-w-[1400px] mx-auto pt-16 md:pt-24 mt-16 flex flex-col md:flex-row justify-between items-center border-t border-white/10 z-10 relative gap-4">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold" style={{ color: "#6b7280" }}>Based in India. Working globally.</span>
                    <span className="text-[10px] tracking-[0.15em]" style={{ color: "#6b7280" }}>robin@robingautam.in</span>
                    <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "#6b7280" }}>© {new Date().getFullYear()} Robin Gautam</span>
                </div>

            </section>
        </footer>
    );
}
