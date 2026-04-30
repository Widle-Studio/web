import { Zap, Link as LinkIcon, Bot, Lock, BarChart3, Repeat } from "lucide-react";

const features = [
  {
    title: "Fast Delivery",
    description: "From scoping to deployed tool in 2–4 weeks. We move at startup speed.",
    icon: Zap,
  },
  {
    title: "Deep Integrations",
    description: "We connect your entire stack seamlessly, breaking down data silos.",
    icon: LinkIcon,
  },
  {
    title: "AI-Native",
    description: "AI isn't an add-on for us — it's built-in from the ground up.",
    icon: Bot,
  },
  {
    title: "Secure by Default",
    description: "Enterprise-grade security practices. Your data never leaves your control.",
    icon: Lock,
  },
  {
    title: "Data-First",
    description: "Every tool we build is driven by your data, ensuring accuracy and trust.",
    icon: BarChart3,
  },
  {
    title: "Iterative",
    description: "We ship fast, gather feedback, and keep improving with you over time.",
    icon: Repeat,
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-24 md:py-32 bg-background border-b border-white/[0.06]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-primary font-semibold tracking-wider text-xs uppercase mb-4 block">
            Why Work With Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Death to boilerplate.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Stop reinventing the wheel. We leverage the best modern platforms to
            build bespoke software faster, cheaper, and better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0 border border-border/50 text-accent">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}