"use client";

interface YouTubeBackgroundProps {
  videoId: string;
  startSeconds?: number;
  endSeconds?: number;
}

export function YouTubeBackground({ videoId, startSeconds = 0, endSeconds }: YouTubeBackgroundProps) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    playsinline: "1",
    loop: "1",
    playlist: videoId,
    controls: "0",
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0" style={{ filter: "brightness(0.35) saturate(1.1)" }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?${params.toString()}`}
          allow="autoplay; encrypted-media"
          className="w-full h-full"
          title="Hero Video"
        />
      </div>
    </div>
  );
}
