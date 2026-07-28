"use client";

import { motion } from "framer-motion";
import { iconMap } from "@/lib/icons";
import { skills } from "@/lib/data";

export default function SkillsSection() {
  return (
    <section id="skills" className="mt-24 scroll-mt-24">
      <div className="flex flex-col gap-6">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.32em] text-secondary">Compétences</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Technologies et outils.</h2>
          <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Maîtrise des principaux langages, frameworks et plateformes pour bâtir des applications web robustes et scalables.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon as keyof typeof iconMap] ?? iconMap.Default;
            return (
              <motion.article
                key={skill.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card border-white/10 p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="flex items-center gap-4 text-primary">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    <p className="text-sm text-muted">{skill.level}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
