"use client";

import { motion } from "framer-motion";

interface RevealTextProps {
    text: string;
    className?: string;
    delay?: number;
    as?: "h1" | "h2" | "h3" | "p" | "span";
}

const LUXURY_EASE = [0.25, 1, 0.5, 1] as const;

export default function RevealText({
    text,
    className = "",
    delay = 0,
    as: Tag = "h1",
}: RevealTextProps) {
    const lines = text.split("\n");

    return (
        <>
            {lines.map((line, i) => (
                <div key={i} className="overflow-hidden">
                    <motion.div
                        initial={{ y: "100%" }}
                        whileInView={{ y: "0%" }}
                        viewport={{ once: true, margin: "-5%" }}
                        transition={{
                            duration: 1.0,
                            ease: LUXURY_EASE,
                            delay: delay + i * 0.12,
                        }}
                    >
                        <Tag className={className}>{line}</Tag>
                    </motion.div>
                </div>
            ))}
        </>
    );
}
