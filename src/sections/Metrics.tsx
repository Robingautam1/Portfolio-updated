import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

interface Metric {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

const metrics: Metric[] = [
  { value: 1.3, suffix: 'K+', label: 'Students Reached', decimals: 1 },
  { value: 60, suffix: '%', label: 'Research Time Saved', decimals: 0 },
  { value: 25, suffix: '+', label: 'Tools Built', decimals: 0 },
];

// Floating decorations
const FloatingDecorations = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute w-40 h-40 bg-coral/25 rounded-full top-[15%] left-[5%] floating-shape-1" />
    <div className="absolute w-32 h-32 bg-lavender/25 rounded-full bottom-[20%] right-[8%] floating-shape-2" />
    <div className="absolute w-20 h-20 bg-lemon/40 rounded-full top-[50%] right-[20%] floating-shape-3" />
    <div className="absolute w-16 h-16 bg-sky/30 rounded-full bottom-[30%] left-[15%] floating-shape-4" />
    {/* Decorative shapes */}
    <div className="absolute w-24 h-24 border-4 border-zinc-950/5 rounded-full top-[60%] left-[25%]" />
    <div className="absolute w-3 h-3 bg-zinc-950 rounded-full top-[25%] right-[30%]" />
    <div className="absolute w-2 h-2 bg-zinc-950 rounded-full bottom-[40%] right-[35%]" />
  </div>
);

const MetricItem: React.FC<{ metric: Metric; index: number; isInView: boolean }> = ({
  metric,
  index,
  isInView,
}) => {
  const count = useCountUp({
    end: metric.value,
    suffix: metric.suffix,
    duration: 2500,
    decimals: metric.decimals || 0,
    enabled: isInView,
  });

  return (
    <div
      className={`text-center transition-all duration-1000 ease-luxury ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      <div className="counter-number">{count}</div>
      <p className="label-mono mt-4 sm:mt-6 text-zinc-600">{metric.label}</p>
    </div>
  );
};

export const Metrics = () => {
  const [sectionRef, sectionInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [metricsRef, metricsInView] = useInView<HTMLDivElement>({ threshold: 0.3 });
  const [imageRef, imageInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="relative min-h-screen bg-lavender overflow-hidden flex items-center">
      <FloatingDecorations />
      
      <div className="w-full px-6 sm:px-8 lg:px-16 py-20 sm:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7">
            {/* Section Label */}
            <div ref={sectionRef} className="mb-8 sm:mb-12">
              <div className="overflow-hidden">
                <span 
                  className={`label-mono block transition-all duration-1000 ease-luxury ${
                    sectionInView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                >
                  The Numbers
                </span>
              </div>
              
              {/* Title */}
              <div className="overflow-hidden mt-4 sm:mt-6">
                <h2 
                  className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.95] transition-all duration-1000 ease-luxury ${
                    sectionInView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                  style={{ transitionDelay: '0.1s' }}
                >
                  A few numbers
                </h2>
              </div>
              <div className="overflow-hidden">
                <h2 
                  className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.95] transition-all duration-1000 ease-luxury ${
                    sectionInView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                  style={{ transitionDelay: '0.15s' }}
                >
                  behind the
                </h2>
              </div>
              <div className="overflow-hidden">
                <h2 
                  className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.95] transition-all duration-1000 ease-luxury ${
                    sectionInView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                  style={{ transitionDelay: '0.2s' }}
                >
                  impact.
                </h2>
              </div>
              
              {/* Description */}
              <div className="overflow-hidden mt-6 sm:mt-8">
                <p 
                  className={`body-serif max-w-lg transition-all duration-1000 ease-luxury ${
                    sectionInView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                  style={{ transitionDelay: '0.3s' }}
                >
                  These numbers represent real outcomes, measurable growth, and the tangible difference made through strategic digital solutions.
                </p>
              </div>
            </div>
            
            {/* Metrics Grid */}
            <div ref={metricsRef} className="grid grid-cols-3 gap-4 sm:gap-8">
              {metrics.map((metric, index) => (
                <MetricItem
                  key={metric.label}
                  metric={metric}
                  index={index}
                  isInView={metricsInView}
                />
              ))}
            </div>
          </div>
          
          {/* Right: Illustration */}
          <div 
            ref={imageRef}
            className={`lg:col-span-5 transition-all duration-1200 ease-luxury ${
              imageInView ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-12 opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="relative">
              <img 
                src="/analytics-illustration.png" 
                alt="Analytics and Data" 
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
