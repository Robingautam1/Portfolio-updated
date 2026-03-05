"use client";

import { motion } from "framer-motion";

/* 
  Animated geometric abstract — floating shapes + gradient orb
  Used as the hero's right-side visual anchor
*/
export default function HeroVisual() {
    return (
        <div className="relative w-full h-full min-h-[400px] md:min-h-[500px]">
            {/* Gradient Orb — Core */}
            <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-br from-rose-500/20 via-orange-400/10 to-transparent blur-3xl" />
            </motion.div>

            {/* SVG Geometric Shapes */}
            <motion.svg
                viewBox="0 0 500 500"
                fill="none"
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                {/* Outer rotating ring */}
                <motion.circle
                    cx="250" cy="250" r="180"
                    stroke="#18181B" strokeWidth="1" strokeDasharray="8 12"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "250px 250px" }}
                />

                {/* Inner rotating ring (opposite) */}
                <motion.circle
                    cx="250" cy="250" r="130"
                    stroke="#18181B" strokeWidth="0.5" strokeDasharray="4 8"
                    initial={{ rotate: 360 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "250px 250px" }}
                />

                {/* Floating triangle */}
                <motion.polygon
                    points="250,120 310,220 190,220"
                    stroke="#18181B" strokeWidth="1.5" fill="none"
                    initial={{ y: 0 }}
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Floating square */}
                <motion.rect
                    x="310" y="280" width="60" height="60"
                    stroke="#18181B" strokeWidth="1" fill="#18181B" fillOpacity="0.03"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 45 }}
                    transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    style={{ transformOrigin: "340px 310px" }}
                />

                {/* Floating circle */}
                <motion.circle
                    cx="160" cy="310" r="25"
                    stroke="#E11D48" strokeWidth="1.5" fill="#E11D48" fillOpacity="0.06"
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformOrigin: "160px 310px" }}
                />

                {/* Connection lines */}
                <motion.line
                    x1="250" y1="220" x2="310" y2="280"
                    stroke="#18181B" strokeWidth="0.5" strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                />
                <motion.line
                    x1="250" y1="220" x2="160" y2="310"
                    stroke="#18181B" strokeWidth="0.5" strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.3 }}
                />

                {/* Small dots — nodes */}
                <circle cx="250" cy="170" r="3" fill="#18181B" />
                <circle cx="340" cy="310" r="3" fill="#18181B" />
                <circle cx="160" cy="310" r="2.5" fill="#E11D48" />

                {/* Decorative cross */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <line x1="390" y1="140" x2="410" y2="140" stroke="#18181B" strokeWidth="1" />
                    <line x1="400" y1="130" x2="400" y2="150" stroke="#18181B" strokeWidth="1" />
                </motion.g>

                {/* Another cross */}
                <motion.g
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.8, 0.3, 0.8] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <line x1="100" y1="180" x2="118" y2="180" stroke="#18181B" strokeWidth="1" />
                    <line x1="109" y1="171" x2="109" y2="189" stroke="#18181B" strokeWidth="1" />
                </motion.g>
            </motion.svg>

            {/* Grid texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
            linear-gradient(#18181B 1px, transparent 1px),
            linear-gradient(90deg, #18181B 1px, transparent 1px)
          `,
                    backgroundSize: "40px 40px"
                }}
            />
        </div>
    );
}
