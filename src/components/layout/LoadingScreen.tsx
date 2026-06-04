"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const triggerPaths = ["/", "/give"];

function shouldShow(path: string) {
  return triggerPaths.includes(path);
}

export function LoadingScreen() {
  const pathname = usePathname();
  const prevPath = useRef(pathname);
  const [visible, setVisible] = useState(() => shouldShow(pathname));
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!shouldShow(pathname)) {
      setVisible(false);
      return;
    }
    const fadeTimer = setTimeout(() => setFadeOut(true), 5000);
    const hideTimer = setTimeout(() => setVisible(false), 5700);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    if (prevPath.current === pathname) return;
    const from = prevPath.current;
    prevPath.current = pathname;

    if (!shouldShow(pathname)) {
      setVisible(false);
      return;
    }

    setFadeOut(false);
    setVisible(true);

    const fadeTimer = setTimeout(() => setFadeOut(true), 1200);
    const hideTimer = setTimeout(() => setVisible(false), 1900);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-primary transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_60%)]" />

      <div className="relative flex flex-col items-center gap-6">
        <img
          src="/gdmi-logo.png"
          alt="GDMI"
          className="h-20 w-auto brightness-0 invert animate-pulse"
        />

        <div className="flex flex-col items-center gap-1">
          <span className="text-white/90 text-lg font-bold tracking-wider uppercase">
            Gbenga Dahunsi
          </span>
          <span className="text-white/40 text-xs font-semibold tracking-[0.2em] uppercase">
            Ministry International
          </span>
        </div>

        <div className="flex gap-1.5 mt-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="size-2 rounded-full bg-gold/60 animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
