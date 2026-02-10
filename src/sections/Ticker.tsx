import { useInView } from '../hooks/useInView';

const skills = [
  'AI STRATEGY',
  'NEXT.JS ARCHITECTURE',
  'FINANCIAL MODELING',
  'GROWTH HACKING',
  'ECOSYSTEM BUILDING',
  'TEAM LEADERSHIP',
  'PRODUCT STRATEGY',
  'DATA ANALYTICS',
];

// Floating decorative elements
const FloatingDecorations = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute w-24 h-24 bg-coral/30 rounded-full top-4 left-[10%] floating-shape-1" />
    <div className="absolute w-16 h-16 bg-lavender/30 rounded-full bottom-4 right-[15%] floating-shape-2" />
    <div className="absolute w-8 h-8 bg-lemon/50 rounded-full top-1/2 left-[5%] floating-shape-3" />
    <div className="absolute w-12 h-12 bg-sky/30 rounded-full top-1/3 right-[8%] floating-shape-4" />
  </div>
);

export const Ticker = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-cream overflow-hidden">
      <FloatingDecorations />
      
      {/* Section Label */}
      <div className="px-6 sm:px-8 lg:px-16 mb-8 sm:mb-12">
        <div 
          ref={ref}
          className={`overflow-hidden transition-all duration-1000 ease-luxury ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <span className="label-mono">What I Do</span>
        </div>
      </div>
      
      {/* Marquee */}
      <div className="marquee-container py-4 sm:py-6">
        <div className="marquee-content">
          {/* First set */}
          {skills.map((skill, index) => (
            <span
              key={`first-${index}`}
              className="text-hollow text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tighter mx-4 sm:mx-8 lg:mx-12 inline-block cursor-default select-none"
            >
              {skill}
              <span className="mx-4 sm:mx-8 lg:mx-12 text-zinc-300">•</span>
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {skills.map((skill, index) => (
            <span
              key={`second-${index}`}
              className="text-hollow text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tighter mx-4 sm:mx-8 lg:mx-12 inline-block cursor-default select-none"
            >
              {skill}
              <span className="mx-4 sm:mx-8 lg:mx-12 text-zinc-300">•</span>
            </span>
          ))}
        </div>
      </div>
      
      {/* Second row - reverse direction */}
      <div className="marquee-container py-4 sm:py-6 mt-4">
        <div 
          className="marquee-content"
          style={{ animationDirection: 'reverse', animationDuration: '35s' }}
        >
          {[...skills].reverse().map((skill, index) => (
            <span
              key={`third-${index}`}
              className="text-hollow text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tighter mx-4 sm:mx-6 lg:mx-8 inline-block cursor-default select-none opacity-60"
            >
              {skill}
              <span className="mx-4 sm:mx-6 lg:mx-8 text-zinc-300">◆</span>
            </span>
          ))}
          {[...skills].reverse().map((skill, index) => (
            <span
              key={`fourth-${index}`}
              className="text-hollow text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tighter mx-4 sm:mx-6 lg:mx-8 inline-block cursor-default select-none opacity-60"
            >
              {skill}
              <span className="mx-4 sm:mx-6 lg:mx-8 text-zinc-300">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
