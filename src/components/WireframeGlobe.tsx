import { motion } from "framer-motion";

export default function WireframeGlobe() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <motion.svg
                viewBox="0 0 200 200"
                className="w-full h-full max-w-[500px] max-h-[500px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            >
                <defs>
                    <linearGradient id="globe-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
                    </linearGradient>
                </defs>

                {/* Outer Circle */}
                <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2" />

                {/* Vertical Meridians */}
                {[0, 45, 90, 135].map((angle, i) => (
                    <motion.ellipse
                        key={`meridian-${i}`}
                        cx="100"
                        cy="100"
                        rx={90 * Math.cos((angle * Math.PI) / 180)}
                        ry="90"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                        opacity="0.3"
                        transform={`rotate(${angle} 100 100)`}
                    />
                ))}

                {/* Horizontal Parallels */}
                {[20, 40, 60, 80].map((radius, i) => (
                    <circle
                        key={`parallel-${i}`}
                        cx="100"
                        cy="100"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                        opacity="0.2"
                    />
                ))}

                {/* Rotating Cross-Section (Dynamic) */}
                <motion.ellipse
                    cx="100"
                    cy="100"
                    rx="90"
                    ry="30"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.6"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                />
                <motion.ellipse
                    cx="100"
                    cy="100"
                    rx="30"
                    ry="90"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    opacity="0.6"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, ease: "linear", repeat: Infinity }}
                />
            </motion.svg>
        </div>
    );
}
