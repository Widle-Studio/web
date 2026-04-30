import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle2, Factory, Settings, Activity } from "lucide-react";
import { services } from "@/lib/data/services";
import { notFound } from "next/navigation";

export function generateMetadata() {
  const service = services.find((s) => s.id === "automation");
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Widle Studio`,
    description: service.description,
  };
}

export default function AutomationPage() {
  const service = services.find((s) => s.id === "automation");

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      {/* Hero */}
      <section className="py-20 md:py-32 relative overflow-hidden border-b border-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 to-[#22D3EE]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 max-w-[1000px] relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>
          <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
            <div className="w-24 h-24 rounded-2xl bg-muted flex items-center justify-center border border-border/50 shrink-0">
               <Activity className="w-12 h-12 text-primary" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <h2 className="text-3xl font-bold text-foreground mb-6">Complete Guide to {service.title}</h2>
          <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed text-lg">
            <p>{service.guide}</p>
          </div>
        </div>
      </section>

      {/* How it Helps & Problems Solved */}
      <section className="py-24 bg-card border-y border-border relative">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                 <Settings className="w-8 h-8 text-accent" /> How it Helps
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {service.howItHelps}
              </p>

              <h3 className="text-xl font-bold text-foreground mb-4">Core Benefits:</h3>
              <ul className="space-y-4">
                {service.benefits?.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Problems Solved</h2>
              <ul className="space-y-6">
                {service.problemsSolved?.map((problem, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 font-bold text-sm border border-red-500/20">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground pt-1">{problem}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Case Study */}
      {service.industryCaseStudy && (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-[1000px]">
                <div className="bg-gradient-to-br from-primary/10 to-[#22D3EE]/10 border border-border/50 rounded-3xl p-10 md:p-16 relative">
                    <div className="flex items-center gap-3 mb-6">
                        <Factory className="w-6 h-6 text-accent" />
                        <span className="text-accent font-semibold tracking-wider text-sm uppercase">
                            Industry Case Study: {service.industryCaseStudy.industry}
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        {service.industryCaseStudy.title}
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        {service.industryCaseStudy.description}
                    </p>
                </div>
            </div>
        </section>
      )}

      {/* Tools Section */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 max-w-[1000px] text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Tools We Use</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
                We leverage the best modern platforms to build scalable solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                {service.tools?.map((tool, index) => (
                    <span key={index} className="px-6 py-3 bg-background border border-border/50 rounded-xl text-foreground font-medium shadow-sm hover:border-primary/50 transition-colors">
                        {tool}
                    </span>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 border-t border-white/[0.06] text-center mt-auto">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to transform your operations?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how we can leverage {service.title} to streamline your workflows and save your team hours every week.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-primary-foreground text-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Get a Free Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}