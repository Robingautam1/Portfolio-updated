"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface SystemBlueprintProps {
    progress: MotionValue<number>;
}

export default function SystemBlueprint({ progress }: SystemBlueprintProps) {
    // Stage 1: The Box (Structured MBA World)
    const boxDraw = useTransform(progress, [0, 0.2], [0, 1]);
    const boxOpacity = useTransform(progress, [0.2, 0.3], [1, 0]);

    // Stage 2: Expansion (Breaking Out)
    const linesDraw = useTransform(progress, [0.25, 0.45], [0, 1]);
    const linesOpacity = useTransform(progress, [0.45, 0.55], [1, 0]);

    // Stage 3: The System (Complex Network)
    const systemDraw = useTransform(progress, [0.5, 0.8], [0, 1]);
    const systemScale = useTransform(progress, [0.5, 1], [0.8, 1]);

    return (
        <div className="w-full h-full flex items-center justify-center p-8">
            <svg
                viewBox="0 0 800 600"
                className="w-full h-full max-w-4xl"
                style={{ overflow: "visible" }}
            >
                {/* STAGE 1: THE BOX (Management) */}
                <motion.rect
                    x="300" y="200" width="200" height="200"
                    fill="none"
                    stroke="#111"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    style={{ pathLength: boxDraw, opacity: boxOpacity }}
                />

                {/* STAGE 2: BREAKING OUT (Strategy -> Code) */}
                <motion.g style={{ opacity: linesOpacity }}>
                    {/* Top Right Line */}
                    <motion.path
                        d="M500 200 L600 100"
                        stroke="#111" strokeWidth="2" fill="none"
                        style={{ pathLength: linesDraw }}
                    />
                    <motion.circle cx="600" cy="100" r="4" fill="#111" style={{ scale: linesDraw }} />

                    {/* Bottom Left Line */}
                    <motion.path
                        d="M300 400 L200 500"
                        stroke="#111" strokeWidth="2" fill="none"
                        style={{ pathLength: linesDraw }}
                    />
                    <motion.circle cx="200" cy="500" r="4" fill="#111" style={{ scale: linesDraw }} />

                    {/* Right Line */}
                    <motion.path
                        d="M500 300 L650 300"
                        stroke="#111" strokeWidth="2" fill="none"
                        style={{ pathLength: linesDraw }}
                    />
                    <motion.circle cx="650" cy="300" r="4" fill="#111" style={{ scale: linesDraw }} />
                </motion.g>

                {/* STAGE 3: THE SYSTEM (Ecosystem) */}
                <motion.g style={{ scale: systemScale, opacity: systemDraw, transformOrigin: "center" }}>
                    {/* Central Hub */}
                    <circle cx="400" cy="300" r="40" fill="none" stroke="#111" strokeWidth="3" />

                    {/* Orbitals */}
                    <ellipse cx="400" cy="300" rx="120" ry="120" fill="none" stroke="#111" strokeWidth="0.5" strokeDasharray="4 4" />
                    <ellipse cx="400" cy="300" rx="200" ry="200" fill="none" stroke="#e5e5e5" strokeWidth="1" />

                    {/* Nodes */}
                    <circle cx="400" cy="180" r="8" fill="#111" />
                    <circle cx="520" cy="300" r="8" fill="#111" />
                    <circle cx="400" cy="420" r="8" fill="#111" />
                    <circle cx="280" cy="300" r="8" fill="#111" />

                    {/* Connections */}
                    <line x1="400" y1="260" x2="400" y2="188" stroke="#111" strokeWidth="1" />
                    <line x1="440" y1="300" x2="512" y2="300" stroke="#111" strokeWidth="1" />
                    <line x1="400" y1="340" x2="400" y2="412" stroke="#111" strokeWidth="1" />
                    <line x1="360" y1="300" x2="288" y2="300" stroke="#111" strokeWidth="1" />
                </motion.g>
            </svg>
        </div>
    );
}
