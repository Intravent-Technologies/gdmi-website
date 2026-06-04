"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const prevPath = useRef(pathname);
  const prevChildren = useRef(children);
  const [displayChildren, setDisplayChildren] = useState(children);
  const [phase, setPhase] = useState<"idle" | "leave" | "enter">("idle");

  useEffect(() => {
    if (prevPath.current === pathname) return;

    prevChildren.current = displayChildren;
    prevPath.current = pathname;
    setPhase("leave");

    const leaveTimer = setTimeout(() => {
      setDisplayChildren(children);
      setPhase("enter");
    }, 300);

    const enterTimer = setTimeout(() => {
      setPhase("idle");
    }, 700);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(enterTimer);
    };
  }, [pathname]);

  return (
    <div className="relative min-h-full">
      <div
        className="transition-all duration-[400ms] ease-out will-change-transform will-change-opacity"
        style={{
          opacity: phase === "leave" ? 0 : 1,
          transform:
            phase === "leave"
              ? "translateY(20px) scale(0.96)"
              : phase === "enter"
              ? "translateY(0) scale(1)"
              : "none",
          filter: phase === "leave" ? "blur(3px)" : "blur(0)",
        }}
      >
        {displayChildren}
      </div>
    </div>
  );
}
