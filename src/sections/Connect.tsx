import { useInView } from '../hooks/useInView';
import { Linkedin, Github, FileText, Mail, ArrowUpRight, MapPin } from 'lucide-react';

// Floating decorations
const FloatingDecorations = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute w-40 h-40 bg-coral/25 rounded-full top-[10%] left-[5%] floating-shape-1" />
    <div className="absolute w-32 h-32 bg-lavender/25 rounded-full bottom-[20%] right-[8%] floating-shape-2" />
    <div className="absolute w-24 h-24 bg-lemon/40 rounded-full top-[50%] right-[20%] floating-shape-3" />
    <div className="absolute w-16 h-16 bg-sky/30 rounded-full bottom-[30%] left-[15%] floating-shape-4" />
    {/* Decorative elements */}
    <div className="absolute w-20 h-20 border-4 border-zinc-950/10 rounded-full top-[30%] right-[30%]" />
    <div className="absolute w-3 h-3 bg-zinc-950 rounded-full top-[60%] left-[25%]" />
    <div className="absolute w-2 h-2 bg-zinc-950 rounded-full top-[25%] right-[15%]" />
  </div>
);

export const Connect = () => {
  const [titleRef, titleInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [contentRef, contentInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [imageRef, imageInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <footer id="contact" className="relative min-h-screen bg-mint overflow-hidden flex items-center">
      <FloatingDecorations />
      
      <div className="w-full px-6 sm:px-8 lg:px-16 py-20 sm:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-7">
            {/* Main CTA */}
            <div ref={titleRef}>
              <div className="overflow-hidden">
                <h2 
                  className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9] transition-all duration-1000 ease-luxury ${
                    titleInView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                >
                  Ready when
                </h2>
              </div>
              <div className="overflow-hidden">
                <h2 
                  className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[0.9] transition-all duration-1000 ease-luxury ${
                    titleInView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                  style={{ transitionDelay: '0.1s' }}
                >
                  you are!
                </h2>
              </div>
              
              {/* Description */}
              <div className="overflow-hidden mt-6 sm:mt-8">
                <p 
                  className={`body-serif max-w-lg transition-all duration-1000 ease-luxury ${
                    titleInView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}
                  style={{ transitionDelay: '0.2s' }}
                >
                  Whether you're looking to collaborate, need strategic guidance, or just want to chat about the future of fintech — I'm here.
                </p>
              </div>
            </div>
            
            {/* Email Button */}
            <div 
              ref={contentRef}
              className={`mt-10 sm:mt-12 transition-all duration-1000 ease-luxury ${
                contentInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              <a
                href="mailto:robin.gautam@example.com"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto h-20 sm:h-24 lg:h-28 px-8 sm:px-12 lg:px-16 bg-zinc-950 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
              >
                {/* Liquid fill effect */}
                <span className="absolute inset-0 bg-zinc-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-luxury" />
                
                <span className="relative z-10 flex items-center gap-4 text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white">
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
                  EMAIL ROBIN
                  <ArrowUpRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </a>
            </div>
            
            {/* Social Links */}
            <div 
              className={`mt-10 sm:mt-12 transition-all duration-1000 ease-luxury ${
                contentInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-white transition-colors"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-white transition-colors"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
                  <span className="text-sm font-medium">Resume</span>
                </a>
              </div>
            </div>
            
            {/* Location */}
            <div 
              className={`mt-8 sm:mt-10 transition-all duration-1000 ease-luxury ${
                contentInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: '0.5s' }}
            >
              <div className="flex items-center gap-2 text-zinc-600">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">IIM Rohtak, Haryana, India</span>
              </div>
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
                src="/contact-illustration.png" 
                alt="Get in Touch" 
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="mt-20 sm:mt-28 lg:mt-32 pt-8 border-t border-zinc-950/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="label-mono text-zinc-500">
              © {new Date().getFullYear()} Robin Gautam. All rights reserved.
            </span>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-zinc-600 hover:text-zinc-950 transition-colors">Privacy</a>
              <a href="#" className="text-sm text-zinc-600 hover:text-zinc-950 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
