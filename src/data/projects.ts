import type { Project } from '../types';

const placeholderCaseStudy = {
  architecture:
    'An n8n workflow orchestrates the process from ticket intake to classification and storage. AI handles ticket classification, REST APIs connect external services, and PostgreSQL stores structured ticket data and processing results.',
  challenges:
    'Handling different ticket inputs, converting AI responses into consistent structured data, mapping fields between systems, and ensuring the workflow can handle failed or incomplete processing.',
};

export const projects: Project[] = [
  {
    slug: 'employee-onboarding-automation',
    title: 'Employee Onboarding Workflow Automation',
    description:
      'An end-to-end n8n workflow that automates employee onboarding — capturing employee data, routing by department, generating checklists, and sending personalized notifications.',
    category: 'automation',
    tech: ['n8n', 'Google Sheets', 'Gmail', 'Workflow Automation'],
    ctaLabel: 'View Case Study',
    visual: 'workflow',
    livePreviewAvailable: false,
    image: '/projects/employee-onboarding-automation/employee-onboarding-n8n-workflow.png',
    imageAlt: 'Employee Onboarding Automation full n8n workflow (placeholder)',
    slides: [
      {
        image: '/projects/employee-onboarding-automation/employee-onboarding-n8n-workflow.png',
        imageAlt: 'Employee Onboarding Automation full n8n workflow screen (placeholder)',
        label: 'Employee Onboarding Automation – Full n8n Workflow',
      },
      {
        image: '/projects/employee-onboarding-automation/onboarding-form.png',
        imageAlt: 'New Employee Onboarding Form screen (placeholder)',
        label: 'New Employee Onboarding Form',
      },
      {
        image: '/projects/employee-onboarding-automation/onboarding-tracker.png',
        imageAlt: 'Employee Onboarding Tracker screen (placeholder)',
        label: 'Employee Onboarding Tracker',
      },
      {
        image: '/projects/employee-onboarding-automation/welcome-email.png',
        imageAlt: 'Personalized Employee Welcome Email screen (placeholder)',
        label: 'Personalized Employee Welcome Email',
      },
      {
        image: '/projects/employee-onboarding-automation/manager-notification.png',
        imageAlt: 'Manager Onboarding Notification screen (placeholder)',
        label: 'Manager Onboarding Notification',
      },
    ],
    demoDataNotice:
      'Demo Notice: All data shown in these screenshots is fictional sample data used for testing and demonstration purposes.',
    caseStudy: {
      problem:
        'Manual employee onboarding often requires HR to repeatedly enter employee information, coordinate with managers, prepare onboarding requirements, send emails, and track progress across different systems.',

      solution:
        'Built an n8n workflow that centralizes and automates the initial onboarding process. A single form submission triggers employee record creation, department-specific business logic, personalized communications, manager notifications, and onboarding status tracking.',

      architecture:
        'An n8n workflow triggered by an onboarding form normalizes the submitted employee data, saves it to Google Sheets, and routes the employee through a department switch (Engineering, HR, Operations, or Other/General) to generate a department-specific onboarding checklist. The welcome email and manager notification branch from that checklist step so both have access to the employee details and the generated checklist, and a final step updates the employee\'s Google Sheets record from "Pending" to "Onboarding Started".',

      contribution:
        'Designed and built the end-to-end onboarding workflow in n8n, including the intake form, data normalization, Google Sheets integration, department-based routing logic, checklist generation, email templates, and onboarding status tracking.',

      technology: 'n8n, Google Sheets, and Gmail, using conditional routing to handle department-specific business logic.',

      challenges:
        'Implemented department-based conditional routing, generated department-specific onboarding checklists, ensured the welcome email and manager notification both had access to the shared checklist data, and kept the Google Sheets tracker synced with each onboarding record\'s status.',

      result:
        'Reduces repetitive HR administration and provides a consistent onboarding process while keeping employee onboarding records visible in a centralized tracker.',

      features: [
        'Employee onboarding form',
        'Automated employee record creation',
        'Department-based conditional routing',
        'Department-specific onboarding checklists',
        'Personalized HTML welcome emails',
        'Automatic manager notifications',
        'Google Sheets onboarding tracking',
        'Automatic onboarding status updates',
      ],
    },
  },
  {
    slug: 'support-ticket-automation',
    title: 'Support Ticket Automation',
    description:
      'Automated support-ticket processing using workflow automation, APIs, databases, and AI classification.',
    category: 'automation',
    tech: ['n8n', 'PostgreSQL', 'REST API', 'AI'],
    ctaLabel: 'View Workflow',
    visual: 'workflow',
    livePreviewAvailable: false,
    caseStudy: {
      problem:
        'Support tickets required manual review and categorization, which slowed down ticket handling and could lead to inconsistent prioritization and routing.',
      solution:
        'Built an automated n8n workflow that receives support tickets, uses AI to classify their category and priority, stores structured ticket data in PostgreSQL, and uses REST APIs to support downstream processing.',
      architecture: placeholderCaseStudy.architecture,
      contribution:
        'Designed and built the end-to-end automation workflow, including workflow logic, API integrations, data mapping, AI classification, database operations, and testing.',
      technology: 'n8n, PostgreSQL, REST API, AI-based classification.',
      challenges: placeholderCaseStudy.challenges,
      result:
        'Created a centralized automated workflow that reduces manual ticket triage, provides consistent ticket classification, and creates structured data that can be used for routing, tracking, and further automation.',
    },
  },
  {
    slug: 'it-asset-request-approval-system',
    title: 'IT Asset Request & Approval System',
    description:
      'An approval automation system for IT equipment and software requests, with conditional escalation for high-urgency items, real-time status tracking, and automated notifications.',
    category: 'power-platform',
    tech: ['Power Apps', 'Power Automate', 'SharePoint'],
    ctaLabel: 'View Case Study',
    visual: 'dashboard',
    image: '/projects/it-asset-dashboard.png',
    imageAlt:
      'IT Asset Request & Approval System dashboard displayed on desktop and mobile devices',
    livePreviewAvailable: false,
    slides: [
      {
        image: '/projects/it-asset-dashboard.png',
        imageAlt: 'IT Asset Request & Approval System dashboard screen on desktop and mobile',
        label: 'Dashboard',
      },
      {
        image: '/projects/it-asset-new-request.png',
        imageAlt: 'IT Asset Request & Approval System new request form on desktop and mobile',
        label: 'New Request',
      },
      {
        image: '/projects/it-asset-approvals.png',
        imageAlt: 'IT Asset Request & Approval System approvals screen on desktop and mobile',
        label: 'Approvals',
      },
      {
        image: '/projects/it-asset-reports.png',
        imageAlt: 'IT Asset Request & Approval System reports screen on desktop and mobile',
        label: 'Reports',
      },
    ],
    caseStudy: {
      problem:
        'IT equipment and software requests were submitted through email and chat with no consistent approval process, making it difficult to track request status, prioritize urgent cases, or maintain a record of approvals.',

      solution:
        'Developed a Power Platform solution that lets employees submit IT asset requests through a Power Apps form, routes them through automated approval workflows in Power Automate, and stores request and approval records in SharePoint.',

      architecture:
        'A Power Apps canvas app for request submission and status tracking, Power Automate flows for approval routing and notifications, and SharePoint lists for storing request, approval, and asset data.',

      contribution:
        'Designed the request-submission app, approval workflow logic, conditional escalation rules, notification flows, and the SharePoint data structure end to end.',

      technology: 'Power Apps, Power Automate, SharePoint, and Office 365 connectors.',

      challenges:
        'Implemented conditional escalation for high-urgency requests, multi-level approval routing, real-time status updates, and reliable automated notifications across the request lifecycle.',

      result:
        'Replaced ad hoc email requests with a centralized, trackable approval process, reduced turnaround time on urgent requests, and gave requesters clear visibility into request status.',

      features: [
        'Request submission form for IT equipment and software',
        'Conditional escalation routing for high-urgency requests',
        'Multi-level approval workflow with manager and IT sign-off',
        'Real-time request status tracking for requesters',
        'Automated email notifications for submissions, approvals, and rejections',
        'Centralized SharePoint record of requests, approvals, and assets',
      ],
    },
  },
  {
    slug: 'armandos-furniture-business-system',
    title: "Armando's Furniture Business System",
    description:
      'A full-stack business system for production optimization, demand forecasting, resource management, and AI-assisted forecast analysis.',
    category: 'full-stack',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Gemini AI'],
    ctaLabel: 'View Case Study',
    visual: 'dashboard',
    image: '/projects/armandos-furniture/dashboard.png',
    imageAlt:
      "Armando's Furniture Business dashboard showing production recommendations, resource utilization, and demand forecasting",
    livePreviewAvailable: true,
    livePreviewUrl: 'https://armando-furniture-business.vercel.app/dashboard',
    // TODO: placeholder screenshots — swap each `image` path below for the real
    // screenshot once available. Keep the same filename (or update the path) and
    // each slide's `label`/`imageAlt` for that screen; the gallery (Carousel) needs
    // no code changes when the images are replaced.
    slides: [
      {
        image: '/projects/armandos-furniture/dashboard.png',
        imageAlt: "Armando's Furniture Business System dashboard screen (placeholder)",
        label: 'Dashboard',
      },
      {
        image: '/projects/armandos-furniture/resource-management.png',
        imageAlt: "Armando's Furniture Business System resource management screen (placeholder)",
        label: 'Resource Management',
      },
      {
        image: '/projects/armandos-furniture/product-data-management.png',
        imageAlt: "Armando's Furniture Business System product data management screen (placeholder)",
        label: 'Product Data Management',
      },
      {
        image: '/projects/armandos-furniture/production-allocation.png',
        imageAlt: "Armando's Furniture Business System production allocation screen (placeholder)",
        label: 'Production Allocation',
      },
      {
        image: '/projects/armandos-furniture/resource-utilization.png',
        imageAlt: "Armando's Furniture Business System resource utilization screen (placeholder)",
        label: 'Resource Utilization',
      },
      {
        image: '/projects/armandos-furniture/resource-utilization-history.png',
        imageAlt: "Armando's Furniture Business System resource utilization history screen (placeholder)",
        label: 'Resource Utilization History',
      },
      {
        image: '/projects/armandos-furniture/transaction-history.png',
        imageAlt: "Armando's Furniture Business System transaction history screen (placeholder)",
        label: 'Transaction History',
      },
      {
        image: '/projects/armandos-furniture/optimization-history.png',
        imageAlt: "Armando's Furniture Business System optimization history screen (placeholder)",
        label: 'Optimization History',
      },
      {
        image: '/projects/armandos-furniture/demand-forecasting.png',
        imageAlt: "Armando's Furniture Business System demand forecasting screen (placeholder)",
        label: 'Demand Forecasting',
      },
    ],
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
    slug: 'parts-control-system',
    title: 'Parts Control System',
    description:
      'A centralized system for parts tracking, activity monitoring, quality control, reporting, and approval workflows.',
    category: 'full-stack',
    tech: ['C#', 'ASP.NET Core', 'Bootstrap', 'PostgreSQL'],
    ctaLabel: 'View Case Study',
    visual: 'dashboard',
    image: '/projects/pcs-2.png',
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
    category: 'full-stack',
    tech: ['C#', 'WinForms', 'SQL Server', 'Tableau'],
    ctaLabel: 'View Case Study',
    visual: 'dashboard',
    image: '/projects/mhms-2.png',
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
    slug: 'japanese-meal-reservation-system',
    title: 'Japanese Meal Reservation System',
    description:
      'A meal reservation system with advance booking, administrative management, and monthly meal-deduction monitoring.',
    category: 'full-stack',
    tech: ['C#', 'ASP.NET Core', 'Bootstrap', 'PostgreSQL'],
    ctaLabel: 'View Case Study',
    visual: 'dashboard',
    image: '/projects/jmrs-2.png',
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
];
