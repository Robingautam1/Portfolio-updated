import { motion } from "framer-motion";

interface NanoBananaProps {
    variant?: "strategy" | "code" | "growth" | "hybrid";
    className?: string;
}

// Color palette for Nano Banana style (Flat, Pop)
const COLORS = {
    skin: "#FFD6A5",
    hair: "#1A1A1A",
    shirt: "#A8C686", // Brand Green
    pants: "#1A1A1A",
    accent: "#F1D302", // Brand Yellow
    props: "#71717A",
};

export default function NanoBanana({ variant = "hybrid", className = "" }: NanoBananaProps) {
    // Base Character
    const Character = (
        <g transform="translate(40, 20)">
            {/* Legs */}
            <path d="M35 120 L35 160" stroke={COLORS.pants} strokeWidth="12" strokeLinecap="round" />
            <path d="M65 120 L65 160" stroke={COLORS.pants} strokeWidth="12" strokeLinecap="round" />

            {/* Body */}
            <path d="M20 60 Q50 130 80 60 L80 120 L20 120 Z" fill={COLORS.shirt} />

            {/* Head */}
            <circle cx="50" cy="40" r="25" fill={COLORS.skin} />
            <path d="M25 35 Q50 10 75 35" fill={COLORS.hair} /> {/* Hair */}

            {/* Arms (Dynamic based on variant) */}
        </g>
    );

    return (
        <motion.svg
            viewBox="0 0 200 200"
            className={className}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Background blobs */}
            <circle cx="100" cy="100" r="80" fill={COLORS.accent} opacity="0.2" />

            {Character}

            {/* Props based on Variant */}
            {variant === "strategy" && (
                <g transform="translate(110, 60)">
                    <rect width="40" height="50" rx="4" fill="white" stroke={COLORS.props} strokeWidth="2" />
                    <path d="M115 75 L125 75" stroke={COLORS.props} strokeWidth="2" />
                    <path d="M115 85 L135 85" stroke={COLORS.props} strokeWidth="2" />
                    <path d="M115 95 L130 95" stroke={COLORS.props} strokeWidth="2" />
                </g>
            )}

            {variant === "code" && (
                <g transform="translate(10, 80)">
                    <rect width="50" height="35" rx="2" fill="#333" />
                    <text x="5" y="20" fontSize="10" fill="#0F0" fontFamily="monospace">{"< />"}</text>
                </g>
            )}

            {variant === "hybrid" && (
                <>
                    {/* Strategy Deck (Left) */}
                    <rect x="10" y="80" width="30" height="40" rx="2" fill="white" stroke="#333" strokeWidth="2" transform="rotate(-15 25 100)" />
                    {/* Code Terminal (Right) */}
                    <rect x="140" y="70" width="50" height="35" rx="2" fill="#333" transform="rotate(10 165 87)" />
                    <text x="145" y="90" fontSize="10" fill="#0F0" fontFamily="monospace" transform="rotate(10 165 87)">{">_"}</text>
                </>
            )}
        </motion.svg>
    );
}
