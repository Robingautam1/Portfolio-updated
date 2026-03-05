"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    tech: string[];
    link: string;
}

const projects: Project[] = [
    {
        id: "01",
        title: "NomadSync",
        category: "Mobile Application",
        description: "A high-end travel companion app focusing on 'Rugged Elegance'. Features offline sync, glassmorphism UI, and fluid animations.",
        tech: ["React Native", "Framer Motion", "Supabase"],
        link: "#"
    },
    {
        id: "02",
        title: "N8n Automation",
        category: "Workflow System",
        description: "Automated B2B outreach infrastructure processing 1000+ leads/day. Integrates Gmail, Telegram, and AI analysis agents.",
        tech: ["n8n", "Node.js", "OpenAI API"],
        link: "#"
    },
    {
        id: "03",
        title: "Pixelvise",
        category: "Operations Platform",
        description: "Internal tooling for agency operations management. Streamlines project tracking and client reporting.",
        tech: ["Next.js 14", "PostgreSQL", "Tailwind"],
        link: "#"
    },
    {
        id: "04",
        title: "Industrial Spec",
        category: "Design System",
        description: "A specialized print-ready component system for generating industrial-style specification sheets from digital data.",
        tech: ["React", "CSS Print", "SVG"],
        link: "#"
    }
];

export default function TechnicalGrid() {
    return (
        <section className="relative w-full py-32 bg-paper">
            <div className="container-wide">
                <div className="flex items-end justify-between mb-24 border-b border-line-light pb-8">
                    <h2 className="text-display-lg text-ink">Selected Works</h2>
                    <span className="text-technical hidden md:block">Index 2024-25</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative block cursor-pointer"
        >
            {/* Blueprint Overlay Background */}
            <div className="absolute -inset-6 border border-line-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg -z-10 bg-white/50" />

            {/* Blueprint Grid Lines (Decor) */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-accent-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />

            <div className="flex justify-between items-start mb-6">
                <span className="text-technical text-text-subtle group-hover:text-accent-highlight transition-colors">
                    {project.id} // {project.category}
                </span>
                <ArrowUpRight className="w-5 h-5 text-text-subtle group-hover:text-ink transition-colors" />
            </div>

            <h3 className="text-4xl font-medium text-ink mb-4 group-hover:translate-x-2 transition-transform duration-300">
                {project.title}
            </h3>

            <p className="text-text-graphite text-lg leading-relaxed mb-6 max-w-md group-hover:text-ink transition-colors">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                    <span
                        key={t}
                        className="px-3 py-1 border border-line-light rounded-full text-xs font-mono text-text-subtle bg-white"
                    >
                        {t}
                    </span>
                ))}
            </div>

            {/* Hover Line Animation */}
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-ink group-hover:w-full transition-all duration-700 ease-in-out mt-8" />
        </motion.div>
    );
}
