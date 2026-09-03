export interface Project {
  id: string;
  title: string;
  category: string[];
  description: string;
  shortDescription: string;
  technologies: string[];
  image: string;
  gallery?: string[];
  overview: string;
  problem: string;
  goal: string;
  approach: string;
  implementation: string;
  features: string[];
  results: string;
  lessons: string;
  github?: string;
  demo?: string;
  priority: number;
}

export interface Skill {
  name: string;
  category: string;
}

export interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
}
