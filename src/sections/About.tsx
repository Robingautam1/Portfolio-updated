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
                            text="The Hybrid"
                            className="text-4xl md:text-5xl font-bold tracking-tighter leading-none"
                            delay={0}
                        />
                        <RevealText
                            text="Advantage"
                            className="text-4xl md:text-5xl font-bold tracking-tighter leading-none font-serif italic"
                            delay={0.1}
                        />
                        {/* NanoBanana Removed */}
                    </div>
                </div>

                {/* Right Column: Narrative */}
                <div className="md:col-span-8 lg:col-span-7 lg:col-start-5 space-y-12">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: LUXURY_EASE }}
                        className="text-lg md:text-2xl font-light leading-relaxed"
                    >
                        <p className="mb-8">
                            Most professionals fall into one of two buckets.
                            They either sit on the strategy side—making decks and models—or on the execution side, building the product.
                        </p>
                        <p className="font-medium text-fg">
                            The real friction usually sits in the middle.
                        </p>
                    </motion.div>

                    <div className="bg-white p-8 md:p-12 rounded-2xl border border-fg/5 shadow-sm">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-bold mb-2">Strategy Teams</h4>
                                <p className="text-muted text-sm leading-relaxed">Imagine things they can’t build. Stuck in theory and decks.</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">Product Teams</h4>
                                <p className="text-muted text-sm leading-relaxed">Build things that don’t move the business. Stuck in tickets and features.</p>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: LUXURY_EASE, delay: 0.2 }}
                        className="text-base md:text-lg text-muted space-y-6 leading-relaxed"
                    >
                        <p>
                            I’m currently pursuing my MBA at IIM Rohtak. At the same time, I’ve spent years building products, financial tools, and automation systems.
                        </p>
                        <p>
                            Not to become a traditional developer, but to remove the friction between idea and execution.
                        </p>

                        <ul className="space-y-4 mt-8 border-l-2 border-accent pl-6 py-2">
                            <li className="flex items-start gap-3">
                                <span className="text-accent font-bold mt-1">01.</span>
                                <span>I can read a balance sheet and build the calculator behind it.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent font-bold mt-1">02.</span>
                                <span>I can pitch a strategy and prototype the product the same week.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent font-bold mt-1">03.</span>
                                <span>I can manage a team and design the systems that make it faster.</span>
                            </li>
                        </ul>

                        <p className="text-xl font-bold text-fg pt-8">
                            My focus is simple: build systems that move outcomes.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
