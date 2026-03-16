export const caseStudies = [
  {
    id: "retool-internal-crm",
    slug: "retool-internal-crm",
    title: "Custom CRM for Logistics Firm",
    description: "Built a fully tailored Retool CRM that eliminated manual spreadsheet tracking and unified 3 separate databases.",
    tags: ["Internal Tools", "Retool", "PostgreSQL"],
    image: "/mockups/crm-case-study.png",
    metrics: [
      { label: "Hours Saved/Wk", value: "40+" },
      { label: "Data Accuracy", value: "100%" }
    ],
    content: {
      problem: "The client was managing a fleet of 200 trucks using 5 different Google Sheets, leading to massive data entry errors and a 24-hour delay in dispatch reporting.",
      solution: "We engineered a secure, role-based Retool application. It connects directly to their GPS provider's API and their internal PostgreSQL database.",
      results: "Dispatchers now have a real-time map and drag-and-drop assignment board. The company saves an estimated 40 hours per week in manual data entry."
    }
  },
  {
    id: "n8n-automation-system",
    slug: "n8n-automation-system",
    title: "Automated Invoice Processing",
    description: "Deployed an n8n workflow that automatically extracts data from PDF invoices using AI and syncs to Xero.",
    tags: ["Automation", "n8n", "OpenAI"],
    image: "/mockups/invoice-automation.png",
    metrics: [
      { label: "Processing Time", value: "-90%" },
      { label: "Invoices/Mo", value: "5,000+" }
    ],
    content: {
      problem: "An accounting firm was manually retyping data from over 5,000 PDF invoices a month into their accounting software.",
      solution: "We built an n8n pipeline that triggers on new emails, sends attachments to OpenAI for structured JSON extraction, and pushes the data to Xero via API.",
      results: "Invoice processing time dropped from 3 minutes per invoice to 15 seconds. Human error was virtually eliminated, and the team was reallocated to higher-value advisory work."
    }
  },
  {
    id: "looker-studio-dashboards",
    slug: "looker-studio-dashboards",
    title: "Executive Revenue Dashboards",
    description: "Consolidated data from Stripe, Hubspot, and Google Ads into a single real-time Looker Studio report.",
    tags: ["Data Dashboards", "Looker Studio", "BigQuery"],
    image: "/mockups/revenue-dashboard.png",
    metrics: [
      { label: "Data Sources", value: "6" },
      { label: "Reporting Speed", value: "Real-time" }
    ],
    content: {
      problem: "The executive team was waiting until the 10th of every month to get a clear picture of marketing ROI and SaaS churn.",
      solution: "We set up Fivetran to pipe all raw data into BigQuery, wrote custom SQL models to calculate ARR and LTV, and visualized it all in Looker Studio.",
      results: "The CEO now has a real-time dashboard on their phone. Marketing can adjust spend daily based on actual closed-won revenue, not just lead volume."
    }
  }
];