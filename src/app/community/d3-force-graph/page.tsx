import { contributions } from "@/lib/data/community";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function generateMetadata() {
  const component = contributions.find((c) => c.id === "d3-force-graph");
  if (!component) return { title: "Component Not Found" };

  return {
    title: `${component.title} | Widle Studio Open Source`,
    description: component.description,
  };
}

export default function D3ForceGraphPage() {
  const component = contributions.find((c) => c.id === "d3-force-graph");

  if (!component) {
    notFound();
  }

  // A helper function to remove the image from the markdown body if we extracted it to display separately
  // so it doesn't render twice.
  const cleanBody = (body: string, imageUrl: string) => {
    if (!imageUrl) return body;
    // Replace markdown image tags that use the extracted image URL
    return body.replace(new RegExp(`!\\[.*?\\]\\(${imageUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\)`, 'g'), '');
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      {/* Hero */}
      <section className="py-20 md:py-32 relative overflow-hidden border-b border-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 to-[#22D3EE]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 max-w-[1000px] relative z-10">
          <Link
            href="/community"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            Back to Community
          </Link>
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {component.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-muted text-foreground/80 text-xs font-semibold rounded-md border border-border/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
                {component.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
                {component.description}
              </p>

              <div className="flex gap-4">
                <a
                  href={component.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-foreground font-medium hover:bg-primary-foreground transition-colors"
                >
                  <Github size={18} />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16">

            {/* Guide / Markdown Body */}
            <div className="order-2 lg:order-1 prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl prose-img:border prose-img:border-border/50 prose-hr:border-border/50 prose-blockquote:border-primary">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {cleanBody(component.githubBody, component.imageUrl)}
              </ReactMarkdown>
            </div>

            {/* Sidebar / Preview */}
            <div className="order-1 lg:order-2 flex flex-col gap-8">
              {component.imageUrl ? (
                <div className="sticky top-32 rounded-2xl border border-border/50 overflow-hidden bg-card p-2">
                  <div className="text-sm text-muted-foreground mb-3 px-2 pt-2 font-medium">Component Preview</div>
                  <img
                    src={component.imageUrl}
                    alt={`Preview of ${component.title}`}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              ) : (
                <div className="sticky top-32 rounded-2xl border border-border/50 overflow-hidden bg-card p-8 text-center flex flex-col items-center justify-center">
                   <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center mb-4">
                       <ExternalLink className="w-6 h-6 text-muted-foreground" />
                   </div>
                   <h3 className="text-foreground font-medium mb-2">View Component</h3>
                   <p className="text-sm text-muted-foreground mb-4">Check out the PR on GitHub to see the full implementation and previews.</p>
                   <a href={component.url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-primary/80 transition-colors">
                     Open GitHub &rarr;
                   </a>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}