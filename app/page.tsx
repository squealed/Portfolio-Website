"use client";

import { Github, Linkedin, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SpaceBackground from "@/components/SpaceBackground";
import ProjectList from "@/components/ProjectList";
import TechStack from "@/components/TechStack";
import Head from "next/head";

export default function Home() {
  return (
    
    <main className="min-h-screen text-white relative overflow-hidden">
      <SpaceBackground />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Neil Walter
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Software Developer & Reverse Engineer
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" asChild>
              <Link href="https://github.com/squealed" className="flex items-center gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="https://linkedin.com/in/neil-walter" className="flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/resume.pdf" className="flex items-center gap-2" target="_blank">
                <FileText className="w-5 h-5" />
                Resume
              </Link>
            </Button>
          </div>
        </div>

        {/* Tech Stack Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Tech Stack</h2>
          <TechStack />
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <ProjectList />
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-gray-300 mb-8">
            Interested in collaborating? Let's build something amazing together.
          </p>
          <Button variant="secondary" asChild>
            <Link href="mailto:neilwalter7@gmail.com">
              Contact Me
            </Link>
          </Button>
        </section>
      </div>
    </main>
  );
}