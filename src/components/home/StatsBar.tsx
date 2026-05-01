"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Reduction in manual ops", value: 80, suffix: "%" },
  { label: "Tools and integrations", value: 50, suffix: "+" },
  { label: "Faster delivery vs custom dev", value: 3, suffix: "x" },
  { label: "Clients globally", value: 30, suffix: "+" },
];

export default function StatsBar() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-[#6366F1] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] z-0" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://retool.com/static/assets/mesh.png')] opacity-10 mix-blend-overlay z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-2 tracking-tight flex items-baseline justify-center">
                <AnimatedCounter from={0} to={stat.value} inView={inView} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-foreground/80 font-medium text-sm sm:text-base uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({
  from,
  to,
  inView,
}: {
  from: number;
  to: number;
  inView: boolean;
}) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;

    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Easing function (easeOutExpo)
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCount(Math.floor(easeOut * (to - from) + from));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [inView, from, to]);

  return <span>{count}</span>;
}