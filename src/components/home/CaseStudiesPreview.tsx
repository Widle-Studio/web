import { caseStudies } from "@/lib/data/caseStudies";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CaseStudiesPreview() {
  const previewStudies = caseStudies.slice(0, 3);

  return (
    <section className="py-24 bg-card border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-[#22D3EE] font-semibold tracking-wider text-xs uppercase mb-4 block">
              Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Real results for real teams
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-foreground font-medium bg-foreground/5 border border-border px-6 py-3 rounded-lg hover:bg-foreground/10 transition-colors whitespace-nowrap"
          >
            View all work
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewStudies.map((study) => (
            <Link
              href={`/case-studies/${study.slug}`}
              key={study.id}
              className="group flex flex-col bg-background border border-border rounded-2xl overflow-hidden hover:border-border transition-all duration-300 hover:shadow-[0_8px_32px_rgba(34,211,238,0.1)] h-full"
            >
              {/* Thumbnail Placeholder */}
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#13161D] to-[#22D3EE]/10 relative border-b border-border overflow-hidden flex items-center justify-center p-8">
                {/* Abstract graphic */}
                <div className="w-full h-full bg-card rounded-lg border border-border shadow-2xl relative p-4 group-hover:scale-[1.02] transition-transform duration-500">
                   <div className="w-1/3 h-4 bg-foreground/10 rounded-md mb-4" />
                   <div className="w-full h-24 bg-[#6366F1]/20 rounded-md mb-2" />
                   <div className="flex gap-2 h-16">
                     <div className="flex-1 bg-foreground/5 rounded-md" />
                     <div className="w-1/3 bg-[#22D3EE]/20 rounded-md" />
                   </div>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.slice(0, 3).map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#6366F1]/10 text-[#6366F1] text-xs font-semibold tracking-wide uppercase rounded-full border border-[#6366F1]/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-[#22D3EE] transition-colors">
                  {study.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                  {study.metrics.slice(0, 2).map((result, i) => (
                    <div key={i}>
                      <span className="block text-xl font-bold text-foreground mb-1">
                        {result.value}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {result.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex items-center text-[#6366F1] font-medium text-sm">
                  Read case study
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}