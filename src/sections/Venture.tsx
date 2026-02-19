import { motion } from "framer-motion";
import RevealText from "../components/ui/RevealText";
import MagneticButton from "../components/ui/MagneticButton";
import { LUXURY_EASE } from "@/lib/utils";

const services = [
    "Market Research & STP",
    "MVP Prototyping",
    "Workflow Automation",
];

export default function Venture() {
    return (
        <section className="py-24 md:py-40 px-6 md:px-12 bg-bg border-t border-fg/5">
            <div className="max-w-[1400px] mx-auto">

                {/* Header */}
                <div className="mb-20 md:mb-24">
                    <span className="label-swiss block mb-6 text-accent">Venture</span>
                    <RevealText
                        text="Not Just Consulting."
                        className="text-5xl md:text-7xl font-bold tracking-tighter leading-none"
                        delay={0}
                    />
                    <RevealText
                        text="Building the thing."
                        className="text-5xl md:text-7xl font-bold tracking-tighter leading-none font-serif italic text-muted"
                        delay={0.15}
                    />
                </div>

                {/* Two-column content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: LUXURY_EASE }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24"
                >
                    {/* Left: Description */}
                    <div>
                        <p className="text-lg md:text-xl leading-relaxed text-muted">
                            robingautam.in is Robin's active venture — offering strategy, product, and systems work directly to founders and growing teams. Not a freelance profile. A structured engagement model built for businesses that need both thinking and execution.
                        </p>
                    </div>

                    {/* Right: Services + CTA */}
                    <div className="space-y-8">
                        {/* Service pills */}
                        <div className="flex flex-wrap gap-3">
                            {services.map((service, i) => (
                                <span
                                    key={i}
                                    className="px-6 py-3 border-2 border-fg/20 rounded-full text-sm font-bold tracking-wide hover:border-fg hover:bg-fg hover:text-bg transition-all duration-300 cursor-default"
                                >
                                    {service}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <MagneticButton
                            href="https://robingautam.in"
                            className="inline-flex items-center gap-2 bg-fg text-bg px-8 py-4 rounded-full font-bold tracking-wide hover:scale-105 transition-transform duration-300"
                        >
                            Work With Me → robingautam.in
                        </MagneticButton>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
