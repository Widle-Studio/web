"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, MessageSquare } from "lucide-react";
import { InlineWidget } from "react-calendly";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Internal Tools",
    budget: "$10k - $25k",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL || process.env.CONTACT_WEBHOOK_URL;

      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      } else {
        // Fallback simulate API call if no webhook URL is provided
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.warn("No CONTACT_WEBHOOK_URL defined, simulating submission");
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pt-24 pb-32">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366F1] opacity-[0.05] blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 max-w-[1200px] relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
            Let&apos;s discuss your project.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fill out the form below or book a time directly on our calendar. We&apos;ll
            get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* Left Side: Contact Info & Copy */}
            <div className="lg:w-5/12 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Ready to scale?
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  Whether you need a custom Retool dashboard, a complex n8n
                  automation workflow, or an AI-powered internal app, our team is
                  ready to build it.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-border flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#22D3EE]" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-1">Email Us</h3>
                    <p className="text-muted-foreground">hello@autotech.agency</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-border flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6 text-[#6366F1]" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-1">Support</h3>
                    <p className="text-muted-foreground">support@autotech.agency</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-border flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#22D3EE]" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Fully Remote (US, UK & Europe)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form & Calendly */}
            <div className="lg:w-7/12">
              <div className="bg-card rounded-2xl border border-border p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-[#6366F1]/20 flex items-center justify-center mx-auto mb-6">
                      <div className="w-10 h-10 rounded-full bg-[#6366F1] flex items-center justify-center text-foreground">
                        ✓
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Message Received
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      Thanks for reaching out! We&apos;ll be in touch within 24 hours
                      to schedule a discovery call.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[#6366F1] hover:text-[#8B5CF6] transition-colors font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-foreground/80"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition-all placeholder:text-foreground/30"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-foreground/80"
                        >
                          Work Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition-all placeholder:text-foreground/30"
                          placeholder="jane@company.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="text-sm font-medium text-foreground/80"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition-all placeholder:text-foreground/30"
                        placeholder="Acme Corp"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="projectType"
                          className="text-sm font-medium text-foreground/80"
                        >
                          Project Type *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition-all appearance-none"
                        >
                          <option value="Internal Tools">Internal Tools</option>
                          <option value="Automation">Automation & Workflows</option>
                          <option value="AI Solutions">AI Solutions</option>
                          <option value="Data Dashboards">Data Dashboards</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="budget"
                          className="text-sm font-medium text-foreground/80"
                        >
                          Budget Range *
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition-all appearance-none"
                        >
                          <option value="<$10k">Under $10k</option>
                          <option value="$10k - $25k">$10k - $25k</option>
                          <option value="$25k - $50k">$25k - $50k</option>
                          <option value="$50k+">$50k+</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground/80"
                      >
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:border-transparent transition-all placeholder:text-foreground/30 resize-none"
                        placeholder="Tell us about your current bottlenecks and what you're looking to build..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-primary-foreground font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Message
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-24 border-t border-border bg-card">
        <div className="container mx-auto px-4 max-w-[1000px] text-center">
           <h2 className="text-3xl font-bold text-foreground mb-6">
              Prefer to skip the form?
           </h2>
           <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
              Book a 30-minute discovery call directly on our calendar.
           </p>

           <div className="w-full bg-background border border-border rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
             <InlineWidget
               url="https://calendly.com/your-calendly-link"
               styles={{
                 height: "700px",
                 width: "100%",
                 borderRadius: "16px",
               }}
               pageSettings={{
                 backgroundColor: "0D0F14",
                 hideEventTypeDetails: false,
                 hideLandingPageDetails: false,
                 primaryColor: "6366F1",
                 textColor: "ffffff"
               }}
             />
           </div>
        </div>
      </section>
    </div>
  );
}