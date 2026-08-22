import type { ProcessStep } from '../types';

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
