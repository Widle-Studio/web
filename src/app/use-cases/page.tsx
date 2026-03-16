"use client";

import { useCases } from "@/lib/data/useCases";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function UseCasesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", ...useCases.map((uc) => uc.title)];

  const filteredUseCases =
    activeFilter === "All"
      ? useCases
      : useCases.filter((uc) => uc.title === activeFilter);

  return (
    <div className="flex flex-col min-h-screen bg-[#0D0F14] pt-24">
      {/* Hero */}
      <section className="py-20 md:py-32 relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#6366F1]/10 to-[#22D3EE]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 max-w-[1000px] text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Solutions for every team.
          </h1>
          <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed mb-10">
            Discover how we build tailored internal tools and automation
            workflows to solve the unique challenges of sales, operations, data,
            and support teams.
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-[1200px]">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[#6366F1] text-white shadow-[0_4px_20px_rgba(99,102,241,0.25)]"
                    : "bg-white/5 text-[#9CA3AF] hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <AnimatePresence mode="popLayout">
              {filteredUseCases.map((useCase) => (
                <motion.div
                  key={useCase.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#13161D] rounded-2xl border border-white/5 overflow-hidden flex flex-col group hover:border-white/20 transition-all hover:shadow-[0_8px_32px_rgba(34,211,238,0.1)]"
                >
                  <div className="aspect-video bg-[#0D0F14] relative border-b border-white/5 flex items-center justify-center p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 to-[#22D3EE]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Mockup */}
                    <div className="w-full h-full bg-[#13161D] rounded-lg border border-white/10 shadow-2xl relative p-4 group-hover:scale-[1.02] transition-transform duration-500">
                      <div className="w-1/3 h-4 bg-white/10 rounded-md mb-4" />
                      <div className="w-full h-24 bg-[#6366F1]/20 rounded-md mb-2" />
                      <div className="flex gap-2 h-16">
                        <div className="flex-1 bg-white/5 rounded-md" />
                        <div className="w-1/3 bg-[#22D3EE]/20 rounded-md" />
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {useCase.tools.slice(0, 3).map((tool, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-white/5 text-white/70 text-xs font-semibold tracking-wide uppercase rounded-md border border-white/10"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {useCase.title}
                    </h3>

                    <p className="text-[#9CA3AF] leading-relaxed mb-6">
                      {useCase.description}
                    </p>

                    <ul className="space-y-3 mt-auto pt-6 border-t border-white/10">
                      {useCase.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#22D3EE] shrink-0 mt-0.5" />
                          <span className="text-white/80 text-sm">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 bg-[#13161D] border-t border-white/[0.06] text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to empower your team?
          </h2>
          <p className="text-[#9CA3AF] mb-8 max-w-xl mx-auto">
            Book a free 30-minute discovery call to discuss your use cases and
            see if we&apos;re a fit.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#6366F1] text-white font-medium hover:bg-[#8B5CF6] transition-colors"
          >
            Schedule a Call
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}