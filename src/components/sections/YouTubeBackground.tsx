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
          playerVars?: Record<string, string | number | boolean>;
          events?: {
            onReady?: (event: { target: { playVideo: () => void } }) => void;
            onStateChange?: (event: { data: number; target: { getCurrentTime: () => number; seekTo: (time: number) => void; playVideo: () => void } }) => void;
          };
        }
      ) => void;
      PlayerState: { PLAYING: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

export function YouTubeBackground({ videoId, startSeconds = 0, endSeconds }: YouTubeBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const endTimeoutRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    if (!containerRef.current) return;

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

    const onReady = (event: { target: { playVideo: () => void } }) => {
      event.target.playVideo();
    };

    const onStateChange = (event: { data: number; target: { getCurrentTime: () => number; seekTo: (time: number) => void; playVideo: () => void } }) => {
      if (!endSeconds) return;
      if (event.data === window.YT.PlayerState.PLAYING) {
        endTimeoutRef.current = setInterval(() => {
          const currentTime = event.target.getCurrentTime();
          if (currentTime >= endSeconds) {
            event.target.seekTo(startSeconds);
          }
        }, 250);
      } else {
        if (endTimeoutRef.current) clearInterval(endTimeoutRef.current);
      }
    };

    window.YT && window.YT.Player
      ? createPlayer()
      : (window.onYouTubeIframeAPIReady = createPlayer);

    function createPlayer() {
      if (!containerRef.current) return;
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId,
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
          ...(endSeconds ? { end: endSeconds } : {}),
        },
        events: { onReady, onStateChange },
      });
    }

    return () => {
      if (endTimeoutRef.current) clearInterval(endTimeoutRef.current);
      if (playerRef.current) {
        playerRef.current.destroy();
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
