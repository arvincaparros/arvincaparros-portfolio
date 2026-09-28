import type { ProcessStep, AutomateStep } from '../types';

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand',
    description: 'Understand the business problem and user needs.',
    icon: 'understand',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Design the system architecture and user flow.',
    icon: 'design',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Develop frontend, backend, APIs, and integrations.',
    icon: 'build',
  },
  {
    number: '04',
    title: 'Integrate',
    description: 'Connect APIs, databases, AI services, and external systems.',
    icon: 'integrate',
  },
  {
    number: '05',
    title: 'Improve',
    description: 'Debug, optimize, test, and iterate.',
    icon: 'improve',
  },
];

export const automateSteps: AutomateStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Identify repetitive tasks, pain points, and automation opportunities.',
    icon: 'discover',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Map the workflow, business rules, data, and systems involved.',
    icon: 'design',
  },
  {
    number: '03',
    title: 'Automate',
    description: 'Build workflows using n8n, Power Automate, APIs, and custom logic.',
    icon: 'automate',
  },
  {
    number: '04',
    title: 'Integrate',
    description: 'Connect business systems, databases, APIs, and AI services.',
    icon: 'integrate',
  },
  {
    number: '05',
    title: 'Monitor & Improve',
    description: 'Handle errors, monitor workflows, test reliability, and continuously improve.',
    icon: 'monitor',
  },
];
