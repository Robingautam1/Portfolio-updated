import { motion } from "framer-motion";
import RevealText from "../components/ui/RevealText";
import MagneticButton from "../components/ui/MagneticButton";
import { MoveUpRight } from "lucide-react";
import { LUXURY_EASE } from "@/lib/utils";

const projects = [
    {
        title: "CashCurious",
        tagline: "Gamified financial literacy platform",
        desc: "Financial education is important, but boring. Traditional formats rely on long explanations. CashCurious makes learning finance feel like a game.",
        features: ["Interactive compounding simulations", "Bite-sized modules", "Zero-friction onboarding"],
        goal: "To prove engagement increases when finance becomes interactive.",
        color: "bg-card-edtech",
        accent: "text-emerald-600",
    },
    {
        title: "QuantMaster",
        tagline: "25+ financial calculators for students",
        desc: "Students spent more time fighting calculators than understanding concepts. QuantMaster is a suite of finance-specific tools.",
        features: ["25+ calculators (NPV, IRR)", "Context-aware interfaces", "Finance-specific inputs"],
        goal: "Started as a personal tool, became a peer resource.",
        color: "bg-card-fintech",
        accent: "text-blue-600",
    },
    {
        title: "Finlatics",
        tagline: "Market research & segmentation",
        desc: "Client operated in a crowded market with unclear positioning. Focused on user segmentation and STP analysis.",
        features: ["Structured STP analysis", "Financial behavior segmentation", "Data-driven positioning"],
        goal: "Clarity usually beats complexity.",
        color: "bg-card-analytics",
        accent: "text-purple-600",
    },
];

export default function Work() {
    return (
        <section className="py-32 px-6 md:px-12 bg-bg section-transition">
            <div className="max-w-[1400px] mx-auto">

                {/* Header */}
                <div className="mb-24 md:mb-32 max-w-4xl">
                    <span className="label-swiss block mb-6">Selected Work</span>
                    <RevealText
                        text="Projects Built to"
                        className="text-5xl md:text-7xl font-bold tracking-tighter leading-none"
                        delay={0}
                    />
                    <RevealText
                        text="Solve Real Problems."
                        className="text-5xl md:text-7xl font-bold tracking-tighter leading-none font-serif italic text-muted"
                        delay={0.15}
                    />
                </div>

                {/* Project List */}
                <div className="space-y-32">
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 1, ease: LUXURY_EASE }}
                            className="group grid grid-cols-1 md:grid-cols-12 gap-12"
                        >
                            {/* Visual Card (Left) */}
                            <div className={`md:col-span-7 h-[400px] md:h-[500px] rounded-3xl ${p.color} relative overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]`}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                                    {/* Abstract Shapes as placeholders for now */}
                                    <div className={`w-64 h-64 rounded-full blur-3xl ${p.accent.replace('text', 'bg')}/40`} />
                                </div>
                                <div className="absolute bottom-8 left-8">
                                    <span className={`label-swiss bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm ${p.accent}`}>{p.title}</span>
                                </div>
                            </div>

                            {/* Content (Right) */}
                            <div className="md:col-span-5 flex flex-col justify-center">
                                <h3 className="text-3xl font-bold mb-2">{p.title}</h3>
                                <p className="text-lg font-serif italic text-muted mb-6">{p.tagline}</p>

                                <p className="text-lg leading-relaxed mb-8">{p.desc}</p>

                                <ul className="space-y-3 mb-8">
                                    {p.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm text-muted">
                                            <div className={`w-1.5 h-1.5 rounded-full ${p.accent.replace('text', 'bg')}`} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-sm font-medium border-l-2 border-current pl-4 italic mb-8 opacity-70">
                                    "{p.goal}"
                                </p>

                                <MagneticButton className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-fg/20 pb-1 hover:border-fg transition-colors self-start">
                                    View Case Study <MoveUpRight className="w-4 h-4" />
                                </MagneticButton>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
