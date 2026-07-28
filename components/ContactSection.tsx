"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="mt-24 scroll-mt-24">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="glass-card border-white/10 p-8 shadow-soft">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.32em] text-secondary">Contact</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Discutons de votre prochain projet.</h2>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Je suis disponible pour des collaborations, stages ou opportunités en alternance. Parlons de votre projet et construisons une expérience digitale mémorable.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <a href="https://github.com/Bristten27" target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 bg-white/5 p-5 text-white transition hover:border-primary/40 hover:bg-white/10">
                <Github className="mb-3" size={22} />
                <p className="font-semibold">GitHub</p>
              </a>
              <a href="#" className="rounded-3xl border border-white/10 bg-white/5 p-5 text-white transition hover:border-primary/40 hover:bg-white/10">
                <Linkedin className="mb-3" size={22} />
                <p className="font-semibold">LinkedIn</p>
              </a>
              <a href="mailto:jean@bristten.com" className="rounded-3xl border border-white/10 bg-white/5 p-5 text-white transition hover:border-primary/40 hover:bg-white/10">
                <Mail className="mb-3" size={22} />
                <p className="font-semibold">Email</p>
              </a>
            </div>
          </div>

          <form className="space-y-5 rounded-3xl border border-white/10 bg-surface/90 p-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
                Nom
              </label>
              <input id="name" type="text" placeholder="Jean De Bristten" className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/10" />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
                Email
              </label>
              <input id="email" type="email" placeholder="jean@bristten.com" className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/10" />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
                Message
              </label>
              <textarea id="message" rows={4} placeholder="Décrivez votre projet..." className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/10" />
            </div>
            <button type="submit" className="w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-black transition hover:bg-primary/90">
              Envoyer
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
