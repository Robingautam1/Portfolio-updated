import { motion } from "framer-motion";
import RevealText from "../components/ui/RevealText";
import { LUXURY_EASE } from "@/lib/utils";

const roles = [
    {
        title: "MBA Student",
        org: "IIM Rohtak",
        year: "CURRENT",
        problem: "Most MBA students focus only on theory or only on campus activities.",
        solution: "Building real products and client systems in parallel with academic work.",
        outcome: "3 shipped products. 1 active startup. Ongoing.",
    },
    {
        title: "President — E-Cell",
        org: "DSEU Dwarka",
        year: "2023-25",
        problem: "Society ran events but lacked visibility and pipelines.",
        solution: "Built brand partnerships. Focused on structure over noise.",
        outcome: "Riwaaz 2.0 (Largest event), secured multiple sponsors.",
    },
    {
        title: "Growth & Partnerships",
        org: "StockGro",
        year: "Internship",
        problem: "Campus ecosystem saturated with ambassador programs.",
        solution: "Focused on institutional trust & MoUs, not just downloads.",
        outcome: "1,200+ students onboarded. Active engagement.",
    },
    {
        title: "Content Lead Intern",
        org: "CorStone",
        year: "Internship",
        problem: "Translating emotional, local stories into professional reports.",
        solution: "Structured storytelling framework.",
        outcome: "Unified content strategy for stakeholders.",
    },
];

export default function Experience() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-20 md:mb-32">
                    <span className="label-swiss block mb-6 text-accent">Experience</span>
                    <RevealText
                        text="Where Strategy"
                        className="text-5xl md:text-7xl font-bold tracking-tighter leading-none"
                        delay={0}
                    />
                    <RevealText
                        text="Met Execution."
                        className="text-5xl md:text-7xl font-bold tracking-tighter leading-none font-serif italic text-muted"
                        delay={0.15}
                    />
                </div>

                <div className="space-y-20 md:space-y-24">
                    {roles.map((role, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 1, ease: LUXURY_EASE }}
                            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 border-t border-fg/10 pt-12"
                        >
                            {/* Left: Role Info */}
                            <div className="md:col-span-4 lg:col-span-3">
                                <span className={`label-swiss block mb-2 ${role.year === 'CURRENT' ? 'text-accent font-bold' : 'opacity-50'}`}>{role.year}</span>
                                <h3 className="text-2xl font-bold leading-tight mb-2">{role.title}</h3>
                                <p className="text-lg text-muted font-serif italic">{role.org}</p>
                            </div>

                            {/* Right: Problem/Solution/Outcome */}
                            <div className="md:col-span-8 lg:col-span-7 lg:col-start-5 space-y-10">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="label-swiss text-accent mb-3">The Problem</h4>
                                        <p className="text-sm leading-relaxed text-muted">{role.problem}</p>
                                    </div>
                                    <div>
                                        <h4 className="label-swiss text-accent mb-3">The Solution</h4>
                                        <p className="text-sm leading-relaxed text-muted">{role.solution}</p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="label-swiss text-fg mb-3">Outcome</h4>
                                    <p className="text-xl md:text-4xl font-bold leading-tight">{role.outcome}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
