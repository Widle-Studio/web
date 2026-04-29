export const categories = [
  "All",
  "AI",
  "Retool",
  "Automation",
  "Internal Tools",
  "Our Expertise",
  "Partnerships",
  "n8n",
  "Make.com",
  "Zapier",
  "Looker Studio",
  "OpenAI",
  "Anthropic"
];

export const blogPosts = [
  {
    slug: "future-of-ai-automation-2026",
    title: "The Future of AI and Automation in 2026",
    excerpt: "How autonomous agents and LLMs are transforming business operations and what it means for the future of work.",
    content: `
## The Next Generation of Automation

Automation has historically been about simple triggers and actions (if X happens, do Y). However, with the rapid advancement of Large Language Models (LLMs) from companies like OpenAI and Anthropic, automation is moving from deterministic to probabilistic.

### Autonomous Agents

We are entering the era of Autonomous Agents. Instead of writing explicit rules, businesses can now provide a goal (e.g., "Resolve this customer ticket") and allow the AI to navigate internal systems, query databases via Retool, and execute workflows via n8n to achieve that goal.

This shift allows for:
- Handling edge cases without failing.
- Interpreting unstructured data (emails, voice notes).
- Proactive decision making.

At Widle Studio, we are already building these systems for forward-thinking enterprises.
    `,
    category: "AI",
    tags: ["Anthropic", "OpenAI", "Future"],
    author: "Jane Doe",
    authorAvatar: "JD",
    date: "April 24, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    isFeatured: true
  },
  {
    slug: "building-scalable-retool-apps",
    title: "Best Practices for Building Scalable Retool Applications",
    excerpt: "Stop writing spaghetti queries. Learn how to architect Retool apps that scale to thousands of users without performance degradation.",
    content: `
## Architecture Matters

When building internal tools, it's tempting to take shortcuts. Retool makes it incredibly easy to drag, drop, and connect queries. However, without a solid architectural foundation, an app can quickly become a maintenance nightmare.

### 1. Centralize Queries
Instead of writing inline SQL in every button click, utilize Retool's Query Library. This ensures consistency and allows you to update logic in one place.

### 2. Debounce Inputs
Always debounce your text inputs! Firing a PostgreSQL query on every keystroke will quickly overload your database.

### 3. Use Transformers Effectively
Don't use JavaScript queries just to format data. Use Transformers attached to your main queries so the data arrives in your UI components exactly as needed.
    `,
    category: "Retool",
    tags: ["Engineering", "Our Expertise", "Databases"],
    author: "John Smith",
    authorAvatar: "JS",
    date: "April 20, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    isFeatured: false
  },
  {
    slug: "n8n-vs-make-which-to-choose",
    title: "n8n vs Make.com: Which should you choose in 2026?",
    excerpt: "A deep dive into the two leading workflow automation platforms, comparing features, pricing, and enterprise readiness.",
    content: `
Choosing the right automation platform is critical. While Zapier has long been the default, power users have increasingly migrated to n8n and Make.com.

## Make.com
Make provides an incredible visual interface. It's excellent for marketing teams and complex branching logic. However, handling errors and iterating over large arrays can sometimes become visually cluttered.

## n8n
n8n is a developer-friendly, fair-code alternative. Because it can be self-hosted, it's often the top choice for enterprises with strict data residency requirements. It also offers powerful sub-workflows and robust error handling.

**Verdict:** Choose Make.com for speed and visual clarity. Choose n8n for data privacy, code-level control, and complex enterprise integrations.
    `,
    category: "Automation",
    tags: ["n8n", "Make.com", "Comparisons"],
    author: "Sarah Lee",
    authorAvatar: "SL",
    date: "April 15, 2026",
    readTime: "6 min read",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
    isFeatured: false
  },
  {
    slug: "announcing-anthropic-partnership",
    title: "Widle Studio Announces Official Partnership with Anthropic",
    excerpt: "We are thrilled to announce our partnership to bring Claude's advanced reasoning capabilities to enterprise internal tools.",
    content: `
Today marks a significant milestone for Widle Studio. We are officially partnering with Anthropic, the creators of Claude.

As AI becomes central to operational efficiency, we've found Claude to be unmatched in tasks requiring deep reasoning, coding assistance, and handling massive context windows safely.

By partnering with Anthropic, we get early access to new models and dedicated support, ensuring our clients receive the most robust and secure AI integrations possible within their internal tools and dashboards.
    `,
    category: "Partnerships",
    tags: ["Anthropic", "Company News", "AI"],
    author: "Widle Team",
    authorAvatar: "WT",
    date: "April 10, 2026",
    readTime: "3 min read",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
    isFeatured: false
  }
];