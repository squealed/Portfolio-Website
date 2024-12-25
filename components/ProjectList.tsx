"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  date: string;
  github?: string;
  website?: string;
}

export default function ProjectList() {
  const projects: Project[] = [
    {
      title: "DimoDash",
      description: "A comprehensive dashboard enabling users to track and analyze their DIMO rewards. Built with Next.js and TailwindCSS with NextAuth + Stripe, featuring real-time data updates and interactive visualizations.",
      date: "2024",
      website: "https://dimodash.com"
    },
    {
      title: "OMGCrazyKitty",
      description: "A Linktree-inspired platform with advanced analytics capabilities. Tracks traffic sources, user engagement, and provides detailed insights through an intuitive dashboard.",
      date: "2024",
      github: "https://github.com/squealed/crazy-kitty",
      website: "https://omgcrazykitty.com"
    },
    {
      title: "Fragment Scraper",
      description: "An efficient web scraper for Fragment.com built with Golang. Features automated username data collection, analysis, and export capabilities with minimal system resource usage.",
      date: "2023",
      github: "https://github.com/squealed/fragment-scraper"
    },
    {
      title: "Tinder API Research",
      description: "Comprehensive reverse engineering of Tinder's mobile API architecture and authentication flow. Documented API endpoints, request/response patterns, and security mechanisms.",
      date: "2023"
    },
    {
      title: "Arkose FunCaptcha Analysis",
      description: "Deep dive analysis of Arkose Labs' FunCaptcha system, exploring its implementation, security measures, and challenge-response mechanisms.",
      date: "2023"
    }
  ];

  return (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="bg-black/50 border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">{project.date}</span>
                {project.website && (
                  <Link href={project.website} className="text-black bg-white hover:bg-gray-200 transition-colors rounded-full p-2">
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} className="text-black bg-white hover:bg-gray-200 transition-colors rounded-full p-2">
                    <Github className="w-5 h-5" />
                  </Link>
                )}
              </div>
            </div>
            <p className="text-gray-300">{project.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}