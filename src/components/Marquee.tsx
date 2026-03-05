"use client";

import { useState } from "react";

const SKILLS = [
    "AI STRATEGY",
    "NEXT.JS ARCHITECTURE",
    "FINANCIAL MODELING",
    "GROWTH HACKING",
    "SYSTEM DESIGN",
    "PRODUCT THINKING",
    "DATA ANALYTICS",
    "ECOSYSTEM BUILDING",
];

const marqueeContent = SKILLS.map((s) => `${s} •`).join("  ");
const doubled = `${marqueeContent}  ${marqueeContent}`;

export default function Marquee() {
    const [hovered, setHovered] = useState(false);

    return (
        <section
            className="py-10 border-t border-b border-fg/10 overflow-hidden cursor-default text-stroke-hover"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div
                className={`animate-marquee whitespace-nowrap ${hovered ? "paused" : ""}`}
            >
                <span
                    className={`text-[clamp(2rem,5vw,5rem)] font-bold tracking-tighter leading-none transition-all duration-600 ${hovered ? "text-fg" : "text-stroke"
                        }`}
                >
                    {doubled}
                </span>
            </div>
        </section>
    );
}
