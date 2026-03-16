import { tools } from "@/lib/data/tools";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lightbulb, Workflow, Users, Wrench } from "lucide-react";

export const metadata = {
  title: "About Us | AutoTech Agency",
  description: "We are an agency focused on building the future of internal tools, automation, and AI for modern teams.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0D0F14] pt-24">
      {/* Hero */}
      <section className="py-20 md:py-32 relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#6366F1]/10 to-[#22D3EE]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 max-w-[1000px] text-center relative z-10">
          <span className="text-[#6366F1] font-semibold tracking-wider text-xs uppercase mb-6 block">
            Our Mission
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            We build the systems that build your business.
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed mb-10">
            AutoTech Agency was founded on a simple premise: teams spend too much
            time managing software and not enough time doing meaningful work. We
            exist to automate the mundane and empower your operations.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#13161D]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Core Values</h2>
            <p className="text-[#9CA3AF] mt-4">The principles that guide our work.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#0D0F14] border border-white/5 hover:border-white/10 transition-colors">
              <Lightbulb className="w-10 h-10 text-[#6366F1] mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">
                Solve the Right Problem
              </h3>
              <p className="text-[#9CA3AF] leading-relaxed">
                We don&apos;t just build what you ask for; we dig deep to understand the
                root cause of your operational bottlenecks and design systems that
                actually fix them.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#0D0F14] border border-white/5 hover:border-white/10 transition-colors">
              <Workflow className="w-10 h-10 text-[#22D3EE] mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">
                Ship Fast, Iterate Later
              </h3>
              <p className="text-[#9CA3AF] leading-relaxed">
                By leveraging low-code and no-code tools alongside custom code, we
                deliver functional solutions in weeks, not months. We launch quickly
                and refine based on real usage.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#0D0F14] border border-white/5 hover:border-white/10 transition-colors">
              <Users className="w-10 h-10 text-[#6366F1] mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">
                Empower the Team
              </h3>
              <p className="text-[#9CA3AF] leading-relaxed">
                Our tools are designed to be used. We prioritize intuitive UX and
                provide comprehensive training so your team actually adopts the
                systems we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <div className="text-center mb-16">
            <span className="text-[#22D3EE] font-semibold tracking-wider text-xs uppercase mb-4 block">
              How We Work
            </span>
            <h2 className="text-3xl font-bold text-white">Our Process</h2>
          </div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Discovery & Scoping",
                desc: "We dive deep into your current processes, identify bottlenecks, and map out the ideal data flow and user journey.",
              },
              {
                step: "02",
                title: "Architecture & Design",
                desc: "We select the right tools for the job (e.g., Retool, n8n, Supabase) and design the database schema and UI mockups.",
              },
              {
                step: "03",
                title: "Development & Integration",
                desc: "We build the application, connect your APIs, set up the automations, and rigorously test everything.",
              },
              {
                step: "04",
                title: "Training & Handoff",
                desc: "We deploy the solution, train your team on how to use it, and provide ongoing support and maintenance options.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center p-8 bg-[#13161D] rounded-2xl border border-white/5"
              >
                <div className="text-6xl font-bold text-[#6366F1]/20 font-mono shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Preview */}
      <section className="py-24 bg-[#13161D] border-t border-white/[0.06]">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Our Stack</h2>
          <p className="text-[#9CA3AF] mb-12 max-w-2xl mx-auto">
            We are experts in the modern tooling ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="flex items-center gap-2 px-4 py-2 bg-[#0D0F14] border border-white/10 rounded-full"
              >
                <Wrench className="w-4 h-4 text-[#6366F1]" />
                <span className="text-white/80 font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-12">
             <Link
                href="/tools"
                className="inline-flex items-center gap-2 text-[#6366F1] font-medium hover:text-[#8B5CF6] transition-colors"
              >
                View all integrations
                <ArrowRight size={18} />
              </Link>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 bg-[#0D0F14] border-t border-white/[0.06] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Let's build something great.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-medium hover:opacity-90 transition-opacity mt-6 shadow-[0_4px_20px_rgba(99,102,241,0.25)]"
          >
            Get in touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}