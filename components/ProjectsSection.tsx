"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mt-24 scroll-mt-24">
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.32em] text-secondary">Projets</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Travaux récents.</h2>
          <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Des applications pensées pour être élégantes, fonctionnelles et parfaitement optimisées sur tous les écrans.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="glass-card group overflow-hidden border-white/10 p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="relative mb-6 overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface/80">
                <div className="h-64 w-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3 text-sm text-muted">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Projet</span>
                  <div className="flex items-center gap-2 text-white/80">
                    <Github size={16} />
                    <ExternalLink size={16} />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="leading-7 text-muted">{project.description}</p>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="space-y-3">
                  {project.features.map((feature) => (
                    <p key={feature} className="text-sm text-muted">• {feature}</p>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition hover:bg-white/10">
                    <Github size={16} /> GitHub
                  </a>
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary transition hover:bg-primary/15">
                    Démo
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
