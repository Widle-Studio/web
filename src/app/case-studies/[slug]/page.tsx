import { caseStudies } from "@/lib/data/caseStudies";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} | Widle Studio Case Study`,
    description: study.description,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) notFound();

  return (
    <div className="flex flex-col min-h-screen bg-background pt-24 pb-32">
      {/* Hero */}
      <section className="py-20 md:py-32 relative overflow-hidden border-b border-border bg-card">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#6366F1]/10 to-accent/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 max-w-[1000px] relative z-10 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium mb-12 uppercase tracking-wider"
          >
            <ArrowLeft size={16} />
            Back to Case Studies
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight mb-8">
            {study.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {study.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* Sidebar Data */}
            <div className="lg:w-1/3 order-2 lg:order-1">
              <div className="sticky top-32 space-y-12 bg-card p-8 rounded-2xl border border-border shadow-[0_8px_32px_rgba(0,0,0,0.5)]">

                {/* Metrics */}
                <div>
                  <h3 className="text-foreground font-medium mb-6 uppercase tracking-wider text-sm">
                    Key Results
                  </h3>
                  <div className="space-y-6">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-3xl font-bold text-[#6366F1] mb-1">
                          {metric.value}
                        </span>
                        <span className="text-muted-foreground">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full h-px bg-foreground/10" />

                {/* Tags / Tools */}
                <div>
                  <h3 className="text-foreground font-medium mb-6 uppercase tracking-wider text-sm">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-foreground/5 text-foreground/80 text-sm font-medium rounded-md border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full h-px bg-foreground/10" />

                <div className="text-center pt-4">
                   <p className="text-muted-foreground text-sm mb-4">Want similar results for your team?</p>
                   <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 rounded-lg bg-foreground/5 text-foreground font-medium hover:bg-foreground/10 border border-border transition-colors"
                    >
                      Book a call
                    </Link>
                </div>

              </div>
            </div>

            {/* Narrative Content */}
            <div className="lg:w-2/3 order-1 lg:order-2 text-muted-foreground prose prose-invert prose-lg max-w-none">

              <div className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">The Challenge</h2>
                <div className="p-6 bg-primary/5 border-l-4 border-[#6366F1] rounded-r-xl">
                  <p className="text-foreground/90 leading-relaxed text-xl mb-0">
                    {study.content.problem}
                  </p>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Solution</h2>
                <p className="leading-relaxed text-lg mb-8">
                  {study.content.solution}
                </p>

                {/* Abstract Image Rep */}
                <div className="w-full aspect-video rounded-xl bg-card border border-border mb-8 p-6 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-[#6366F1]/5" />
                  <div className="w-3/4 h-8 bg-foreground/5 rounded-md relative z-10" />
                  <div className="w-full h-full flex gap-4 relative z-10 mt-2">
                     <div className="w-1/4 h-full bg-foreground/5 rounded-md" />
                     <div className="w-3/4 h-full bg-background border border-border shadow-lg rounded-md p-4 flex flex-col gap-2">
                        <div className="w-1/3 h-6 bg-foreground/10 rounded" />
                        <div className="w-full h-full bg-foreground/5 rounded mt-2" />
                     </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">The Results</h2>
                <div className="p-6 bg-accent/5 border border-accent/20 rounded-xl">
                  <p className="text-foreground/90 leading-relaxed text-lg mb-0">
                    {study.content.results}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 bg-card border-y border-border text-center mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to streamline your operations?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let&apos;s discuss how we can build customized solutions for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-[#8B5CF6] transition-colors"
          >
            Book a Free Strategy Call
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}