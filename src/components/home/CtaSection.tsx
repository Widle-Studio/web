import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-32 relative bg-background overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#6366F1]/20 to-accent/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('https://retool.com/static/assets/mesh.png')] opacity-5 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[800px] relative z-10 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-8">
          Ready to build?
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Stop struggling with manual processes and disconnected tools. Let's
          build the systems that will scale your operations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-primary-foreground font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(99,102,241,0.25)]"
          >
            Book a Free Consultation
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-foreground/5 text-foreground font-medium hover:bg-foreground/10 transition-colors border border-border flex items-center justify-center"
          >
            Explore Services
          </Link>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          No commitment required. We&apos;ll scope your project on the first call.
        </p>
      </div>
    </section>
  );
}