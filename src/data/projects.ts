import type { Project } from '../types';

const placeholderCaseStudy = {
  architecture:
    'Architecture details for this project are being written up and will be added here.',
  challenges:
    'Key challenges and trade-offs for this project are being written up and will be added here.',
};

export const projects: Project[] = [
  {
    slug: 'ai-multi-agent-platform',
    title: 'AI Multi-Agent Platform',
    description:
      'A multi-agent AI platform with specialized agents, tools, and conversational workflows for business use cases.',
    tech: ['React', 'TypeScript', 'PostgreSQL', 'AI'],
    ctaLabel: 'View Case Study',
    visual: 'agents',
    caseStudy: {
      problem:
        'Business teams needed a way to delegate multi-step tasks to specialized AI agents instead of a single general-purpose chatbot.',
      solution:
        'Designed and built a platform where specialized agents, each with their own tools and scope, collaborate on conversational workflows for business use cases.',
      architecture: placeholderCaseStudy.architecture,
      contribution:
        'Worked across the stack: agent orchestration, the React/TypeScript frontend, and the PostgreSQL-backed data layer.',
      technology: 'React, TypeScript, PostgreSQL, AI/LLM APIs.',
      challenges: placeholderCaseStudy.challenges,
      result:
        'Full results write-up in progress — check back soon, or reach out for a walkthrough.',
    },
  },
  {
    slug: 'lumine-ai-assistant',
    title: 'Lumine AI Assistant',
    description:
      'An AI assistant integrated into a business platform with conversational interaction, assistant mode, and CMS integration.',
    tech: ['React', 'Vite', 'TypeScript', 'AI'],
    ctaLabel: 'View Case Study',
    visual: 'assistant',
    caseStudy: {
      problem:
        'Users needed contextual, conversational help embedded directly inside an existing business platform rather than a separate tool.',
      solution:
        'Built an AI assistant with conversational interaction and a dedicated assistant mode, integrated with the platform’s CMS.',
      architecture: placeholderCaseStudy.architecture,
      contribution:
        'Built the assistant UI and integration layer connecting it to the platform and CMS using React, Vite, and TypeScript.',
      technology: 'React, Vite, TypeScript, AI APIs, CMS integration.',
      challenges: placeholderCaseStudy.challenges,
      result:
        'Full results write-up in progress — check back soon, or reach out for a walkthrough.',
    },
  },
  {
    slug: 'business-management-system',
    title: 'Business Management System',
    description:
      'Full-stack business application for managing operations, reports, and business workflows.',
    tech: ['ASP.NET Core', 'C#', 'SQL Server', 'EF Core'],
    ctaLabel: 'View Case Study',
    visual: 'dashboard',
    caseStudy: {
      problem:
        'Internal operations were tracked across disconnected spreadsheets and manual processes, making reporting slow and error-prone.',
      solution:
        'Developed a full-stack business management application to centralize operations, reporting, and workflows.',
      architecture: placeholderCaseStudy.architecture,
      contribution:
        'Built backend services and data models with ASP.NET Core and EF Core, plus reporting and dashboard features.',
      technology: 'ASP.NET Core, C#, SQL Server, Entity Framework Core.',
      challenges: placeholderCaseStudy.challenges,
      result:
        'Full results write-up in progress — check back soon, or reach out for a walkthrough.',
    },
  },
  {
    slug: 'support-ticket-automation',
    title: 'Support Ticket Automation',
    description:
      'Automated support-ticket processing using workflow automation, APIs, databases, and AI classification.',
    tech: ['n8n', 'PostgreSQL', 'REST API', 'AI'],
    ctaLabel: 'View Workflow',
    visual: 'workflow',
    caseStudy: {
      problem:
        'Incoming support tickets were triaged manually, slowing response times and creating inconsistent categorization.',
      solution:
        'Automated ticket intake and classification using n8n workflows connected to REST APIs, a PostgreSQL database, and AI-based classification.',
      architecture: placeholderCaseStudy.architecture,
      contribution:
        'Designed the automation workflow, API integrations, and AI classification step end to end.',
      technology: 'n8n, PostgreSQL, REST API, AI classification.',
      challenges: placeholderCaseStudy.challenges,
      result:
        'Full results write-up in progress — check back soon, or reach out for a walkthrough.',
    },
  },
];
