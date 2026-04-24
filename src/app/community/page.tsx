import { contributions } from "@/lib/data/community";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink, BarChartBig, LineChart, Layout, Map, PlayCircle, Share2, CalendarDays, FileSignature, Files } from "lucide-react";

export const metadata = {
  title: "Community & Open Source | Widle Studio",
  description: "Explore our open-source contributions to the Retool Custom Component Gallery and other community initiatives.",
};

// Map string icon names to Lucide components
const IconMap: Record<string, React.ElementType> = {
  BarChartBig,
  LineChart,
  LayoutKanban: Layout,
  Map,
  PlayCircle,
  Share2,
  CalendarDays,
  FileSignature,
  Files,
};

export default function CommunityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0D0F14] pt-24">
      {/* Hero */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#6366F1]/10 to-[#22D3EE]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 max-w-[1000px] text-center relative z-10">
          <span className="text-[#6366F1] font-semibold tracking-wider text-xs uppercase mb-6 block">
            Open Source
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Building for the community.
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed mb-10">
            We believe in giving back to the developer ecosystems we rely on. Explore our official custom components built for the Retool community.
          </p>
          <div className="flex justify-center gap-4">
             <a
              href="https://customcomponents.retool.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-colors"
            >
              View Retool Gallery
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Contributions Grid */}
      <section className="pb-32 relative">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="mb-12 flex items-center justify-between border-b border-white/10 pb-6">
             <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                 <Github className="w-8 h-8 text-[#22D3EE]" /> Retool Contributions
             </h2>
             <span className="text-[#9CA3AF] bg-white/5 px-3 py-1 rounded-full text-sm border border-white/10">
                {contributions.length} Components
             </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contributions.map((item) => {
              const Icon = IconMap[item.icon] || BarChartBig;
              return (
                <Link
                  href={`/community/${item.id}`}
                  key={item.id}
                  className="group p-8 rounded-2xl bg-[#13161D] border border-white/5 hover:border-[#6366F1]/50 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(99,102,241,0.1)] flex flex-col h-full"
                >
                  <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#6366F1]/10 transition-colors border border-white/10 overflow-hidden relative p-3">
                    <div className="w-full h-full rounded-md bg-gradient-to-br from-white/20 to-transparent group-hover:from-[#6366F1] group-hover:to-[#22D3EE] transition-all flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white group-hover:text-white" />
                    </div>
                  </div>

                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#22D3EE] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[#9CA3AF] leading-relaxed mb-8 flex-1">
                    {item.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-white/5 text-white/80 text-xs font-medium rounded-md border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-[#6366F1] text-sm font-semibold group-hover:text-[#8B5CF6] transition-colors">
                        View Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 bg-[#13161D] border-t border-white/[0.06] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need a custom component?
          </h2>
          <p className="text-[#9CA3AF] mb-8 max-w-xl mx-auto">
            We build specialized React components tailored to your exact business logic that plug right into Retool.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-medium hover:opacity-90 transition-opacity"
          >
            Hire us to build it
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}