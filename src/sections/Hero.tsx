import { motion } from "framer-motion";
import MagneticButton from "../components/ui/MagneticButton";
import RevealText from "../components/ui/RevealText";
import NanoBanana from "../components/NanoBanana";
import { LUXURY_EASE } from "@/lib/utils";

export default function Hero() {
  const stats = [
    { label: "Students Onboarded", value: "1,200+" },
    { label: "Financial Tools", value: "25+" },
    { label: "Largest Event", value: "Riwaaz 2.0" },
    { label: "Multi-City Impact", value: "CorStone" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col pt-6 pb-12 px-6 md:px-12 bg-bg overflow-hidden">
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

      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col justify-center relative z-10 mt-16 md:mt-0">
        <div className="max-w-[90vw] md:max-w-5xl relative">
          <RevealText
            text="Real Digital"
            className="text-[13vw] md:text-[8rem] font-bold tracking-tighter leading-[0.85] text-fg"
            delay={0}
          />
          <div className="ml-[5vw] md:ml-[12rem]">
            <RevealText
              text="Impact."
              className="text-[13vw] md:text-[8rem] font-bold tracking-tighter leading-[0.85] font-serif italic text-fg"
              delay={0.15}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: LUXURY_EASE }}
            className="mt-12 md:mt-16 max-w-xl md:ml-2"
          >
            <h2 className="text-xl md:text-3xl font-light leading-snug mb-8">
              Built from strategy, executed in code.
            </h2>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-muted max-w-md leading-relaxed">
                I turn ideas into systems and people into teams.<br />
                MBA @ IIM Rohtak • Ecosystem Builder
              </p>
              <div className="flex gap-6 items-center">
                <MagneticButton className="bg-fg text-bg px-8 py-4 rounded-full font-medium tracking-wide hover:opacity-90 transition-opacity">
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

      {/* Stats Grid (Bottom) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 border-t border-fg/10 pt-8 mt-16 z-10 relative">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.1, duration: 1, ease: LUXURY_EASE }}
          >
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-2">{stat.value}</h3>
            <p className="label-swiss text-[10px] md:text-xs tracking-widest opacity-60 uppercase">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Illustration Layer */}
      <div className="absolute top-[20%] right-[-15%] md:right-[5%] w-[70vw] md:w-[40vw] max-w-[600px] pointer-events-none opacity-30 md:opacity-80 mix-blend-multiply">
        <NanoBanana variant="hybrid" className="w-full h-full text-accent" />
      </div>

      {/* Background Gradient Mesh */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
