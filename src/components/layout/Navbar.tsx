"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight, Info, Flame, MapPin, GraduationCap, Heart, Play, Image as ImageIcon, Cross, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const dropdownIconMap: Record<string, React.ReactNode> = {
  about: <Info className="size-3.5" />,
  lagos: <MapPin className="size-3.5" />,
  ibadan: <MapPin className="size-3.5" />,
  pln: <GraduationCap className="size-3.5" />,
  poly: <GraduationCap className="size-3.5" />,
  impact: <Cross className="size-3.5" />,
  prayers: <Flame className="size-3.5" />,
  watch: <Play className="size-3.5" />,
  events: <Calendar className="size-3.5" />,
  gallery: <ImageIcon className="size-3.5" />,
};

function getIconKey(href: string): string {
  if (href.includes("lagos")) return "lagos";
  if (href.includes("ibadan")) return "ibadan";
  if (href.includes("pln-ui")) return "pln";
  if (href.includes("poly-ibadan")) return "poly";
  if (href.includes("impact")) return "impact";
  if (href.includes("/mentoring-school/pg")) return "impact";
  if (href.includes("/mentoring-school")) return "prayers";
  if (href.includes("about")) return "about";
  if (href.includes("prophetic-prayers")) return "prayers";
  if (href.includes("events")) return "events";
  if (href.includes("gallery") && !href.includes("watch")) return "gallery";
  if (href.includes("media") || href.includes("watch")) return "watch";
  return "about";
}

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownCategory {
  category: string;
  items: DropdownItem[];
}

