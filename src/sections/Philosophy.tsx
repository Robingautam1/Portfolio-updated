import { motion } from "framer-motion";
import RevealText from "../components/ui/RevealText";
import { LUXURY_EASE } from "@/lib/utils";

const systemCards = [
    {
        title: "Research",
        desc: "Start with Perplexity for landscape scans. Layer with academic frameworks. Output: a positioning brief, not a summary.",
    },
    {
        title: "Building",
        desc: "Prototype in Next.js + Tailwind. Ship a working version before writing a full spec. Validate with real users, not assumptions.",
    },
    {
        title: "Execution",
        desc: "Every project runs through Notion. Weekly reviews. Structured templates. Decisions documented, not just made.",
    },
];

export default function Philosophy() {
    return (
        <section className="py-24 px-6 md:px-12 bg-bg overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-8">
                        Systems <br />
                        <span className="font-serif italic font-normal text-muted">over goals.</span>
                    </h2>

                    <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
                        I don't chase single outcomes. <br />
                        I build systems that make outcomes inevitable.
                    </p>

                    <p className="mt-12 label-swiss text-accent">
                        Snapshot of my current operating system
                    </p>
                </div>

                {/* System Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {systemCards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 1, ease: LUXURY_EASE }}
                            className="bg-white p-10 rounded-2xl shadow-sm border border-fg/5 hover:border-accent/50 transition-colors duration-500 group"
                        >
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{card.title}</h3>
                            <p className="text-muted leading-relaxed text-sm">
                                {card.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
