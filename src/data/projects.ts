import type { Project } from '../types';

const placeholderCaseStudy = {
  architecture:
    'Architecture details for this project are being written up and will be added here.',
  challenges:
    'Key challenges and trade-offs for this project are being written up and will be added here.',
};

export const projects: Project[] = [
  {
    slug: 'japanese-meal-reservation-system',
    title: 'Japanese Meal Reservation System',
    description:
      'A meal reservation system with advance booking, administrative management, and monthly meal-deduction monitoring.',
    tech: ['C#', 'ASP.NET Core', 'Bootstrap', 'PostgreSQL'],
    ctaLabel: 'View Case Study',
    visual: 'dashboard',
    image: '/projects/jmrs.png',
    imageAlt:
      'Japanese Meal Reservation System displayed on desktop and mobile devices',
    livePreviewAvailable: false,
    caseStudy: {
      problem:
        'Meal reservations, menu scheduling, order monitoring, and Japanese expatriate meal deductions required a centralized and more reliable process.',

      solution:
        'Developed a web-based meal reservation system that allows employees to view menus, reserve meals, track orders, and manage advance bookings, while giving administrators tools for menu and reservation management.',

      architecture:
        'An ASP.NET Core MVC application with a Bootstrap-based interface, PostgreSQL for reservation data, and SQL Server integration for employee information.',

      contribution:
        'Developed the reservation workflows, advance-booking functionality, menu management, administrative dashboard, order monitoring, access rules, and database integrations.',

      technology:
        'C#, ASP.NET Core MVC, Bootstrap, PostgreSQL, SQL Server, Entity Framework Core, and JavaScript.',

      challenges:
        'Implemented reservation cutoff rules, employee eligibility policies, date and timezone handling, monthly bulk reservations, order-status tracking, and menu availability validation.',

      result:
        'Centralized meal reservations and administrative processes, reduced manual coordination, and improved visibility into daily orders and monthly meal deductions.',

      features: [
        'Home page with upcoming meals, announcements, and reservation reminders',
        'Weekly and monthly menu viewing with meal selection',
        'Order history with Pending, Completed, and Cancelled status filters',
        'Advance reservations for Japanese expatriates with long-term bulk booking',
        'Advance booking for eligible local employees without published future menus',
        'Administrative dashboard with daily order summaries by menu',
        'Monthly meal-deduction monitoring for Japanese expatriates',
        'Reservation management with create, update, and cancellation functions',
        'Menu management with upload, update, and delete functions',
      ],
    },
  },
  {
    slug: 'parts-control-system',
    title: 'Parts Control System',
    description:
      'A centralized system for parts tracking, activity monitoring, quality control, reporting, and approval workflows.',
    tech: ['C#', 'ASP.NET Core', 'Bootstrap', 'PostgreSQL'],
    ctaLabel: 'View Case Study',
    visual: 'dashboard',
    image: '/projects/pcs.png',
    imageAlt:
        'Parts Control System dashboard showing parts tracking, activity monitoring, and approval workflows',
    livePreviewAvailable: false,
    caseStudy: {
      problem:
        'Parts information, quality-control activities, approval records, and supporting files were handled through separate manual processes, making progress and history difficult to monitor.',

      solution:
        'Developed a centralized web application for managing parts data, tracking activities, handling approval workflows, maintaining transaction logs, and generating operational reports.',

      architecture:
        'An ASP.NET Core MVC application with a Bootstrap-based interface and PostgreSQL database, using structured workflows and role-based access for operational and administrative users.',

      contribution:
        'Developed parts-management features, dashboard monitoring, approval workflows, role-based access, file import and download, email notifications, transaction logging, and reporting functionality.',

      technology:
        'C#, ASP.NET Core MVC, Bootstrap, PostgreSQL, Entity Framework Core, JavaScript, and email integration.',

      challenges:
        'Implemented multi-level approval rules, activity and status tracking, audit history, file management, role-based permissions, and reliable email notifications.',

      result:
        'Centralized parts and quality-control information, improved workflow visibility, strengthened audit tracking, and reduced manual coordination during reviews and approvals.',

      features: [
        'Dashboard with overall parts status and activity summaries',
        'Part-file import and management for system updates',
        'Parts-data download for reporting and offline access',
        'Per-activity progress tracking and workflow monitoring',
        'Quality-control status monitoring',
        'Transaction logs for audit and history tracking',
        'Parts-data search and filtering',
        'Root-cause analysis form management',
        'Operational and quality-management reports',
        'Administrative user and system-configuration management',
        'Parts-record maintenance, including key-date updates and deletion',
        'Automated email notifications for workflow submissions and approvals',
      ],
    },
  },
  {
    slug: 'manhour-management-system',
    title: 'Man-Hour Management System',
    description:
      'A business application for managing man-hour and COPQ records, approval workflows, reports, and analytics.',
    tech: ['C#', 'WinForms', 'SQL Server', 'Tableau'],
    ctaLabel: 'View Case Study',
    visual: 'dashboard',
    image: '/projects/mhms.png',
    imageAlt:
      'Man-Hour Management System dashboard showing man-hour loss, COPQ analytics, reports, and approval monitoring',
    livePreviewAvailable: false,
    caseStudy: {
      problem:
        'Man-hour loss and COPQ records relied on manual processes, making submissions, approvals, monitoring, and reporting difficult to manage.',

      solution:
        'Developed a centralized desktop application with multi-level approvals, automated email notifications, bulk Excel processing, reporting, and analytics dashboards.',

      architecture:
        'A C# WinForms desktop application connected to Microsoft SQL Server, using stored procedures for data processing and Tableau for advanced analytics and visualization.',

      contribution:
        'Developed core application features, approval workflows, role-based access, email notifications, Excel import and export, management reports, and database integrations.',

      technology:
        'C#, WinForms, Microsoft SQL Server, stored procedures, Excel integration, and Tableau.',

      challenges:
        'Handled large Excel datasets, multi-level approval rules, automated status updates, role-based permissions, and reliable email notifications.',

      result:
        'Centralized man-hour and COPQ management, reduced manual processing, improved approval tracking, and provided clearer operational reporting and analytics.',

      features: [
        'Interactive dashboard for man-hour, MH loss, and COPQ analytics',
        'Multi-level approval workflow for man-hour and COPQ submissions',
        'Role-based access for PICs, managers, and administrators',
        'Automated email notifications for submissions and approvals',
        'Excel import and export for bulk data management',
        'Management reports with filtering and export options',
        'Tableau integration for advanced data visualization',
      ],
    },
  },
  {
    slug: 'armandos-furniture-business-system',
    title: "Armando's Furniture Business System",
    description:
      'A full-stack business system for production optimization, demand forecasting, resource management, and AI-assisted forecast analysis.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Gemini AI'],
    ctaLabel: 'View Case Study',
    visual: 'dashboard',
    image: '/projects/armandos-furniture.png',
    imageAlt:
      "Armando's Furniture Business dashboard showing production recommendations, resource utilization, and demand forecasting",
    livePreviewAvailable: true,
    livePreviewUrl: 'https://armando-furniture-business.vercel.app/dashboard',
    caseStudy: {
      problem:
        'Furniture production planning relied on manual estimates, making it difficult to allocate resources efficiently, forecast product demand, and interpret forecasting results for production decisions.',

      solution:
        'Developed a centralized business system that manages resources and products, generates optimized production recommendations, forecasts future demand, and provides a Gemini-powered chatbot for exploring and interpreting forecasting results.',

      architecture:
        'A React frontend connected to a Python FastAPI REST API, with PostgreSQL for business and forecasting data. The system contains modules for authentication, resource management, production optimization, reporting, and demand forecasting with an integrated Gemini-powered chatbot.',

      contribution:
        'Developed the frontend and backend integration, authentication flow, business-management modules, production optimization, demand forecasting, reporting dashboards, production-plan application workflow, and Gemini chatbot integration for forecast analysis.',

      technology:
        'React, TypeScript, Mantine, TanStack Query, Python, FastAPI, PostgreSQL, REST APIs, Docker, forecasting and optimization libraries, and the Gemini API.',

      challenges:
        'Handled production constraints, resource-capacity calculations, profitability projections, forecasting confidence, historical data processing, API security, and supplying relevant forecast context to the Gemini chatbot.',

      result:
        'Centralized production data, generated optimized production recommendations and demand forecasts, improved resource-utilization visibility, and allowed users to explore forecasting results through a conversational AI interface.',

      features: [
        'Dashboard with resource, product, revenue, and profit summaries',
        'Resource and production-capacity management',
        'Product data and profitability management',
        'Production allocation and optimized product-plan generation',
        'Production recommendations with expected revenue and profit',
        'Demand forecasting using historical business data',
        'Forecast confidence and status monitoring',
        'Gemini-powered chatbot for forecast analysis and interpretation',
        'Resource-utilization reports and visualizations',
        'Production optimization and utilization history',
        'Apply-to-production workflow for generated recommendations',
        'Transaction history and operational audit records',
        'JWT authentication and protected application routes',
      ],
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
    livePreviewAvailable: false,
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
