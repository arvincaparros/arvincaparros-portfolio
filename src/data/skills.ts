import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Backend',
    icon: 'backend',
    items: [
      { name: 'C#', level: 'core' },
      { name: '.NET', level: 'core' },
      { name: 'ASP.NET Core', level: 'core' },
      { name: 'Web API', level: 'core' },
      { name: 'Entity Framework Core', level: 'core' },
      { name: 'SQL', level: 'core' },
      { name: 'LINQ', level: 'core' },
    ],
  },
  {
    name: 'Frontend',
    icon: 'frontend',
    items: [
      { name: 'React', level: 'working' },
      { name: 'Vue.js', level: 'working' },
      { name: 'TypeScript', level: 'working' },
      { name: 'JavaScript', level: 'core' },
      { name: 'HTML5', level: 'core' },
      { name: 'CSS3', level: 'core' },
      { name: 'Vite', level: 'working' },
    ],
  },
  {
    name: 'Database',
    icon: 'database',
    items: [
      { name: 'SQL Server', level: 'core' },
      { name: 'PostgreSQL', level: 'working' },
      { name: 'MySQL', level: 'working' },
    ],
  },
  {
    name: 'AI / Automation',
    icon: 'ai',
    items: [
      { name: 'AI APIs', level: 'exploring' },
      { name: 'LLM Integration', level: 'exploring' },
      { name: 'Multi-Agent Systems', level: 'exploring' },
      { name: 'n8n', level: 'working' },
      { name: 'Power Automate', level: 'working' },
      { name: 'Workflow Automation', level: 'working' },
    ],
  },
  {
    name: 'DevOps / Tools',
    icon: 'devops',
    items: [
      { name: 'Git', level: 'core' },
      { name: 'GitHub', level: 'core' },
      { name: 'VS Code', level: 'core' },
      { name: 'Docker', level: 'working' },
      { name: 'IIS', level: 'working' },
      { name: 'Postman', level: 'working' },
      { name: 'GitLab', level: 'working' },
    ],
  },
];
