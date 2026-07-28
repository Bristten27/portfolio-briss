import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Jean De Bristten | Développeur Web",
  description: "Portfolio de Jean De Bristten — Développeur Web, étudiant en informatique, créateur d'interfaces modernes et d'expériences digitales premium.",
  metadataBase: new URL("https://portfolio-briss.vercel.app"),
  openGraph: {
    title: "Jean De Bristten | Développeur Web",
    description: "Portfolio premium de Jean De Bristten — Développement web, applications modernes et expérience utilisateur soignée.",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth bg-background text-white" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-background text-white antialiased`}>{children}</body>
    </html>
  );
}
