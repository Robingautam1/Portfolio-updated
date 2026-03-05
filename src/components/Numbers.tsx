"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./ui/AnimatedCounter";
import RevealText from "./ui/RevealText";

const LUXURY_EASE = [0.25, 1, 0.5, 1] as const;

const metrics = [
    {
        value: 1300,
        suffix: "+",
        prefix: "",
        label: "Students Reached",
        description: "Through campus programs, workshops, and digital platforms.",
    },
    {
        value: 60,
        suffix: "%",
        prefix: "",
        label: "Research Time Saved",
        description: "By building automated tools and data pipelines.",
    },
    {
        value: 25,
        suffix: "+",
        prefix: "",
        label: "Tools Built",
        description: "Calculators, dashboards, and full-stack applications.",
    },
];

export default function Numbers() {
    return (
        <section className="py-32 md:py-48 px-6 md:px-12 bg-bg">
            <div className="max-w-[1400px] mx-auto">
                {/* ---- Section Heading ---- */}
                <div className="max-w-3xl mb-20 md:mb-32">
                    <p className="label-swiss mb-6">The Numbers</p>
                    <RevealText
                        text="A few numbers behind the"
                        as="h2"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.9]"
                        delay={0}
                    />
                    <div className="inline-block">
                        <RevealText
                            text="impact we create"
                            as="h2"
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.9] squiggly-underline"
                            delay={0.15}
                        />
                    </div>
                    <motion.p
                        className="text-muted text-base md:text-lg leading-relaxed max-w-xl mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: LUXURY_EASE, delay: 0.4 }}
                    >
                        These numbers are more than just milestones. They represent
                        the strength of connections, the consistency of work, and
                        the real-world impact built for people.
                    </motion.p>
                </div>

                {/* ---- Metrics Grid ---- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {metrics.map((metric, i) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-5%" }}
                            transition={{
                                duration: 1,
                                ease: LUXURY_EASE,
                                delay: i * 0.15,
                            }}
                            className="border-t border-fg/10 pt-8"
                        >
                            <AnimatedCounter
                                target={metric.value}
                                suffix={metric.suffix}
                                prefix={metric.prefix}
                                className="text-7xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tighter leading-none"
                                duration={2.5}
                            />
                            <div className="mt-6">
                                <p className="text-sm font-semibold uppercase tracking-wider mb-2">
                                    {metric.label}
                                </p>
                                <p className="text-muted text-sm leading-relaxed max-w-xs">
                                    {metric.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
