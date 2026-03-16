import { Rocket } from "lucide-react";

export default function AnnouncementBanner() {
  return (
    <div className="bg-primary px-4 py-2.5 sm:px-6 lg:px-8 text-white relative z-50">
      <div className="flex items-center justify-center gap-2 text-sm font-medium tracking-wide">
        <Rocket className="w-4 h-4 text-accent" />
        <span className="hidden sm:inline">New: </span>
        <span className="opacity-90">
          AI-powered workflow automation — now available for all clients.
        </span>
        <span className="hidden sm:inline-flex items-center gap-1 ml-2 font-semibold hover:opacity-80 transition-opacity cursor-pointer">
          Learn more <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </div>
  );
}