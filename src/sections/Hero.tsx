import { motion } from "framer-motion";
import MagneticButton from "../components/ui/MagneticButton";
import RevealText from "../components/ui/RevealText";
import WireframeGlobe from "../components/WireframeGlobe"; // Import new component
import { LUXURY_EASE } from "@/lib/utils";

export default function Hero() {
  const stats = [
    { label: "Students Onboarded", value: "1,200+" },
    { label: "Financial Tools", value: "25+" },
    { label: "Largest Event", value: "Riwaaz 2.0" },
    { label: "Multi-City Impact", value: "CorStone" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col pt-6 pb-0 px-6 md:px-12 bg-bg overflow-hidden border-b border-black/10">
      {/* Top Navigation */}
      <nav className="flex justify-between items-center z-20">
        <span className="text-sm font-bold tracking-widest uppercase">Robin Gautam</span>
        <MagneticButton
          href="mailto:robingautam@outlook.com"
          className="text-sm font-medium border border-fg/20 px-6 py-2 rounded-full hover:bg-fg hover:text-bg transition-colors duration-300"
        >
          Menu
        </MagneticButton>
      </nav>

      {/* Main Hero Content - STRICT LEFT ALIGNMENT */}
      <div className="flex-1 flex flex-col justify-center relative z-10 mt-16 md:mt-24">
        <div className="w-full max-w-[95vw] md:max-w-7xl relative">

          {/* H1 - font-black, tracking -0.08em, leading 0.85 */}
          <div className="flex flex-col items-start justify-start">
            <RevealText
              text="REAL DIGITAL"
              className="text-[12vw] md:text-[9rem] font-black tracking-[-0.08em] leading-[0.85] text-fg uppercase text-left"
              delay={0}
            />
            <RevealText
              text="IMPACT."
              className="text-[12vw] md:text-[9rem] font-black tracking-[-0.08em] leading-[0.85] font-serif italic text-fg text-left"
              delay={0.15}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: LUXURY_EASE }}
            className="mt-12 md:mt-16 w-full max-w-2xl flex flex-col items-start text-left"
          >
            {/* Subhead */}
            <h2 className="text-xl md:text-3xl font-light leading-snug mb-8 text-left">
              Built from strategy, executed in code.
            </h2>

            <div className="flex flex-col items-start space-y-8">
              <p className="text-base md:text-lg text-muted max-w-md leading-relaxed text-left">
                I turn ideas into systems and people into teams.<br />
                MBA @ IIM Rohtak • Ecosystem Builder
              </p>

              {/* Magnetic CTA */}
              <div className="flex gap-6 items-center pl-1">
                <MagneticButton className="bg-fg text-bg px-10 py-5 rounded-full font-bold tracking-wide hover:scale-105 transition-transform duration-300">
                  Start a Conversation
                </MagneticButton>
                <button className="text-sm font-medium underline underline-offset-4 decoration-muted hover:decoration-fg transition-all">
                  View Selected Work
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Grid - FINANCIAL TABLE STYLE */}
      <div className="border-t border-black/10 mt-auto z-10 relative">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + i * 0.1, duration: 1, ease: LUXURY_EASE }}
              className={`py-8 md:py-12 pr-8 ${i !== stats.length - 1 ? 'md:border-r border-black/10' : ''}`}
            >
              {/* Huge Numbers - text-6xl */}
              <h3 className="text-4xl md:text-6xl font-serif font-bold mb-2 tracking-tight">{stat.value}</h3>
              <p className="label-swiss text-[10px] md:text-xs tracking-widest opacity-60 uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Visual Layer - Wireframe Globe (Subtle, Background) */}
      <div className="absolute top-[15%] right-[-10%] md:right-[5%] w-[50vw] md:w-[35vw] max-w-[500px] pointer-events-none opacity-40 text-fg bg-bg rounded-full">
        <WireframeGlobe />
      </div>
    </section>
  );
}
