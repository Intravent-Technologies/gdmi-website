import type { Metadata } from "next";
import { Download, ShoppingCart, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Books | GDMI",
  description:
    "Browse and download books by Prophet Gbenga Dahunsi. Access prophetic teachings and resources to deepen your spiritual walk.",
};

const books = [
  {
    title: "The Prophetic Voice",
    subtitle: "Raising a Generation Set Apart",
    description:
      "A comprehensive guide to understanding and operating in the prophetic ministry. This book equips believers to hear God's voice and flow in prophetic accuracy.",
    gradient: "from-amber-700 via-amber-600 to-yellow-500",
  },
  {
    title: "Divine Speed",
    subtitle: "Accelerating into Your Destiny",
    description:
      "Unlocking the principles of supernatural acceleration. Discover how to partner with God for rapid fulfillment of prophetic promises.",
    gradient: "from-emerald-800 via-emerald-600 to-teal-400",
  },
  {
    title: "Set Apart",
    subtitle: "Living a Life of Prophetic Purity",
    description:
      "A call to holiness and distinction in a compromised world. Learn what it means to be a vessel set apart for the Master's use.",
    gradient: "from-indigo-900 via-indigo-700 to-blue-500",
  },
];

export default function BooksPage() {
  return (
    <>
      <section className="bg-primary pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden border-b border-border/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-gold/60 text-xs font-semibold tracking-[0.2em] uppercase">Resources</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3">Books by PG</h1>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto leading-relaxed text-sm">
            Dive into prophetic teachings and resources by Prophet Gbenga Dahunsi to deepen your spiritual walk and understanding of the prophetic.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {books.map((book) => (
              <div
                key={book.title}
                className="group bg-card rounded-2xl border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_-8px_rgba(15,29,53,0.1)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col overflow-hidden"
              >
                <div className={`bg-gradient-to-br ${book.gradient} p-6 sm:p-8 flex items-center justify-center aspect-[3/4] relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
                  <div className="absolute top-4 right-4 text-white/10 text-[80px] font-bold leading-none select-none">
                    &ldquo;
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="w-14 h-1 bg-white/30 mx-auto mb-4 rounded-full" />
                    <h3 className="text-white font-bold text-lg sm:text-xl leading-tight">{book.title}</h3>
                    <div className="w-8 h-0.5 bg-gold/60 mx-auto my-3 rounded-full" />
                    <p className="text-white/60 text-xs font-medium uppercase tracking-wider">{book.subtitle}</p>
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <p className="text-white/40 text-[10px] uppercase tracking-widest">Prophet Gbenga Dahunsi</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {book.description}
                  </p>
                  <div className="mt-5 pt-4 border-t border-border flex items-center gap-3">
                    <button
                      className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-3 py-2.5 rounded-lg text-xs font-semibold hover:bg-navy-light transition-all active:scale-[0.97]"
                    >
                      <Download className="size-3.5" />
                      Download PDF
                    </button>
                    <button
                      className="flex-1 flex items-center justify-center gap-2 bg-gold text-primary px-3 py-2.5 rounded-lg text-xs font-semibold hover:bg-gold-light transition-all active:scale-[0.97]"
                    >
                      <ShoppingCart className="size-3.5" />
                      Buy Print
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">Stay Updated</h2>
          <p className="text-muted-foreground text-sm mt-3 leading-relaxed max-w-xl mx-auto">
            Subscribe to our newsletter to be notified when new books and resources are released.
          </p>
          <Link
            href="/newsletter-confirm"
            className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-navy-light transition-all shadow-[0_1px_3px_rgba(15,29,53,0.15)]"
          >
            Subscribe
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
