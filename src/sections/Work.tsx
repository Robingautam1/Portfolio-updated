import { motion } from "framer-motion";
import RevealText from "../components/ui/RevealText";
import MagneticButton from "../components/ui/MagneticButton";
import { MoveUpRight } from "lucide-react";
import { LUXURY_EASE } from "@/lib/utils";

const projects = [
    {
        title: "CashCurious",
        context: "Personal project · Built independently",
        tagline: "Gamified financial literacy platform",
        desc: "Financial education is important, but boring. Traditional formats rely on long explanations. CashCurious makes learning finance feel like a game.",
        features: ["Interactive compounding simulations", "Bite-sized modules", "Zero-friction onboarding"],
        tools: "Next.js · Tailwind · Gamification Design",
        color: "bg-card-edtech",
        accent: "text-emerald-600",
        link: "https://cash-curious.vercel.app/",
        linkLabel: "View Project",
        image: "/cash-curious.png"
    },
    {
        title: "QuantMaster",
        context: "Personal project · Peer resource",
        tagline: "25+ financial calculators for students",
        desc: "Students spent more time fighting calculators than understanding concepts. QuantMaster is a suite of finance-specific tools.",
        features: ["25+ calculators (NPV, IRR)", "Context-aware interfaces", "Finance-specific inputs"],
        tools: "Next.js · JavaScript · Financial Modeling",
        color: "bg-card-fintech",
        accent: "text-blue-600",
        link: "https://robingautam1.github.io/quantmaster-site/",
        linkLabel: "View Project",
        image: "/quantmaster.png"
    },
    {
        title: "Finlatics",
        context: "Live project via Finlatics program",
        tagline: "Market research & segmentation",
        desc: "Client operated in a crowded market with unclear positioning. Focused on user segmentation and STP analysis to find a defensible niche.",
        features: ["Structured STP analysis", "Financial behavior segmentation", "Data-driven positioning"],
        tools: "Market Research · STP Analysis · Excel",
        color: "bg-card-analytics",
        accent: "text-purple-600",
        link: "#",
        linkLabel: "View Case Study",
        image: null
    },
];

export default function Work() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 bg-bg section-transition" id="works">
            <div className="max-w-[1400px] mx-auto">

                {/* Header */}
                <div className="mb-20 md:mb-28 max-w-4xl">
                    <span className="label-swiss block mb-6">Personal Projects</span>
                    <RevealText
                        text="Things I Built"
                        className="text-4xl md:text-6xl font-bold tracking-tighter leading-none"
                        delay={0}
                    />
                    <RevealText
                        text="on the Side."
                        className="text-4xl md:text-6xl font-bold tracking-tighter leading-none font-serif italic text-muted"
                        delay={0.15}
                    />
                </div>

                {/* Project List */}
                <div className="space-y-28">
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
                            <a
                                href={p.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`md:col-span-7 h-[400px] md:h-[500px] rounded-3xl relative overflow-hidden transition-transform duration-700 group-hover:scale-[1.02] block cursor-pointer border border-black/5 ${p.image ? p.color : ''}`}
                            >
                                {p.image ? (
                                    <div className="absolute inset-0 w-full h-full">
                                        {/* Browser Bar */}
                                        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-white/50 backdrop-blur-md rounded-full flex items-center px-4 gap-2 z-20 border border-white/20 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-red-400" />
                                            <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                            <div className="w-2 h-2 rounded-full bg-green-400" />
                                            <div className="ml-2 text-[10px] text-muted opacity-60 font-mono truncate w-full text-center">{p.link}</div>
                                        </div>
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="absolute top-20 left-[5%] w-[90%] h-auto rounded-t-lg shadow-2xl transition-transform duration-700 group-hover:-translate-y-2"
                                        />
                                    </div>
                                ) : (
                                    /* Finlatics — CSS-Only Styled Card */
                                    <div
                                        className="w-full h-full rounded-3xl flex flex-col items-center justify-center p-8 md:p-12 relative overflow-hidden"
                                        style={{ backgroundColor: "#1a1a2e" }}
                                    >
                                        <p className="text-[10px] tracking-[0.25em] uppercase mb-8" style={{ color: "#a78bfa" }}>
                                            Market Research · STP Analysis
                                        </p>
                                        <h3 className="text-5xl md:text-6xl font-serif italic font-normal text-white mb-10">
                                            Finlatics
                                        </h3>
                                        <div className="w-full max-w-xs space-y-3">
                                            <div className="flex items-end justify-between gap-2">
                                                <span className="text-xs shrink-0" style={{ color: "#9ca3af" }}>Segment Identified</span>
                                                <span className="flex-1 border-b border-dotted border-white/20 mb-1 mx-1" />
                                                <span className="text-xs font-mono text-white shrink-0">3 core clusters</span>
                                            </div>
                                            <div className="flex items-end justify-between gap-2">
                                                <span className="text-xs shrink-0" style={{ color: "#9ca3af" }}>Positioning Gap</span>
                                                <span className="flex-1 border-b border-dotted border-white/20 mb-1 mx-1" />
                                                <span className="text-xs font-mono text-white shrink-0">High (underserved)</span>
                                            </div>
                                            <div className="flex items-end justify-between gap-2">
                                                <span className="text-xs shrink-0" style={{ color: "#9ca3af" }}>Recommended Channel</span>
                                                <span className="flex-1 border-b border-dotted border-white/20 mb-1 mx-1" />
                                                <span className="text-xs font-mono text-white shrink-0">D2C + Referral</span>
                                            </div>
                                        </div>
                                        <div className="mt-10">
                                            <span
                                                className="text-[10px] tracking-[0.15em] uppercase px-4 py-2 rounded-full border"
                                                style={{ color: "#a78bfa", borderColor: "#a78bfa" }}
                                            >
                                                Consulting Project
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </a>

                            {/* Content (Right) */}
                            <div className="md:col-span-5 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold mb-1">{p.title}</h3>
                                <p className="text-xs font-serif italic text-muted/60 mb-4">{p.context}</p>
                                <p className="text-base font-serif italic text-muted mb-6">{p.tagline}</p>

                                <p className="text-base leading-relaxed mb-8">{p.desc}</p>

                                <ul className="space-y-3 mb-6">
                                    {p.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm text-muted">
                                            <div className={`w-1.5 h-1.5 rounded-full ${p.accent.replace('text', 'bg')}`} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                {/* Tools Used */}
                                <p className="text-xs text-muted/70 tracking-wide uppercase mb-8">
                                    <span className="font-bold text-fg/50">Tools: </span>
                                    {p.tools}
                                </p>

                                <MagneticButton
                                    href={p.link}
                                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-fg/20 pb-1 hover:border-fg transition-colors self-start"
                                >
                                    {p.linkLabel} <MoveUpRight className="w-4 h-4" />
                                </MagneticButton>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
