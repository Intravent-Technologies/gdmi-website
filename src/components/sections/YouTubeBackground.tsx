"use client";

export function YouTubeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.35) saturate(1.1)" }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
