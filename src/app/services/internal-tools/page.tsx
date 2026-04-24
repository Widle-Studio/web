import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle2, Factory, Settings, LayoutDashboard } from "lucide-react";
import { services } from "@/lib/data/services";
import { notFound } from "next/navigation";

export function generateMetadata() {
  const service = services.find((s) => s.id === "internal-tools");
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Widle Studio`,
    description: service.description,
  };
}

export default function InternalToolsPage() {
  const service = services.find((s) => s.id === "internal-tools");

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0D0F14] pt-24">
      {/* Hero */}
      <section className="py-20 md:py-32 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#6366F1]/10 to-[#22D3EE]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 max-w-[1000px] relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-white transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>
          <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
            <div className="w-24 h-24 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
               <LayoutDashboard className="w-12 h-12 text-[#6366F1]" />
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-[#9CA3AF] max-w-2xl leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <h2 className="text-3xl font-bold text-white mb-6">Complete Guide to {service.title}</h2>
          <div className="prose prose-invert max-w-none text-[#9CA3AF] leading-relaxed text-lg">
            <p>{service.guide}</p>
          </div>
        </div>
      </section>

      {/* How it Helps & Problems Solved */}
      <section className="py-24 bg-[#13161D] border-y border-white/5 relative">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                 <Settings className="w-8 h-8 text-[#22D3EE]" /> How it Helps
              </h2>
              <p className="text-[#9CA3AF] text-lg leading-relaxed mb-8">
                {service.howItHelps}
              </p>

              <h3 className="text-xl font-bold text-white mb-4">Core Benefits:</h3>
              <ul className="space-y-4">
                {service.benefits?.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-[#9CA3AF]">
                    <CheckCircle2 className="w-5 h-5 text-[#6366F1] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0D0F14] p-8 rounded-2xl border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-6">Problems Solved</h2>
              <ul className="space-y-6">
                {service.problemsSolved?.map((problem, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 font-bold text-sm border border-red-500/20">
                      {index + 1}
                    </div>
                    <p className="text-[#9CA3AF] pt-1">{problem}</p>
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
                <div className="bg-gradient-to-br from-[#6366F1]/10 to-[#22D3EE]/10 border border-white/10 rounded-3xl p-10 md:p-16 relative">
                    <div className="flex items-center gap-3 mb-6">
                        <Factory className="w-6 h-6 text-[#22D3EE]" />
                        <span className="text-[#22D3EE] font-semibold tracking-wider text-sm uppercase">
                            Industry Case Study: {service.industryCaseStudy.industry}
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {service.industryCaseStudy.title}
                    </h2>
                    <p className="text-xl text-[#9CA3AF] leading-relaxed max-w-3xl">
                        {service.industryCaseStudy.description}
                    </p>
                </div>
            </div>
        </section>
      )}

      {/* Tools Section */}
      <section className="py-24 bg-[#13161D] border-t border-white/5">
        <div className="container mx-auto px-4 max-w-[1000px] text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Tools We Use</h2>
            <p className="text-[#9CA3AF] mb-12 max-w-2xl mx-auto">
                We leverage the best modern platforms to build scalable solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                {service.tools?.map((tool, index) => (
                    <span key={index} className="px-6 py-3 bg-[#0D0F14] border border-white/10 rounded-xl text-white font-medium shadow-sm hover:border-[#6366F1]/50 transition-colors">
                        {tool}
                    </span>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 border-t border-white/[0.06] text-center mt-auto">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to transform your operations?
          </h2>
          <p className="text-[#9CA3AF] mb-8 max-w-xl mx-auto">
            Let's discuss how we can leverage {service.title} to streamline your workflows and save your team hours every week.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-medium hover:opacity-90 transition-opacity"
          >
            Get a Free Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}