interface NavLink {
  href?: string;
  label: string;
  dropdown?: DropdownCategory[];
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  {
    label: "Ministries",
    dropdown: [
      {
        category: "",
        items: [
          { label: "About GDMI", href: "/about" },
        ],
      },
      {
        category: "Conferences",
        items: [
          { label: "Lagos Prophetic Conference", href: "/ministries/lagos-prophetic-conference" },
          { label: "Ibadan Prophetic Conference", href: "/ministries/ibadan-prophetic-conference" },
        ],
      },
      {
        category: "Outreaches",
        items: [
          { label: "PLN-UI", href: "/ministries/pln-ui" },
          { label: "POLY Ibadan", href: "/ministries/poly-ibadan" },
          { label: "Impact Campus", href: "/ministries/impact-campus" },
        ],
      },
      {
        category: "",
        items: [
          { label: "Prophetic Prayers", href: "/ministries/prophetic-prayers" },
        ],
      },
    ],
  },
  {
    label: "Apply for Mentorship",
    dropdown: [
      {
        category: "",
        items: [
          { label: "Yemisi Dahunsi Mentoring School", href: "/mentoring-school" },
          { label: "Mentorship with PG", href: "/mentoring-school/pg" },
        ],
      },
    ],
  },
  {
    label: "Media",
    dropdown: [
      {
        category: "",
        items: [
          { label: "Events", href: "/events" },
          { label: "Watch & Listen", href: "/media" },
          { label: "Gallery", href: "/gallery" },
        ],
      },
    ],
  },
  { href: "/books", label: "Books" },
  { href: "/join", label: "Partner" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) setMobileExpanded(null);
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
          {navLinks.map((link) => {
            if (link.dropdown) {
              const isOpen = activeDropdown === link.label;
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  onFocus={() => setActiveDropdown(link.label)}
                  onBlur={() => setActiveDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted transition-all duration-200"
                  >
                    {link.label}
                    <ChevronDown className={cn("size-3.5 transition-transform duration-200", isOpen && "rotate-180")} />
                  </button>
                  {isOpen && (
                    <div className="absolute top-full left-0 pt-2 -mt-2 w-64">
                      <div className="bg-white rounded-xl border border-border shadow-xl py-3 animate-fade-in">
                      {link.dropdown.map((cat, ci) => (
                        <div key={`${cat.category}-${ci}`}>
                          {cat.category && (
                            <p className="px-4 py-1.5 text-[11px] font-semibold text-gold uppercase tracking-wider">
                              {cat.category}
                            </p>
                          )}
                          {cat.items.map((item) => {
                            const icon = dropdownIconMap[getIconKey(item.href)];
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/60 transition-all duration-200 group/link"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="flex items-center justify-center size-6 rounded-md bg-transparent text-muted-foreground/50 group-hover/link:bg-gold/10 group-hover/link:text-gold group-hover/link:scale-110 transition-all duration-200 shrink-0">
                                  {icon}
                                </span>
                                <span className="group-hover/link:translate-x-0.5 transition-transform duration-200">
                                  {item.label}
                                </span>
                              </Link>
                            );
                          })}
                          {cat.category && <div className="mx-4 my-1.5 h-px bg-border last:hidden" />}
                        </div>
                      ))}
                    </div>
                    </div>
                  )}
                </div>
              );
            }
            const isBooks = link.label === "Books";
            return (
              <Link
                key={link.href}
                href={link.href!}
                className={cn(
                  "relative text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200",
                  isBooks
                    ? "text-gold hover:text-gold-dark"
                    : "text-muted-foreground hover:text-primary hover:bg-muted"
                )}
              >
                {link.label}
                {isBooks && (
                  <svg
                    className="absolute -bottom-0.5 left-2 right-2 w-[calc(100%-16px)] h-3 overflow-visible pointer-events-none"
                    viewBox="0 0 200 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,5 Q20,1 40,5 T80,5 T120,5 T160,5 T200,5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="text-gold/30"
                    />
                    <path
                      d="M0,5 Q20,1 40,5 T80,5 T120,5 T160,5 T200,5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="text-gold/90 group-hover:animate-[draw-underline_0.6s_ease-out_forwards]"
                      style={{ strokeDasharray: 400, strokeDashoffset: 400 }}
                    />
                  </svg>
                )}
              </Link>
            );
          })}
          <Link
            href="/give"
            className="ml-3 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-navy-light transition-all duration-200 shadow-[0_1px_3px_rgba(15,29,53,0.15)]"
          >
            Give
          </Link>
        </nav>

        <div className="lg:hidden flex items-center">
          <button
            className={cn(
              "flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300",
              scrolled || open
                ? "text-navy border-navy/15 bg-navy/[0.04] hover:bg-navy/[0.08] hover:border-gold/50 hover:text-gold active:scale-95"
                : "text-white border-white/25 bg-white/[0.07] hover:bg-white/[0.14] hover:border-white/50 active:scale-95"
            )}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <div className="flex flex-col items-center justify-center gap-[3.5px]">
              <span className={cn("block w-[18px] h-px rounded-full transition-all duration-300", scrolled || open ? "bg-current" : "bg-white/90")} />
              <span className={cn("block w-[18px] h-px rounded-full transition-all duration-300", scrolled || open ? "bg-current" : "bg-white/90")} />
              <span className={cn("block w-[18px] h-px rounded-full transition-all duration-300", scrolled || open ? "bg-current" : "bg-white/90")} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-80 bg-white border-l border-border shadow-xl overflow-y-auto">
            <div className="flex items-center justify-between px-6 h-[72px] border-b border-border">
              <img src="/gdmi-logo.png" alt="GDMI" className="h-9 w-auto" />
              <button
                className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-navy/15 bg-navy/[0.04] text-navy hover:bg-navy/[0.08] hover:border-gold/50 hover:text-gold active:scale-95 transition-all duration-300"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>
            <nav className="flex flex-col px-4 pt-4 gap-1">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  const isExpanded = mobileExpanded === link.label;
                  return (
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileExpanded(isExpanded ? null : link.label)}
                        className="flex items-center justify-between w-full text-muted-foreground hover:text-primary hover:bg-muted px-4 py-3 rounded-lg text-sm font-medium transition-all"
                      >
                        {link.label}
                        <ChevronRight className={cn("size-4 transition-transform duration-200", isExpanded && "rotate-90")} />
                      </button>
                      {isExpanded && (
                        <div className="ml-4 pl-3 border-l-2 border-gold/30 space-y-1 mb-1">
                          {link.dropdown.map((cat, ci) => (
                            <div key={`${cat.category}-${ci}`}>
                              {cat.category && (
                                <p className="px-4 py-1.5 text-[11px] font-semibold text-gold uppercase tracking-wider">
                                  {cat.category}
                                </p>
                              )}
                              {cat.items.map((item) => {
                                const icon = dropdownIconMap[getIconKey(item.href)];
                                return (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/60 rounded-lg transition-all duration-200 group/link"
                                  >
                                    <span className="flex items-center justify-center size-6 rounded-md bg-transparent text-muted-foreground/50 group-hover/link:bg-gold/10 group-hover/link:text-gold group-hover/link:scale-110 transition-all duration-200 shrink-0">
                                      {icon}
                                    </span>
                                    <span className="group-hover/link:translate-x-0.5 transition-transform duration-200">
                                      {item.label}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href!}
                    onClick={() => setOpen(false)}
                    className="text-muted-foreground hover:text-primary hover:bg-muted px-4 py-3 rounded-lg text-sm font-medium transition-all"
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/give"
                onClick={() => setOpen(false)}
                className="mt-3 bg-primary text-primary-foreground text-center py-3 rounded-lg text-sm font-semibold hover:bg-navy-light transition-all shadow-[0_1px_3px_rgba(15,29,53,0.15)]"
              >
                Give
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
