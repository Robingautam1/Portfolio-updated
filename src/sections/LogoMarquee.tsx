import { useInView } from '../hooks/useInView';

// Brand/company logos as text (simulating logos)
const brands = [
  'IIM Rohtak',
  'StockGro',
  'Finlatics',
  'CashCurious',
  'QuantMaster',
  'Google Cloud',
  'AWS',
  'React',
  'TypeScript',
  'Node.js',
];

export const LogoMarquee = () => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-zinc-950 overflow-hidden">
      {/* Section Label */}
      <div className="px-6 sm:px-8 lg:px-16 mb-8 sm:mb-12">
        <div 
          ref={ref}
          className={`overflow-hidden transition-all duration-1000 ease-luxury ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <span className="label-mono text-zinc-400">Trusted By & Built With</span>
        </div>
      </div>
      
      {/* Logo Marquee - Row 1 */}
      <div className="logo-marquee py-4 sm:py-6">
        <div className="logo-marquee-content">
          {/* First set */}
          {brands.map((brand, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center justify-center px-6 sm:px-10 lg:px-16"
            >
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-500 hover:text-zinc-300 transition-colors duration-300 whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {brands.map((brand, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center justify-center px-6 sm:px-10 lg:px-16"
            >
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-zinc-500 hover:text-zinc-300 transition-colors duration-300 whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Logo Marquee - Row 2 (Reverse) */}
      <div className="logo-marquee py-4 sm:py-6 mt-4">
        <div 
          className="logo-marquee-content"
          style={{ animationDirection: 'reverse', animationDuration: '25s' }}
        >
          {[...brands].reverse().map((brand, index) => (
            <div
              key={`third-${index}`}
              className="flex items-center justify-center px-6 sm:px-10 lg:px-16"
            >
              <span className="text-lg sm:text-xl lg:text-2xl font-medium tracking-tight text-zinc-600 hover:text-zinc-400 transition-colors duration-300 whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
          {[...brands].reverse().map((brand, index) => (
            <div
              key={`fourth-${index}`}
              className="flex items-center justify-center px-6 sm:px-10 lg:px-16"
            >
              <span className="text-lg sm:text-xl lg:text-2xl font-medium tracking-tight text-zinc-600 hover:text-zinc-400 transition-colors duration-300 whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
