"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/give", label: "Give" },
  { href: "/media", label: "Media" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-white border-b border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-[72px]">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/gdmi-logo.png"
            alt="GDMI"
            className={cn("h-12 w-auto transition-all duration-500", !scrolled && !open && "brightness-0 invert")}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/give"
            className="ml-3 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-navy-light transition-all duration-200 shadow-[0_1px_3px_rgba(15,29,53,0.15)]"
          >
            Partner With Us
          </Link>
        </nav>

        <button
          className="lg:hidden text-muted-foreground hover:text-primary p-2 rounded-lg hover:bg-muted transition-all"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-80 bg-white border-l border-border shadow-xl">
            <div className="flex items-center justify-between px-6 h-[72px] border-b border-border">
              <img src="/gdmi-logo.png" alt="GDMI" className="h-9 w-auto" />
              <button
                className="text-muted-foreground hover:text-primary p-2 rounded-lg hover:bg-muted transition-all"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav className="flex flex-col px-4 pt-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-primary hover:bg-muted px-4 py-3 rounded-lg text-sm font-medium transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/give"
                onClick={() => setOpen(false)}
                className="mt-3 bg-primary text-primary-foreground text-center py-3 rounded-lg text-sm font-semibold hover:bg-navy-light transition-all shadow-[0_1px_3px_rgba(15,29,53,0.15)]"
              >
                Partner With Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
