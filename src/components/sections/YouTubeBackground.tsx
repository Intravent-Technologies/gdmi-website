"use client";

import { useEffect, useRef } from "react";

interface YouTubeBackgroundProps {
  videoId: string;
  startSeconds?: number;
  endSeconds?: number;
}

declare global {
  interface Window {
    YT: {
      Player: new (
        element: HTMLElement | HTMLIFrameElement,
        options: {
          events?: {
            onReady?: () => void;
            onStateChange?: (event: { data: number; target: { getCurrentTime: () => number; seekTo: (t: number, a: boolean) => void } }) => void;
            onError?: () => void;
          };
        }
      ) => void;
      PlayerState: { PLAYING: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiLoaded = false;

export function YouTubeBackground({ videoId, startSeconds = 0, endSeconds }: YouTubeBackgroundProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);
  const endTimeoutRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  // mute=1 is the correct YouTube embed URL param (not muted=1 which is an HTML5 video attribute)
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&enablejsapi=1&start=${startSeconds}${endSeconds ? `&end=${endSeconds}` : ""}`;

  useEffect(() => {
    if (!apiLoaded) {
      apiLoaded = true;
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScript = document.getElementsByTagName("script")[0];
      firstScript?.parentNode?.insertBefore(tag, firstScript);
    }

    function onStateChange(event: { data: number; target: { getCurrentTime: () => number; seekTo: (t: number, a: boolean) => void } }) {
      if (!endSeconds) return;
      if (event.data === window.YT.PlayerState.PLAYING) {
        endTimeoutRef.current = setInterval(() => {
          try {
            const currentTime = event.target.getCurrentTime();
            if (currentTime >= endSeconds) {
              event.target.seekTo(startSeconds, true);
            }
          } catch {}
        }, 250);
      } else {
        if (endTimeoutRef.current) clearInterval(endTimeoutRef.current);
      }
    }

    function bindPlayer() {
      if (!iframeRef.current) return;
      try {
        playerRef.current = new window.YT.Player(iframeRef.current, {
          events: { onReady: () => {}, onStateChange, onError: () => {} },
        });
      } catch {}
    }

    if (window.YT && window.YT.Player) {
      bindPlayer();
    } else {
      // Chain handlers so multiple instances don't overwrite each other
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prev?.();
        bindPlayer();
      };
    }

    return () => {
      if (endTimeoutRef.current) clearInterval(endTimeoutRef.current);
      if (playerRef.current) {
        try { playerRef.current.destroy(); } catch {}
      }
    };
  }, [endSeconds, startSeconds]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2"
        style={{ filter: "brightness(0.35) saturate(1.1)" }}
      >
        <iframe
          ref={iframeRef}
          src={src}
          allow="autoplay; encrypted-media; fullscreen"
          className="w-full h-full"
          title="Hero Video"
        />
      </div>
    </div>
  );
}
