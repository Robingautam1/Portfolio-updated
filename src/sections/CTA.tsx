import { motion } from "framer-motion";
import MagneticButton from "../components/ui/MagneticButton";
import RevealText from "../components/ui/RevealText";
import { LUXURY_EASE } from "@/lib/utils";

export default function CTA() {
    return (
        <footer className="bg-brand text-fg relative overflow-hidden">
            {/* Background noise texture via CSS could go here, or simple solid */}

            <section className="py-24 md:py-32 px-6 md:px-12 min-h-[90vh] flex flex-col justify-between">
                <div className="max-w-[1400px] mx-auto w-full z-10 relative">

                    {/* Headline */}
                    <div className="max-w-7xl mb-16 md:mb-24">
                        <RevealText
                            text="Let's Build Something"
                            className="text-[12vw] md:text-[8rem] font-bold tracking-tighter leading-[0.8]"
                            delay={0}
                        />
                        <RevealText
                            text="That Moves the Needle."
                            className="text-[12vw] md:text-[8rem] font-bold tracking-tighter leading-[0.8] opacity-40 ml-[5vw] md:ml-32"
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
                            <p className="text-xl md:text-3xl font-medium leading-relaxed max-w-2xl mb-12">
                                I’m interested in roles where strategy meets execution—product, growth, consulting, or system-driven roles.
                                <br /><br />
                                If you’re building something meaningful, we should talk.
                            </p>

                            <MagneticButton
                                href="mailto:robingautam@outlook.com"
                                className="btn-liquid inline-block px-12 py-6 rounded-full border-2 border-fg text-lg md:text-xl font-bold uppercase tracking-widest bg-transparent hover:text-bg transition-colors"
                            >
                                Start a Conversation
                            </MagneticButton>
                        </motion.div>

                        {/* Footer Links */}
                        <div className="md:col-span-4 flex flex-col md:items-end gap-4 md:gap-6">
                            <a href="https://linkedin.com/in/robingautam" target="_blank" className="text-2xl font-serif italic hover:underline decoration-2 underline-offset-4">LinkedIn</a>
                            <a href="https://github.com/robingautam" target="_blank" className="text-2xl font-serif italic hover:underline decoration-2 underline-offset-4">GitHub</a>
                            <a href="#" className="text-2xl font-serif italic hover:underline decoration-2 underline-offset-4">Resume</a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-12 md:pt-24 mt-auto flex flex-col md:flex-row justify-between items-end border-t border-fg/20 z-10 relative">
                    <span className="label-swiss font-bold opacity-70">Based in India. Working globally.</span>
                    <span className="label-swiss opacity-70">© {new Date().getFullYear()} Robin Gautam</span>
                </div>

                {/* Abstract Circle Decoration */}
                <div className="absolute -bottom-1/4 -right-1/4 w-[80vw] h-[80vw] bg-white mix-blend-overlay opacity-20 rounded-full blur-3xl pointer-events-none" />
            </section>
        </footer>
    );
}
