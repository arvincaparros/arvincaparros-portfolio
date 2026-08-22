export interface NavItem {
  label: string;
  href: string;
}

export type ProjectVisualKind = 'agents' | 'assistant' | 'dashboard' | 'workflow';

export interface CaseStudyContent {
  problem: string;
  solution: string;
  architecture: string;
  contribution: string;
  technology: string;
  challenges: string;
  result: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  ctaLabel: string;
  visual: ProjectVisualKind;
  caseStudy: CaseStudyContent;
}

export type SkillLevel = 'core' | 'working' | 'exploring';

export interface SkillItem {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  name: string;
  icon: 'backend' | 'frontend' | 'database' | 'ai' | 'devops';
  items: SkillItem[];
}

export interface ExperienceEntry {
  period: string;
  role: string;
  company: string;
  highlights: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: 'understand' | 'design' | 'build' | 'integrate' | 'improve';
}

export interface StatCard {
  value: string;
  label: string;
  sublabel: string;
  icon: 'calendar' | 'code' | 'layers' | 'brain';
}
