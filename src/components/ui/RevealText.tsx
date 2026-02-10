import { motion } from "framer-motion";
import { LUXURY_EASE } from "@/lib/utils";
import React from "react";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}

export default function RevealText({
  text,
  className = "",
  delay = 0,
  as: Tag = "h1",
}: RevealTextProps) {
  // Handle empty or undefined text
  if (!text) return null;

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
            {/* @ts-ignore: Dynamic tag rendering */}
            <Tag className={className}>{line}</Tag>
          </motion.div>
        </div>
      ))}
    </>
  );
}
