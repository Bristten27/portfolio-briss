"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 mx-auto flex w-full items-center justify-between px-6 py-4 transition-all duration-300 lg:px-12",
        isScrolled ? "backdrop-blur-2xl bg-surface/90 shadow-[0_20px_80px_rgba(0,0,0,0.25)]" : "bg-transparent"
      )}
    >
      <div className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-white/90">
        <span className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">Bristten27</span>
      </div>

      <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="transition-colors duration-200 hover:text-white">
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
          <a href="/Jean-De-Bristten-CV.pdf" target="_blank" rel="noreferrer" className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10 md:inline-flex md:items-center md:gap-2">
            CV
            <ArrowUpRight size={16} />
          </a>
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden">
            <Menu size={20} />
          </button>
        </div>
    </motion.header>
  );
}
