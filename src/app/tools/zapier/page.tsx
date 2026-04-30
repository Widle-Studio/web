import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { tools } from "@/lib/data/tools";
import { notFound } from "next/navigation";

export function generateMetadata() {
  const tool = tools.find((t) => t.id === "zapier");
  if (!tool) return { title: "Tool Not Found" };

  return {
    title: `${tool.name} Integration & Development | Widle Studio`,
    description: `Expert ${tool.name} development services. ${tool.description}`,
  };
}

export default function ZapierPage() {
  const tool = tools.find((t) => t.id === "zapier");

  if (!tool) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      {/* Hero */}
      <section className="py-20 md:py-32 relative overflow-hidden border-b border-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 to-[#22D3EE]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 max-w-[1000px] relative z-10">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            Back to Tools
          </Link>
          <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
            <div className="w-24 h-24 rounded-2xl bg-muted flex items-center justify-center border border-border/50 shrink-0">
               <span className="text-2xl font-bold text-foreground">{tool.logo}</span>
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
                {tool.name} Development
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                {tool.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">What we build with {tool.name}</h2>
              <ul className="space-y-4">
                {tool.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-lg">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Why choose Widle Studio?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We have extensive experience building scalable internal tools and dashboards using {tool.name}. Our team ensures that your apps are secure, performant, and seamlessly integrated with your existing data sources and APIs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Start a {tool.name} project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 bg-card border-t border-white/[0.06] text-center mt-auto">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to transform your operations?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how we can leverage {tool.name} to streamline your workflows and save your team hours every week.
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