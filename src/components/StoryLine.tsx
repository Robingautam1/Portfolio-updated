"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SystemBlueprint from "@/components/SystemBlueprint";

export default function StoryLine() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative h-[400vh] w-full bg-paper">
            <div className="sticky top-0 h-screen w-full flex overflow-hidden">
                {/* Left: Graphic (50% width on Desktop) */}
                <div className="w-full lg:w-1/2 h-full flex items-center justify-center bg-paper relative">
                    <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
                    <SystemBlueprint progress={scrollYProgress} />
                </div>

                {/* Right: Narrative (Text that scrolls naturally or fades) - Actually better if text scrolls OVER or NEXT to it */}
                {/* In this design, we keep the graphic sticky and have text blocks scroll by on the right */}
                <div className="hidden lg:flex w-1/2 h-full items-center justify-center relative">
                    {/* We can use absolute positioning based on scroll, or just let the sticky container handle the graphic 
                        and have a separate 'scrolling' container for text? 
                        
                        Actually, standard sticky behavior: 
                        The container (section) is 400vh.
                        The 'sticky' div wraps the graphic. 
                        The text needs to scroll BY it.
                    */}
                </div>
            </div>

            {/* Scrolling Text overlay (Absolute over the section, spaced out) */}
            <div className="absolute top-0 left-0 w-full lg:w-1/2 lg:left-1/2 h-full pointer-events-none">
                <div className="h-screen flex items-center justify-center p-8">
                    <motion.div
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 1, 0]) }}
                        className="bg-paper/90 backdrop-blur-sm p-8 border border-line-light max-w-md shadow-sm"
                    >
                        <h3 className="text-display-lg text-ink mb-4">Structure</h3>
                        <p className="text-text-graphite">
                            My journey began in the structured world of business. An MBA from IIM Rohtak taught me the architecture of organizations.
                        </p>
                    </motion.div>
                </div>

                <div className="h-screen flex items-center justify-center p-8">
                    <motion.div
                        style={{ opacity: useTransform(scrollYProgress, [0.3, 0.5, 0.6], [0, 1, 0]) }}
                        className="bg-paper/90 backdrop-blur-sm p-8 border border-line-light max-w-md shadow-sm"
                    >
                        <h3 className="text-display-lg text-ink mb-4">Breakthrough</h3>
                        <p className="text-text-graphite">
                            But strategy without execution felt incomplete. I broke out of the pure management box to understand the tools of creation.
                        </p>
                    </motion.div>
                </div>

                <div className="h-screen flex items-center justify-center p-8">
                    <motion.div
                        style={{ opacity: useTransform(scrollYProgress, [0.6, 0.8, 0.9], [0, 1, 0]) }}
                        className="bg-paper/90 backdrop-blur-sm p-8 border border-line-light max-w-md shadow-sm"
                    >
                        <h3 className="text-display-lg text-ink mb-4">System</h3>
                        <p className="text-text-graphite">
                            Now, I merge both. I build digital ecosystems where code serves strategy, creating robust, scalable solutions.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
