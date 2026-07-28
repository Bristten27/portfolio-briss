"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative mt-24 flex min-h-[88vh] items-center">
      <div className="grid w-full gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col justify-center gap-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 shadow-soft">
            <Sparkles size={18} className="text-primary" />
            Portfolio premium — Design moderne et code optimisé
          </div>

          <div className="space-y-6">
            <div className="max-w-4xl space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-secondary">Bonjour, je suis</p>
              <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
                Jean De Bristten.
              </h1>
              <p className="text-2xl font-semibold text-white/90 sm:text-3xl">Étudiant en Informatique • Développeur Web</p>
            </div>

            <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Je conçois des expériences digitales premium, rapides et accessibles pour des marques ambitieuses. Je transforme des idées en interfaces claires, élégantes et efficaces.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90">
              Voir mes projets
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Me contacter
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative mx-auto w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-soft backdrop-blur-xl">
          <div className="absolute -left-8 top-8 h-36 w-36 rounded-full bg-primary/10 blur-3xl" />
          <div className="flex h-full min-h-[380px] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface/90 p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span className="rounded-full bg-white/5 px-3 py-1">Avatar stylisé</span>
                <span className="rounded-full bg-white/5 px-3 py-1">Experience</span>
              </div>
              <div className="flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                <div className="h-72 w-full rounded-[1.25rem] bg-gradient-to-br from-primary/20 via-transparent to-secondary/10" />
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-white">Design moderne et performances optimisées</h2>
                  <p className="text-sm leading-6 text-muted">
                    Un portfolio pensé pour faire forte impression, avec une expérience sobre, fluide et professionnelle.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/80">
              <div>
                <p className="font-semibold text-white">Interfaces premium</p>
                <p className="text-muted">Optimisées mobile et desktop.</p>
              </div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Sparkles size={20} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
