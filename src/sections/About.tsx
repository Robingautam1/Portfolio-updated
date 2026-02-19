import { motion } from "framer-motion";
import RevealText from "../components/ui/RevealText";
import { LUXURY_EASE } from "@/lib/utils";

export default function About() {
    return (
        <section className="py-24 md:py-40 px-6 md:px-12 bg-bg border-t border-fg/5">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">

                {/* Left Column: Title & Label */}
                <div className="md:col-span-4 lg:col-span-3">
                    <div className="md:sticky md:top-32">
                        <span className="label-swiss block mb-6">About</span>
                        <RevealText
                            text="Background &"
                            className="text-3xl md:text-4xl font-bold tracking-tighter leading-none"
                            delay={0}
                        />
                        <RevealText
                            text="What I'm Looking For."
                            className="text-3xl md:text-4xl font-bold tracking-tighter leading-none font-serif italic"
                            delay={0.1}
                        />
                    </div>
                </div>

                {/* Right Column: Narrative */}
                <div className="md:col-span-8 lg:col-span-7 lg:col-start-5 space-y-8">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: LUXURY_EASE }}
                        className="text-base md:text-lg text-muted space-y-6 leading-relaxed"
                    >
                        <p>
                            I did my BBA in Banking, Financial Services & Insurance from DSEU, where I led the Entrepreneurship Cell, coordinated placements for 2,000+ students, and got interested in how organizations actually get things done — not just how they plan to.
                        </p>

                        <p>
                            During that time I also started building things on the side — financial literacy tools, research projects, a few automation workflows. Not because I was trying to become a developer, but because I wanted to understand what was actually hard about execution.
                        </p>

                        <p>
                            I'm now pursuing my MBA at IIM Rohtak. I'm actively looking for roles in product management, growth, strategy, or consulting — places where analytical thinking and getting things done both matter.
                        </p>
                    </motion.div>

                    {/* Credential Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: LUXURY_EASE, delay: 0.2 }}
                        className="flex flex-wrap gap-3"
                    >
                        <span className="inline-block bg-fg text-bg text-[10px] tracking-[0.2em] uppercase font-bold px-4 py-2 rounded-full">
                            IIM Rohtak · MBA 2025–27
                        </span>
                        <span className="inline-block bg-fg/10 text-fg text-[10px] tracking-[0.2em] uppercase font-bold px-4 py-2 rounded-full border border-fg/10">
                            BBA (BFSI) · DSEU · 77%
                        </span>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
