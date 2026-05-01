import { blogPosts } from "@/lib/data/blog";
import Link from "next/link";
import { ArrowLeft, Share2, Twitter, Linkedin, Copy } from "lucide-react";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function generateMetadata() {
  const post = blogPosts.find((p) => p.slug === "future-of-ai-automation-2026");
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Widle Studio Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage() {
  const post = blogPosts.find((p) => p.slug === "future-of-ai-automation-2026");

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      {/* Article Header */}
      <section className="pt-16 pb-12 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#6366F1]/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 max-w-[800px] relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#6366F1] font-medium hover:text-[#8B5CF6] transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            Back to all articles
          </Link>

          <div className="flex items-center gap-3 mb-6 text-sm font-medium">
             <span className="text-accent uppercase tracking-wider">{post.category}</span>
             <span className="text-foreground/20">•</span>
             <span className="text-muted-foreground">{post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8 tracking-tight">
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-6 border-y border-border">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366F1] to-accent flex items-center justify-center text-lg font-bold text-foreground shadow-lg">
                  {post.authorAvatar}
                </div>
                <div>
                   <div className="text-foreground font-medium">{post.author}</div>
                   <div className="text-muted-foreground text-sm">{post.date}</div>
                </div>
             </div>

             <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground mr-2">Share:</span>
                <button className="w-10 h-10 rounded-full bg-foreground/5 border border-border flex items-center justify-center text-primary-foreground hover:bg-primary hover:border-[#6366F1] transition-all">
                  <Twitter size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-foreground/5 border border-border flex items-center justify-center text-primary-foreground hover:bg-primary hover:border-[#6366F1] transition-all">
                  <Linkedin size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-foreground/5 border border-border flex items-center justify-center text-foreground hover:bg-foreground/20 transition-all">
                  <Copy size={18} />
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
         <div className="container mx-auto px-4 max-w-[1000px]">
            <div className="w-full aspect-[21/9] md:aspect-[2.5/1] rounded-2xl overflow-hidden border border-border">
               <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
            </div>
         </div>
      </section>

      {/* Article Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-[800px]">
           <div className="prose prose-invert prose-lg md:prose-xl max-w-none prose-headings:text-foreground prose-headings:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-[#6366F1] hover:prose-a:text-[#8B5CF6] prose-li:text-muted-foreground prose-strong:text-foreground prose-img:rounded-xl prose-hr:border-border">
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-10 border-l-4 border-[#6366F1] pl-6">
                {post.excerpt}
              </p>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                 {post.content}
              </ReactMarkdown>
           </div>

           <div className="mt-16 pt-8 border-t border-border">
             <h3 className="text-sm text-foreground/60 uppercase tracking-wider font-semibold mb-4">Tags</h3>
             <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                   <span key={i} className="px-3 py-1.5 rounded-lg bg-card border border-border text-muted-foreground text-sm hover:text-foreground hover:border-border cursor-pointer transition-colors">
                      #{tag}
                   </span>
                ))}
             </div>
           </div>
        </div>
      </section>

      {/* Read Next Section */}
      <section className="py-24 bg-card border-t border-border">
         <div className="container mx-auto px-4 max-w-[1200px]">
            <h2 className="text-3xl font-bold text-foreground mb-10">Read Next</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {blogPosts.filter(p => p.slug !== post.slug).slice(0, 3).map((relatedPost) => (
                 <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.slug} className="group flex flex-col h-full bg-background rounded-2xl border border-border overflow-hidden hover:border-[#6366F1]/30 transition-colors">
                  <div className="w-full aspect-video overflow-hidden">
                     <img src={relatedPost.imageUrl} alt={relatedPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                     <div className="text-[#6366F1] text-xs font-bold uppercase tracking-wider mb-3">{relatedPost.category}</div>
                     <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors mb-3 line-clamp-2">{relatedPost.title}</h3>
                     <p className="text-muted-foreground text-sm line-clamp-2">{relatedPost.excerpt}</p>
                  </div>
                 </Link>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}