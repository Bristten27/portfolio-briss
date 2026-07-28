"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";

export default function TimelineSection() {
  return (
    <section id="timeline" className="mt-24 scroll-mt-24">
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.32em] text-secondary">Mon parcours</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Timeline élégante.</h2>
          <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Une progression structurée, entre formation, projets et apprentissage continu.
          </p>
        </div>

        <div className="relative border-l border-white/10 pl-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-10 pl-8 sm:mb-12"
            >
              <span className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs text-black">
                {index + 1}
              </span>
              <div className="space-y-2 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                  <span className="text-sm uppercase tracking-[0.24em] text-secondary">{item.year}</span>
                </div>
                <p className="text-sm leading-7 text-muted">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
