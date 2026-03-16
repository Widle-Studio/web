"use client";

import { useCases } from "@/lib/data/useCases";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function UseCaseTabs() {
  const [activeTab, setActiveTab] = useState(useCases[0].id);

  return (
    <section className="py-24 md:py-32 bg-[#0D0F14]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="text-center mb-16">
          <span className="text-[#6366F1] font-semibold tracking-wider text-xs uppercase mb-4 block">
            Solutions By Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Built for how you work
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-nowrap overflow-x-auto pb-4 mb-12 gap-2 sm:gap-4 md:justify-center w-full no-scrollbar">
          {useCases.map((useCase) => (
            <button
              key={useCase.id}
              onClick={() => setActiveTab(useCase.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeTab === useCase.id
                  ? "bg-[#6366F1] text-white shadow-[0_4px_20px_rgba(99,102,241,0.25)]"
                  : "bg-white/5 text-[#9CA3AF] hover:bg-white/10 hover:text-white"
              }`}
            >
              {useCase.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[500px] w-full rounded-2xl bg-[#13161D] border border-white/5 overflow-hidden">
          <AnimatePresence mode="wait">
            {useCases
              .filter((uc) => uc.id === activeTab)
              .map((useCase) => (
                <motion.div
                  key={useCase.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-12 h-full"
                >
                  {/* Left Content */}
                  <div className="flex flex-col justify-center h-full space-y-8">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4">
                        {useCase.title}
                      </h3>
                      <p className="text-[#9CA3AF] text-lg leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>

                    <ul className="space-y-4">
                      {useCase.points.map((example, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-[#22D3EE] shrink-0 mt-0.5" />
                          <span className="text-white/90 font-medium">
                            {example}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 border-t border-white/10">
                      <p className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wider font-semibold">
                        Tools We Use
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {useCase.tools.map((tool, i) => (
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
                      className="inline-flex items-center gap-2 text-[#6366F1] font-medium hover:text-[#8B5CF6] transition-colors group mt-4 w-fit"
                    >
                      Talk to us about your team
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Right Content - Mockup Illustration */}
                  <div className="relative rounded-xl bg-[#0D0F14] border border-white/10 overflow-hidden flex items-center justify-center min-h-[300px] lg:min-h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 to-[#22D3EE]/10 pointer-events-none" />

                    {/* Abstract UI representation */}
                    <div className="w-[80%] h-[80%] flex flex-col gap-4 p-6 bg-[#13161D] rounded-lg border border-white/5 shadow-2xl relative z-10">
                      <div className="flex gap-2 border-b border-white/5 pb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                      </div>

                      <div className="flex gap-4 flex-1 mt-2">
                        {/* Sidebar Mockup */}
                        <div className="w-1/4 h-full flex flex-col gap-3">
                          <div className="w-full h-8 bg-white/5 rounded-md" />
                          <div className="w-3/4 h-4 bg-white/5 rounded-md mt-4" />
                          <div className="w-2/3 h-4 bg-white/5 rounded-md" />
                          <div className="w-4/5 h-4 bg-white/5 rounded-md" />
                        </div>

                        {/* Main Content Mockup */}
                        <div className="w-3/4 h-full flex flex-col gap-4">
                          <div className="flex justify-between items-center">
                            <div className="w-1/3 h-6 bg-white/10 rounded-md" />
                            <div className="w-24 h-8 bg-[#6366F1]/20 rounded-md" />
                          </div>

                          <div className="grid grid-cols-3 gap-3 mb-2">
                            <div className="h-20 bg-white/5 rounded-md" />
                            <div className="h-20 bg-white/5 rounded-md" />
                            <div className="h-20 bg-white/5 rounded-md" />
                          </div>

                          <div className="flex-1 bg-white/5 rounded-md w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}