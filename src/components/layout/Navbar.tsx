"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { serviceCategories } from "@/lib/data/services-menu";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const navLinks = [
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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
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
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg leading-none shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:shadow-[0_0_25px_rgba(99,102,241,0.8)] transition-all">
              A
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">Widle</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8 items-center">
          {/* Services Mega Menu */}
          <div className="relative group">
            <button className={`flex items-center gap-1 text-sm font-medium leading-6 transition-colors hover:text-foreground py-2 ${
              pathname.startsWith("/services") ? "text-foreground" : "text-muted-foreground"
            }`}>
              Services
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" aria-hidden="true" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[850px] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
              <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>

                <div className="p-8 relative z-10">
                  <div className="grid grid-cols-3 gap-8">
                    {serviceCategories.map((category) => (
                      <div key={category.title} className="flex flex-col">
                        <h3 className="text-sm font-bold text-foreground mb-4 border-b border-border pb-2 flex items-center gap-2">
                          {category.title === "Data Platforms" && (
                            <span className="w-6 h-6 rounded-md bg-blue-500/10 flex items-center justify-center text-blue-400">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                              </svg>
                            </span>
                          )}
                          {category.title === "Business Intelligence" && (
                            <span className="w-6 h-6 rounded-md bg-purple-500/10 flex items-center justify-center text-purple-400">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </span>
                          )}
                          {category.title === "Internal Development Tools" && (
                            <span className="w-6 h-6 rounded-md bg-green-500/10 flex items-center justify-center text-green-400">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                              </svg>
                            </span>
                          )}
                          {category.title}
                        </h3>
                        <ul className="space-y-1">
                          {category.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                className="group/item flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-foreground/5 hover:text-foreground transition-all"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-foreground/20 group-hover/item:bg-primary transition-colors"></span>
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Banner mirroring the mockup's style */}
                <div className="bg-gradient-to-r from-primary/20 to-accent/20 border-t border-border p-4 relative z-10 flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground/90 pl-4">
                    Ready to transform your business with our tailored solutions?
                  </p>
                  <Link
                    href="/contact"
                    className="rounded-lg bg-primary hover:bg-primary/90 px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors"
                  >
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium leading-6 transition-colors hover:text-foreground relative group ${
                pathname === item.href ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <ThemeToggle />
          <Link
            href="/contact"
            className="rounded-lg bg-gradient-to-r from-primary to-[#8B5CF6] px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Book a Call
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-card px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-8 h-8 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg leading-none">
                  A
                </div>
                <span className="text-xl font-bold text-foreground">Widle</span>
              </Link>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  <div className="-mx-3">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-medium leading-7 hover:bg-foreground/5 transition-colors ${
                        pathname.startsWith("/services") ? "text-foreground bg-foreground/5" : "text-muted-foreground"
                      }`}
                    >
                      Services
                      <ChevronDown
                        className={`h-5 w-5 flex-none transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    {mobileServicesOpen && (
                      <div className="mt-2 space-y-4 px-6 pb-2">
                        {serviceCategories.map((category) => (
                          <div key={category.title} className="space-y-2">
                            <div className="text-sm font-semibold text-foreground/80 uppercase tracking-wider">{category.title}</div>
                            {category.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block rounded-lg py-2 pl-4 pr-3 text-sm font-medium leading-6 text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {navLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 hover:bg-foreground/5 transition-colors ${
                        pathname === item.href ? "text-foreground bg-foreground/5" : "text-muted-foreground"
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
                    className="-mx-3 block rounded-lg bg-primary px-3 py-2.5 text-base font-semibold leading-7 text-primary-foreground hover:bg-primary/90 text-center"
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