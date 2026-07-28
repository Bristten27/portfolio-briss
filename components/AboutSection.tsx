"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const stats = [
  { value: "2+", label: "Projets réalisés" },
  { value: "ENI", label: "Étudiant ENI" },
  { value: "12+", label: "Technologies maîtrisées" }
];

export default function AboutSection() {
  return (
    <section id="about" className="mt-24 scroll-mt-24">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="glass-card border-white/10 p-8 shadow-soft">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-secondary">
              <Sparkles size={18} className="text-primary" />
              À propos
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Je crée des expériences numériques engagées et élégantes.</h2>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Passionné par le développement web, je conçois des applications modernes en m’appuyant sur des bonnes pratiques, un code organisé et une expérience utilisateur fluide. J’apprends en continu et je construis des solutions performantes et accessibles.
              </p>
            </div>
          </div>
          <div className="grid w-full max-w-xs gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 text-center">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
