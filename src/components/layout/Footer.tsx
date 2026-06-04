import Link from "next/link";
import { Play, Send, Camera } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/give", label: "Give" },
  { href: "/media", label: "Media" },
];

export function Footer() {
  return (
    <footer className="bg-navy-lighter border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Link href="/" className="inline-block">
              <span className="text-primary font-bold text-2xl tracking-tight">
                GDMI
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-sm text-muted-foreground">
              A prophetic ministry raising a generation set apart for God&apos;s glory.
            </p>
            <p className="mt-3 text-xs text-muted-foreground/50 font-medium tracking-wider uppercase">
              Registered with SCUML
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-primary font-semibold text-sm mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-primary font-semibold text-sm mb-5">
              Connect
            </h4>
            <div className="flex gap-3 mb-5">
              <a
                href={process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_URL || "https://youtube.com/@gdmichannel"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-background flex items-center justify-center hover:bg-primary text-muted-foreground hover:text-white border border-border hover:border-primary transition-all shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                aria-label="YouTube"
              >
                <Play className="size-4" />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_TELEGRAM_CHANNEL_URL || "https://t.me/gdmichannel"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-background flex items-center justify-center hover:bg-primary text-muted-foreground hover:text-white border border-border hover:border-primary transition-all shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                aria-label="Telegram"
              >
                <Send className="size-4" />
              </a>
              <a
                href="https://instagram.com/gdmichannel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-background flex items-center justify-center hover:bg-primary text-muted-foreground hover:text-white border border-border hover:border-primary transition-all shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                aria-label="Instagram"
              >
                <Camera className="size-4" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground/50 leading-relaxed">
              Subscribe to our channels for the latest messages and updates.
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/50">
            &copy; {new Date().getFullYear()} Gbenga Dahunsi Ministry International. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/40 tracking-wider uppercase">
            Prophetic &middot; Evangelical &middot; Discipling Nations
          </p>
        </div>
      </div>
    </footer>
  );
}
