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
        element: HTMLElement,
        options: {
          videoId: string;
          height?: string | number;
          width?: string | number;
          playerVars?: Record<string, string | number | boolean>;
          events?: {
            onReady?: (event: { target: { mute: () => void; playVideo: () => void } }) => void;
            onStateChange?: (event: { data: number; target: { getCurrentTime: () => number; seekTo: (t: number, a: boolean) => void } }) => void;
            onError?: () => void;
          };
        }
      ) => void;
      PlayerState: { PLAYING: number; BUFFERING: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiLoaded = false;

export function YouTubeBackground({ videoId, startSeconds = 0, endSeconds }: YouTubeBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const endTimeoutRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    if (!containerRef.current) return;

    if (!apiLoaded) {
      apiLoaded = true;
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }

    function setAllowOnIframe() {
      const iframe = containerRef.current?.querySelector("iframe");
      if (iframe && !iframe.hasAttribute("allow")) {
        iframe.setAttribute("allow", "autoplay; encrypted-media; fullscreen");
      }
    }

    function createPlayer() {
      if (!containerRef.current) return;
      try {
        const mo = new MutationObserver(() => {
          setAllowOnIframe();
          mo.disconnect();
        });
        mo.observe(containerRef.current, { childList: true, subtree: true });

        playerRef.current = new window.YT.Player(containerRef.current, {
          videoId,
          height: "100%",
          width: "100%",
          playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
            disablekb: 1,
            fs: 0,
            iv_load_policy: 3,
            playlist: videoId,
            start: startSeconds,
            origin: window.location.origin,
            ...(endSeconds ? { end: endSeconds } : {}),
          },
          events: { onReady, onStateChange, onError },
        });
      } catch {}
    }

    const onReady = (event: { target: { mute: () => void; playVideo: () => void } }) => {
      setAllowOnIframe();
      try {
        event.target.mute();
        event.target.playVideo();
      } catch {}
    };

    const onError = () => {};

    const onStateChange = (event: { data: number; target: { getCurrentTime: () => number; seekTo: (t: number, a: boolean) => void } }) => {
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
    };

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady = createPlayer;
    }

    return () => {
      if (endTimeoutRef.current) clearInterval(endTimeoutRef.current);
      if (playerRef.current) {
        try { playerRef.current.destroy(); } catch {}
      }
    };
  }, [videoId, startSeconds, endSeconds]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2"
        style={{ filter: "brightness(0.35) saturate(1.1)" }}
      >
        <div ref={containerRef} className="w-full h-full" />
      </div>
    </div>
  );
}
