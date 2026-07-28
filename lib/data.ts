import type { Project, Skill, TimelineItem } from "@/types/sections";

export const skills: Skill[] = [
  { name: "HTML", level: "Avancé", icon: "Html5" },
  { name: "CSS", level: "Avancé", icon: "Css3" },
  { name: "JavaScript", level: "Avancé", icon: "Js" },
  { name: "TypeScript", level: "Avancé", icon: "Ts" },
  { name: "React", level: "Avancé", icon: "React" },
  { name: "Next.js", level: "Avancé", icon: "NextJs" },
  { name: "Vue.js", level: "Intermédiaire", icon: "Vue" },
  { name: "Tailwind", level: "Avancé", icon: "Tailwind" },
  { name: "Node.js", level: "Intermédiaire", icon: "Node" },
  { name: "PHP", level: "Intermédiaire", icon: "Php" },
  { name: "Laravel", level: "Intermédiaire", icon: "Laravel" },
  { name: "Git", level: "Avancé", icon: "Git" },
  { name: "GitHub", level: "Avancé", icon: "Github" },
  { name: "MySQL", level: "Intermédiaire", icon: "Database" },
  { name: "Pinia", level: "Intermédiaire", icon: "ShieldCheck" },
  { name: "Vercel", level: "Intermédiaire", icon: "Cloud" }
];

export const projects: Project[] = [
  {
    title: "Application de gestion de diagramme de Gantt",
    description: "Application moderne permettant de créer, modifier et planifier des projets avec diagramme de Gantt interactif.",
    technologies: ["Vue.js", "Pinia", "JavaScript", "Vite"],
    features: ["Planification visuelle", "Glisser-déposer", "Interface responsive"],
    githubUrl: "https://github.com/Bristten27/gantt-app",
    demoUrl: "https://vercel.com",
    image: "/project-gantt.png"
  },
  {
    title: "Application de prise de rendez-vous médicaux",
    description: "Plateforme moderne permettant la réservation et la gestion des rendez-vous entre patients et médecins.",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    features: ["Réservations rapides", "Gestion des utilisateurs", "Tableau de bord clair"],
    githubUrl: "https://github.com/Bristten27/medical-booking",
    demoUrl: "https://vercel.com",
    image: "/project-medical.png"
  }
];

export const timeline: TimelineItem[] = [
  {
    year: "2022",
    title: "Étudiant ENI",
    description: "Formation en informatique orientée développement web et bonnes pratiques."
  },
  {
    year: "2023",
    title: "Licence Informatique",
    description: "Approfondissement des technologies web, architecture logicielle et expérience utilisateur."
  },
  {
    year: "2024",
    title: "Projets personnels",
    description: "Création d'applications interactives, interfaces premium et expériences soignées."
  },
  {
    year: "2025",
    title: "Apprentissage continu",
    description: "Exploration de nouvelles bibliothèques, frameworks et pratiques de développement avancées."
  }
];
