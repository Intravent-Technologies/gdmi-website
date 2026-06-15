import type { Sermon } from "./sanity";

const CHANNEL_ID = "UCUo5zR9AdjQXYlecWybK9Rg";
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function excerptFromTitle(title: string): string {
  const cleaned = title
    .replace(/\|\|/g, "—")
    .replace(/\s+/g, " ")
    .trim();
  const parts = cleaned.split("—").map((s) => s.trim()).filter(Boolean);
  if (parts.length > 1) {
    return parts.slice(0, -1).join(" — ").replace(/^(BIBLE STUDY|SUNDAY SERVICE)\s*/i, "").trim();
  }
  return cleaned;
}

export async function getYouTubeVideos(): Promise<Sermon[]> {
  try {
    const res = await fetch(RSS_URL, {
      next: { revalidate: 1800 },
    });
    if (!res.ok) return [];
    const xml = await res.text();

    const entries: Sermon[] = [];
    const videoRegex =
      /<entry>[\s\S]*?<yt:videoId>([^<]+)<\/yt:videoId>[\s\S]*?<title>([^<]+)<\/title>[\s\S]*?<published>([^<]+)<\/published>[\s\S]*?<media:thumbnail[^>]*url="([^"]+)"[\s\S]*?<\/entry>/g;

    let match: RegExpExecArray | null;
    while ((match = videoRegex.exec(xml)) !== null) {
      const [, videoId, title, published, thumbnailUrl] = match;
      const date = formatDate(published);
      const cleanTitle = title
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/\s+/g, " ")
        .trim();
      const thumb = thumbnailUrl.replace("/hqdefault.", "/maxresdefault.");
      entries.push({
        id: videoId,
        title: cleanTitle,
        date,
        excerpt: excerptFromTitle(cleanTitle),
        thumbnail: thumb,
        url: `https://www.youtube.com/watch?v=${videoId}`,
      });
    }

    return entries;
  } catch {
    return [];
  }
}
