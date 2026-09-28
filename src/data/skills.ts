import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Automation & Integration',
    icon: 'ai',
    items: [
      { name: 'n8n', level: 'working' },
      { name: 'Power Automate', level: 'working' },
      { name: 'Workflow Automation', level: 'working' },
      { name: 'REST APIs', level: 'working' },
      { name: 'Webhooks', level: 'working' },
      { name: 'JSON', level: 'working' },
    ],
  },
   {
    name: 'AI & LLM',
    icon: 'ai',
    items: [
      { name: 'LLM Integration', level: 'working' },
      { name: 'AI APIs', level: 'working' },
      { name: 'Tool Calling', level: 'working' },
      { name: 'AI Agents', level: 'working' },
      { name: 'Prompt Engineering', level: 'working' },
    ],
  },
  {
    name: 'Backend',
    icon: 'backend',
    items: [
      { name: 'C#', level: 'core' },
      { name: '.NET', level: 'core' },
      { name: 'ASP.NET Core', level: 'core' },
      { name: 'Web API', level: 'core' },
      { name: 'Entity Framework Core', level: 'core' },
      { name: 'Python', level: 'core' },
    ],
  },
  {
    name: 'Power Platform',
    icon: 'power-platform',
    items: [
      { name: 'Power Automate', level: 'working' },
      { name: 'Power Apps', level: 'working' },
      { name: 'SharePoint', level: 'working' },
      { name: 'Dataverse', level: 'working' },
    ],
  },
  {
    name: 'Database',
    icon: 'database',
    items: [
      { name: 'SQL Server', level: 'core' },
      { name: 'PostgreSQL', level: 'core' },
      { name: 'MySQL', level: 'working' },
        { name: 'SQL', level: 'working' },
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
    ],
  },
  {
    name: 'DevOps / Tools',
    icon: 'devops',
    items: [
      { name: 'Git', level: 'core' },
      { name: 'GitHub', level: 'core' },
      { name: 'GitLab', level: 'core' },
      { name: 'Docker', level: 'working' },
      { name: 'Postman', level: 'working' },
      { name: 'IIS', level: 'working' },
    ],
  },
];
