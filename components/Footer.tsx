import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/95 py-8 text-white/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>Jean De Bristten — 2026</p>
        <div className="flex items-center gap-4">
          <a href="#hero" className="inline-flex items-center gap-2 text-white/70 transition hover:text-white">
            <ArrowUp size={16} /> Retour en haut
          </a>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}
