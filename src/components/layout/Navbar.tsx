"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Use Cases", href: "/use-cases" },
  { name: "Tools", href: "/tools" },
  { name: "Community", href: "/community" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0D0F14]/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center font-bold text-lg leading-none shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:shadow-[0_0_25px_rgba(99,102,241,0.8)] transition-all">
              A
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Widle</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium leading-6 transition-colors hover:text-white relative group ${
                pathname === item.href ? "text-white" : "text-muted-foreground"
              }`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="rounded-lg bg-gradient-to-r from-primary to-[#8B5CF6] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Book a Call
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-[#0D0F14]/95 backdrop-blur-sm" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#13161D] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center font-bold text-lg leading-none">
                  A
                </div>
                <span className="text-xl font-bold text-white">Widle</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-muted-foreground hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 hover:bg-white/5 transition-colors ${
                        pathname === item.href ? "text-white bg-white/5" : "text-muted-foreground"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/contact"
                    className="-mx-3 block rounded-lg bg-primary px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-primary/90 text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book a Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}