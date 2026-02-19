import { motion } from "framer-motion";
import RevealText from "../components/ui/RevealText";
import { LUXURY_EASE } from "@/lib/utils";

const services = [
    {
        num: "01",
        title: "Strategy & Market Analysis",
        desc: "Structured research using academic frameworks and AI tools to identify real opportunities, not just surface-level trends.",
    },
    {
        num: "02",
        title: "MVP & Product Prototyping",
        desc: "Rapid development of functional prototypes using modern web stacks, built for validation—not vanity.",
    },
    {
        num: "03",
        title: "Workflow & Automation",
        desc: "Designing internal systems that reduce repetitive work and increase team output.",
    },
];

export default function Services() {
    return (
        <section className="py-24 px-6 md:px-12 bg-bg">
            <div className="max-w-[1400px] mx-auto">
                <span className="label-swiss block mb-12 text-center">What I Do</span>

                <div className="text-center mb-16">
                    <RevealText
                        text="Strategy, Systems,"
                        className="text-4xl md:text-6xl font-bold tracking-tighter"
                        delay={0}
                    />
                    <RevealText
                        text="and Execution."
                        className="text-4xl md:text-6xl font-bold tracking-tighter font-serif italic text-muted"
                        delay={0.1}
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 1, ease: LUXURY_EASE }}
                            className="bg-white p-10 rounded-2xl shadow-sm border border-fg/5 hover:border-accent/50 transition-colors duration-500 group"
                        >
                            <span className="text-xs font-bold font-mono text-accent mb-6 block">{s.num}</span>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{s.title}</h3>
                            <p className="text-muted leading-relaxed text-sm">
                                {s.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
