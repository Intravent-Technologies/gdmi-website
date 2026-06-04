"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedProgressBarProps {
  value: number;
  max: number;
}

export function AnimatedProgressBar({ value, max }: AnimatedProgressBarProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const percent = Math.min((value / max) * 100, 100);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(percent), 200);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percent]);

  return (
    <div ref={ref} className="w-full">
      <div className="flex items-center justify-between text-xs mb-1.5">
        <span className="text-muted-foreground">Progress</span>
        <span className="font-semibold text-gold">{Math.round(percent)}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-gold transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
