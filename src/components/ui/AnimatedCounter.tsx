"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
    target: number;
    suffix?: string;
    prefix?: string;
    className?: string;
    duration?: number;
}

export default function AnimatedCounter({
    target,
    suffix = "",
    prefix = "",
    className = "",
    duration = 2,
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        duration: duration * 1000,
        bounce: 0,
    });
    const [display, setDisplay] = useState("0");

    useEffect(() => {
        if (isInView) {
            motionValue.set(target);
        }
    }, [isInView, motionValue, target]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (target >= 100) {
                setDisplay(Math.round(latest).toLocaleString());
            } else {
                setDisplay(Math.round(latest).toString());
            }
        });
        return unsubscribe;
    }, [springValue, target]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            {display}
            {suffix}
        </span>
    );
}
