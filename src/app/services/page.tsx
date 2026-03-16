import { services } from "@/lib/data/services";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

export const metadata = {
  title: "Our Services | AutoTech Agency",
  description: "End-to-end automation, internal tools, AI solutions, and data dashboards.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0D0F14] pt-24">
      {/* Hero */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366F1] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 max-w-[1000px] text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Everything you need to scale operations.
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed mb-10">
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
                    <span className="text-[#6366F1] font-semibold tracking-wider text-xs uppercase mb-4 block">
                      Service {index + 1}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      {service.title}
                    </h2>
                    <p className="text-[#9CA3AF] text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-white font-medium mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      {(service.benefits || [
                        "Accelerate team workflows",
                        "Eliminate human error",
                        "Reduce operational costs",
                      ]).map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#22D3EE] shrink-0 mt-0.5" />
                          <span className="text-[#9CA3AF]">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  <div className="pt-6 border-t border-white/10">
                    <h3 className="text-sm text-white/80 font-medium mb-4 uppercase tracking-wider">
                      Tools & Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-white/80"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-white font-medium bg-[#6366F1] px-6 py-3 rounded-lg hover:bg-[#8B5CF6] transition-colors w-fit"
                  >
                    Discuss your project
                    <ChevronRight size={18} />
                  </Link>
                </div>

                {/* Mockup / Image */}
                <div className="w-full lg:w-1/2 aspect-[4/3] rounded-2xl bg-[#13161D] border border-white/5 overflow-hidden flex items-center justify-center p-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 to-[#22D3EE]/5" />

                  {/* Abstract Representation */}
                  <div className="w-full h-full bg-[#0D0F14] rounded-lg border border-white/10 shadow-2xl relative p-6 flex flex-col gap-4">
                    <div className="flex gap-2 border-b border-white/5 pb-4">
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                      <div className="w-3 h-3 rounded-full bg-white/20" />
                    </div>
                    <div className="flex gap-4 flex-1">
                      <div className="w-1/4 bg-white/5 rounded-md h-full" />
                      <div className="w-3/4 flex flex-col gap-4">
                        <div className="w-full h-1/3 bg-[#6366F1]/20 rounded-md" />
                        <div className="w-full h-2/3 bg-white/5 rounded-md" />
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
      <section className="py-24 bg-[#13161D] border-t border-white/[0.06] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Not sure where to start?
          </h2>
          <p className="text-[#9CA3AF] mb-8 max-w-xl mx-auto">
            Book a free 30-minute discovery call. We&apos;ll audit your current stack
            and identify the highest ROI opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-medium hover:opacity-90 transition-opacity"
          >
            Book a Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}