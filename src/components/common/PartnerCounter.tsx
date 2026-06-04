"use client";

import { useEffect, useRef, useState } from "react";

interface PartnerCounterProps {
  count: number;
  label: string;
}

export function PartnerCounter({ count, label }: PartnerCounterProps) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const step = Math.ceil(count / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= count) {
              setDisplay(count);
              clearInterval(timer);
            } else {
              setDisplay(start);
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count]);

  return (
    <div ref={ref}>
      <span className="text-5xl font-bold text-gold">
        {display.toLocaleString()}+
      </span>
      <div className="text-muted-foreground text-sm mt-1">{label}</div>
    </div>
  );
}
