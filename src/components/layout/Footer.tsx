import Link from "next/link";
import { Linkedin, Twitter, Github } from "lucide-react";

const navigation = {
  services: [
    { name: "Internal Tools", href: "/services#internal-tools" },
    { name: "Workflow Automation", href: "/services#automation" },
    { name: "AI Solutions", href: "/services#ai-solutions" },
    { name: "Data Dashboards", href: "/services#data-dashboards" },
  ],
  tools: [
    { name: "Retool", href: "/tools#retool" },
    { name: "n8n", href: "/tools#n8n" },
    { name: "Zapier", href: "/tools#zapier" },
    { name: "Looker Studio", href: "/tools#looker-studio" },
    { name: "OpenAI", href: "/tools#openai" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "#",
      icon: (props: any) => <Linkedin {...props} />,
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props: any) => <Twitter {...props} />,
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props: any) => <Github {...props} />,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0D0F14] border-t border-white/5" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center font-bold text-lg leading-none">
                A
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">AutoTech</span>
            </Link>
            <p className="text-sm leading-6 text-muted-foreground max-w-xs">
              We design and build internal tools, automations, and AI workflows for startups and scale-ups.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Tools We Love</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.tools.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} AutoTech Agency. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-muted-foreground hover:text-white transition-colors">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}