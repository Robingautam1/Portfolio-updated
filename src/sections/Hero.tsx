import { motion } from "framer-motion";
import MagneticButton from "../components/ui/MagneticButton";
import RevealText from "../components/ui/RevealText";
import { LUXURY_EASE } from "@/lib/utils";

export default function Hero() {
  const stats = [
    { label: "Students onboarded during StockGro internship", value: "1,200+" },
    { label: "Financial tools built and deployed", value: "25+" },
    { label: "Brand sponsors secured for Riwaaz 2.0", value: "3+" },
    { label: "Startup founded: robingautam.in", value: "1" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col pt-6 pb-0 px-6 md:px-12 bg-bg overflow-hidden border-b border-black/10">
      {/* Top Navigation */}
      <nav className="flex justify-between items-center z-20">
        <span className="text-sm font-bold tracking-widest uppercase">Robin Gautam</span>
        <MagneticButton
          className="text-sm font-medium border border-fg/20 px-6 py-2 rounded-full hover:bg-fg hover:text-bg transition-colors duration-300"
        >
          Menu
        </MagneticButton>
      </nav>

      {/* Main Hero Content - TWO COLUMN */}
      <div className="flex-1 flex items-center relative z-10 mt-8 md:mt-0">
        <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">

          {/* Left Column: Text */}
          <div className="md:col-span-7 lg:col-span-7">
            {/* H1 */}
            <div className="flex flex-col items-start justify-start">
              <RevealText
                text="MBA STUDENT."
                className="text-[11vw] md:text-[7rem] lg:text-[8rem] font-black tracking-[-0.08em] leading-[0.85] text-fg uppercase text-left"
                delay={0}
              />
              <RevealText
                text="Who Actually Ships."
                className="text-[9vw] md:text-[5.5rem] lg:text-[6.5rem] font-black tracking-[-0.06em] leading-[0.85] font-serif italic text-fg text-left"
                delay={0.15}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: LUXURY_EASE }}
              className="mt-8 md:mt-10 max-w-xl flex flex-col items-start text-left"
            >
              {/* Subheadline */}
              <p className="text-base md:text-lg text-muted leading-relaxed mb-8">
                I'm the only person in my IIM cohort who also built and deployed three financial tools this year. MBA at IIM Rohtak. Founder at robingautam.in. I close the gap between strategy and execution.
              </p>

              {/* CTAs */}
              <div className="flex flex-col items-start gap-4">
                <div className="flex gap-6 items-center">
                  <MagneticButton className="bg-fg text-bg px-10 py-5 rounded-full font-bold tracking-wide hover:scale-105 transition-transform duration-300">
                    Get in Touch
                  </MagneticButton>
                  <button className="text-sm font-medium underline underline-offset-4 decoration-muted hover:decoration-fg transition-all">
                    See My Work →
                  </button>
                </div>
                <a
                  href="https://robingautam.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted underline underline-offset-4 decoration-muted/50 hover:decoration-fg hover:text-fg transition-all tracking-wide"
                >
                  Visit robingautam.in ↗
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Photo Placeholder */}
          <div className="md:col-span-5 lg:col-span-5 flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 2.5 }}
              transition={{ delay: 0.3, duration: 1.2, ease: LUXURY_EASE }}
              className="relative w-[280px] h-[360px] md:w-[320px] md:h-[420px] lg:w-[360px] lg:h-[460px]"
            >
              {/* Card with grain texture */}
              <div className="w-full h-full rounded-2xl bg-fg/90 flex items-center justify-center shadow-2xl overflow-hidden relative">
                {/* Grain texture overlay */}
                <div
                  className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                    backgroundSize: "128px 128px",
                  }}
                />
                {/* Instruction text */}
                <div className="text-center z-10 px-8">
                  <p className="text-bg/60 text-[10px] tracking-[0.3em] uppercase font-bold mb-2">
                    Your Photo
                  </p>
                  <p className="text-bg/40 text-[9px] tracking-[0.2em] uppercase">
                    Add your photo here
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Grid - ALL WITH NUMBERS */}
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
              <h3 className="text-4xl md:text-6xl font-serif font-bold mb-2 tracking-tight">{stat.value}</h3>
              <p className="label-swiss text-[10px] md:text-xs tracking-widest opacity-60 uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
