"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "/images/projects/prophetic-conference.jpg", alt: "Prophetic Conference", category: "Conferences" },
  { src: "/images/projects/campus-outreach.jpg", alt: "Campus Outreach", category: "Outreaches" },
  { src: "/images/projects/widows-empowerment.jpg", alt: "Widows Empowerment", category: "Outreaches" },
  { src: "/images/mission-evangelism.jpg", alt: "Evangelism Outreach", category: "Outreaches" },
  { src: "/images/mission-prophecy.jpg", alt: "Prophetic Ministry", category: "Conferences" },
  { src: "/images/mission-discipleship.jpg", alt: "Discipleship Session", category: "Conferences" },
  { src: "/prophet-pics.jpg", alt: "Prophet Gbenga Dahunsi", category: "Ministry" },
  { src: "/prophet-pics2.jpg", alt: "Prophet Gbenga Dahunsi", category: "Ministry" },
  { src: "/prophet-pics3.jpg", alt: "Prophet Gbenga Dahunsi", category: "Ministry" },
];

const categories = ["All", "Conferences", "Outreaches", "Ministry"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = galleryImages.filter(
    (img) => activeCategory === "All" || img.category === activeCategory
  );

  function openLightbox(index: number) {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }

  function prev() {
    setLightboxIndex((p) => (p === 0 ? filtered.length - 1 : p! - 1));
  }

  function next() {
    setLightboxIndex((p) => (p === filtered.length - 1 ? 0 : p! + 1));
  }

  return (
    <>
      <section className="bg-primary pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden border-b border-border/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-gold/60 text-xs font-semibold tracking-[0.2em] uppercase">Moments</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3">Gallery</h1>
          <p className="text-white/40 mt-4 max-w-2xl mx-auto leading-relaxed text-sm">
            A glimpse into our conferences, campus outreaches, and ministry moments captured in photographs.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-primary hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filtered.map((img, i) => (
              <button
                key={`${img.src}-${i}`}
                onClick={() => openLightbox(i)}
                className="group rounded-2xl overflow-hidden bg-card border border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_25px_-8px_rgba(15,29,53,0.1)] hover:-translate-y-0.5 transition-all duration-300 text-left"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium text-muted-foreground">{img.category}</p>
                  <p className="text-sm font-semibold text-primary mt-0.5">{img.alt}</p>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-sm">No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-lg flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="fixed top-6 right-6 text-white/60 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all z-10"
            aria-label="Close gallery"
          >
            <X className="size-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="fixed left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="size-6" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="fixed right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-10"
            aria-label="Next"
          >
            <ChevronRight className="size-6" />
          </button>

          <div
            className="max-w-4xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
              <img
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain bg-black/50"
              />
            </div>
            <p className="text-white/60 text-sm text-center mt-4">
              {filtered[lightboxIndex].alt} &mdash; {filtered[lightboxIndex].category}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
