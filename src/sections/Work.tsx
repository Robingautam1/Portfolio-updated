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
        tools: "Next.js · Tailwind · Gamification Design",
        color: "bg-card-edtech",
        accent: "text-emerald-600",
        link: "https://cash-curious.vercel.app/",
        linkLabel: "View Project",
        image: "/cash-curious.png"
    },
    {
        title: "QuantMaster",
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
        <section className="py-32 px-6 md:px-12 bg-bg section-transition" id="works">
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
                                    /* Finlatics — Styled Mockup Card (Option A) */
                                    <div className="w-full h-full bg-fg/95 rounded-3xl flex flex-col items-center justify-center p-8 md:p-12 relative border-l-4 border-purple-500">
                                        {/* Grain texture */}
                                        <div
                                            className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none rounded-3xl"
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                                                backgroundSize: "128px 128px",
                                            }}
                                        />
                                        {/* Mockup document */}
                                        <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 p-6 md:p-8 w-full max-w-sm z-10">
                                            <div className="flex items-center gap-2 mb-6">
                                                <div className="w-2 h-2 rounded-full bg-purple-400" />
                                                <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-mono">Finlatics</span>
                                            </div>
                                            <h4 className="text-white text-lg font-bold mb-4">STP Analysis Report</h4>
                                            <div className="space-y-3">
                                                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                                    <span className="text-white/50 text-xs">Segmentation</span>
                                                    <span className="text-white/70 text-xs font-mono">4 clusters identified</span>
                                                </div>
                                                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                                    <span className="text-white/50 text-xs">Targeting</span>
                                                    <span className="text-white/70 text-xs font-mono">Primary: Tier-2 finance</span>
                                                </div>
                                                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                                    <span className="text-white/50 text-xs">Positioning</span>
                                                    <span className="text-white/70 text-xs font-mono">Defensible niche found</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-white/50 text-xs">Status</span>
                                                    <span className="text-green-400 text-xs font-mono">Delivered ✓</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase mt-6 z-10">Market Research & Segmentation</p>
                                    </div>
                                )}
                            </a>

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
        </section >
    );
}
