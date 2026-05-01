import { services } from "@/lib/data/services";
import Link from "next/link";
import { ArrowRight, Cpu, GitMerge, LineChart, Layout } from "lucide-react";

export default function ServicesGrid() {
  const iconMap: Record<string, React.ElementType> = {
    InternalTools: Layout,
    Automation: GitMerge,
    AI: Cpu,
    Dashboards: LineChart,
  };

  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-wider text-xs uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
            End-to-end Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From scoping and architecture to deployment and maintenance. We build
            the systems that power your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            // Pick an icon based on service title logic, or fallback
            const IconComponent =
              iconMap[service.id] || Layout;

            return (
              <div
                key={service.id}
                className="group relative p-8 rounded-2xl bg-background border border-border hover:border-border transition-all duration-300 hover:shadow-[0_8px_32px_rgba(99,102,241,0.15)] flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-foreground/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors border border-border">
                  <IconComponent className="w-7 h-7 text-[#6366F1] group-hover:text-accent transition-colors" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {service.tools.slice(0, 4).map((tool, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-foreground/5 text-foreground/70 border border-border"
                      >
                        {tool}
                      </span>
                    ))}
                    {service.tools.length > 4 && (
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-foreground/5 text-foreground/50 border border-border">
                        +{service.tools.length - 4} more
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 text-foreground font-medium group-hover:text-accent transition-colors"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}