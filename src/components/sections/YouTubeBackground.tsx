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
    rel: "0",
    modestbranding: "1",
    iv_load_policy: "3",
    disablekb: "1",
    fs: "0",
    start: String(startSeconds),
  });

  if (endSeconds) {
    params.set("end", String(endSeconds));
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2"
        style={{ filter: "brightness(0.35) saturate(1.1)" }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?${params.toString()}`}
          allow="autoplay; encrypted-media; fullscreen"
          className="w-full h-full"
          title="Hero Video"
        />
      </div>
    </div>
  );
}
