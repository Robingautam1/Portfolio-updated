import { useInView } from '../hooks/useInView';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  tag: string;
  metric: string;
  color: string;
}

const projects: Project[] = [
  {
    name: 'CashCurious',
    description: 'Gamified Financial Literacy',
    tag: 'EdTech',
    metric: '10K+ Users',
    color: 'bg-coral',
  },
  {
    name: 'QuantMaster',
    description: '25+ JS Calculators',
    tag: 'FinTech',
    metric: 'Open Source',
    color: 'bg-lavender',
  },
  {
    name: 'StockGro',
    description: '1,300+ Students Onboarded',
    tag: 'Growth',
    metric: 'Community',
    color: 'bg-sky',
  },
  {
    name: 'Finlatics',
    description: '15% STP Improvement',
    tag: 'Analytics',
    metric: 'Data-Driven',
    color: 'bg-lemon',
  },
];

// Floating decorations
const FloatingDecorations = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute w-32 h-32 bg-coral/20 rounded-full top-[10%] right-[5%] floating-shape-1" />
    <div className="absolute w-24 h-24 bg-lavender/20 rounded-full bottom-[20%] left-[3%] floating-shape-2" />
    <div className="absolute w-16 h-16 bg-lemon/30 rounded-full top-[40%] right-[10%] floating-shape-3" />
  </div>
);

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`group relative py-10 sm:py-14 lg:py-16 cursor-pointer transition-all duration-700 ease-luxury ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Card Background */}
      <div className={`absolute inset-0 ${project.color} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mx-4 sm:-mx-8 px-4 sm:px-8`} />
      
      <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6">
        <div className="flex-1">
          {/* Tags */}
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <span className="label-mono text-zinc-600">{project.tag}</span>
            <span className="w-1 h-1 rounded-full bg-zinc-400" />
            <span className="label-mono text-zinc-500">{project.metric}</span>
          </div>
          
          {/* Title */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-zinc-950 group-hover:translate-x-2 transition-transform duration-500">
            {project.name}
          </h3>
          
          {/* Description */}
          <p className="mt-2 sm:mt-3 text-lg sm:text-xl lg:text-2xl font-serif font-light text-zinc-600">
            {project.description}
          </p>
        </div>
        
        {/* Arrow Button */}
        <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-zinc-300 group-hover:bg-zinc-950 group-hover:border-zinc-950 transition-all duration-500 flex-shrink-0">
          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2] text-zinc-950 group-hover:text-white transition-colors duration-500" />
        </div>
      </div>
      
      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-zinc-200 group-hover:bg-zinc-300 transition-colors" />
    </div>
  );
};

export const Methodology = () => {
  const [titleRef, titleInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [imageRef, imageInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="work" className="relative min-h-screen bg-peach overflow-hidden">
      <FloatingDecorations />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* Sticky Sidebar */}
        <div className="lg:col-span-5 px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-0">
          <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center">
            <div ref={titleRef}>
              {/* Label */}
              <div className="overflow-hidden mb-4 sm:mb-6">
                <span 
                  className={`label-mono block transition-all duration-1000 ease-luxury ${
                    titleInView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                >
                  Selected Work
                </span>
              </div>
              
              {/* Title */}
              <div className="overflow-hidden">
                <h2 
                  className={`heading-section transition-all duration-1000 ease-luxury ${
                    titleInView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                  style={{ transitionDelay: '0.1s' }}
                >
                  Stories,
                </h2>
              </div>
              <div className="overflow-hidden">
                <h2 
                  className={`heading-section transition-all duration-1000 ease-luxury ${
                    titleInView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                  style={{ transitionDelay: '0.15s' }}
                >
                  not just
                </h2>
              </div>
              <div className="overflow-hidden">
                <h2 
                  className={`heading-section transition-all duration-1000 ease-luxury ${
                    titleInView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                  style={{ transitionDelay: '0.2s' }}
                >
                  code.
                </h2>
              </div>
              
              {/* Description */}
              <div className="overflow-hidden mt-6 sm:mt-8">
                <p 
                  className={`body-serif max-w-md transition-all duration-1000 ease-luxury ${
                    titleInView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                  style={{ transitionDelay: '0.3s' }}
                >
                  Each project represents a journey of turning complex challenges into elegant solutions.
                </p>
              </div>
              
              {/* Illustration */}
              <div 
                ref={imageRef}
                className={`mt-8 sm:mt-12 max-w-xs transition-all duration-1200 ease-luxury ${
                  imageInView ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
                }`}
                style={{ transitionDelay: '0.4s' }}
              >
                <img 
                  src="/team-illustration.png" 
                  alt="Team Collaboration" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="lg:col-span-7 px-6 sm:px-8 lg:px-12 pb-16 sm:pb-20 lg:pb-32 pt-8 lg:pt-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
          
          {/* View All Button */}
          <div className="mt-12 sm:mt-16">
            <a
              href="#"
              className="inline-flex items-center gap-3 text-zinc-950 hover:text-zinc-600 transition-colors group"
            >
              <span className="text-lg sm:text-xl font-medium">View All Projects</span>
              <ExternalLink className="w-5 h-5 stroke-[1.5] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
