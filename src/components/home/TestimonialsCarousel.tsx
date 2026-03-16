"use client";

import { testimonials } from "@/lib/data/testimonials";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 bg-[#0D0F14] overflow-hidden relative border-b border-white/[0.06]">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-gradient-radial from-[#6366F1]/10 to-transparent pointer-events-none opacity-50 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1000px] relative z-10 text-center">
        <span className="text-[#6366F1] font-semibold tracking-wider text-xs uppercase mb-8 block">
          Client Feedback
        </span>

        <div className="relative min-h-[400px] sm:min-h-[350px] md:min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute w-full px-4 sm:px-12 flex flex-col items-center"
            >
              <Quote className="w-12 h-12 text-[#22D3EE]/20 mb-8 mx-auto" />
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight mb-12 tracking-tight">
                "{testimonials[index].quote}"
              </p>

              <div className="flex items-center gap-4 text-left bg-white/5 pr-6 pl-2 py-2 rounded-full border border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366F1] to-[#22D3EE] shrink-0 flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[index].author.name[0]}
                </div>
                <div>
                  <div className="text-white font-medium text-lg leading-none mb-1">
                    {testimonials[index].author.name}
                  </div>
                  <div className="text-[#9CA3AF] text-sm leading-none">
                    {testimonials[index].author.role}, {testimonials[index].author.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-[#22D3EE]" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-105"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}