"use client";

import { useState, useEffect, useRef } from "react";
import { X, ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/prophet-pics.jpg", alt: "Prophet Gbenga Dahunsi" },
  { src: "/prophet-pics2.jpg", alt: "Prophet Gbenga Dahunsi" },
  { src: "/prophet-pics3.jpg", alt: "Prophet Gbenga Dahunsi" },
];

export function AlbumStack() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (open) {
      const frame = requestAnimationFrame(() => setMounted(true));
      return () => cancelAnimationFrame(frame);
    } else {
      setMounted(false);
      setCurrent(0);
    }
  }, [open]);

  const touchX = useRef(0);

  function handleTouchStart(e: React.TouchEvent) {
    touchX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    const diff = touchX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrent((p) => (p === images.length - 1 ? 0 : p + 1));
      } else {
        setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));
      }
    }
  }

  function close() {
    setMounted(false);
    setTimeout(() => setOpen(false), 400);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative w-full max-w-xs mx-auto lg:mx-0 text-left cursor-pointer group"
        style={{ minHeight: 420 }}
      >
        <div
          className="absolute top-4 left-6 w-full aspect-[3/4] rounded-2xl overflow-hidden bg-muted border border-border shadow-[0_8px_25px_-8px_rgba(0,0,0,0.12)] transition-all duration-500 group-hover:translate-y-[-4px]"
          style={{ transform: "rotate(6deg)" }}
        >
          <img src={images[2].src} alt="" className="w-full h-full object-cover" />
        </div>
        <div
          className="absolute top-2 left-3 w-full aspect-[3/4] rounded-2xl overflow-hidden bg-muted border border-border shadow-[0_8px_25px_-8px_rgba(0,0,0,0.15)] transition-all duration-500 group-hover:translate-y-[-2px]"
          style={{ transform: "rotate(-4deg)" }}
        >
          <img src={images[1].src} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-muted border border-border shadow-[0_8px_25px_-8px_rgba(0,0,0,0.2)] z-10 transition-all duration-500 group-hover:shadow-[0_12px_35px_-12px_rgba(0,0,0,0.3)]">
          <img src={images[0].src} alt="Prophet Gbenga Dahunsi" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="size-48 sm:size-56 rounded-full flex items-center justify-center text-white text-sm sm:text-base font-bold tracking-wider uppercase bg-white/10 backdrop-blur-md border-2 border-white/30 transition-all duration-300 group-hover:bg-gold group-hover:text-primary group-hover:border-gold group-hover:scale-105 group-hover:shadow-[0_0_40px_-5px_rgba(201,168,76,0.3)]">
              <span className="flex flex-col items-center gap-1">
                View PG
                <ArrowDown className="size-4 animate-bounce" />
              </span>
            </span>
          </div>
        </div>
      </button>

      {open && (
        <div
          className={`fixed inset-0 z-[80] flex items-center justify-center transition-all duration-400 ${
            mounted ? "bg-black/70 backdrop-blur-lg" : "bg-transparent backdrop-blur-none"
          }`}
          onClick={close}
        >
          <button
            onClick={close}
            className="fixed top-6 right-6 text-white/60 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all z-10"
            aria-label="Close gallery"
          >
            <X className="size-6" />
          </button>

          {/* Desktop: 3-column layout */}
          <div
            className="hidden sm:flex items-center justify-center gap-5 px-4 max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, i) => {
              const delay = i * 0.15;
              const startY = 60 + i * 20;
              const rotation = i === 0 ? -6 : i === 2 ? 6 : 0;
              return (
                <div
                  key={img.src}
                  className="w-[220px] shrink-0 transition-all duration-700 ease-out"
                  style={{
                    opacity: mounted ? 1 : 0,
                    transform: mounted
                      ? "translateY(0) scale(1) rotate(0deg)"
                      : `translateY(${startY}px) scale(0.85) rotate(${rotation}deg)`,
                    filter: mounted ? "blur(0)" : "blur(6px)",
                    transitionDelay: `${delay}s`,
                  }}
                >
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile: single image carousel */}
          <div
            className="flex sm:hidden flex-col items-center gap-4 w-full px-6"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative w-full max-w-[300px] transition-all duration-700 ease-out"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0) scale(1)" : "translateY(30px) scale(0.9)",
                filter: mounted ? "blur(0)" : "blur(4px)",
              }}
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
                <img src={images[current].src} alt={images[current].alt} className="w-full h-full object-cover" />
              </div>

              <button
                onClick={() => setCurrent((p) => (p === 0 ? images.length - 1 : p - 1))}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={() => setCurrent((p) => (p === images.length - 1 ? 0 : p + 1))}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>

            <div className="flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`size-2 rounded-full transition-all ${
                    i === current ? "bg-gold w-5" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
