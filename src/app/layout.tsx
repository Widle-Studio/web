import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementBanner from "@/components/layout/AnnouncementBanner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Widle Studio | Internal Tools & Automation",
  description: "We design and build internal tools, automations, and AI workflows for startups and scale-ups — using Retool, n8n, Make.com, Zapier, Looker Studio, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans bg-[#0D0F14] text-white antialiased min-h-screen flex flex-col`}>
        {process.env.GA_MEASUREMENT_ID && (
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
        )}
        {process.env.GA_MEASUREMENT_ID && (
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GA_MEASUREMENT_ID}');
            `}
          </Script>
        )}
        {process.env.LINKEDIN_PARTNER_ID && (
          <Script id="linkedin-pixel" strategy="afterInteractive">
            {`
              _linkedin_partner_id = "${process.env.LINKEDIN_PARTNER_ID}";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
              (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
            `}
          </Script>
        )}

        {/* Structured Data (JSON-LD) */}
        <Script id="json-ld" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Widle Studio",
              "image": "https://your-agency-domain.com/logo.png",
              "description": "We design and build internal tools, automations, and AI workflows for startups and scale-ups — using Retool, n8n, Make.com, Zapier, Looker Studio, and more.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "priceRange": "$$$",
              "telephone": "",
              "url": "https://your-agency-domain.com",
              "sameAs": [
                "https://www.linkedin.com/company/your-agency",
                "https://twitter.com/your-agency"
              ]
            }
          `}
        </Script>

        <AnnouncementBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}