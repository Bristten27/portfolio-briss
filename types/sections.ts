export type Skill = {
  name: string;
  level: string;
  icon: string;
};

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  demoUrl: string;
  image: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};
