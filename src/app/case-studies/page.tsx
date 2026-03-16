import { caseStudies } from "@/lib/data/caseStudies";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Case Studies | AutoTech Agency",
  description: "Real-world examples of how we've helped companies automate and scale.",
};

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0D0F14] pt-24">
      {/* Hero */}
      <section className="py-20 md:py-32 relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#6366F1]/10 to-[#22D3EE]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 max-w-[1000px] text-center relative z-10">
          <span className="text-[#22D3EE] font-semibold tracking-wider text-xs uppercase mb-6 block">
            Our Work
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Impact you can measure.
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed mb-10">
            See how we've transformed operations, eliminated manual data entry,
            and built custom solutions that scale with our clients.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-32">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Link
                href={`/case-studies/${study.slug}`}
                key={study.id}
                className="group flex flex-col bg-[#13161D] border border-white/5 rounded-2xl overflow-hidden hover:border-[#6366F1]/50 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(99,102,241,0.15)] h-full"
              >
                {/* Thumbnail */}
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#0D0F14] to-[#22D3EE]/10 relative border-b border-white/5 overflow-hidden flex items-center justify-center p-8">
                  {/* Abstract graphic */}
                  <div className="w-full h-full bg-[#13161D] rounded-lg border border-white/10 shadow-2xl relative p-4 group-hover:scale-[1.05] transition-transform duration-500">
                     <div className="w-1/3 h-4 bg-white/10 rounded-md mb-4" />
                     <div className="w-full h-24 bg-[#6366F1]/20 rounded-md mb-2" />
                     <div className="flex gap-2 h-16">
                       <div className="flex-1 bg-white/5 rounded-md" />
                       <div className="w-1/3 bg-[#22D3EE]/20 rounded-md" />
                     </div>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 text-[#9CA3AF] text-xs font-medium tracking-wide rounded-full border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-[#9CA3AF] leading-relaxed mb-8 flex-1">
                    {study.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                    {study.metrics.slice(0, 2).map((result, i) => (
                      <div key={i}>
                        <span className="block text-2xl font-bold text-[#6366F1] mb-1">
                          {result.value}
                        </span>
                        <span className="text-sm text-[#9CA3AF] uppercase tracking-wider font-semibold">
                          {result.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center text-[#22D3EE] font-medium text-sm group-hover:text-white transition-colors">
                    Read full case study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 bg-[#13161D] border-t border-white/[0.06] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to be our next success story?
          </h2>
          <p className="text-[#9CA3AF] mb-8 max-w-xl mx-auto">
            Book a free consultation and let's map out how we can save your team
            hours of manual work every week.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#6366F1] text-white font-medium hover:bg-[#8B5CF6] transition-colors"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}