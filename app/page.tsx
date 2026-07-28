import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TimelineSection from "@/components/TimelineSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <main className="relative isolate">
        <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-6 lg:px-8">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <TimelineSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
