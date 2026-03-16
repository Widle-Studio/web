export const useCases = [
  {
    id: "sales",
    title: "Sales Teams",
    description: "Automate lead routing, CRM updates, and generate AI-powered sales insights.",
    points: [
      "Instant lead distribution based on custom logic",
      "Automated enrichment from LinkedIn and ZoomInfo",
      "Drafted personalized outreach emails via LLMs"
    ],
    tools: ["n8n", "Salesforce", "OpenAI"],
    image: "/mockups/sales-automation.png",
    tags: ["Lead Routing", "CRM", "AI Insights"]
  },
  {
    id: "ops",
    title: "Operations Teams",
    description: "Replace spreadsheets with custom internal tools that act as a single source of truth.",
    points: [
      "Custom inventory and fulfillment dashboards",
      "Approval workflows for purchasing",
      "Automated vendor onboarding processes"
    ],
    tools: ["Retool", "Make.com", "PostgreSQL"],
    image: "/mockups/ops-dashboard.png",
    tags: ["Inventory", "Approvals", "Onboarding"]
  },
  {
    id: "data",
    title: "Data Teams",
    description: "Build robust data pipelines and executive-ready interactive dashboards.",
    points: [
      "Real-time revenue tracking",
      "Automated weekly reporting and alerts",
      "Centralized metrics across 10+ SaaS tools"
    ],
    tools: ["Looker Studio", "BigQuery", "Fivetran"],
    image: "/mockups/data-dashboard.png",
    tags: ["Reporting", "Pipelines", "KPIs"]
  },
  {
    id: "support",
    title: "Support Teams",
    description: "Resolve tickets faster with intelligent routing and AI-drafted responses.",
    points: [
      "Triaging and sentiment analysis via AI",
      "Customer 360 view pulled from multiple databases",
      "Automated refund and RMA processing"
    ],
    tools: ["Zendesk", "Retool", "Claude"],
    image: "/mockups/support-portal.png",
    tags: ["Triaging", "Customer 360", "AI Responses"]
  },
  {
    id: "ai",
    title: "AI & LLMs",
    description: "Deploy custom AI agents that read documents and answer complex queries.",
    points: [
      "RAG pipelines for internal knowledge bases",
      "Automated contract analysis and extraction",
      "Voice-to-text meeting summaries and action items"
    ],
    tools: ["OpenAI", "Pinecone", "LangChain"],
    image: "/mockups/ai-agent.png",
    tags: ["RAG", "Extraction", "Voice AI"]
  }
];