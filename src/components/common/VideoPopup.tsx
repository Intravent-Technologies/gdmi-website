"use client";

import { useEffect, useRef, useState } from "react";
import { X, Volume2, VolumeX } from "lucide-react";

const LS_KEY = "gdmi_video_popup_seen";

export function VideoPopup() {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(LS_KEY)) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOpen(true);
          localStorage.setItem(LS_KEY, "1");
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function toggleMute() {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  }

  return (
    <>
      <div ref={ref} className="pointer-events-none absolute top-0" />
      {open && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-xs bg-background rounded-2xl overflow-hidden shadow-2xl">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10 size-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X className="size-4" />
            </button>
            <div className="aspect-[9/16] w-full bg-black">
              <video
                ref={videoRef}
                src="/videos/intro-video.mp4"
                className="w-full h-full object-contain"
                autoPlay
                muted
                playsInline
                controls
                title="PG Video"
              />
            </div>
            <div className="flex items-center justify-center py-3 px-4 bg-background">
              <button
                type="button"
                onClick={toggleMute}
                className="size-9 flex items-center justify-center rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-primary transition-colors"
                title={muted ? "Unmute" : "Mute"}
              >
                {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
