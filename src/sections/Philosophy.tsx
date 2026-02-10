import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

    return (
        <section ref={containerRef} className="py-40 px-6 md:px-12 bg-bg overflow-hidden relative flex items-center justify-center min-h-[60vh]">

            <motion.div style={{ y, opacity }} className="text-center max-w-4xl z-10">
                <h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-8">
                    Systems <br />
                    <span className="font-serif italic font-normal text-muted">over goals.</span>
                </h2>

                <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
                    I don’t chase single outcomes. <br />
                    I build systems that make outcomes inevitable.
                </p>

                <p className="mt-12 label-swiss text-accent">
                    Snapshot of my current operating system
                </p>
            </motion.div>

            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fg via-transparent to-transparent" />
            </div>

        </section>
    );
}
