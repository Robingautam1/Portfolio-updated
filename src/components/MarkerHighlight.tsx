"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface MarkerHighlightProps {
    children: React.ReactNode;
    color?: string;
    delay?: number;
}

export default function MarkerHighlight({
    children,
    color = "#FCD34D",
    delay = 0,
}: MarkerHighlightProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <span ref={ref} className="relative inline">
            {/* Yellow marker background */}
            <motion.span
                className="absolute inset-0 -mx-1 -my-0.5 rounded"
                style={{ backgroundColor: color }}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{
                    duration: 0.5,
                    delay: delay,
                    ease: [0.16, 1, 0.3, 1],
                }}
                // Animate from left to right
                // Origin on the left
                // @ts-ignore
                style={{
                    transformOrigin: "left",
                    backgroundColor: color,
                    zIndex: -1,
                }}
            />
            {/* Text content */}
            <span className="relative z-10">{children}</span>
        </span>
    );
}
