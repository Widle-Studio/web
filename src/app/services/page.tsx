import { services } from "@/lib/data/services";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Our Services | Widle Studio",
  description: "End-to-end automation, internal tools, AI solutions, and data dashboards.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      {/* Hero */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 max-w-[1000px] text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
            Everything you need to scale operations.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            We don't just write code. We design and deploy comprehensive systems
            that eliminate manual work, connect your data, and empower your team.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-32">
        <div className="container mx-auto px-4 max-w-[1200px] space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 lg:gap-20 items-center scroll-mt-32`}
              >
                {/* Content */}
                <div className="w-full lg:w-1/2 flex flex-col space-y-8">
                  <div>
                    <span className="text-primary font-semibold tracking-wider text-xs uppercase mb-4 block">
                      Service {index + 1}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-foreground font-medium mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      {(service.benefits || [
                        "Accelerate team workflows",
                        "Eliminate human error",
                        "Reduce operational costs",
                      ]).map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  <div className="pt-6 border-t border-border/50">
                    <h3 className="text-sm text-foreground/80 font-medium mb-4 uppercase tracking-wider">
                      Tools & Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-muted border border-border/50 rounded-md text-sm text-foreground/80"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link
                      href={`/services/${service.id}`}
                      className="inline-flex items-center gap-2 text-foreground font-medium bg-primary px-6 py-3 rounded-lg hover:bg-primary-foreground transition-colors w-fit"
                    >
                      Learn more
                      <ChevronRight size={18} />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-muted-foreground font-medium border border-border/50 bg-muted px-6 py-3 rounded-lg hover:bg-muted/50 hover:text-foreground transition-colors w-fit"
                    >
                      Discuss your project
                    </Link>
                  </div>
                </div>

                {/* Mockup / Image */}
                <div className="w-full lg:w-1/2 aspect-[4/3] rounded-2xl bg-card border border-border overflow-hidden flex items-center justify-center p-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-[#22D3EE]/5" />

                  {/* Abstract Representation */}
                  <div className="w-full h-full bg-background rounded-lg border border-border/50 shadow-2xl relative p-6 flex flex-col gap-4">
                    <div className="flex gap-2 border-b border-border pb-4">
                      <div className="w-3 h-3 rounded-full bg-muted/80" />
                      <div className="w-3 h-3 rounded-full bg-muted/80" />
                      <div className="w-3 h-3 rounded-full bg-muted/80" />
                    </div>
                    <div className="flex gap-4 flex-1">
                      <div className="w-1/4 bg-muted rounded-md h-full" />
                      <div className="w-3/4 flex flex-col gap-4">
                        <div className="w-full h-1/3 bg-primary/20 rounded-md" />
                        <div className="w-full h-2/3 bg-muted rounded-md" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 bg-card border-t border-white/[0.06] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Not sure where to start?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Book a free 30-minute discovery call. We&apos;ll audit your current stack
            and identify the highest ROI opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-[#8B5CF6] text-white font-medium hover:opacity-90 transition-opacity"
          >
            Book a Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}