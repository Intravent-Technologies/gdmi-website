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
            onReady?: (event: { target: { playVideo: () => void } }) => void;
            onStateChange?: (event: { data: number; target: { getCurrentTime: () => number; seekTo: (time: number) => void; playVideo: () => void } }) => void;
            onError?: (event: { data: number }) => void;
          };
        }
      ) => void;
      PlayerState: { PLAYING: number; BUFFERING: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiScriptAdded = false;

export function YouTubeBackground({ videoId, startSeconds = 0, endSeconds }: YouTubeBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const endTimeoutRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    if (!containerRef.current) return;

    if (!apiScriptAdded) {
      apiScriptAdded = true;
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }

    let interactionTimer: ReturnType<typeof setTimeout> | undefined;
    let interacted = false;

    function attemptPlay(player: { mute: () => void; playVideo: () => void }) {
      try {
        player.mute();
        player.playVideo();
      } catch {}
    }

    function onInteraction() {
      if (interacted) return;
      interacted = true;
      document.removeEventListener("touchstart", onInteraction);
      document.removeEventListener("click", onInteraction);
      if (playerRef.current) {
        attemptPlay(playerRef.current);
      }
    }

    document.addEventListener("touchstart", onInteraction, { once: true });
    document.addEventListener("click", onInteraction, { once: true });

    function createPlayer() {
      if (!containerRef.current) return;
      try {
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
      attemptPlay(event.target);
      interactionTimer = setTimeout(() => {
        if (!interacted) attemptPlay(event.target);
      }, 1000);
    };

    const onError = () => {};

    const onStateChange = (event: { data: number; target: { getCurrentTime: () => number; seekTo: (time: number) => void; playVideo: () => void } }) => {
      if (!endSeconds) return;
      if (event.data === window.YT.PlayerState.PLAYING) {
        endTimeoutRef.current = setInterval(() => {
          try {
            const currentTime = event.target.getCurrentTime();
            if (currentTime >= endSeconds) {
              event.target.seekTo(startSeconds);
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
      if (interactionTimer) clearTimeout(interactionTimer);
      document.removeEventListener("touchstart", onInteraction);
      document.removeEventListener("click", onInteraction);
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
