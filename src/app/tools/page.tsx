import { tools } from "@/lib/data/tools";
import Link from "next/link";
import { ArrowRight, Wrench } from "lucide-react";

export const metadata = {
  title: "Tools & Integrations | Widle Studio",
  description: "Explore the modern stack we use to build internal tools and automate workflows.",
};

export default function ToolsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0D0F14] pt-24">
      {/* Hero */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#6366F1]/10 to-[#22D3EE]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 max-w-[1000px] text-center relative z-10">
          <span className="text-[#6366F1] font-semibold tracking-wider text-xs uppercase mb-6 block">
            Our Stack
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            The right tool for every job.
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed mb-10">
            We partner with the best platforms in the industry to deliver fast,
            scalable, and secure solutions tailored to your business logic.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <Link href={`/tools/${tool.id}`} key={tool.id} className="block h-full cursor-pointer">
                <div
                  className="group p-8 rounded-2xl bg-[#13161D] border border-white/5 hover:border-[#6366F1]/50 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(99,102,241,0.1)] flex flex-col h-full"
                >
                  <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#6366F1]/10 transition-colors border border-white/10 overflow-hidden relative p-3">
                    <div className="w-full h-full rounded-md bg-gradient-to-br from-white/20 to-transparent group-hover:from-[#6366F1] group-hover:to-[#22D3EE] transition-all flex items-center justify-center">
                      <Wrench className="w-6 h-6 text-white group-hover:text-white" />
                    </div>
                  </div>

                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#22D3EE] transition-colors flex items-center gap-2">
                      {tool.name}
                      <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </h3>
                  </div>

                  <p className="text-[#9CA3AF] leading-relaxed mb-8 flex-1">
                    {tool.description}
                  </p>

                  <div className="mt-auto">
                    <p className="text-sm text-white/60 mb-3 uppercase tracking-wider font-medium">
                      Best for
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tool.useCases.map((useCase, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-white/5 text-white/80 text-xs font-semibold rounded-md border border-white/10"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
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
            Don't see your tool here?
          </h2>
          <p className="text-[#9CA3AF] mb-8 max-w-xl mx-auto">
            We integrate with almost any REST or GraphQL API, database, or legacy
            system. Let's talk about your stack.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-medium hover:opacity-90 transition-opacity"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}