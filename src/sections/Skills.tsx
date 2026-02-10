import { motion } from "framer-motion";
import RevealText from "../components/ui/RevealText";
import { LUXURY_EASE } from "@/lib/utils";

const toolkits = [
    {
        category: "Research & Strategy",
        tools: ["Perplexity (Market Scans)", "AI Narratives", "Academic Frameworks"],
    },
    {
        category: "Product & Development",
        tools: ["Next.js (Architecture)", "Tailwind (Rapid UI)", "JavaScript (Logic)"],
    },
    {
        category: "Systems & Automation",
        tools: ["Notion (Process Design)", "AI Workflows", "Structured Templates"],
    },
];

export default function Skills() {
    return (
        <section className="py-24 px-6 md:px-12 bg-fg text-bg">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid md:grid-cols-2 gap-16 mb-20">
                    <div>
                        <span className="label-swiss text-bg/60 block mb-6">Toolkit</span>
                        <RevealText
                            text="Tools Behind"
                            className="text-5xl font-bold tracking-tighter leading-none"
                            delay={0}
                        />
                        <RevealText
                            text="the Systems."
                            className="text-5xl font-bold tracking-tighter leading-none font-serif italic text-accent"
                            delay={0.1}
                        />
                    </div>
                    <div className="flex items-end">
                        <p className="text-xl md:text-2xl font-light leading-relaxed opacity-80 max-w-md">
                            I don’t think in terms of tools. I think in terms of workflows.
                            Each tool is just a component inside a larger system.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 border-t border-bg/10 pt-16">
                    {toolkits.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 1, ease: LUXURY_EASE }}
                        >
                            <h3 className="text-accent font-mono uppercase tracking-widest text-sm mb-6">{t.category}</h3>
                            <ul className="space-y-4">
                                {t.tools.map((tool, j) => (
                                    <li key={j} className="text-lg font-medium border-b border-bg/10 pb-2">
                                        {tool}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <p className="text-lg font-serif italic opacity-60">
                        The goal is always the same: reduce friction between idea and execution.
                    </p>
                </div>

            </div>
        </section>
    );
}
