import { useInView } from '../hooks/useInView';
import { ArrowUpRight, Clock, Tag } from 'lucide-react';

interface Article {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  color: string;
}

const articles: Article[] = [
  {
    title: 'The Complete Guide to Financial Literacy for Students',
    excerpt: 'How gamification can transform the way young people learn about money management and investing.',
    category: 'EdTech',
    readTime: '8 min read',
    color: 'bg-coral',
  },
  {
    title: 'Building Scalable JavaScript Calculators',
    excerpt: 'A deep dive into creating 25+ financial calculators that handle complex computations with ease.',
    category: 'Engineering',
    readTime: '12 min read',
    color: 'bg-lavender',
  },
  {
    title: 'Onboarding 1,300+ Students: A Growth Case Study',
    excerpt: 'The strategies and tactics used to build a thriving community of financially literate students.',
    category: 'Growth',
    readTime: '6 min read',
    color: 'bg-sky',
  },
];

// Floating decorations
const FloatingDecorations = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute w-28 h-28 bg-coral/20 rounded-full top-[10%] right-[8%] floating-shape-1" />
    <div className="absolute w-20 h-20 bg-lavender/20 rounded-full bottom-[15%] left-[5%] floating-shape-2" />
    <div className="absolute w-12 h-12 bg-lemon/30 rounded-full top-[40%] left-[10%] floating-shape-3" />
  </div>
);

const ArticleCard: React.FC<{ article: Article; index: number }> = ({ article, index }) => {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`group relative transition-all duration-700 ease-luxury ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <article className="card-hover bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl">
        {/* Card Header with Color */}
        <div className={`${article.color} h-32 sm:h-40 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
            <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-zinc-800">
              <Tag className="w-3 h-3" />
              {article.category}
            </span>
          </div>
        </div>
        
        {/* Card Content */}
        <div className="p-5 sm:p-6 lg:p-8">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 group-hover:text-zinc-600 transition-colors line-clamp-2">
            {article.title}
          </h3>
          
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-600 line-clamp-2">
            {article.excerpt}
          </p>
          
          {/* Footer */}
          <div className="mt-5 sm:mt-6 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm text-zinc-500">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
            
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-950 hover:text-zinc-600 transition-colors group/link"
            >
              Read More
              <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export const Articles = () => {
  const [titleRef, titleInView] = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-sky overflow-hidden">
      <FloatingDecorations />
      
      <div className="px-6 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div ref={titleRef} className="mb-12 sm:mb-16 lg:mb-20">
          <div className="overflow-hidden">
            <span 
              className={`label-mono block transition-all duration-1000 ease-luxury ${
                titleInView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
            >
              Featured Articles
            </span>
          </div>
          
          <div className="overflow-hidden mt-4 sm:mt-6">
            <h2 
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.95] transition-all duration-1000 ease-luxury ${
                titleInView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              Insights &
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-[0.95] transition-all duration-1000 ease-luxury ${
                titleInView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{ transitionDelay: '0.15s' }}
            >
              Thoughts
            </h2>
          </div>
          
          <div className="overflow-hidden mt-4 sm:mt-6">
            <p 
              className={`body-serif max-w-xl transition-all duration-1000 ease-luxury ${
                titleInView ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}
              style={{ transitionDelay: '0.25s' }}
            >
              Sharing knowledge and experiences from building products and leading teams.
            </p>
          </div>
        </div>
        
        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={article.title} article={article} index={index} />
          ))}
        </div>
        
        {/* View All Link */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-zinc-950 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-zinc-800 transition-colors"
          >
            View All Articles
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
