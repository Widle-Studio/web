"use client";

import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { blogPosts, categories } from "@/lib/data/blog";

export default function BlogIndexPage() {
  const featuredPost = blogPosts.find(post => post.isFeatured) || blogPosts[0];
  const regularPosts = blogPosts.filter(post => post.slug !== featuredPost.slug);

  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      {/* Search / Categories Header */}
      <section className="pt-12 pb-8 border-b border-border sticky top-20 bg-background/90 backdrop-blur-md z-30">
        <div className="container mx-auto px-4 max-w-[1200px]">
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex overflow-x-auto pb-2 md:pb-0 hide-scrollbar gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      index === 0
                        ? "bg-[#6366F1] text-foreground"
                        : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-border"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="relative shrink-0">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full md:w-64 bg-card border border-border rounded-full pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#6366F1]/50 focus:ring-1 focus:ring-[#6366F1]/50 transition-all"
                />
              </div>
           </div>
        </div>
      </section>

      {/* Featured Hero Article */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-[1200px]">
           <Link href={`/blog/${featuredPost.slug}`} className="group flex flex-col lg:flex-row gap-12 lg:items-center">
              <div className="w-full lg:w-3/5 aspect-video rounded-3xl overflow-hidden border border-border relative">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                 <img
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                 />
              </div>
              <div className="w-full lg:w-2/5 flex flex-col">
                 <div className="flex items-center gap-3 mb-6 text-sm">
                    <span className="text-[#22D3EE] font-semibold">{featuredPost.category}</span>
                    <span className="text-foreground/20">•</span>
                    <span className="text-muted-foreground">{featuredPost.date}</span>
                 </div>
                 <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6 group-hover:text-[#6366F1] transition-colors">
                    {featuredPost.title}
                 </h1>
                 <p className="text-lg text-muted-foreground leading-relaxed mb-8 line-clamp-3">
                    {featuredPost.excerpt}
                 </p>
                 <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-sm font-bold text-foreground border border-border">
                        {featuredPost.authorAvatar}
                      </div>
                      <span className="text-foreground font-medium">{featuredPost.author}</span>
                    </div>
                    <span className="text-[#6366F1] font-medium group-hover:translate-x-1 transition-transform flex items-center gap-2">
                       Read article <ArrowRight className="w-4 h-4" />
                    </span>
                 </div>
              </div>
           </Link>
        </div>
      </section>

      {/* Grid Articles */}
      <section className="pb-32">
        <div className="container mx-auto px-4 max-w-[1200px]">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col h-full bg-card rounded-2xl border border-border overflow-hidden hover:border-[#6366F1]/30 transition-colors">
                  <div className="w-full aspect-[16/10] overflow-hidden relative">
                     <img
                       src={post.imageUrl}
                       alt={post.title}
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                     <div className="flex items-center gap-3 mb-4 text-xs font-medium uppercase tracking-wider">
                        <span className="text-[#6366F1]">{post.category}</span>
                        <span className="text-foreground/20">•</span>
                        <span className="text-muted-foreground">{post.readTime}</span>
                     </div>
                     <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-[#22D3EE] transition-colors line-clamp-2">
                        {post.title}
                     </h3>
                     <p className="text-muted-foreground leading-relaxed mb-8 flex-1 line-clamp-3">
                        {post.excerpt}
                     </p>
                     <div className="mt-auto flex items-center gap-3 pt-6 border-t border-border">
                        <span className="text-sm text-foreground/60">{post.date}</span>
                     </div>
                  </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-card border-t border-border mt-auto relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#6366F1]/10 to-transparent blur-[100px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get the latest from Widle Studio
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Subscribe to our newsletter for insights on automation, internal tools, and the AI engineering landscape delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#6366F1]/50 focus:ring-1 focus:ring-[#6366F1]/50"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-primary-foreground font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-muted-foreground mt-6">
             By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </section>
    </div>
  );
}