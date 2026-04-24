export const services = [
  {
    id: "internal-tools",
    title: "Internal Tools",
    description: "Build powerful internal apps in weeks, not months",
    icon: "LayoutDashboard",
    benefits: [
      "Custom admin dashboards",
      "CRM portals",
      "Operations platforms",
      "Fast iteration cycles"
    ],
    useCases: ["Admin Panels", "Customer Support Tools", "Inventory Management"],
    tools: ["Retool", "AppSmith", "Softr"],
    guide: "A comprehensive guide to Internal Tools: We analyze your existing operational bottlenecks, design a unified database schema, and build secure, role-based interfaces that allow your team to interact with your data safely.",
    howItHelps: "Internal tools eliminate the need for spreadsheets and manual data entry, reducing human error by up to 80% and saving employees hours of repetitive work each week.",
    industryCaseStudy: {
      industry: "E-commerce & Retail",
      title: "Streamlined Inventory Management",
      description: "We built a custom Retool dashboard for a mid-sized retailer, connecting their Shopify store, warehouse PostgreSQL database, and shipping APIs into a single interface. Order processing time decreased by 40%."
    },
    problemsSolved: [
      "Fragmented data scattered across multiple SaaS tools",
      "Lack of granular access control for sensitive data",
      "Inefficient manual processes requiring engineering time to fix"
    ]
  },
  {
    id: "automation",
    title: "Workflow Automation",
    description: "Eliminate repetitive work with smart automation",
    icon: "Workflow",
    benefits: [
      "Streamline daily tasks",
      "Connect disparate systems",
      "Reduce human error",
      "Scale operations infinitely"
    ],
    useCases: ["Lead Routing", "Employee Onboarding", "Invoice Processing"],
    tools: ["n8n", "Make.com", "Zapier"],
    guide: "Our approach to Workflow Automation: We map out your current manual processes, identify repetitive tasks, and construct automated pipelines that trigger actions across your tech stack based on specific events or schedules.",
    howItHelps: "Automation ensures that your systems talk to each other in real-time, removing the delay of manual hand-offs and allowing your team to focus on high-value, strategic work.",
    industryCaseStudy: {
      industry: "Real Estate",
      title: "Automated Lead Routing and Follow-up",
      description: "Implemented a complex n8n workflow that captures leads from multiple sources, enriches them via Clearbit, and routes them to the appropriate agent in Salesforce within seconds, increasing conversion rates by 25%."
    },
    problemsSolved: [
      "Data silos preventing cross-functional collaboration",
      "Slow response times to customer inquiries or leads",
      "High employee turnover due to tedious, repetitive tasks"
    ]
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description: "Add intelligence to your operations",
    icon: "BrainCircuit",
    benefits: [
      "Automated decision making",
      "Content generation at scale",
      "Intelligent data extraction",
      "24/7 AI assistants"
    ],
    useCases: ["Document Summarization", "AI Customer Support", "Data Analysis"],
    tools: ["OpenAI", "Claude", "Gemini"],
    guide: "Integrating AI into your business: We securely connect Large Language Models (LLMs) to your proprietary data using RAG (Retrieval-Augmented Generation) architectures, ensuring the AI responses are accurate, relevant, and context-aware.",
    howItHelps: "AI solutions can process vast amounts of unstructured data—like emails, PDFs, and customer tickets—extracting key insights and taking actions much faster than a human operator could.",
    industryCaseStudy: {
      industry: "Legal & Compliance",
      title: "Automated Contract Analysis",
      description: "Developed a custom Anthropic Claude integration for a law firm that automatically reviews NDAs and vendor contracts, flagging non-standard clauses and summarizing key terms, cutting review time in half."
    },
    problemsSolved: [
      "Inability to scale customer support without linear cost increases",
      "Drowning in unstructured documents and unstructured data",
      "Slow turn-around times for content creation and analysis"
    ]
  },
  {
    id: "data-dashboards",
    title: "Data Dashboards",
    description: "Turn raw data into executive-ready insights",
    icon: "BarChart3",
    benefits: [
      "Real-time business KPI tracking",
      "Executive reporting",
      "Interactive data visualizations",
      "Single source of truth"
    ],
    useCases: ["Revenue Tracking", "Marketing Analytics", "Performance Metrics"],
    tools: ["Looker Studio"],
    guide: "Building Data Dashboards: We centralize your data from various sources into a data warehouse, model it for reporting, and build interactive dashboards that provide real-time visibility into your most critical metrics.",
    howItHelps: "Dashboards transform complex datasets into clear, actionable visualizations, enabling leadership to make data-driven decisions quickly rather than waiting for end-of-month reports.",
    industryCaseStudy: {
      industry: "SaaS & Technology",
      title: "Real-time Executive Command Center",
      description: "Built a comprehensive Looker Studio dashboard pulling from Stripe, Hubspot, and Mixpanel. The executive team now tracks MRR, churn, and user acquisition costs in real-time, improving strategic alignment."
    },
    problemsSolved: [
      "Reporting delays leading to reactive rather than proactive decisions",
      "Discrepancies in data reporting across different departments",
      "Lack of visibility into the ROI of marketing and sales efforts"
    ]
  }
];