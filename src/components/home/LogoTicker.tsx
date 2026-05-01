import { tools } from "@/lib/data/tools";
import Image from "next/image";

export default function LogoTicker() {
  const allTools = [...tools, ...tools]; // Duplicate for infinite scroll effect

  return (
    <section className="py-20 bg-card overflow-hidden border-t border-b border-border">
      <div className="container mx-auto px-4 max-w-[1200px] mb-8">
        <p className="text-center text-xs font-semibold tracking-[0.1em] text-muted-foreground uppercase">
          Tools We Work With
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#13161D] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#13161D] to-transparent z-10 pointer-events-none" />

        {/* Marquee Container */}
        <div className="flex w-max animate-marquee space-x-12 items-center px-6">
          {allTools.map((tool, index) => (
            <div
              key={`${tool.id}-${index}`}
              className="flex items-center space-x-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 min-w-max cursor-pointer"
            >
              <div className="w-10 h-10 relative flex items-center justify-center bg-foreground/5 rounded-md p-2 border border-border">
                {/* Fallback avatar block for tool logo representation since we don't have images */}
                <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-[#6366F1] to-[#22D3EE] opacity-50"></div>
              </div>
              <span className="text-foreground/80 font-medium text-lg">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}