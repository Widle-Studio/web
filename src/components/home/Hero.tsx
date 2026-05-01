"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const textOptions = [
  "Internal Tools That Actually Work",
  "Automate Your Operations End-to-End",
  "AI-Powered Workflows, Built for Your Stack",
  "Data Dashboards Your Team Will Actually Use",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % textOptions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 translate-x-1/4 -translate-y-1/4 w-[400px] h-[400px] bg-accent opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-muted border border-border/50 text-xs font-semibold tracking-wider text-primary uppercase mb-6">
            Automation · AI · Internal Tools
          </span>

          <div className="h-[120px] sm:h-[144px] md:h-[160px] lg:h-[180px] flex items-center justify-center relative">
            <AnimatePresence mode="popLayout">
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground absolute w-full"
              >
                {textOptions[index]}
              </motion.h1>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 md:mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed"
        >
          We design and build internal tools, automations, and AI workflows for
          startups and scale-ups — using Retool, n8n, Make.com, Zapier, Looker
          Studio, and more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-[#8B5CF6] text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            Book a Consultation
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/case-studies"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-muted text-foreground font-medium hover:bg-muted/50 transition-colors border border-border/50 flex items-center justify-center"
          >
            See Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}